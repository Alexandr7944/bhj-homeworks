const signin = document.querySelector('.signin');
signin.classList.add('signin_active');
const welcome = document.querySelector('.welcome');
const welcomeBtn = document.querySelector('#welcome__btn');
const signinForm = document.getElementById('signin__form');

signinForm.addEventListener('submit', e => {
    signin.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    const formData = new FormData(signinForm);
    const request = new XMLHttpRequest();
    request.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    request.addEventListener('load', function() {
        if (this.readyState == request.DONE && this.status == 200) {
            const data = JSON.parse(this.responseText);
            const userId = document.getElementById('user_id');
            if(data.user_id = localStorage.user_id) {
                userId.innerText = localStorage.user_id;
            } else {
                if(data.success) {
                localStorage.setItem(`user_id`, `${data.user_id}`);
                userId.innerText = `${data.user_id}`;
                } else {
                    welcome.innerText = '«Неверный логин/пароль»';
                }
            }
        }
    });
    request.send(formData);
    e.preventDefault();
    e.target.reset();
});

welcomeBtn.onclick = () => {
    signin.classList.add('signin_active');
    welcome.classList.remove('welcome_active');
}