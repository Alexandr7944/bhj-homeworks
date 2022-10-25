let active = document.querySelector('.rotator__case_active');
setInterval(() => {
    active.classList.remove('rotator__case_active');
    active = active === active.parentElement.lastElementChild ? active.parentElement.firstElementChild : active.nextElementSibling;
    active.classList.add('rotator__case_active');
    active.style.color=`${active.dataset.color}`;
}, 1000)