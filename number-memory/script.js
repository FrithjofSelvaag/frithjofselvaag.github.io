let number
let score = 0
let digits = 1 // Antall sifre i det første tallet
let selectEl = document.querySelector('select')
let startBtn = document.querySelector('.start')
let instructionEl = document.querySelector('.instructions')

        startBtn.addEventListener("click", function(){
            startBtn.remove()
            instructionEl.remove()

            numberRound()
        })

        function createNumber(digits) {
            let min = Math.pow(10, digits - 1)
            let max = Math.pow(10, digits) - 1
            return Math.floor(Math.random() * (max - min + 1) + min)
        }

        function numberRound(){
            console.log('running')
            number = createNumber(digits)

            let numberBox = document.createElement('div')
            numberBox.textContent = number
            document.body.appendChild(numberBox)
    
            numberBox.style.fontSize = "40px"

            let progressBar = document.querySelector(".progress-inner")
            let prog = document.querySelector('.progress')
            timer()
            console.log('ja')
            function timer(){
                let interval = 300

                let countdown = setInterval(()=>{
                    interval--
                    prog.style.display = 'flex'
                    progressBar.style.display = 'flex'
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
                        numberBox.innerHTML = ''
                        progressBar.style.display = 'none'
                        prog.style.display = 'none'
                        guessRound()
                    }
                }, 10.5)
            }
        }

        function guessRound(){
            let guess = document.createElement('input')
            document.body.appendChild(guess)
            guess.style.width = "95%"
            guess.style.height = "70px"
            guess.style.textAlign = "center"
            guess.style.fontSize = "40px"
            guess.style.color = 'white'
            if(selectEl.value === "white"){
                guess.style.backgroundColor = "#246CBB"
                guess.style.border = "solid #48A1EF 2px"
            }
            else if(selectEl.value === "black"){
                guess.style.backgroundColor = "rgba(255, 255, 255, 0.1)"
                guess.style.border = "solid rgba(255, 255, 255, 0.6) 2px"
            }

            guess.addEventListener("keydown", function(e){
                if (e.key === 'Enter') {
                    let answer = guess.value

                    guess.style.display = "none"

                    if (answer === number.toString()) {
                        score++
                        digits++ // Øker antallet sifre for neste tall
                        moveToNextPage()
                    } else {
                        moveToScoreScreen()
                    }
                }
            })  
        }

        function moveToScoreScreen(){
            score++
                document.write(`
                <h1 style="color: white;
                text-align: center;
                font-size: 22px;
                padding-top: 80px;
                font-family: Roboto, sans-serif;
                ">Number Memory</h1>
                <h1 style="color: white;
                text-align: center;
                margin-top: 30px;
                margin-bottom: 0px;
                font-size: 50px;
                padding-top: 0px;
                font-family: Roboto, sans-serif;
                ">Digits</h1>
                <h1 style="color: white;
                text-align: center;
                margin-top: 0px;
                margin-bottom: 0px;
                font-size: 100px;
                padding-top: 0px;
                font-family: Roboto, sans-serif;
                ">${score-1}</h1>
                <h1 style="color: white;
                text-align: center;
                font-size: 22px;
                padding-top: 0px;
                font-family: Roboto, sans-serif;
                ">The avarage person can remember 7 digits at a time</h1>
                `)
    
                let nyKnapp = document.createElement('button')
                nyKnapp.textContent = ('Try Again')
                document.body.appendChild(nyKnapp)
    
                let nyKnapp2 = document.createElement('button')
                nyKnapp2.textContent = ('Home')
                document.body.appendChild(nyKnapp2)
    
                let nyKnapp3 = document.createElement('button')
                nyKnapp3.textContent = ('Save Score')
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
                    window.location.href = '../index.html'
                })
                nyKnapp3.addEventListener('mouseenter', function() {
                    nyKnapp3.style.backgroundColor = 'white'
                })
                nyKnapp3.addEventListener('mouseleave', function() {
                    nyKnapp3.style.backgroundColor = 'rgb(254, 217, 32)'
                })

                let knapper = [nyKnapp, nyKnapp2, nyKnapp3]

                for(i=0;i<knapper.length;i++){
                    knapper[i].style.display='flex'
                    knapper[i].style.width='160px'
                    knapper[i].style.height = '50px'
                    knapper[i].style.justifyContent = 'center'
                    knapper[i].style.alignItems = 'center'
                    knapper[i].style.fontWeight = '40px'
                    knapper[i].style.border = 'none'
                    knapper[i].style.borderRadius = '5px'
                    knapper[i].style.transition = 'background-color 0.5s ease'
                    knapper[i].style.fontSize = '25px'
                    knapper[i].style.fontFamily = 'Helvetica, Arial, sans-serif'
                    knapper[i].style.margin = '20px auto'
                }
                
            
                /* det som ikke er felles:  */
                
                nyKnapp3.style.marginBottom = '50px'
                nyKnapp3.style.backgroundColor = 'rgb(254, 217, 32)'


    
                if(selectEl.value === "white"){
                    nyKnapp.style.backgroundColor = 'rgb(254, 217, 32)'
                    nyKnapp2.style.backgroundColor = 'rgba(255, 255, 255, 0.400)'
                    document.body.style.transition = 'background-color 1s ease'
                    setTimeout(function(){document.body.style.backgroundColor = 'red'}, 0)
                    setTimeout(function(){document.body.style.backgroundColor = 'rgb(43, 135, 209)'}, 200)
                }
                else if(selectEl.value === "black"){
                    nyKnapp.style.backgroundColor = 'rgb(254, 217, 32)'
                    nyKnapp2.style.backgroundColor = 'rgba(255, 255, 255, 0.400)'
                    document.body.style.transition = 'background-color 1s ease'
                    setTimeout(function(){document.body.style.backgroundColor = 'red'}, 0)
                    setTimeout(function(){document.body.style.backgroundColor = 'black'}, 200)
                }
                nyKnapp3.addEventListener('click', function(){
                        document.body.innerHTML = ""
                        document.write(`
                        <h1 style="color: white;
                        text-align: center;
                        font-size: 22px;
                        padding-top: 125px;
                        font-family: Roboto, sans-serif;
                        ">Sqeuence Memory</h1>
                        <h1 style="color: white;
                        text-align: center;
                        margin-top: 0px;
                        margin-bottom: 0px;
                        font-size: 100px;
                        padding-top: 0px;
                        font-family: Roboto, sans-serif;
                        ">${score-1} Numbers</h1>
                        <h1 style="color: white;
                        text-align: center;
                        font-size: 22px;
                        padding-top: 0px;
                        font-family: Roboto, sans-serif;
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
                        inputEl.maxLength="8"
                    
                        inputEl.addEventListener('keydown', function(e) {
                            if (e.key === 'Enter') {
                                let playerName = String(inputEl.value)/* .substring(0, 8)   trenger ikke denne når vi har maxLength*/
                                let highscore = score - 1
                                localStorage.setItem('highscore5', highscore)
                                localStorage.setItem('playerName5', playerName)
                                console.log(localStorage.getItem('playerName5'))
                                console.log(localStorage.getItem('highscore5'))
                                window.location.href = '../leaderboard/leaderboard.html'
                            }
                        })
                    })
        }
let lenkene = document.querySelectorAll('a')

let headerEl = document.querySelector('header')
let homeEl = document.querySelector("header div a")
let leaderboardEl = document.querySelector('header nav a')

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
    document.body.style.backgroundColor = 'rgb(43, 135, 209)'
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

    selectEl.addEventListener('mouseenter', function() {
        selectEl.style.color = 'rgba(0,0,0, 0.55)'
    })
    selectEl.addEventListener('mouseleave', function() {
        selectEl.style.color = 'black'
    })
    burgerEl.addEventListener('mouseenter', function() {
        burgerEl.style.color = 'rgba(0,0,0, 0.55)'
    })
    burgerEl.addEventListener('mouseleave', function() {
        burgerEl.style.color = 'black'
    })
    homeEl.addEventListener('mouseenter', function() {
        homeEl.style.color = 'rgba(0,0,0, 0.55)'
    })
    homeEl.addEventListener('mouseleave', function() {
        homeEl.style.color = 'black'
    })
    leaderboardEl.addEventListener('mouseenter', function() {
        leaderboardEl.style.color = 'rgba(0,0,0, 0.55)'
    })
    leaderboardEl.addEventListener('mouseleave', function() {
        leaderboardEl.style.color = 'black'
    })
    }

else if (selectEl.value === "black") {
    
    localStorage.teller = 2

    burgerEl.style.color="white"
    document.body.style.backgroundColor = 'rgb(17, 17, 17)'
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
    //hover effekter

    selectEl.addEventListener('mouseenter', function() {
        selectEl.style.color = 'rgba(255, 255, 255, 0.55)'
    })
    selectEl.addEventListener('mouseleave', function() {
        selectEl.style.color = 'white'
    })
    burgerEl.addEventListener('mouseenter', function() {
        burgerEl.style.color = 'rgba(255, 255, 255, 0.55)'
    })
    burgerEl.addEventListener('mouseleave', function() {
        burgerEl.style.color = 'white'
    })
    homeEl.addEventListener('mouseenter', function() {
        homeEl.style.color = 'rgba(255, 255, 255, 0.55)'
    })
    homeEl.addEventListener('mouseleave', function() {
        homeEl.style.color = 'white'
    })
    leaderboardEl.addEventListener('mouseenter', function() {
        leaderboardEl.style.color = 'rgba(255, 255, 255, 0.55)'
    })
    leaderboardEl.addEventListener('mouseleave', function() {
        leaderboardEl.style.color = 'black'
    })
    
}}

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



let congratulation = document.querySelector('.congratulation')
    function moveToNextPage(){
        congratulation.style.display = "block"

        /* ongrat = document.createElement("div")
        document.body.appendChild(congrat)
        congrat.innerText = "Correct answer"  */       
            
            let nextBtn = document.createElement('button')
            
            document.body.appendChild(nextBtn)
            nextBtn.innerText = 'Next Round'
            nextBtn.addEventListener('click', function(){
                nextBtn.remove()
                congratulation.style.display = "none"
                numberRound()
            })
        }

if(!localStorage.getItem('score')){
localStorage.setItem('score', 0)
}
function giPoints(){
    let currentScore = localStorage.getItem('score')
    let newScore = Number(currentScore) + Number(score)
    localStorage.setItem('score', newScore)
    console.log(newScore)
}

function sjekkSkjermStorrelse() {
    if (window.innerWidth < 600) {
        prog.style.display = 'flex'
        progressBar.style.display = 'flex'
        progressWidth = interval / 300 * 100
        progressBar.style.backgroundColor = 'white'
        progressBar.style.position = 'absolute'
        progressBar.style.width = '100%'
        progressBar.style.height = '100%'

        prog.style.margin = 'auto'
        prog.style.border = 'solid black'
        prog.style.backgroundColor = ''
        prog.style.height = '20px'
        prog.style.marginTop = '20px'
        prog.style.width = '200px'
        prog.style.position = 'relative'
    }
}


