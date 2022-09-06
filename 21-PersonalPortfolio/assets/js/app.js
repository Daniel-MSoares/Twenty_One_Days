const header=document.querySelector('#header')
const works=document.querySelector('#works')
const showAll=document.querySelector('#showAll')
let lastPosition=window.scrollY

function hideNav(action){

    if(action==='add'){
        header.classList.add('hide')
    }else{
        header.classList.remove('hide')
    }
    
}

document.addEventListener('scroll',(e)=>{
     let currentPosition = window.scrollY
     if(currentPosition > lastPosition){
        hideNav('add')
     }else{
        hideNav('remove')
     }
    
    lastPosition=currentPosition 
})

function toggleProjects(){
    if(showAll.innerText==='ver mais'){
        showAll.innerText='ver menos'
    }else{
        showAll.innerText='ver mais'
    }
    works.classList.toggle('expanded')
}