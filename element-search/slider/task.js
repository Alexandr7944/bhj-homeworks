const sliderItem = Array.from(document.querySelectorAll('.slider__item'));
const sliderDot = Array.from(document.querySelectorAll('.slider__dot'));
const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');

arrowPrev.onclick = () => {
    for(let index = 0; index < sliderItem.length; index++) {
        if(sliderItem[index].className.includes('slider__item_active')) {
            sliderItem[index].classList.remove('slider__item_active');
            sliderDot[index].classList.remove('slider__dot_active');
            if(index === 0) {
                sliderItem[sliderItem.length - 1].classList.add('slider__item_active');
                sliderDot[sliderDot.length - 1].classList.add('slider__dot_active');
                break;
            }else{
                sliderItem[--index].classList.add('slider__item_active');
                sliderDot[index].classList.add('slider__dot_active');
                break;
            }
        }
    }
}

arrowNext.onclick = () => {
    for(let index = 0; index < sliderItem.length; index++) {
        if(sliderItem[index].className.includes('slider__item_active')) {
            sliderItem[index].classList.remove('slider__item_active');
            sliderDot[index].classList.remove('slider__dot_active');
            if(index < sliderItem.length - 1) {
                sliderItem[++index].classList.add('slider__item_active');
                sliderDot[index].classList.add('slider__dot_active');
                break;
            }else{
                sliderItem[0].classList.add('slider__item_active');
                sliderDot[0].classList.add('slider__dot_active');
                break;
            }
        }
    }
}

for(let i = 0; i < sliderDot.length; i++) {
	sliderDot[i].onclick = () => {
        document.querySelector('.slider__item_active').classList.remove('slider__item_active');
        document.querySelector('.slider__dot_active').classList.remove('slider__dot_active');
        sliderItem[i].classList.add('slider__item_active');
        sliderDot[i].classList.add('slider__dot_active');
	}
}