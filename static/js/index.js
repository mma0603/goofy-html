let buttonState = true;

let priceMapping = {
    price1: 1300,
    price2: 600,
    price3: 700,
    price4: 900,
    price5: 900,
}
let priceMappingDiscount = {
    price1: 1100,
    price3: 600,
    price5: 800,
}


function getRub(amount) {
    return amount + ' ₽';
}

function initPrices() {
    Object.keys(priceMapping).forEach(function(key){
        document.getElementById(key).textContent = getRub(priceMapping[key]);
        document.getElementById(key).classList.add('whiteColor');
    })
}

function initPage(){
    console.log('Page initialization');
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
        image = './static/img/punk.jpg';
        colorClass.remove = 'whiteColor';
        
    }
    else {
        button.textContent = 'Применить';
        button.className = 'discountButton';
        priceMappingCurrent = priceMapping;
        image = './static/img/man.jpg';
        colorClass.remove = 'redColor';
    }

    Object.keys(priceMappingCurrent).forEach(function(key){
        let element = document.getElementById(key);
        element.textContent = getRub(priceMappingCurrent[key]);
        element.classList.add(colorClass.add);
        element.classList.remove(colorClass.remove);
    })
    document.getElementById('image').src = image;
    
    colorClass.add = colorClass.remove;
    buttonState = !buttonState;
}

initPage();
