const elements=Array.from(document.getElementsByClassName('num'))
const visor=document.getElementById('visor')
const calc=document.getElementById('calc')
let operador=false;
for (const e in elements) {
    elements[e].addEventListener('click',()=>{insertNumber(elements[e].value)})
}
function insertNumber(n){
    visor.value=visor.value+n
    calc.innerText+=n
    operador=true;
}
function lerExpressao(op){
    visor.value=''
    if(operador){
        calc.innerText += op
        operador=!operador
    }  
}

function calcular(){
       let lastChar=calc.innerText.substring(calc.innerText.length - 1,calc.innerText.length)
        
       if(lastChar==='*'||lastChar==='/'||lastChar==='-'||lastChar==='+'){
        calc.innerText = calc.innerText.substring(0,calc.innerText.length - 1)
       }
       
       resultado= visor.value=eval(calc.innerText)?visor.value=eval(calc.innerText):''
       if(resultado && resultado!==''){
        visor.value=resultado
       }
       
}

function clearAll(){
    visor.value=''
    calc.innerText=''
}

function clearOne(){
    visor.value = visor.value.substring(length - 1,visor.value.length - 1)
    calc.innerText = calc.innerText.substring(length - 1,calc.innerText.length - 1)
}