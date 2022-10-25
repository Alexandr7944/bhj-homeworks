const textSize = Array.from(document.querySelector('.book__control_font-size').children);
const textColor = Array.from(document.querySelector('.book__control_color').children);
const bgColor = Array.from(document.querySelector('.book__control_background').children);

textSize.forEach(item => {
    item.onclick = function() {
        book.classList.remove('book_fs-small');
        book.classList.remove('book_fs-big');
        document.querySelector('.font-size_active').classList.remove('font-size_active');
        this.classList.add('font-size_active');
        this.dataset.size ? book.classList.add(`book_fs-${this.dataset.size}`) : '';
        return false;
    }
})

textColor.forEach(item => {
    if(item.classList.contains('color')) {
        item.onclick = function() {
            book.style.color=this.dataset.textColor;
            this.parentElement.querySelector('.color_active').classList.remove('color_active');
            this.classList.add('color_active');
            return false;
        }
    }
})

bgColor.forEach(item => {
    if(item.classList.contains('color')) {
        item.onclick = function() {
            book.style.background=this.dataset.bgColor;
            this.parentElement.querySelector('.color_active').classList.remove('color_active');
            this.classList.add('color_active');
            return false;
        }
    }
})

