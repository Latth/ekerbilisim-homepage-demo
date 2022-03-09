// navbar toggle

let navBtn = document.querySelector('.nav-burger-btn');
let navIcon = document.querySelector('.nav-icon');

navBtn.addEventListener('click', function(e) {
    e.preventDefault();
    let nav = document.querySelector('.nav-burger');
    nav.classList.toggle('active');
    navBtn.classList.toggle('active')

    console.log(navIcon);

    if(navIcon.className == "fa-solid fa-bars nav-icon"){
        setTimeout(function(){
            navIcon.className = "fa-solid fa-x nav-icon";
        }, 300)
    }else {
        setTimeout(function(){
            navIcon.className = "fa-solid fa-bars nav-icon"
        }, 300)
    }
})

// Scroll screen navbar background color

window.addEventListener('scroll', function() {
    if(scrollY >= 100) {
        document.querySelector('nav').classList.add('nav-active')
    }else if (scrollY != 100) {
        document.querySelector('nav').classList.remove('nav-active')
    }
})