const reveal = document.querySelector('.reveal');

window.addEventListener('scroll', () => {
    if(reveal.getBoundingClientRect().top < window.innerHeight || reveal.getBoundingClientRect().bottom > 0) {
        reveal.classList.add('reveal_active');
    }
    if(reveal.getBoundingClientRect().top > window.innerHeight || reveal.getBoundingClientRect().bottom < 0) {
        reveal.classList.remove('reveal_active');
    }
})