let selectEl = document.querySelector('select')
        let number
        let score = 0
        let digits = 1 // Antall sifre i det første tallet

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
                nyKnapp.style.backgroundColor = 'rgb(254, 217, 32)'
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
                    
                        inputEl.addEventListener('keydown', function(e) {
                            if (e.key === 'Enter') {
                                let playerName = String(inputEl.value).substring(0, 8)
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

selectEl.addEventListener("change", colorPalate)

function colorPalate(){

if (selectEl.value === "white") {

    localStorage.teller = 1

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
    }

else if (selectEl.value === "black") {

    localStorage.teller = 2

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

    selectEl.addEventListener('mouseenter', function() {
        selectEl.style.color = 'rgba(255,255,255, 0.55)'
    })
    selectEl.addEventListener('mouseleave', function() {
        selectEl.style.color = 'white'
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