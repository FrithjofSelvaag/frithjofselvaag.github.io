// ColorPalate
let kokEl = document.querySelectorAll('.leaderboard .p h1')
let selectEl = document.querySelector('header select')

let body = document.querySelector('body')
let h1El = document.querySelector('h1')
let header = document.querySelector('header')
let chartBar = document.querySelector('.fa-chart-bar')
let nav = document.querySelector('nav a')
let homeEl = document.querySelector('header a')
let tittelSymbolEl = document.querySelector('#tittelSymbol')

setTimeout(function(){
    tittelSymbolEl.style.transition="backgroundColor 1s ease;"
},10)
    
let lorem = document.querySelectorAll('.leaderboard .p th')
let leaderboard = document.querySelectorAll('.p table')

selectEl.addEventListener("change", colorPalate)

function colorPalate() {
    if (selectEl.value === "white") {
        for (let i = 0; i < kokEl.length; i++) {
            kokEl[i].style.color = "black"
        }
        let tbodyTr = document.querySelectorAll('tbody tr')
        tbodyTr.forEach(function(boks){
            boks.style.color = 'black'
        })
        localStorage.teller = 1
        tittelSymbolEl.style.backgroundColor = "rgb(5, 163, 215)"
        header.style.backgroundColor = 'white'
        body.style.backgroundColor = 'white'
        selectEl.style.backgroundColor = 'white' 
        selectEl.style.color = 'black'
        homeEl.style.color = 'black'
        
        lorem.forEach(function (lorem) {
            lorem.style.color = 'black'
        })

        homeEl.addEventListener('mouseover', function () {
            homeEl.style.color = "rgba(0, 0, 0, 0.55"
        })
        homeEl.addEventListener('mouseout', function () {
            homeEl.style.color = "black"
        })

        selectEl.addEventListener('mouseover', function () {
            selectEl.style.color = "rgba(0, 0, 0, 0.55)"
        })
        selectEl.addEventListener('mouseout', function () {
            selectEl.style.color = "black"
        })

/*         for (let h = 0; h < leaderboard.length; h++) {
            leaderboard[h].addEventListener('mouseover', function () {
                leaderboard[h].style.transition = 'box-shadow 0.5s ease-in'
                leaderboard[h].style.boxShadow = '0px 10px 10px 0px rgba(0, 0, 0, 0.15)'
            })
            leaderboard[h].addEventListener('mouseout', function () {
                leaderboard[h].style.boxShadow = 'none'
            })
        } */
    }

    else if (selectEl.value === "black") {
        for (let i = 0; i < kokEl.length; i++) {
            kokEl[i].style.color = "white"
        }
        let tbodyTr = document.querySelectorAll('tbody tr')
        tbodyTr.forEach(function(boks){
            boks.style.color = 'white'
        })
        localStorage.teller = 2
        tittelSymbolEl.style.backgroundColor = "black"
        header.style.backgroundColor = 'rgb(17, 17, 17)'
        body.style.backgroundColor = 'rgb(17, 17, 17)'
        selectEl.style.backgroundColor = 'rgb(17, 17, 17) ' // bedre med helt svart her?
        selectEl.style.color = 'white'
        homeEl.style.color = 'white'


        lorem.forEach(function (lorem) {
            lorem.style.color = 'white'
        })
        selectEl.addEventListener('mouseover', function () {
            selectEl.style.color = 'rgba(255, 255, 255, 0.55)'
        })
        selectEl.addEventListener('mouseout', function () {
            selectEl.style.color = "white"
        })

        homeEl.addEventListener('mouseover', function () {
            homeEl.style.color = "rgba(255, 255, 255, 0.55"
        })
        homeEl.addEventListener('mouseout', function () {
            homeEl.style.color = "white"
        })
    }
}

if (!localStorage.teller) {
    localStorage.teller = 1
}
if (localStorage.teller == 1) {
    selectEl.value = "white"
    colorPalate()
}
else if (localStorage.teller == 2) {
    selectEl.value = "black"
    colorPalate()
}




//local storage
let tbody = document.querySelector('.tbody')
let tbody2 = document.querySelector('.tbody2')
let tbody3 = document.querySelector('.tbody3')
let tbody4 = document.querySelector('.tbody4')
let tbody5 = document.querySelector('.tbody5')
let tbody6 = document.querySelector('.tbody6')
let nr1 = document.querySelector('.nr1')
let nr2 = document.querySelector('.nr2')

function createNewScoreSequence() {
    if (Number(localStorage.getItem('highscore')) === 0) {
        return
    }
    else {
        let tr = document.createElement('tr')
        tbody.appendChild(tr)
        let name = document.createElement('td')
        name.textContent = (localStorage.getItem('playerName'))
        let number = document.createElement('td')
        number.textContent = Number((localStorage.getItem('highscore')))
        tr.appendChild(name)
        tr.appendChild(number)
        number.innerHTML = 'lvl ' + number.innerHTML

    }
}
createNewScoreSequence()

function createNewScoreVisual() {
    if (Number(localStorage.getItem('highscore2')) === 0) {
        return
    }
    else {
        let tr = document.createElement('tr')
        tbody2.appendChild(tr)
        let name = document.createElement('td')
        name.textContent = (localStorage.getItem('playerName2'))
        let number = document.createElement('td')
        number.textContent = Number((localStorage.getItem('highscore2')))
        tr.appendChild(name)
        tr.appendChild(number)
        number.innerHTML = 'lvl ' + number.innerHTML
    }
}
createNewScoreVisual()

function createNewScoreReaction() {
    if (Number(localStorage.getItem('highscore3')) === 0) {
        return
    }
    else {
        let tr = document.createElement('tr')
        tbody3.appendChild(tr)
        let name = document.createElement('td')
        name.textContent = (localStorage.getItem('playerName3'))
        let number = document.createElement('td')
        number.textContent = Number((localStorage.getItem('highscore3')))
        tr.appendChild(name)
        tr.appendChild(number)
        
        number.innerHTML += 'ms'
    }
}
createNewScoreReaction()

function createNewScoreChimp() {
    if (Number(localStorage.getItem('highscore4')) === 0) {
        return
    }
    else {
        let tr = document.createElement('tr')
        tbody4.appendChild(tr)
        let name = document.createElement('td')
        name.textContent = (localStorage.getItem('playerName4'))
        let number = document.createElement('td')
        number.textContent = Number((localStorage.getItem('highscore4')))
        tr.appendChild(name)
        tr.appendChild(number)
        number.innerHTML = 'nr ' + number.innerHTML
    }
}
createNewScoreChimp()

function createNewScoreNumber() {
    if (Number(localStorage.getItem('highscore5')) === 0) {
        return
    }
    else {
        let tr = document.createElement('tr')
        tbody5.appendChild(tr)
        let name = document.createElement('td')
        name.textContent = (localStorage.getItem('playerName5'))
        let number = document.createElement('td')
        number.textContent = Number((localStorage.getItem('highscore5')))
        tr.appendChild(name)
        tr.appendChild(number)
        number.innerHTML = 'lvl ' + number.innerHTML
    }
}
createNewScoreNumber()

function createNewScoreVerbal() {
    if (Number(localStorage.getItem('highscore6')) === 0) {
        return
    }
    else {
        let tr = document.createElement('tr')
        tbody6.appendChild(tr)
        let name = document.createElement('td')
        name.textContent = (localStorage.getItem('playerName6'))
        let number = document.createElement('td')
        number.textContent = Number((localStorage.getItem('highscore6')))
        tr.appendChild(name)
        tr.appendChild(number)
        number.innerHTML = 'lvl ' + number.innerHTML
    }
}
createNewScoreVerbal()

setTimeout(function(){
    tittelSymbolEl.style.transition = 'background-color 0.3s ease'
    document.body.style.transition = 'background-color 1s ease'
    header.style.transition = 'background-color 1s ease'
}, 100)