const password =document.querySelector('#password')
const qtdChar=document.querySelector("#qtdChar")
const uppercase=document.querySelector("#uppercase")
const lowercase=document.querySelector("#lowercase")
const numbers=document.querySelector("#numbers")
const especialChar=document.querySelector("#especialCharacters")

const letersLowers="abcdefghijklmnopqrstuvwxyz"
const letersUppers="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbersString='0123456789'
const symbols='+_-}{[]?:><|"^~'


//exibir  tamanho da senha
qtdChar.addEventListener('input',()=>{
    let passWordlength
    if(qtdChar.value <10){
        passWordlength='0'+qtdChar.value
    }else{
        passWordlength=qtdChar.value
    }
    document.querySelector("#lenght").innerText=passWordlength  
})

function getNumber(){
    let number=numbersString[Math.floor(Math.random() * numbersString.length)]
    return(number)
}
function getLeterLower(){
    let LeterLower=letersLowers[Math.floor(Math.random() * letersLowers.length)]
    return(LeterLower)
}
function getLeterUpper(){
    let LeterUpper=letersUppers[Math.floor(Math.random() * letersUppers.length)]
    return(LeterUpper)
}
function getSymbol(){
    let symbol=symbols[Math.floor(Math.random() * symbols.length)]
    return(symbol)
}

function generatePassword(){
    let passwordGenereted=''
    do{ 
        if(!lowercase.checked&&!numbers.checked&&!uppercase.checked&&!especialChar.checked){
            numbers.checked=true
            lowercase.checked=true
        }
        if(lowercase.checked){
            passwordGenereted+=getLeterLower() 
        }
        if(numbers.checked){
            passwordGenereted+=getNumber()
        }
        if(uppercase.checked){
            passwordGenereted+=getLeterUpper() 
        }
        if(especialChar.checked){ 
            passwordGenereted+=getSymbol()
        }
    }while(passwordGenereted.length<qtdChar.value)
    
    password.value=passwordGenereted
}

function copyPassword(){
    let textContent=password
    textContent.select()
    document.execCommand("copy")
    showAlert()
}
function  showAlert(){
   document.querySelector("#viewer").classList.add('alert')
   setTimeout(()=>document.querySelector("#viewer").classList.remove('alert'),1000)
}

