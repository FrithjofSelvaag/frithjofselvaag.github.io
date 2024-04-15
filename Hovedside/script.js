//kode for at div-elementet er klikkbar og sender seg til nettsiden
function goToPage(url) {
    window.location.href = url
}
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
let h1El = document.querySelector('h1')
let header = document.querySelector('header')
let chartBar = document.querySelector('.fa-chart-bar')
let nav = document.querySelector('nav a')
let home = document.querySelector('div a')
let lorem = document.querySelectorAll('#storBoks .spillboks div h1')
let boksene = document.querySelectorAll('.spillboks div')


/* let spillNavn=document.querySelector('#storBoks .spillboks div spillOverskrift') */

selectEl.addEventListener("change", colorPalate)

/* nyKnapp.addEventListener('mouseenter', function() {
    nyKnapp.style.backgroundColor = 'white'
})
nyKnapp.addEventListener('mouseleave', function() {
    nyKnapp.style.backgroundColor = 'rgb(254, 217, 32 */

function colorPalate(){

    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)

    if (selectEl.value === "white") {

        localStorage.teller = 1

        header.style.backgroundColor = 'rgb(5, 163, 215)'
        body.style.backgroundColor = 'white'
        h1El.style.color = 'black'
        selectEl.style.backgroundColor = 'rgb(5, 163, 215)'
        chartBar.style.color = 'white'
        lorem.forEach(function(lorem) {
            lorem.style.color = 'black'
        })
        for (let h = 0; h < boksene.length; h++) {
            boksene[h].addEventListener('mouseover', function(){
                boksene[h].style.boxShadow = 'none'
            })
            boksene[h].addEventListener('mouseout', function(){
                boksene[h].style.boxShadow = 'none'
            })}
        
        
        
        for (let i = 0; i < boksene.length; i++) {
            let spillNavn = boksene[i].querySelector('.spillOverskrift');
            boksene[i].addEventListener('mouseenter', function(){
                spillNavn.style.color = "orange";
            });
            boksene[i].addEventListener('mouseleave', function(){
                spillNavn.style.color = "black";
            });
}
        
        }
        
        
        



    else if (selectEl.value === "black") {

        localStorage.teller = 2

        body.style.backgroundColor = 'rgb(17, 17, 17)'
        selectEl.style.backgroundColor = 'black'
        header.style.backgroundColor = 'black'
        h1El.style.color = 'white'
        chartBar.style.color = 'white'
        lorem.forEach(function(lorem) {
            lorem.style.color = 'white'
        })
        for (let h = 0; h < boksene.length; h++) {
            boksene[h].addEventListener('mouseover', function(){
                boksene[h].style.boxShadow = '0px 0px 20px rgba(255, 255, 255, 1)'
            })
            boksene[h].addEventListener('mouseout', function(){
                boksene[h].style.boxShadow = 'none'
            })}}





    else if (selectEl.value === "colors") {

        localStorage.teller = 3

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
        r = Math.floor(Math.random()*256)
        g = Math.floor(Math.random()*256)
        b = Math.floor(Math.random()*256)
        for (let h = 0; h < boksene.length; h++) {
            boksene[h].addEventListener('mouseover', function(){
                boksene[h].style.boxShadow = `0px 0px 20px rgba(${r}, ${g}, ${b}, 1)`
            })
            boksene[h].addEventListener('mouseout', function(){
                boksene[h].style.boxShadow = 'none'
            })}}
}

if (!localStorage.teller) {
    localStorage.teller = 1
} 
if(localStorage.teller == 1){
    selectEl.value = "white"
    colorPalate()
}
else if (localStorage.teller == 2){
    selectEl.value = "black"
    colorPalate()
}
else if (localStorage.teller == 3){
    selectEl.value = "colors"
    colorPalate()
}

setTimeout(function(){
    document.body.style.transition = 'background-color 1s ease'
}, 100)

let currentCoins = document.querySelector('.currentCoins')

currentCoins.innerHTML = `${localStorage.getItem('score')} Coins`
