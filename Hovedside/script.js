const burgerEl = document.querySelector('.fa-chart-bar')

const navEl = document.querySelector('nav')

burgerEl.addEventListener('click', showNav)

function showNav() {
    navEl.classList.toggle('show')
}