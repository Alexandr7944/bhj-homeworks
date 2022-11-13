const progress = document.getElementById( 'progress' );
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.upload.onprogress = function (event) {
        let value = event.loaded / event.total;
        progress.value = value;
    }
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    const formData = new FormData(form);
    xhr.send(formData);
});