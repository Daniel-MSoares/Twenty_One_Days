const form=document.querySelector('#form')
const formLogin=`<h4 id='title' class="title">LOG IN</h4>
<form class="form-control">
    <div class="input-line">
        <input type="text" name="email" placeholder="E-mail"><span><i class="bi bi-envelope-fill"></i></span>
     </div>
     <div class="input-line">
        <input type="password" name="password" placeholder="password"><span><i class="bi bi-lock-fill"></i></span>
     </div>  
</form>
<div class="btns"><a class="forgot" href='#'>forgot password?</a><button type="submit" class="btn">LOG IN</button></div>`
const formSignup=`<h4 id='title' class="title">SIGN UP</h4>
<form class="form-control">
    <div class="input-line">
       <input type="text" name="name" placeholder="Full Name"><span><i class="bi bi-person-circle"></i></span>
    </div>
    <div class="input-line">
        <input type="email" name="email" placeholder="E-mail"><span><i class="bi bi-envelope-fill"></i></span>
     </div>
     <div class="input-line">
        <input type="password" name="password" placeholder="password"><span><i class="bi bi-lock-fill"></i></span>
     </div>
     
</form>
<button type="submit" class="btn">SIGN UP</button>`


function showLoginForm(){
    form.innerHTML=formLogin
    form.style.marginLeft='26em'
}
function showSignupForm(){
    form.innerHTML=formSignup
    form.style.marginLeft='2em'
}