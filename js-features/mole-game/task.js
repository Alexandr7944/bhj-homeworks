const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

for(let i = 1; i < 10; i++){
    let hole = document.getElementById(`hole${i}`);
    
    hole.onclick = () => {
        hole.className.includes('hole_has-mole') ? dead.textContent++ : lost.textContent++; 

        if(dead.textContent == 10 || lost.textContent == 5){
            if(dead.textContent == 10) {
                alert('Поздравляю, Вы победили!!!');
            } else {
                alert('Стоит попробовать еще')
            }
            dead.textContent = 0;
            lost.textContent = 0;
        }
    }
}