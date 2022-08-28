const navLinks=document.getElementById('navlinks')
const classActive='activeMenu'
const btnMenu=document.getElementById('btn-menu')
function toggleMenu(){
    navLinks.classList.toggle(classActive)
    btnMenu.classList.toggle('active')
}