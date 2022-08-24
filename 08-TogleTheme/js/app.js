const container =document.getElementById('container')
const infos =document.getElementById('infos')
const author =document.getElementById('author')
const toggle =document.getElementById('toggle')
const phraseEl=document.getElementById('phrase')
const pharse =[
     {
        pharse:"Me disseram que o céu é o limite.Insatisfeito com o argumento , procurei um Astronauta.",
        author:"Wheber Ruiz"
     },
     {
        pharse:"O céu é o limite dos pássaros, mas astronautas vão além.",
        author:"Frodo Oliveira"
     },
     {
        pharse:"Não me diga que o céu é o limite, quando há pegadas na Lua.",
        author:"Jennette McCurdy"
     },
     {
        pharse:"O mistério gera curiosidade e a curiosidade é a base do desejo humano para compreender.",
        author:"Neil Armstrong"
     },
]




function changeTheme(){
  if(toggle.checked){
    container.classList.remove('lightTheme');
    container.classList.add('darckTheme');
    author.classList.add('lightText');
    infos.classList.add('lightText');
  }else{
    container.classList.add('lightTheme');
    container.classList.remove('darckTheme');
    author.classList.remove('lightText');
    infos.classList.remove('lightText');
  }
}

function randomPhrase(){
   let number=Math.floor(Math.random()*5)
   phraseEl.innerText=pharse[number].pharse;
   author.innerText=pharse[number].author;
}

function changePhrase(){
    setInterval(randomPhrase,6000)
}