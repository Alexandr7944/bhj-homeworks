const chatWidget = document.querySelector('.chat-widget');
chatWidget.onclick = () => chatWidget.classList.add('chat-widget_active');

document.addEventListener('click', event => {
    if(!event.target.closest('.chat-widget')) {
        chatWidget.classList.remove('chat-widget_active');
    }
})

const chatWidgetInput = document.querySelector('.chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');
const container = document.querySelector('.chat-widget__messages-container');

const randomMessages = [
    'До того, как была открыта гора Эверест, какая гора была самой высокой в мире?',
    'Почему черника не голубая?',
    'Как мы можем узнать, есть ли в словаре слово с ошибкой?',
    'Как бросить яйцо на бетонный пол, не разбив его?',
    'Почему нет корма для кошек со вкусом мыши?',
    'Почему лед на вкус похож на воду?',
    'Для чего нужен знак «Ребенок на борту»? Помогает ли это решить, в какую машину не попасть в случае аварии?',
    'Если у света есть скорость, какова скорость тьмы?',
    'Ты участвуешь в забеге и обгоняешь человека, занявшего 2-место. На каком месте ты сейчас?',
    'Представь, что ты падаешь в яму полную ядовитых змей. Как выжить?',
    'Когда наступает ночь, кто ее поднимает?',
    'Водитель грузовика двигается по улице с односторонним движением не в ту сторону и это видит несколько полицейских. Почему его не останавливают?',
    'Если апельсин называют апельсином, почему бы нам не назвать лайм желтый, а лимон зеленым?',
    'Сколько времени рыба плавает после еды?',
    ];

chatWidgetInput.addEventListener('keydown', e => {
    if(e.key === 'Enter') {
        if(chatWidgetInput.value) {
            const timeNow = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
            messages.innerHTML += `
            <div class="message message_client">
                <div class="message__time">${timeNow}</div>
                <div class="message__text">
                ${chatWidgetInput.value}
                </div>
            </div>
            <div class="message">
                <div class="message__time">${timeNow}</div>
                <div class="message__text">${randomMessages[+((Math.random()*(randomMessages.length - 1)).toFixed())]}</div>
            </div>
            `;
        }
        chatWidgetInput.value = '';
        container.scrollTop = container.scrollHeight;
    }
})