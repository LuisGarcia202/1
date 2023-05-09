const body = document.querySelector('body'),
siderbar = boby.querySelector('nav'),
toggle=body.querySelector('.toggle'),
searchBtn = body.querySelector('.search-box'),
modeSwitch = body.querySelector('.mode-text');

toggle.addEventListener("click",()=>{
    siderbar.classList.remove("close");
})


modeSwitch.addEventListener("click" ,()=> {
    body.classList.toggle("dark");
    if(body.classList.toggle("dark")){
        modehtml.innerhtml ="Modo Claro";
    }else{
        modehtml.innerhtml="Modo Oscuro"
    }
})