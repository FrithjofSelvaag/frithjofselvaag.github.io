let selectEl = document.querySelector('header select')
let lives = 3
let score = 0
let wordsArray = []
let word
let scoreBoxEl = document.querySelector("#scoreBox")
let lifeBoxEl = document.querySelector("#lifeBox")
let i = 0
let newWordArr = []



setTimeout(function(){

    document.body.style.transition = 'backgroundColor 1s ease'
    headerEl.style.transition = 'backgroundColor 1s ease'

},100)

$(document).ready(function(){
    let newBtn
    let seenBtn

    function loadWords(){
        for(i = 0; i < 100; i++){
            $.ajax({
                method: 'GET',
                url: 'https://api.api-ninjas.com/v1/randomword',
                headers: { 'X-Api-Key': 'WxhXhzEDI0PBhz7iunnMSw==aoL5wWYaz2tIv5vQ' },
                contentType: 'application/json',
                success: function(result) {
                    newWordArr.push(result.word)
                    /* $('#wordBox').text(newWord) */
                    /* word = newWord */ // Oppdaterer word til det nye ordet
                },
                error: function ajaxError(jqXHR) {
                    console.error('Error: ', jqXHR.responseText)
                }
            })
        }
            

        }



    function getRandomWord() {
        let random = Math.floor(Math.random() * 3)
        $('#wordBox').text('')

        if (random === 0 && wordsArray.length > 0) {
            let arrRandom = Math.floor(Math.random() * wordsArray.length)
            word = wordsArray[arrRandom]
            $('#wordBox').text(word)
        } else {


            $.ajax({
                method: 'GET',
                url: 'https://api.api-ninjas.com/v1/randomword',
                headers: { 'X-Api-Key': 'WxhXhzEDI0PBhz7iunnMSw==aoL5wWYaz2tIv5vQ' },
                contentType: 'application/json',
                success: function(result) {
                    let newWord = result.word
                    $('#wordBox').text(newWord)
                    word = newWord // Oppdaterer word til det nye ordet
                },
                error: function ajaxError(jqXHR) {
                    console.error('Error: ', jqXHR.responseText)
                }
            })
        }
    }

    //startknapp
    $('.start').on('click', function() {
        $('.instruction').remove()
        $('.start').remove()

        loadWords()


        scoreBoxEl.style.display = "block"
        lifeBoxEl.style.display = "block"

        newBtn = $('<button>New</button>').appendTo('.buttonBox')
        seenBtn = $('<button>Seen</button>').appendTo('.buttonBox')

        updateScoreAndLives()
        getRandomWord()
    })

        //newknapp
    $('.buttonBox').on('click', 'button:contains("New")', function() {
        if (wordsArray.includes(word)) {
            lives--
            updateScoreAndLives()
            checkGameOver()
            
        } else {
            score++;
            updateScoreAndLives()
            wordsArray.push(word) // Legg til det nye ordet i arrayet
        }
        getRandomWord()
    })

    //seenknapp
    $('.buttonBox').on('click', 'button:contains("Seen")', function() {
        if (wordsArray.includes(word)) {
            score++
            updateScoreAndLives()
        } else {
            lives--
            updateScoreAndLives()
            checkGameOver()
        }
        getRandomWord()
    })

    //oppdateres score og liv
    function updateScoreAndLives() {
        $('#scoreBox').text('Score: ' + score)
        $('#lifeBox').text('Lives: ' + lives)
    }

    //sjekker hvis 
    function checkGameOver() {
        if (lives === 0) {
            moveToScoreScreen()
        }
    }

    //score screen
    function moveToScoreScreen() {
        /* scoreBoxEl.style.display = "none"
        lifeBoxEl.style.display = "none"
        wordBoxEl.style.display = "none"
        buttonBoxEl.style.display = "none" */
        
        document.write(`
        <h1 style="color: white;
        text-align: center;
        font-size: 22px;
        padding-top: 80px;
        font-family: Roboto, sans-serif;
        ">Verbal Memory</h1>
        <h1 style="color: white;
        text-align: center;
        margin-top: 30px;
        margin-bottom: 0px;
        font-size: 50px;
        padding-top: 0px;
        font-family: Roboto, sans-serif;
        ">Words</h1>
        <h1 style="color: white;
        text-align: center;
        margin-top: 0px;
        margin-bottom: 0px;
        font-size: 100px;
        padding-top: 0px;
        font-family: Roboto, sans-serif;
        ">${score}</h1>
        <h1 style="color: white;
        text-align: center;
        font-size: 22px;
        padding-top: 0px;
        font-family: Roboto, sans-serif;
        ">Good Job</h1>
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
            window.location.href = '../index.html'
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
                ">Verbal Memory</h1>
                <h1 style="color: white;
                text-align: center;
                margin-top: 0px;
                margin-bottom: 0px;
                font-size: 100px;
                padding-top: 0px;
                font-family: Roboto, sans-serif;
                ">${score} Numbers</h1>
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
                        let highscore = score
                        localStorage.setItem('highscore6', highscore)
                        localStorage.setItem('playerName6', playerName)
                        console.log(localStorage.getItem('playerName6'))
                        console.log(localStorage.getItem('highscore6'))
                        window.location.href = '../leaderboard/leaderboard.html'
                    }
                })
            })
    }


})
/* let lenkene = document.querySelectorAll('a') */

/* let selectEl = document.querySelector('header select') */
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
//dark mode og light mode

selectEl.addEventListener("change", colorPalate)

function colorPalate(){

        if (selectEl.value === "white"){

            

            
            selectEl.style.color="black"
            selectEl.style.backgroundColor="white"

            burgerEl.style.color="black"
            leaderboardEl.style.color="black"
            headerEl.style.backgroundColor = "white"
            homeEl.style.color="black"


            document.body.style.backgroundColor = 'rgb(43, 135, 209)'
            
            
            
            document.body.style.backgroundColor = 'rgb(43, 135, 209)'
            
            /* lenkene.forEach(function(lenkene){
            lenkene.style.color = 'black'
            lenkene.addEventListener('mouseenter', function() {
                    lenkene.style.color = 'rgba(0, 0, 0, 0.55)'
                })
                lenkene.addEventListener('mouseleave', function() {
                    lenkene.style.color = 'black'
                })
                }) */
                //hover effekter
                
                selectEl.addEventListener('mouseenter', function() {
                    selectEl.style.color = 'rgba(0, 0, 0, 0.55)'
                })
                selectEl.addEventListener('mouseleave', function() {
                    selectEl.style.color = "black"
                })
                burgerEl.addEventListener('mouseover', function() {
                    burgerEl.style.color = 'rgba(0, 0, 0, 0.55)'
                })
                burgerEl.addEventListener('mouseout', function() {
                    burgerEl.style.color = 'rgb(0, 0, 0)'
                })
                homeEl.addEventListener('mouseenter', function() {
                    homeEl.style.color = 'rgba(0, 0, 0, 0.55)'
                })
                homeEl.addEventListener('mouseleave', function() {
                    homeEl.style.color = 'rgb(0, 0, 0)'
                })
                leaderboardEl.addEventListener('mouseenter', function() {
                    leaderboardEl.style.color = 'rgba(0, 0, 0, 0.55)'
                })
                leaderboardEl.addEventListener('mouseleave', function() {
                    leaderboardEl.style.color = 'rgb(0, 0, 0)'
                })

                localStorage.teller = 1
            }
        
        else if(selectEl.value === "black") {


            selectEl.style.color="white"
            selectEl.style.backgroundColor="black"
            leaderboardEl.style.color="white"
            burgerEl.style.color="white"
            homeEl.style.color="white"
            headerEl.style.backgroundColor = "black"
            document.body.style.backgroundColor = 'rgb(17, 17, 17)'
            headerEl.style.backgroundColor = "black"
            selectEl.style.backgroundColor="rgb(0, 0, 0)"
            document.body.style.backgroundColor = 'rgb(17, 17, 17)'
           
            
        
            /*lenkene.forEach(function(lenkene){
            lenkene.style.color = 'white'

            lenkene.addEventListener('mouseenter', function() {
                lenkene.style.color = 'rgba(255,255,255, 0.55)'
            })
            lenkene.addEventListener('mouseleave', function() {
                lenkene.style.color = 'white'
            })
            }) */

            //hover effekter

            burgerEl.addEventListener('mouseenter',function(){
                burgerEl.style.color="rgba(255, 255, 255, 0.55)"
            })
            burgerEl.addEventListener('mouseleave',function(){
                burgerEl.style.color="rgb(255, 255, 255)"
            })

            selectEl.addEventListener('mouseenter', function(){
                selectEl.style.color="rgba(255, 255, 255, 0.55)"
            })
            selectEl.addEventListener('mouseleave', function() {
                selectEl.style.color="white"
            })


            

            homeEl.addEventListener('mouseenter',function(){
                homeEl.style.color="rgba(255, 255, 255, 0.55)"
            })
            homeEl.addEventListener('mouseleave',function(){
                homeEl.style.color="rgb(255, 255, 255)"
            })

            leaderboardEl.addEventListener('mouseenter',function(){
                leaderboardEl.style.color="rgba(255, 255, 255, 0.55)"
            })
            leaderboardEl.addEventListener('mouseleave',function(){
                leaderboardEl.style.color="rgb(255, 255, 255)"
            })
            
            localStorage.teller = 2
        }
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
        






/* colorPalate() */