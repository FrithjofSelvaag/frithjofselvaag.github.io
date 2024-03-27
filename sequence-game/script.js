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
                    blinkBokser[g].style.backgroundColor = 'rgba(0, 0, 0, 0.153)'
                    g++
                    rekkefolgen()
                }, 600)
            }}, 100)

        j++
        sequenceBlink()
    }
}

function sjekkRekkefolge() {
    for (let i = 0; i < klikkedeBokser.length; i++) {
        if (klikkedeBokser[i] !== blinkBokser[i]) {
            if(selectEl.value === "white"){
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
                
            }
            else if(selectEl.value === "black"){

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
            }

            let nyKnapp = document.createElement('button')
            nyKnapp.textContent = ('Try Again')
            nyKnapp.classList.add('knapp')
            document.body.appendChild(nyKnapp)

            let nyKnapp2 = document.createElement('button')
            nyKnapp2.textContent = ('Home')
            nyKnapp2.classList.add('knapp')
            document.body.appendChild(nyKnapp2)

            nyKnapp2.addEventListener('mouseenter', function() {
                nyKnapp2.style.backgroundColor = 'white'
            })
            
            nyKnapp2.addEventListener('mouseleave', function() {
                nyKnapp2.style.backgroundColor = 'rgba(255, 255, 255, 0.400)'
            })
            nyKnapp.addEventListener('mouseenter', function() {
                nyKnapp.style.backgroundColor = 'white'
            })
            
            nyKnapp.addEventListener('mouseleave', function() {
                nyKnapp.style.backgroundColor = 'rgb(254, 217, 32)'
            })

            nyKnapp.addEventListener('click', function(){
                location.reload()
            })
            nyKnapp2.addEventListener('click', function(){
                window.location.href = '../Hovedside/index.html'
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
        }}
            

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

            if (selectEl.value === "white"){
                document.body.style.backgroundColor = 'rgb(70, 190, 255)'
                setTimeout(function(){document.body.style.backgroundColor = 'rgb(43, 135, 209)'}, 350)
            }
            else if(selectEl.value === "black"){
                document.body.style.backgroundColor = 'orange'
                setTimeout(function(){document.body.style.backgroundColor = 'darkblue'}, 350)
            }

            text.innerHTML = level

            setTimeout(function(){
                sequenceBlink()
            }, 400)
        }

        klikkedeBokser = []
    }
}


for (let h = 0; h < boksene.length; h++) {
    boksene[h].addEventListener('click', function() {
        setTimeout(function(){
            boksene[h].style.backgroundColor = 'rgba(255, 255, 255, 0.7)'
        }, 0)
    
        setTimeout(function(){
            boksene[h].style.backgroundColor = 'rgba(0, 0, 0, 0.153)'
        }, 80)

        klikkedeBokser.push(boksene[h])
        sjekkRekkefolge()
    })
}

//FARGEENDRING TIL BLACK OG WHITE MODE!
let selectEl = document.querySelector('select')
let body = document.body
let header = document.querySelector('header')
let nav = document.querySelector('nav a')
let home = document.querySelector('div a')

selectEl.addEventListener("change", colorPalate)
function colorPalate(){

    if (selectEl.value === "white") {
        header.style.backgroundColor = 'white'
        body.style.backgroundColor = 'rgb(43, 135, 209)'
        selectEl.style.backgroundColor = 'white'
        chartBar.style.color = 'white'
        lorem.forEach(function(lorem) {
            lorem.style.color = 'black'
        })
        for (let h = 0; h < boksene.length; h++) {
            boksene[h].addEventListener('mouseover', function(){
                boksene[h].style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 1)'
            })
            boksene[h].addEventListener('mouseout', function(){
                boksene[h].style.boxShadow = 'none'
            })}}

    else if (selectEl.value === "black") {
        body.style.backgroundColor = 'rgb(17, 17, 17)'
        selectEl.style.backgroundColor = 'black'
        header.style.backgroundColor = 'black'
        h1.style.color = 'white'
        chartBar.style.color = 'white'
        lorem.forEach(function(lorem) {
            lorem.style.color = 'white'
        })}}