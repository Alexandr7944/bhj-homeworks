const tasksInput = document.querySelector('.tasks__input');
const tasksList = document.querySelector('.tasks__list');
const tasksForm = document.querySelector('#tasks__form');
tasksList.innerHTML = localStorage.getItem('tasks');

tasksForm.addEventListener('submit', event => {
    event.preventDefault();
    if(tasksInput.value) {
        const task = `
            <div class="task">
                <div class="task__title">
                    ${tasksInput.value}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>
        `;
        tasksList.innerHTML += task;
        localStorage.setItem(`tasks`, `${tasksList.innerHTML}`)
        tasksForm.reset();
    }
})

const task = document.getElementsByClassName('task__remove');
for(let i = 0; i < task.length; i ++) {
    task[i].onclick = event => {
        event.target.parentElement.remove();
        localStorage.setItem(`tasks`, `${tasksList.innerHTML}`);
    }
}