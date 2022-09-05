const emojischaracters=document.querySelector('#emojischaracters')
const textEmoji=document.querySelector('#textEmoji')
const emojiEl=document.querySelector('#emoji')
const emojiCode=document.querySelector('#emojiCode')

function getEmojisByCategory(category){
    emojischaracters.innerHTML=""
    const key='00d7b4684afce404af1b828fab19e3daace9c551'
    const url=`https://emoji-api.com/categories/${category}?access_key=${key}`
    fetch(url,{
       "Access-Control-Allow-Origin":"https://emoji-api.com/"
    })
    .then(response=>response.json())
    .then(data=>{
        data.forEach(emoji => {
            let divEmoji=document.createElement('div')
            divEmoji.classList.add('emojiSingle')
            divEmoji.innerText= emoji.character
            divEmoji.addEventListener('click',()=>{
                selectEmoji(emoji.character,emoji.codePoint)
            })
            emojischaracters.appendChild(divEmoji) 
        });
    })
}

function selectEmoji(emoji,code){
    emojiEl.innerText=emoji
    textEmoji.value+=emoji
    emojiCode.innerHTML=`code:U+${code}`
    document.getElementById('emojiSelected').value=emoji
    document.getElementById('copyBtn').style.display='block'
}

function copyEmoji(element){
    let textContent =document.querySelector(`#${element}`)
    textContent.select()
    document.execCommand("copy")
    showAlert(element)
}

function  showAlert(){
     let elementCopied='emoji-selected'
    document.querySelector(`#${elementCopied}`).classList.add('copied')
    document.querySelector(`#alert`).style.display='block'
    setTimeout(()=>{
        document.querySelector(`#${elementCopied}`).classList.remove('copied')
        document.querySelector(`#alert`).style.display='none'
    },1000)
 }
 