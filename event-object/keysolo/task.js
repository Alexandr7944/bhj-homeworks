class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.statusTime = document.querySelector('.status__time');

    this.reset();
    this.timerID;
    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }
  /*timer() запускается каждые 0,3 секунды, чтобы обновить данные на странице и 
  проверить остаток времени
  в переменные symbol и deadline при каждом вызове метода записываются новые данные,
  потому что для каждого слова разный deadline*/
  timer() {
    let deadline = Date.now() + document.getElementsByClassName('symbol').length * 1000;
    this.timerID = setInterval(() => {
      this.statusTime.textContent = ((deadline - Date.now()) / 1000).toFixed(1);

      if(this.statusTime.textContent <= 0) {
        this.statusTime.textContent = 0;
        this.fail();
      }
    }, 300);
  }

  registerEvents() {
    const word = document.querySelector('body');
    const testKey = e => {
      if(e.key === this.currentSymbol.textContent) {
        this.success();
      }else{
        this.fail();
      }
    }

    word.addEventListener('keyup', testKey);
  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    clearInterval(this.timerID);
    const word = this.getWord();

    this.renderWord(word);
    this.timer()
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))

