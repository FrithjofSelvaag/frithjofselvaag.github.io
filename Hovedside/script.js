let burgerEl = document.querySelector('.fa-chart-bar')

let navEl = document.querySelector('nav')

burgerEl.addEventListener('click', showNav)

function showNav() {
    navEl.classList.toggle('show')
}
