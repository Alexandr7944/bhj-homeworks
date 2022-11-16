const items = document.querySelector('#items');
items.innerHTML = localStorage.getItem('itemsCache') ? localStorage.getItem('itemsCache') : '';

const xhrCard = new XMLHttpRequest();
xhrCard.open('GET', 'https://netology-slow-rest.herokuapp.com/');
xhrCard.responseType = 'json';
xhrCard.onload = function () {
    if(xhrCard.readyState === xhrCard.DONE && xhrCard.status == 200) {
        document.querySelector('.loader_active').classList.remove('loader_active');
        getItem();
    }
}
xhrCard.send();

function getItem() {
    items.innerHTML = '';
    const arrCard = Object.values(xhrCard.response.response.Valute)
    arrCard.find(item => {
        items.innerHTML += `
            <div class="item">
                <div class="item__code">
                    ${item.CharCode}
                </div>
                <div class="item__value">
                    ${item.Value}
                </div>
                <div class="item__currency">
                    руб.
                </div>
            </div>
        `;
    })
    localStorage.setItem('itemsCache', `${items.innerHTML}`);
}