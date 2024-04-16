let color = "white"
let boksene = document.querySelectorAll('.tiles div')
let knapp = document.querySelector('.knapp')
let knapp2 = document.querySelector('.knapp2')
let text = document.querySelector('#text')

let hjerteEnEl =document.querySelector('#Heart1')
let hjerteToEl =document.querySelector('#Heart2')
let hjerteTreEl =document.querySelector('#Heart3')

let hjerteArr = [hjerteEnEl, hjerteToEl, hjerteTreEl]

let blinkBokser = []
let klikkedeBokser = []

knapp.addEventListener('click', sequenceBlink)
knapp2.addEventListener('click', sequenceBlink2)

let level = 4
let tallArray = []
let j = 0

let classic
let monkey

function sequenceBlink(blinkBoks) {
    classic = 1

    let i
    let g = 0
    knapp.style.display = 'none'
    knapp2.style.display = 'none'
    
    if (j < level) {
        let lik = false

        do {
            i = Math.floor(Math.random() * boksene.length)
            lik = tallArray.includes(i)
        } while (lik===true)
        
        let boks = boksene[i]
        blinkBokser.push(boks)
        tallArray.push(i)

        setTimeout(function rekkefolgen() {
            if (g < level) {
                for (let i = 0; i < level; i++) {
                    blinkBokser[i].style.border = '1px solid white'
                    let textEl = document.createElement("p")
                    textEl.textContent = i + 1
                    textEl.style.color = 'white'
                    textEl.style.fontSize = '40px'
                    textEl.style.margin = 'auto'
                    textEl.style.textAlign = 'center'
                    blinkBokser[i].textContent = ''
                    blinkBokser[i].appendChild(textEl)
                    blinkBoks += blinkBokser[i]
                }
                let førsteBoks = blinkBokser[0]

                function hvit(){
                    blinkBokser.forEach(function(boks){
                        boks.style.backgroundColor = 'white'
                    })
                    
                    førsteBoks.removeEventListener('click', hvit)
                }
                blinkBokser[0].addEventListener('click', hvit)

                g++

            }
        }, 100)
        j++
        sequenceBlink()
    }
}
function sequenceBlink2(blinkBoks) {
    monkey = 1

    
    let i
    let g = 0
    knapp.style.display = 'none'
    knapp2.style.display = 'none'
    
    if (j < level) {
        let lik = false

        do {
            i = Math.floor(Math.random() * boksene.length)
            lik = tallArray.includes(i)
        } while (lik===true)
        
        let boks = boksene[i]
        blinkBokser.push(boks)
        tallArray.push(i)

        setTimeout(function rekkefolgen2() {
            if (g < level) {
                for (let i = 0; i < level; i++) {
                    blinkBokser[i].style.border = '1px solid white'
                    let textEl = document.createElement("p")
                    textEl.textContent = i + 1
                    textEl.style.color = 'white'
                    textEl.style.fontSize = '40px'
                    textEl.style.margin = 'auto'
                    textEl.style.textAlign = 'center'
                    blinkBokser[i].textContent = ''
                    blinkBokser[i].appendChild(textEl)
                    blinkBoks += blinkBokser[i]
                }
                let førsteBoks = blinkBokser[0]


                setTimeout(function(){
                    førsteBoks.removeEventListener('click', hvit)
                    if(blinkBokser[0] === klikkedeBokser[0]){
                        return
                    } else{
                        blinkBokser.forEach(function(boks){
                            boks.style.transition = "background-color 0.2s ease"
                            boks.style.backgroundColor = 'white'
                        })
                    }
                }, 3000)

                    function hvit(){
                        blinkBokser.forEach(function(boks){
                            boks.style.backgroundColor = 'white'
                        })
                        
                        førsteBoks.removeEventListener('click', hvit)
                    }
                    blinkBokser[0].addEventListener('click', hvit)
                g++

            }
        }, 100)
        j++
        sequenceBlink2()
    }
}
for (let h = 0; h < boksene.length; h++) {

    boksene[h].addEventListener('click', function() {
        let boksArr = []
        boksArr.push(boksene[h])
        for(let i = 0; i < blinkBokser.length; i++){
            if(boksArr[0] === blinkBokser[i]){
                boksene.forEach(function(boks){
                    boks.innerHTML = ''
                })
                boksene[h].style.border = 'none'
                boksene[h].style.transition = 'none'
    
                if(selectEl.value === "white"){
                setTimeout(function(){
                    boksene[h].style.backgroundColor = 'rgb(43, 135, 209)'
                }, 0)}
                else if(selectEl.value === "black"){
                setTimeout(function(){
                    boksene[h].style.backgroundColor = 'rgb(17, 17, 17)'
                }, 0)}
            
                klikkedeBokser.push(boksene[h])
                sjekkRekkefolge()
                return
            }
            }
        })}

function sjekkRekkefolge() {
    for (let i = 0; i < klikkedeBokser.length; i++) {
        if (klikkedeBokser[i] !== blinkBokser[i] && blinkBokser.includes(klikkedeBokser[i])){
            setTimeout(function(){
                boksene.forEach(function(boks){
                    boks.style.transition = 'background-color 1s ease'
                    boks.style.backgroundColor = 'red'
                })
            }, 1)
            if(hjerteArr.length === 3){

                hjerteEnEl.style.color = 'rgb(140, 0, 0)'
                hjerteArr.splice(0,1)

                if (selectEl.value === "white"){
                    document.body.transition = 'backgorund-color 1s ease'
                    document.body.style.backgroundColor = 'red'
                    boksene.forEach(function(boks){
                        boks.style.transition = 'background-color 1s ease'
                        boks.style.backgroundColor = 'red'
                        boks.style.border = 'none'
                    })
                    setTimeout(function(){
                        document.body.style.backgroundColor = 'rgb(43, 135, 209)'
                        boksene.forEach(function(boks){
                            boks.style.backgroundColor = 'rgb(43, 135, 209)'
                        })
                }, 350)
                }
                else if(selectEl.value === "black"){
                    document.body.style.backgroundColor = 'red'
                    boksene.forEach(function(boks){
                        boks.style.transition = 'background-color 1s ease'
                        boks.style.backgroundColor = 'red'
                        boks.style.border = 'none'
                    })
                    setTimeout(function(){
                        document.body.style.backgroundColor = 'rgb(17, 17, 17)'
                        boksene.forEach(function(boks){
                            boks.style.backgroundColor = 'rgb(17, 17, 17)'
                        })
                }, 350)
                }

                tallArray = []
                blinkBokser = []
                setTimeout(function(){
                    klikkedeBokser = []
                }, 1)

                j = 0

                if(classic === 1){
                    setTimeout(function(){
                    sequenceBlink()
                    }, 400)
                }
                if(monkey === 1){
                    setTimeout(function(){
                    sequenceBlink2()
                    timer()
                    }, 2500)
                }
            }else if(hjerteArr.length === 2){
                hjerteToEl.style.color = 'rgb(140, 0, 0)'
                hjerteArr.splice(0,1)

                hjerteEnEl.style.color = 'rgb(140, 0, 0)'
                hjerteArr.splice(0,1)

                if (selectEl.value === "white"){
                    document.body.transition = 'backgorund-color 1s ease'
                    document.body.style.backgroundColor = 'red'
                    boksene.forEach(function(boks){
                        boks.style.transition = 'background-color 1s ease'
                        boks.style.backgroundColor = 'red'
                        boks.style.border = 'none'
                    })
                    setTimeout(function(){
                        document.body.style.backgroundColor = 'rgb(43, 135, 209)'
                        boksene.forEach(function(boks){
                            boks.style.backgroundColor = 'rgb(43, 135, 209)'
                        })
                }, 350)
                }
                else if(selectEl.value === "black"){
                    document.body.transition = 'backgorund-color 1s ease'
                    document.body.style.backgroundColor = 'red'
                    boksene.forEach(function(boks){
                        boks.style.transition = 'background-color 1s ease'
                        boks.style.backgroundColor = 'red'
                        boks.style.border = 'none'
                    })
                    setTimeout(function(){
                        document.body.style.backgroundColor = 'rgb(17, 17, 17)'
                        boksene.forEach(function(boks){
                            boks.style.backgroundColor = 'rgb(17, 17, 17)'
                        })
                }, 300)
                }

                tallArray = []
                blinkBokser = []
                setTimeout(function(){
                    klikkedeBokser = []
                }, 1)

                j = 0

                if(classic === 1){
                    setTimeout(function(){
                    sequenceBlink()
                    }, 400)
                }
                if(monkey === 1){
                    setTimeout(function(){
                    sequenceBlink2()
                    timer()
                    }, 2500)
                }
            }else{
                giPoints()
                document.write(`
                <h1 style="color: white;
                text-align: center;
                font-size: 22px;
                padding-top: 80px;
                font-family: Helvetica, Arial, sans-serif;
                ">Chimp Test</h1>
                <h1 style="color: white;
                text-align: center;
                margin-top: 30px;
                margin-bottom: 0px;
                font-size: 50px;
                padding-top: 0px;
                font-family: Helvetica, Arial, sans-serif;
                ">Numbers</h1>
                <h1 style="color: white;
                text-align: center;
                margin-top: 0px;
                margin-bottom: 0px;
                font-size: 100px;
                padding-top: 0px;
                font-family: Helvetica, Arial, sans-serif;
                ">${level-1}</h1>
                <h1 style="color: white;
                text-align: center;
                font-size: 22px;
                padding-top: 0px;
                font-family: Helvetica, Arial, sans-serif;
                ">Can You Do Better Than a Chimp?</h1>
                `)
                if(monkey === 1){
                    document.write(`
                    <h1 style="color: white;
                    text-align: center;
                    font-size: 15px;
                    padding-top: 0px;
                    font-family: Helvetica, Arial, sans-serif;">
                    Chimps get 9 numbers 90% of the time!
                    </h1>`)
                }
    
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
                        ">${level-1} Numbers</h1>
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
                                let playerName = String(inputEl.value)
                                let highscore = level - 3
                                localStorage.setItem('highscore4', highscore)
                                localStorage.setItem('playerName4', playerName)
                                console.log(localStorage.getItem('playerName4'))
                                console.log(localStorage.getItem('highscore4'))
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
    
    
                if (selectEl.value === "white"){
                    document.body.style.backgroundColor = 'rgb(70, 190, 255)'
                    boksene.forEach(function(boks){
                        boks.style.transition = 'background-color 1s ease'
                        boks.style.backgroundColor = 'rgb(70, 190, 255)'
                    })
                    setTimeout(function(){
                        document.body.style.backgroundColor = 'rgb(43, 135, 209)'
                        boksene.forEach(function(boks){
                            boks.style.backgroundColor = 'rgb(43, 135, 209)'
                        })
                }, 350)
                }
                else if(selectEl.value === "black"){
                    document.body.style.backgroundColor = 'rgb(150, 75, 0)'
                    boksene.forEach(function(boks){
                        boks.style.transition = 'background-color 1s ease'
                        boks.style.backgroundColor = 'rgb(150, 75, 0)'
                    })
                    setTimeout(function(){
                        document.body.style.backgroundColor = 'rgb(17, 17, 17)'
                        boksene.forEach(function(boks){
                            boks.style.backgroundColor = 'rgb(17, 17, 17)'
                        })
                }, 300)
                }
    
                tallArray = []
                blinkBokser = []
                j = 0
    
    
                    if(classic === 1){
                        setTimeout(function(){
                        sequenceBlink()
                        }, 400)
                    }
                    if(monkey === 1){
                        setTimeout(function(){
                        sequenceBlink2()
                        timer()
                        }, 800)
                    }
                }
                klikkedeBokser = []
            }
        }
    }
//timer
let btnStart2 = document.querySelector(".knapp2")
let progressBar = document.querySelector(".progress-inner")
let prog = document.querySelector('.progress')

btnStart2.addEventListener('click', timer)

function timer(){
    let interval = 300

    let countdown = setInterval(()=>{
        interval--

        let progressWidth = interval / 300 * 100
        progressBar.style.backgroundColor = 'white'
        progressBar.style.position = 'absolute'
        progressBar.style.width = '100%'
        progressBar.style.height = '100%'

        prog.style.margin = 'auto'
        prog.style.border = 'solid black'
        prog.style.backgroundColor = ''
        prog.style.height = '20px'
        prog.style.marginTop = '20px'
        prog.style.width = '600px'
        prog.style.position = 'relative'

        
        if(interval > 0){
            progressBar.style.width = progressWidth + "%"
        }
        else{
            progressBar.style.width = "0%"
            clearInterval(countdown)
        }
    }, 10.5)
}


//FARGEENDRING TIL BLACK OG WHITE MODE!
let selectEl = document.querySelector('select')
let body = document.body
let header = document.querySelector('header')
let nav = document.querySelector('nav a')
let home = document.querySelector('div a')
let lenkene = document.querySelectorAll('a')
let p = document.querySelector('#p')

selectEl.addEventListener("change", colorPalate)

function colorPalate(){

    if (selectEl.value === "white") {

        localStorage.teller = 1

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
        boksene.forEach(function(boksene){
            boksene.style.backgroundColor = 'rgb(43, 135, 209)'
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
            boksene.style.backgroundColor = 'rgb(17, 17, 17)'
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
    boksene.forEach(function(boksene){
        boksene.style.transition = 'background-color 1s ease'
    })
}, 100)

//score oppsettet
if(!localStorage.getItem('score4')){
    localStorage.setItem('score4', 0)
}
function giPoints(){
    let currentScore = localStorage.getItem('score4')
    let newScore = Number(currentScore) + Number(level - 1)
    localStorage.setItem('score4', newScore)
    console.log(newScore)
}
function sjekkSkjermStorrelse() {
    if (window.innerWidth < 730) {
        text.innerHTML = 'Skjermen er for liten, venligst bruk en pc'
        text.style.textAlign = 'center'
        text.style.marginTop = '200px'
        text.style.marginBottom = '1000px'
    }
    if (window.innerWidth > 730) {
        text.innerHTML = ''
        text.style.marginTop = '0px'
        text.style.marginBottom = '0px'
    }
}
window.addEventListener('resize', sjekkSkjermStorrelse)
sjekkSkjermStorrelse()