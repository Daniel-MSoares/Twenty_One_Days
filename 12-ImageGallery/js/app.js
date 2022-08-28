const showImage=document.getElementById('showImage')
const minImg=Array.from(document.querySelectorAll('.minImg'))
let autoSlide
let currentImage=1
function changeImageMiniature(i){
    showImage.src=`img/imagem${i}.jpg`
    addActiveClass(i)
    currentImage=i
    
}
function changeImageManual(direct){
    if(direct==='prev'){
        if(currentImage-1==0){
            currentImage=9
        }
        showImage.src=`img/imagem${currentImage-1}.jpg`
        addActiveClass(currentImage-1)
        currentImage--
    }else{
        if(currentImage+1==9){
            currentImage=0
        }
        showImage.src=`img/imagem${currentImage+1}.jpg`
        addActiveClass(currentImage+1)
        currentImage++
    }
}

function changeImageAuto(){
    autoSlide =setInterval(()=>{
        if(currentImage+1==9){
            currentImage=0
        }
        showImage.src=`img/imagem${currentImage+1}.jpg`
        addActiveClass(currentImage+1)
        currentImage++
    },3000)
}
function stopChangeAuto(){
    clearInterval(autoSlide)
}

function addActiveClass(i){
    minImg.forEach(e => {
        if(e.id === `img${i}`){
            e.classList.add('active')
        }else{
            e.classList.remove('active')
        }
          
    });
}


