
function toggleMode(type){
    let body = document.getElementsByTagName('html')
    body.item(0).setAttribute('class', type == 'dark' ? 'dark' : '');

    let darkBtn = document.getElementById('dark-btn');
    let lightBtn = document.getElementById('light-btn');

    if(type == 'dark') {
        darkBtn.style.display = 'none'; 
        lightBtn.style.display = 'block';
    }
    else  {
        lightBtn.style.display = 'none';  
        darkBtn.style.display = 'block';
    }
}

function onShowMenu(){
    let menu = document.getElementById('sm-menu');
    if(menu && menu.style.display == 'flex'){
        menu.style.display = 'none'
    }else{
        menu.style.display = 'flex'
    }
}

window.addEventListener('load', () =>{
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        toggleMode('dark');
    }else{
        toggleMode('light');
    }
})

window.addEventListener('scroll', () =>{
    var nav = document.getElementById('nav');
    var user = document.getElementById('user-btn')
    if(window.scrollY > 65){
        nav.className = 'fixed z-100';
        user.style.display = 'block'
    }else{
        nav.className = ''
        user.style.display = 'none'
    }
})


window.addEventListener('resize', () =>{

    let menu = document.getElementById('sm-menu');

    if(window.innerWidth < 768){
        menu.style.display = 'none'
    }
})