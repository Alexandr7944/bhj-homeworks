const clickerCounter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');
const clickerTimer = document.getElementById('clicker__timer');
let timer = new Date();

cookie.onclick = () => {
    if(clickerCounter.textContent % 2 === 0) {
        cookie.width = 250;
    }else{
        cookie.width = 200;
    }
    clickerCounter.textContent++;
    clickerTimer.textContent = ((new Date() - timer) / 1000).toFixed(2);
    timer = new Date();
}