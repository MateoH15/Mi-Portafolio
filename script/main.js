const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('blurred');
    } else {
        navbar.classList.remove('blurred');
    }
});
