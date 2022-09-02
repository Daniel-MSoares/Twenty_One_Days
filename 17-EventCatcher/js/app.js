const key =document.querySelector('#key')
const keyCode=document.querySelector('#keyCode')
const eTypetext=document.querySelector('#etypetext')
const code=document.querySelector('#code')
const altInd=document.querySelector('#altInd')
const shiftInd=document.querySelector('#shiftInd')
const ctrltInd=document.querySelector('#ctrltInd')

document.addEventListener('keydown',(e)=>{
    e.preventDefault()
    console.log(e)
    key.innerHTML=e.key
    keyCode.innerHTML=`${e.keyCode}`
    eTypetext.innerHTML=`<span>${e.type}</span>`
    code.innerHTML=`<span>${e.code}</span>`
    if(e.altKey){
        altInd.classList.add('green')
        altInd.classList.remove('red')
    }else{
        altInd.classList.add('red')
        altInd.classList.remove('green')
    }

    if(e.shiftKey){
        shiftInd.classList.add('green')
        shiftInd.classList.remove('red')
    }else{
        shiftInd.classList.add('red')
        shiftInd.classList.remove('green')
    }

    if(e.ctrlKey){
        ctrltInd.classList.add('green')
        ctrltInd.classList.remove('red')
    }else{
        ctrltInd.classList.add('red')
        ctrltInd.classList.remove('green')
    }


})


document.addEventListener('keyup',e=>{
    e.preventDefault()
    console.log(e)
    key.innerHTML=e.key
    keyCode.innerHTML=`${e.keyCode}`
    eTypetext.innerHTML=`<span>${e.type}</span>`
    code.innerHTML=`<span>${e.code}</span>`
    if(e.altKey){
        altInd.classList.add('green')
        altInd.classList.remove('red')
    }else{
        altInd.classList.add('red')
        altInd.classList.remove('green')
    }

    if(e.shiftKey){
        shiftInd.classList.add('green')
        shiftInd.classList.remove('red')
    }else{
        shiftInd.classList.add('red')
        shiftInd.classList.remove('green')
    }

    if(e.ctrlKey){
        ctrltInd.classList.add('green')
        ctrltInd.classList.remove('red')
    }else{
        ctrltInd.classList.add('red')
        ctrltInd.classList.remove('green')
    }

})
