const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlinks');
    const navlinks = document.querySelectorAll('.navlinks a');

    burger.addEventListener('click', () => {
    //Toggle nav
    nav.classList.toggle('nav-active');


    //Animate links
    navlinks.forEach((link, index) => {
        if(link.style.animation) {
            link.style.animation = ''
         } else {
            link.style.animation = `navlinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
         }
        });

    //Animate burger
    burger.classList.toggle('toggle');
    });

}

navSlide();