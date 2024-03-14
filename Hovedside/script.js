//hamburger-meny

let burgerEl = document.querySelector('.fa-chart-bar')

let navEl = document.querySelector('nav')

burgerEl.addEventListener('click', showNav)

function showNav() {
    navEl.classList.toggle('show')
    selectEL.classList.toggle('show')
}

// ColorPalate
let selectEL = document.getElementById('ColorPalate')
let navbarEL = document.getElementById('header')


selectEL.addEventListener("change", colorPalate())

function colorPalate(){

}
