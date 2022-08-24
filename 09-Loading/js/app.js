const imgLoading=document.querySelector('#imgLoading')
const loadingArea =document.querySelector('#loading')
const percent=document.querySelector('#percent')
const statusEl=document.querySelector('#status')
let progressValue=0
let loadInginterval

function progress(){
     imgLoading.style.width=`${progressValue}%`;
     percent.innerText=`${progressValue}%`;
     if (progressValue ==100){
       clearInterval(loadInginterval)
       statusEl.classList.add('completed')
       statusEl.classList.remove('textloading')
       statusEl.innerHTML= '<p >completed!!!</p>';
     }
     progressValue++
}

function startLoading(){
    loadInginterval=setInterval(progress,100)
}

setTimeout(startLoading,2000)