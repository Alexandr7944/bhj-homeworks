const editor = document.querySelector('#editor');
const btnRemove = document.querySelector('#btn-remove');

editor.value = localStorage.editor ? localStorage.editor : '';

editor.addEventListener('keyup', () => {
    localStorage.setItem('editor', `${editor.value}`);
})

btnRemove.addEventListener('click', () => {
    localStorage.clear();
    editor.value = '';
})