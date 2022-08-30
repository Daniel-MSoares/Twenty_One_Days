const question=document.querySelector('#question')
const options=Array.from(document.querySelectorAll('.option'))
const lineOptions=Array.from(document.querySelectorAll('.lineOption'))
const qtdHits=document.querySelector('#qtdHits')
const qtdMisses=document.querySelector('#qtdMisses')
const curent=document.querySelector('#curent')
const qLenght=document.querySelector('#length')
const bannerWin=document.querySelector('#bannerWin')
let curentQuestionId
let done=[]
const questions=[
   {
     'id':1,
     'question':'De quem é a famosa frase “Penso, logo existo”?',
     'options':['Platão','Galileu Galilei','Descartes','Sócrates','Francis Bacon'],
     'answer':2
   },
   {
    'id':2,
    'question':'Quanto tempo a luz do Sol demora para chegar à Terra?',
    'options':['12 minutos','1 dia','12 horas','8 minutos','12 segundos'],
    'answer':3
  },
  {
    'id':3,
    'question':'Qual a montanha mais alta do Brasil?',
    'options':['Pico da Neblina','Pico Paraná','Monte Roraima',' Pico Maior de Friburgo','Pico da Bandeira'],
    'answer':0
  },
  {
    'id':4,
    'question':'De onde é a invenção do chuveiro elétrico?',
    'options':['França','Inglaterra','Brasil',' Austrália','Itália'],
    'answer':2
  },
  {
    'id':5,
    'question':'Quem é o autor de “O Príncipe”?',
    'options':['Maquiavel','Antoine de Saint-Exupéry','Montesquieu','Thomas Hobbes','Rousseau'],
    'answer':0
  },
  {
    'id':6,
    'question':'Como é a conjugação do verbo caber na 1.ª pessoa do singular do presente do indicativo?',
    'options':['Eu caibo','Ele cabe','Que eu caiba','Eu cabo','Nenhuma das alternativas'],
    'answer':0
  },
]
qLenght.innerText=questions.length
function loadQuestion(){
    document.getElementById('main').style.display='flex'
    document.getElementById('modal').style.display='none'
    bannerWin.style.display='none'
    let random=Math.floor(Math.random()*questions.length)
    if(!done.includes(random)){
        done.push(random)
        curent.innerText=parseFloat(curent.innerText)+1
        question.innerText=questions[random].question
        questions[random].options.forEach((op,i) => {
            lineOptions[i].classList.remove('corect')
            lineOptions[i].classList.remove('missed')
            options[i].innerText=op
        });
        curentQuestionId=random
    }else{
        if(done.length===questions.length){
            endGame()
        }else{
            loadQuestion()
        }
    }
}
function endGame(){
    document.getElementById('main').style.display='none'
    let percent =parseFloat(qtdHits.innerText)*100/questions.length
    document.getElementById('percent').innerText=percent.toFixed(2)
    if(percent>50){
        document.getElementById('congratulation').innerText='GENIAL !!!!'
    }else{
        document.getElementById('congratulation').innerText='VOCÊ CONCEGUE FAZER MELHOR !!!'
    }
    bannerWin.style.display='flex';
    done=[]
    curentQuestionId=0
    curent.innerText=0
    qtdHits.innerText=0
    qtdMisses.innerText=0
}


function answerQuestion(i){
    if(i===questions[curentQuestionId].answer){
        lineOptions[i].classList.add('corect')
        qtdHits.innerText=parseFloat(qtdHits.innerText)+1
    }else{
        lineOptions[i].classList.add('missed')
        qtdMisses.innerText=parseFloat(qtdMisses.innerText)+1
    }
    setTimeout(() => {
        loadQuestion()
    }, 800);
}