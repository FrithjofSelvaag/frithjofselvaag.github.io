

//hamburger-meny

let burgerEl = document.querySelector('.fa-chart-bar')

let navEl = document.querySelector('nav')

let mainDivEl = document.querySelector('.spillboks div')

let mainEl = document.querySelector('.spillboks')


burgerEl.addEventListener('click', showNav)

function showNav() {
    navEl.classList.toggle('show')
    selectEl.classList.toggle('show')

}

// ColorPalate
let selectEl = document.querySelector('select')
let body = document.body
let h1 = document.querySelector('h1')
let header = document.querySelector('header')
let chartBar = document.querySelector('.fa-chart-bar')
let nav = document.querySelector('nav a')
let home = document.querySelector('div a')
let lorem = document.querySelectorAll('main div h1')


selectEl.addEventListener("change", colorPalate)

function colorPalate(){

    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)

    if (selectEl.value === "white") {
        header.style.backgroundColor = 'rgb(5, 163, 215)'
        body.style.backgroundColor = 'white'
        h1.style.color = 'black'
        selectEl.style.backgroundColor = 'rgb(5, 163, 215)'
        chartBar.style.color = 'white'
        lorem.forEach(function(lorem) {
            lorem.style.color = 'black'
        })
    }
    else if (selectEl.value === "black") {
        body.style.backgroundColor = 'rgb(17, 17, 17)'
        selectEl.style.backgroundColor = 'black'
        header.style.backgroundColor = 'black'
        h1.style.color = 'white'
        chartBar.style.color = 'white'
        lorem.forEach(function(lorem) {
            lorem.style.color = 'white'
        })
    }
    else if (selectEl.value === "colors") {
        body.style.backgroundColor = `rgb(${r},${g},${b})`
        r = Math.floor(Math.random()*256)
        g = Math.floor(Math.random()*256)
        b = Math.floor(Math.random()*256)
        selectEl.style.backgroundColor = `rgb(${g},${r},${b})`
        r = Math.floor(Math.random()*256)
        g = Math.floor(Math.random()*256)
        b = Math.floor(Math.random()*256)
        header.style.backgroundColor = `rgb(${b},${g},${r})`
        r = Math.floor(Math.random()*256)
        g = Math.floor(Math.random()*256)
        b = Math.floor(Math.random()*256)
        chartBar.style.color = `rgb(${g},${b},${r})`
        r = Math.floor(Math.random()*256)
        g = Math.floor(Math.random()*256)
        b = Math.floor(Math.random()*256)
        lorem.forEach(function(lorem) {
            lorem.style.color = `rgb(${g},${b},${r})`
        })
    }
}