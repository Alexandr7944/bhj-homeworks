const clickerCounter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');
const clickerTimer = document.getElementById('clicker__timer');
let timer = new Date();

cookie.onclick = () => {
    cookie.width = clickerCounter.textContent % 2 === 0 ? 250 : 200;
    clickerCounter.textContent++;
    clickerTimer.textContent = ((new Date() - timer) / 1000).toFixed(2);
    timer = new Date();
}