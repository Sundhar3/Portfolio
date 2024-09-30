/*********Toggle icon navbar ************ */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon .onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/******** scroll section active link *******/

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

   Window.onscroll = () => {
          sections.forEach(sec => {
        let top = Window.scrollY;
        let offset = sec.offsetTop = 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /******** Sticky navbar *******/
    
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', Window.scrollY > 100);

    /******** Remove toggle icon and navbar *******/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/******** Scroll reveal *******/

ScrollReveal({
    distance: '80px',
    duration: 2000 ,
    delay:200,
});

ScrollReveal().reveal('.home-content, .header', { origin: 'top'});
ScrollReveal().reveal('.home-img, .project-container, .contact form', {origin: 'right'});
ScrollReveal().reveal('.home-content h1,.skill-container, .about.img', {origin:'left'});
ScrollReveal().reveal('home-content p, .about-content', {origin:'right'});