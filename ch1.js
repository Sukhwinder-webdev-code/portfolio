const btn = document.getElementById("read-more");
const more = document.getElementById("more");
if (btn && more) {

    btn.addEventListener('click', () => {
        if (more.style.display === "none") {
            more.style.display = "inline";
            btn.textContent = "Read Less";
        }
        else {
            more.style.display = "none";
            btn.textContent = "Read More";
        }
    });
}
const hamMenu = document.querySelector("i.ham-menu");
const navLinks = document.querySelector("nav ul");
if (hamMenu && navLinks) {
    hamMenu.addEventListener('click', () => {
        navLinks.classList.toggle("show");
    });
}

var theme = document.querySelector('.toggle');
theme.addEventListener('click', () => {
    if (document.body.getAttribute('data-theme') === 'dark') {
        document.body.setAttribute('data-theme', 'light');
    }
    else {
        document.body.setAttribute('data-theme', 'dark');
    }
})