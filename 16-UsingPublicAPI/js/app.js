const bookSelect= document.querySelector('#bookSelect')
const chapterSelect= document.querySelector('#chapterSelect')
const versionSelect= document.querySelector('#versionSelect')
const headerApi={"Authorization": "baerer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IldlZCBBdWcgMzEgMjAyMiAyMjoyMDoyOCBHTVQrMDAwMC5jb250YXdhcmlvckBnbWFpbC5jb20iLCJpYXQiOjE2NjE5ODQ0Mjh9.UIFv3OzjV_J_WFFEE-dha-2BdOBlzXCByegTASmrOuo"}
const body=document.querySelector('#body')
const Title=document.querySelector('#Title')
const verseDiv=document.querySelector('#verse')


class Bible {
    constructor(){
        
    }
getbooks(){
    //https://www.abibliadigital.com.br/api/verses/:version/:abbrev/:chapter
  
    fetch('https://www.abibliadigital.com.br/api/books',{'headers':headerApi})
    .then(response=>response.json())
    .then(data=>{
        
        const books=data
        document.getElementById('header').classList.remove('invisible')
        books.forEach(book => {
            let option=document.createElement('option')
            option.value=book.abbrev.pt
            option.innerText=book.name
            bookSelect.appendChild(option)
            
        });
        
    })
}

 getChapters(){
    let abbrev=bookSelect.value
    fetch(`https://www.abibliadigital.com.br/api/books/${abbrev}`,{'headers':headerApi})
    .then(response=>response.json())
    .then(data=>{
        const chapters=data
        chapterSelect.innerHTML=''
        for (let i = 0; i < chapters.chapters; i++) {
            let option=document.createElement('option')
            option.value=i+1
            option.innerText=i+1
            chapterSelect.appendChild(option)
            
        }
            
        
    })
    
 }

 getChapterText(){
     body.classList.add('loading')
     Title.classList.add('invisible')
     verseDiv.innerHTML=''
     Title.innerText=''
     document.querySelector('#empty').style.display='flex'
     let version=versionSelect.value?versionSelect.value :'kjv'
     let book=bookSelect.value?bookSelect.value:'gn'
     let chapter=chapterSelect.value?chapterSelect.value :'1'
    fetch(`https://www.abibliadigital.com.br/api/verses/${version}/${book}/${chapter}`,{'headers':headerApi})
    .then(response=>response.json())
    .then(data=>{
        verseDiv.innerHTML=''
        document.querySelector('#empty').style.display='none'
        body.classList.remove('loading')
        Title.classList.remove('invisible')
        Title.innerText=`${data.book.name} - ${data.chapter.number}`
        
        data.verses.forEach(verse=>{
            verseDiv.innerHTML+=`<div class='lineVerse'>
                                <div class="verseNumber">${verse.number}</div>
                                <p>${verse.text}</p>
                                </div>` 
        })     
    })
 }
}

const bible =new Bible()

