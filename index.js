
const cards = document.getElementsByClassName('card')
let car = document.getElementById('car')
let prix = document.getElementById('prix')


for (let Card of cards) {

    let plus = Card.querySelector('.plus');
    let moins = Card.querySelector('.moins');
    let quantityElement = Card.querySelector('.quantity');
    let priceElement = Card.querySelector('.product-price');

    plus.onclick = function () {
        quantityElement.innerText++;
        car.innerText++;
        prix.innerText = parseInt(prix.innerText) + parseInt(priceElement.innerText);
    }

    moins.onclick = function () {
        if (quantityElement.innerText > 0) {
            quantityElement.innerText--;
            car.innerText--;
            prix.innerText = parseInt(prix.innerText) - parseInt(priceElement.innerText);
        }
    }
}

