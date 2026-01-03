document.querySelector("#toggle-btn").addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

//code for hamburger to display navigation on small screens

var hamburger = document.querySelector('.hamburger');
var navigation = document.querySelector('.navigation-items');

hamburger.addEventListener('click', () => {

    navigation.classList.toggle('active');
});


//code for second navigation.
var icon = document.querySelector('#view-more');
var items = document.querySelectorAll('.more');
var prevItems = document.querySelectorAll('.hide');
icon.addEventListener('click', () => {
    items.forEach(item => {

        item.classList.toggle('more');
    })

    prevItems.forEach(prev => {
    prev.classList.toggle('active');
    })
});
