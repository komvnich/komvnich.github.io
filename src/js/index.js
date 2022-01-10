let f = document.querySelector('.header__called');
let headerNav = document.querySelector('.header nav');

window.addEventListener('scroll', function () {
    let st = document.documentElement.scrollTop;

    if (st >= 400){
        f.style.display = 'inherit';
        headerNav.classList.add('navScroll')
    }
    else{
        f.style.display = 'none'
        headerNav.classList.remove('navScroll');
    }


    if(screen.width === 360) f.style.display = 'none'

});