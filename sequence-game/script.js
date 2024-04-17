let color = "white"
let boksene = document.querySelectorAll('div div')
let knapp = document.querySelector('.knapp')
let text = document.querySelector('#text')

let blinkBokser = []
let klikkedeBokser = []

knapp.addEventListener('click', sequenceBlink)

let level = 1

let j = 0
function sequenceBlink(){
    knapp.style.display = 'none'
    if (j < level) {
        let i = Math.floor(Math.random() * boksene.length)
        let boks = boksene[i]
        blinkBokser.push(boks)

        let g = 0

        setTimeout(function rekkefolgen(){
            if(g < level){
                setTimeout(function(){blinkBokser[g].style.backgroundColor = 'white'}, 150)
                setTimeout(function(){

                    if(selectEl.value === "black"){
                        blinkBokser[g].style.backgroundColor = 'rgba(90, 90, 90, 0.3)'
                    }
                    else if(selectEl.value === "white"){
                        blinkBokser[g].style.backgroundColor = 'rgba(0, 0, 0, 0.153)'
                    }
                    g++
                    rekkefolgen()
                }, 600)
            }}, 100)

        j++
        sequenceBlink()
    }
}

function sjekkRekkefolge() {
    if(knapp.style.display === 'none'){
        for (let i = 0; i < klikkedeBokser.length; i++) {
            if (klikkedeBokser[i] !== blinkBokser[i]) {
                /* giPoints() */
                document.write(`
                <h1 style="color: white;
                text-align: center;
                font-size: 22px;
                padding-top: 125px;
                font-family: Helvetica, Arial, sans-serif;
                ">Sqeuence Memory</h1>
                <h1 style="color: white;
                text-align: center;
                margin-top: 0px;
                margin-bottom: 0px;
                font-size: 100px;
                padding-top: 0px;
                font-family: Helvetica, Arial, sans-serif;
                ">Level ${level}</h1>
                <h1 style="color: white;
                text-align: center;
                font-size: 22px;
                padding-top: 0px;
                font-family: Helvetica, Arial, sans-serif;
                ">Better Luck Next Time</h1>
                `)
    
                let nyKnapp = document.createElement('button')
                nyKnapp.textContent = ('Try Again')
                nyKnapp.classList.add('knapp')
                document.body.appendChild(nyKnapp)
    
                let nyKnapp2 = document.createElement('button')
                nyKnapp2.textContent = ('Home')
                nyKnapp2.classList.add('knapp')
                document.body.appendChild(nyKnapp2)
    
                let nyKnapp3 = document.createElement('button')
                nyKnapp3.textContent = ('Save Score')
                nyKnapp3.classList.add('knapp')
                document.body.appendChild(nyKnapp3)
    
                nyKnapp.addEventListener('mouseenter', function() {
                    nyKnapp.style.backgroundColor = 'white'
                })
                nyKnapp.addEventListener('mouseleave', function() {
                    nyKnapp.style.backgroundColor = 'rgb(254, 217, 32)'
                })
                nyKnapp.addEventListener('click', function(){
                    location.reload()
                })
                nyKnapp2.addEventListener('mouseenter', function() {
                    nyKnapp2.style.backgroundColor = 'white'
                })
                nyKnapp2.addEventListener('mouseleave', function() {
                    nyKnapp2.style.backgroundColor = 'rgba(255, 255, 255, 0.400)'
                })
                nyKnapp2.addEventListener('click', function(){
                    window.location.href = '../Hovedside/index.html'
                })
                nyKnapp3.addEventListener('mouseenter', function() {
                    nyKnapp3.style.backgroundColor = 'white'
                })
                nyKnapp3.addEventListener('mouseleave', function() {
                    nyKnapp3.style.backgroundColor = 'rgb(254, 217, 32)'
                })
                nyKnapp.style.display = 'flex'
                nyKnapp.style.margin = 'auto'
                nyKnapp.style.marginTop = '20px'
                nyKnapp.style.width = '160px'
                nyKnapp.style.height = '50px'
                nyKnapp.style.justifyContent = 'center'
                nyKnapp.style.alignItems = 'center'
                nyKnapp.style.fontWeight = '40px'
                nyKnapp.style.border = 'none'
                nyKnapp.style.borderRadius = '5px'
                nyKnapp.style.transition = 'background-color 0.5s ease'
                nyKnapp.style.fontSize = '25px'
                nyKnapp.style.fontFamily = 'Helvetica, Arial, sans-serif'
    
                nyKnapp2.style.display = 'flex'
                nyKnapp2.style.margin = '20px auto'
                nyKnapp2.style.width = '160px'
                nyKnapp2.style.height = '50px'
                nyKnapp2.style.justifyContent = 'center'
                nyKnapp2.style.alignItems = 'center'
                nyKnapp2.style.fontWeight = '40px'
                nyKnapp2.style.border = 'none'
                nyKnapp2.style.borderRadius = '5px'
                nyKnapp2.style.transition = 'background-color 0.5s ease'
                nyKnapp2.style.fontSize = '25px'
                nyKnapp2.style.fontFamily = 'Helvetica, Arial, sans-serif'
    
                nyKnapp3.style.display = 'flex'
                nyKnapp3.style.margin = '20px auto'
                nyKnapp3.style.width = '160px'
                nyKnapp3.style.height = '50px'
                nyKnapp3.style.justifyContent = 'center'
                nyKnapp3.style.alignItems = 'center'
                nyKnapp3.style.fontWeight = '40px'
                nyKnapp3.style.border = 'none'
                nyKnapp3.style.borderRadius = '5px'
                nyKnapp3.style.transition = 'background-color 0.5s ease'
                nyKnapp3.style.fontSize = '25px'
                nyKnapp3.style.fontFamily = 'Helvetica, Arial, sans-serif'
                nyKnapp3.style.backgroundColor = 'rgb(254, 217, 32)'
    
                if(selectEl.value === "white"){
                    nyKnapp.style.backgroundColor = 'rgb(254, 217, 32)'
                    nyKnapp2.style.backgroundColor = 'rgba(255, 255, 255, 0.400)'
                    document.body.style.transition = 'background-color 1s ease'
                    setTimeout(function(){document.body.style.backgroundColor = 'red'}, 10)
                    setTimeout(function(){document.body.style.backgroundColor = 'rgb(43, 135, 209)'}, 200)
                }
                else if(selectEl.value === "black"){
                    nyKnapp.style.backgroundColor = 'rgb(254, 217, 32)'
                    nyKnapp2.style.backgroundColor = 'rgba(255, 255, 255, 0.400)'
                    document.body.style.transition = 'background-color 1s ease'
                    setTimeout(function(){document.body.style.backgroundColor = 'red'}, 10)
                    setTimeout(function(){document.body.style.backgroundColor = 'black'}, 200)
                }
                nyKnapp3.addEventListener('click', function(){
                        document.body.innerHTML = ""
                        document.write(`
                        <h1 style="color: white;
                        text-align: center;
                        font-size: 22px;
                        padding-top: 125px;
                        font-family: Helvetica, Arial, sans-serif;
                        ">Sqeuence Memory</h1>
                        <h1 style="color: white;
                        text-align: center;
                        margin-top: 0px;
                        margin-bottom: 0px;
                        font-size: 100px;
                        padding-top: 0px;
                        font-family: Helvetica, Arial, sans-serif;
                        ">Level ${level}</h1>
                        <h1 style="color: white;
                        text-align: center;
                        font-size: 22px;
                        padding-top: 0px;
                        font-family: Helvetica, Arial, sans-serif;
                        ">Write Your Name</h1>
                        `)
                        let labelEl = document.createElement('label')
                        labelEl.classList.add('label')
                        document.body.appendChild(labelEl)
                        let inputEl = document.createElement('input')
                        inputEl.classList.add('input')
                        labelEl.appendChild(inputEl)
    
                        labelEl.style.color = 'white'
                        labelEl.style.display = 'flex'
                        labelEl.style.margin = 'auto'
                        labelEl.style.justifyContent = 'center'
                    
                        inputEl.addEventListener('keydown', function(e) {
                            if (e.key === 'Enter') {
                                let playerName = String(inputEl.value).substring(0, 10);
                                let highscore = level - 1
                                localStorage.setItem('highscore', highscore)
                                localStorage.setItem('playerName', playerName)
                                console.log(localStorage.getItem('playerName'))
                                console.log(localStorage.getItem('highscore'))
                                window.location.href = '../leaderboard/leaderboard.html'
                            }
                        })
                    })}}
                
        if (klikkedeBokser.length === blinkBokser.length) {
            let match = true
            for (let i = 0; i < klikkedeBokser.length; i++) {
                if (klikkedeBokser[i] !== blinkBokser[i]) {
                    match = false
                    return
                }}
    
            if (match === true) {
                console.log('Du har trykket på klossene i riktig rekkefølge!')
                level +=1
                document.body.style.transition = 'background-color 1s ease'
    
                if (selectEl.value === "white"){
                    document.body.style.backgroundColor = 'rgb(70, 190, 255)'
                    setTimeout(function(){document.body.style.backgroundColor = 'rgb(43, 135, 209)'}, 350)
                }
                else if(selectEl.value === "black"){
                    document.body.style.backgroundColor = 'rgb(150, 75, 0)'
                    setTimeout(function(){document.body.style.backgroundColor = 'rgb(17, 17, 17)'}, 300)
                }
    
                text.innerHTML = level
    
                setTimeout(function(){
                    sequenceBlink()
                }, 400)
            }
    
            klikkedeBokser = []
        }
    }

}

for (let h = 0; h < boksene.length; h++) {

    boksene[h].addEventListener('click', function() {
        if(knapp.style.display === 'none'){
        setTimeout(function(){
            boksene[h].style.backgroundColor = 'rgba(255, 255, 255, 1)'
        }, 0)

        if(selectEl.value === "white"){
        setTimeout(function(){
            boksene[h].style.backgroundColor = 'rgba(0, 0, 0, 0.153)'
        }, 80)}
        else if(selectEl.value === "black"){
        setTimeout(function(){
            boksene[h].style.backgroundColor = 'rgba(90, 90, 90, 0.3)'
        }, 80)}
            klikkedeBokser.push(boksene[h])
            sjekkRekkefolge()
    }})
}



//FARGEENDRING TIL BLACK OG WHITE MODE!
let selectEl = document.querySelector('select')
let body = document.body
let header = document.querySelector('header')
let nav = document.querySelector('nav a')
let home = document.querySelector('div a')
let lenkene = document.querySelectorAll('a')



// for responsiv burger
let navEl = document.querySelector('nav')
let burgerEl = document.querySelector('.fa-chart-bar')

burgerEl.addEventListener('click', showNav)

function showNav() {
    navEl.classList.toggle('show')
    selectEl.classList.toggle('show')

}


selectEl.addEventListener("change", colorPalate)

function colorPalate(){

    if (selectEl.value === "white") {

        localStorage.teller = 1


        burgerEl.style.color="black"
        header.style.backgroundColor = 'white'
        body.style.backgroundColor = 'rgb(43, 135, 209)'
        selectEl.style.backgroundColor = 'white'
        selectEl.style.color = 'black'
        lenkene.forEach(function(lenkene){
        lenkene.style.color = 'black'



            lenkene.addEventListener('mouseenter', function() {
                lenkene.style.color = 'rgba(0,0,0, 0.55)'
            })
            lenkene.addEventListener('mouseleave', function() {
                lenkene.style.color = 'black'
            })
        })

        burgerEl.addEventListener('mouseover',function(){
            burgerEl.style.color="rgba(0, 0, 0, 0.55)"
        })
        burgerEl.addEventListener('mouseout',function(){
            burgerEl.style.color="rgb(0, 0, 0)"
        })

        boksene.forEach(function(boksene){
            boksene.style.backgroundColor = 'rgba(0, 0, 0, 0.153)'
        })
        

            selectEl.addEventListener('mouseenter', function() {
                selectEl.style.color = 'rgba(0,0,0, 0.55)'
            })
            selectEl.addEventListener('mouseleave', function() {
                selectEl.style.color = 'black'
            })
        }

    else if (selectEl.value === "black") {

        localStorage.teller = 2

        burgerEl.style.color="white"
        body.style.backgroundColor = 'rgb(17, 17, 17)'
        selectEl.style.backgroundColor = 'black'
        selectEl.style.color = 'white'
        header.style.backgroundColor = 'black'
        lenkene.forEach(function(lenkene){
        lenkene.style.color = 'white'

        lenkene.addEventListener('mouseenter', function() {
        lenkene.style.color = 'rgba(255,255,255, 0.55)'
        })
        lenkene.addEventListener('mouseleave', function() {
        lenkene.style.color = 'white'
        })
        })
        boksene.forEach(function(boksene){
            boksene.style.backgroundColor = 'rgba(90, 90, 90, 0.3)'
        })

        burgerEl.addEventListener('mouseover',function(){
            burgerEl.style.color="rgba(255, 255, 255, 0.55)"
        })
        burgerEl.addEventListener('mouseout',function(){
            burgerEl.style.color="rgb(255, 255, 255)"
        })

        selectEl.addEventListener('mouseenter', function() {
            selectEl.style.color = 'rgba(255,255,255, 0.55)'
        })
        selectEl.addEventListener('mouseleave', function() {
            selectEl.style.color = 'white'
        })
    }}

//local storage, bevarer light/dark mode
let h2El = document.querySelector('h2')
let knappEl = document.getElementById('knapp')

console.log(localStorage.teller)
//hvis teller ikke eksisterer i localstorage skal den settes til 1
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

setTimeout(function(){
    document.body.style.transition = 'background-color 1s ease'
    header.style.transition = 'background-color 1s ease'
}, 100)

//score oppsettet
/* if(!localStorage.getItem('score')){
    localStorage.setItem('score', 0)
}
 function giPoints(){
    let currentScore = localStorage.getItem('score')
    let newScore = Number(currentScore) + Number(level - 1)
    localStorage.setItem('score', newScore)
    console.log(newScore)
}  */


