// navbar toggle

let navBtn = document.querySelector('.nav-burger-btn');

navBtn.addEventListener('click', function(e) {
    e.preventDefault();
    let nav = document.querySelector('.nav-burger');
    nav.classList.toggle('active');
    navBtn.classList.toggle('active')
})

// Scroll screen navbar background color

window.addEventListener('scroll', function() {
    if(scrollY >= 100) {
        document.querySelector('nav').classList.add('nav-active')
    }else if (scrollY != 100) {
        document.querySelector('nav').classList.remove('nav-active')
    }
})