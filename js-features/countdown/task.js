const timer = document.getElementById('timer');
//Вместо alert() использовал тег dialog, надеюсь не будет являться ошибкой;
const modal =  document.getElementById('modal');
const btnClose = document.getElementById('modal-close');
btnClose.onclick = () => modal.close();

let arr = timer.textContent.split(':').map(i => Number(i));
let [hours, min, sec] = arr;
let timerMS = hours * 60 * 60 * 1000 + min * 60 * 1000 + sec * 1000;
let deadline = Date.now() + timerMS;

const countTimer = () => {
    const residue = deadline - Date.now();

    if(residue <= 0) {
            clearInterval(timerID);
            modal.showModal()
    }

    hours = residue > 0 ? Math.floor(residue / 1000 / 60 / 60) % 24 : 0;
    min = residue > 0 ? Math.floor(residue / 1000 / 60) % 60 : 0;
    sec = residue > 0 ? Math.floor(residue / 1000) % 60 : 0;

    hours = hours < 10 ? '0' + hours : hours;
    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;
    
    timer.textContent = `${hours}:${min}:${sec}`;
}

let timerID = setInterval(countTimer, 1000)