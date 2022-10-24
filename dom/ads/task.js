const rotatorCase = Array.from(document.querySelectorAll('.rotator__case'));
let index = 0;

setInterval(() => {
    document.querySelector('.rotator__case_active').classList.remove('rotator__case_active');
    index === rotatorCase.length - 1 ? index = 0 : index++;
    rotatorCase[index].classList.add('rotator__case_active');
    rotatorCase[index].style.color=`${rotatorCase[index].dataset.color}`;
}, rotatorCase[index].dataset.speed)
