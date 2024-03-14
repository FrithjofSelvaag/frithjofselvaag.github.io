//hamburger-meny

let burgerEl = document.querySelector('.fa-chart-bar')

let navEl = document.querySelector('nav')

burgerEl.addEventListener('click', showNav)

function showNav() {
    navEl.classList.toggle('show')
    selectEL.classList.toggle('show')
}

// ColorPalate
let selectEl = document.querySelector('select')
let body = document.body
let h1 = document.querySelector('h1')
let header = document.querySelector('header')
let chartBar = document.querySelector('.fa-chart-bar')


selectEl.addEventListener("input", colorPalate)

function colorPalate(){

    if (selectEl.value === "white") {
        header.style.backgroundColor = 'rgb(5, 163, 215)'
        body.style.backgroundColor = 'white'
        h1.style.color = 'black'
        chartBar.style.color = 'white'
        selectEl.style.backgroundColor = 'rgb(5, 163, 215)'

    }
    else if (selectEl.value === "black") {
        body.style.backgroundColor = 'black'
        header.style.backgroundColor = 'indigo'
        h1.style.color = 'white'
        selectEl.style.backgroundColor = 'indigo'
        
    }
}