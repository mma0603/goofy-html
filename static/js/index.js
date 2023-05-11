let buttonState = true;
let serverUrl = 'http://localhost:3000/'

var priceMapping = {};
var priceMappingDiscount = {};

function getRub(amount) {
    return amount + ' ₽';
}

function initPrices() {
    Object.keys(priceMapping).forEach(function(key){
        document.getElementById(key).textContent = getRub(priceMapping[key]);
        document.getElementById(key).classList.add('whiteColor');
    });
}

async function get(path) {
    let data = await fetch(serverUrl + 'api/v1/' + path);
    return await data.json();
}

async function initPage(){
    console.log('Page initialization');
    let data = await get('prices');
    priceMapping = data.prices;
    priceMappingDiscount = data.pricesDiscount;

    initPrices();
}

function discount(){
    let button = document.getElementById('discountButton');
    let image;
    let colorClass = {
        add: 'redColor', remove: 'whiteColor'
    };
    let priceMappingCurrent;

    if (buttonState){
        button.textContent = 'Я не панк(';
        button.className = 'discountButtonCancel';
        priceMappingCurrent = priceMappingDiscount;
        image = serverUrl + 'static/img/punk.jpg';
        colorClass.remove = 'whiteColor';
        
    }
    else {
        button.textContent = 'Применить';
        button.className = 'discountButton';
        priceMappingCurrent = priceMapping;
        image = serverUrl + 'static/img/man.jpg';
        colorClass.remove = 'redColor';
    }

    Object.keys(priceMappingCurrent).forEach(function(key){
        let element = document.getElementById(key);
        element.textContent = getRub(priceMappingCurrent[key]);
        element.classList.add(colorClass.add);
        element.classList.remove(colorClass.remove);
    });
    document.getElementById('image').src = image;
    
    colorClass.add = colorClass.remove;
    buttonState = !buttonState;
}

initPage();