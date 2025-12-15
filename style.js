// nav bar toggle view for small screen sizes.
var nav = document.querySelector('#navigation-items');
var ham = document.querySelector('#ham-container');
ham.addEventListener('click', () => {
    nav.classList.toggle('show');

});

// display items card for order //
var item = document.querySelectorAll('.menu');
var card = document.querySelector('.card');
var displayName = document.querySelector('.item-name');
var displayPrice = document.querySelector('.price');
var total = document.querySelector('.total');

var incre = document.querySelector('.items_quantityIncrease');
var decre = document.querySelector('.items_quantitydecrease');
var quantity = document.querySelector('.quantity');
item.forEach(i => {
    i.addEventListener('click', () => {
        quantity.textContent = 0;
        total.textContent = 0;
        clearText(); // clear the previous text of confirmation.
        setButtonText(); // clear previous text for button
        const position = i.getBoundingClientRect(); // get the element click position. 
        card.style.display = 'block';
        card.style.top = position.top + 'px';
        card.style.left = position.left + 'px';
        displayName.textContent = i.querySelector('.name').textContent;;
        displayPrice.textContent = i.querySelector('.price').textContent;
    });
});

// code to close the card.
var close = document.querySelector('.close');
close.addEventListener('click', () => {
    document.querySelector('.card').style.display = "none";
})

// to increment the quantity
var number = quantity.textContent;
incre.addEventListener('click', () => {
    quantity.textContent = Number(quantity.textContent) + 1;
    number = Number(quantity.textContent);
    total.textContent = displayPrice.textContent * number;
});

//to decrement the quantity
decre.addEventListener('click', () => {
    if (Number(quantity.textContent) > 0) {
        quantity.textContent = quantity.textContent - 1;
        total.textContent = total.textContent - displayPrice.textContent;
    }
})




// delayed function to clear the message to select quantity
var confirmation = document.querySelector('.confirmation');
function clearText() {
    confirmation.textContent = "";
}

// to reset the button text for next order.
function setButtonText() {
    clearText();
    order.textContent = 'ORDER NOW';
}
var order = document.querySelector('.order-btn');
order.addEventListener('click', () => {
    if (Number(quantity.textContent) <= 0) {
        confirmation.textContent = "Please select the quantity!"
        setTimeout(clearText, 4000);
    }
    else {
        order.textContent = 'Ordered!';
        confirmation.textContent = `${displayName.textContent} has been added to cart!`;
        setTimeout(setButtonText, 4000);
    }
    confirmation.style.color = "skyBlue";
    confirmation.style.textAlign = "center";
});