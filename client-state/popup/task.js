const subscribeModal = document.querySelector('#subscribe-modal');
const modalClose = document.querySelector('.modal__close');

if(!getCookie('modalClose')) subscribeModal.classList.add('modal_active');

modalClose.addEventListener('click', () => {
    subscribeModal.classList.remove('modal_active');
    document.cookie = 'modalClose=true';
})

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}