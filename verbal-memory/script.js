let selectEl = document.querySelector('header select')
let lives = 3
let score = 0
let wordsArray = []
let word
let scoreBoxEl = document.querySelector("#scoreBox")
let lifeBoxEl = document.querySelector("#lifeBox")
let newWordArr = []

setTimeout(function() {
    document.body.style.transition = 'backgroundColor 1s ease'
    headerEl.style.transition = 'backgroundColor 1s ease'
}, 100)

$(document).ready(function() {
    let newBtn
    let seenBtn

    function loadWords(callback) {
        let promises = [];
        for (let i = 0; i < 100; i++) {
            promises.push(
                $.ajax({
                    method: 'GET',
                    url: 'https://api.api-ninjas.com/v1/randomword',
                    headers: { 'X-Api-Key': 'WxhXhzEDI0PBhz7iunnMSw==aoL5wWYaz2tIv5vQ' },
                    contentType: 'application/json'
                }).then(function(result) {
                    newWordArr.push(result.word)
                }).catch(function(jqXHR) {
                    console.error('Error: ', jqXHR.responseText)
                })
            )
        }
        Promise.all(promises).then(callback)
    }

    function getRandomWord() {
        $('#wordBox').text('')
        if (Math.random() < 0.5 && wordsArray.length > 0) {
            let arrRandom = Math.floor(Math.random() * wordsArray.length)
            word = wordsArray[arrRandom]
            $('#wordBox').text(word)
        } else {
            if (newWordArr.length > 0) {
                word = newWordArr[Math.floor(Math.random() * newWordArr.length)]
                $('#wordBox').text(word)
            } else {
                console.error("bewwordarr er tom");
            }
        }
    }

    $('.start').on('click', function() {
        $('.instruction').remove()
        $('.start').remove()

        let loadingDiv = $('<div class="loading">Loading words...</div>').appendTo('.buttonBox')

        loadWords(function() {
            loadingDiv.remove()

            scoreBoxEl.style.display = "block"
            lifeBoxEl.style.display = "block"

            newBtn = $('<button>New</button>').appendTo('.buttonBox')
            seenBtn = $('<button>Seen</button>').appendTo('.buttonBox')

            updateScoreAndLives()
            getRandomWord()

            //newkanpp
            newBtn.on('click', function() {
                if (wordsArray.includes(word)) {
                    lives--
                    updateScoreAndLives()
                    checkGameOver()
                } else {
                    score++
                    updateScoreAndLives()
                    wordsArray.push(word)
                }
                getRandomWord()
            });
            
            //seenknapp
            seenBtn.on('click', function() {
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
        })
    })

//oppdaterer score og liv
    function updateScoreAndLives() {
        $('#scoreBox').text('Score: ' + score)
        $('#lifeBox').text('Lives: ' + lives)
    }

//sjekker liv
    function checkGameOver() {
        if (lives === 0) {
            moveToScoreScreen()
        }
    }

//score screen
    function moveToScoreScreen() {
        document.write(`
            <h1 style="color: white; text-align: center; font-size: 22px; padding-top: 80px; font-family: Roboto, sans-serif;">Verbal Memory</h1>
            <h1 style="color: white; text-align: center; margin-top: 30px; margin-bottom: 0px; font-size: 50px; padding-top: 0px; font-family: Roboto, sans-serif;">Words</h1>
            <h1 style="color: white; text-align: center; margin-top: 0px; margin-bottom: 0px; font-size: 100px; padding-top: 0px; font-family: Roboto, sans-serif;">${score}</h1>
            <h1 style="color: white; text-align: center; font-size: 22px; padding-top: 0px; font-family: Roboto, sans-serif;">Good Job</h1>
        `);

        let nyKnapp = document.createElement('button')
        nyKnapp.textContent = 'Try Again'
        document.body.appendChild(nyKnapp)

        let nyKnapp2 = document.createElement('button')
        nyKnapp2.textContent = 'Home'
        document.body.appendChild(nyKnapp2)

        let nyKnapp3 = document.createElement('button')
        nyKnapp3.textContent = 'Save Score'
        document.body.appendChild(nyKnapp3)

        nyKnapp.addEventListener('mouseenter', function() {
            nyKnapp.style.backgroundColor = 'white'
        })
        nyKnapp.addEventListener('mouseleave', function() {
            nyKnapp.style.backgroundColor = 'rgb(254, 217, 32)'
        })
        nyKnapp.addEventListener('click', function() {
            location.reload()
        })
        nyKnapp2.addEventListener('mouseenter', function() {
            nyKnapp2.style.backgroundColor = 'white'
        })
        nyKnapp2.addEventListener('mouseleave', function() {
            nyKnapp2.style.backgroundColor = 'rgba(255, 255, 255, 0.400)'
        })
        nyKnapp2.addEventListener('click', function() {
            window.location.href = '../index.html'
        })
        nyKnapp3.addEventListener('mouseenter', function() {
            nyKnapp3.style.backgroundColor = 'white'
        })
        nyKnapp3.addEventListener('mouseleave', function() {
            nyKnapp3.style.backgroundColor = 'rgb(254, 217, 32)'
        })

        let knapper = [nyKnapp, nyKnapp2, nyKnapp3]

        for (let i = 0; i < knapper.length; i++) {
            knapper[i].style.display = 'flex'
            knapper[i].style.width = '160px'
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

        nyKnapp3.style.marginBottom = '50px'
        nyKnapp3.style.backgroundColor = 'rgb(254, 217, 32)'

        if (selectEl.value === "white") {
            nyKnapp.style.backgroundColor = 'rgb(254, 217, 32)'
            nyKnapp2.style.backgroundColor = 'rgba(255, 255, 255, 0.400)'
            document.body.style.transition = 'background-color 1s ease'
            setTimeout(function() { document.body.style.backgroundColor = 'red'; }, 0)
            setTimeout(function() { document.body.style.backgroundColor = 'rgb(43, 135, 209)'; }, 200)
        } else if (selectEl.value === "black") {
            nyKnapp.style.backgroundColor = 'rgb(254, 217, 32)'
            nyKnapp2.style.backgroundColor = 'rgba(255, 255, 255, 0.400)'
            document.body.style.transition = 'background-color 1s ease'
            setTimeout(function() { document.body.style.backgroundColor = 'red'; }, 0)
            setTimeout(function() { document.body.style.backgroundColor = 'black'; }, 200)
        }
        nyKnapp3.addEventListener('click', function() {
            document.body.innerHTML = ""
            document.write(`
                <h1 style="color: white; text-align: center; font-size: 22px; padding-top: 125px; font-family: Roboto, sans-serif;">Verbal Memory</h1>
                <h1 style="color: white; text-align: center; margin-top: 0px; margin-bottom: 0px; font-size: 100px; padding-top: 0px; font-family: Roboto, sans-serif;">${score} Numbers</h1>
                <h1 style="color: white; text-align: center; font-size: 22px; padding-top: 0px; font-family: Roboto, sans-serif;">Write Your Name</h1>
            `);
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
            inputEl.maxLength = "8"

            inputEl.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    let playerName = String(inputEl.value)
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

    let headerEl = document.querySelector('header')
    let homeEl = document.querySelector("header div a")
    let leaderboardEl = document.querySelector('header nav a')
    let navEl = document.querySelector('nav')
    let burgerEl = document.querySelector('.fa-chart-bar')

    burgerEl.addEventListener('click', showNav)

    function showNav() {
        navEl.classList.toggle('show')
        selectEl.classList.toggle('show')
    }

//dark mode
    selectEl.addEventListener("change", colorPalate)

    function colorPalate() {
        if (selectEl.value === "white") {
            selectEl.style.color = "black"
            selectEl.style.backgroundColor = "white"
            burgerEl.style.color = "black"
            leaderboardEl.style.color = "black"
            headerEl.style.backgroundColor = "white"
            homeEl.style.color = "black"
            document.body.style.backgroundColor = 'rgb(43, 135, 209)'

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
        } else if (selectEl.value === "black") {
            selectEl.style.color = "white"
            selectEl.style.backgroundColor = "black"
            leaderboardEl.style.color = "white"
            burgerEl.style.color = "white"
            homeEl.style.color = "white"
            headerEl.style.backgroundColor = "black"
            document.body.style.backgroundColor = 'rgb(17, 17, 17)'
            selectEl.style.backgroundColor = "rgb(0, 0, 0)"

            burgerEl.addEventListener('mouseenter', function() {
                burgerEl.style.color = "rgba(255, 255, 255, 0.55)"
            })
            burgerEl.addEventListener('mouseleave', function() {
                burgerEl.style.color = "rgb(255, 255, 255)"
            })
            selectEl.addEventListener('mouseenter', function() {
                selectEl.style.color = "rgba(255, 255, 255, 0.55)"
            })
            selectEl.addEventListener('mouseleave', function() {
                selectEl.style.color = "white"
            })
            homeEl.addEventListener('mouseenter', function() {
                homeEl.style.color = "rgba(255, 255, 255, 0.55)"
            })
            homeEl.addEventListener('mouseleave', function() {
                homeEl.style.color = "rgb(255, 255, 255)"
            })
            leaderboardEl.addEventListener('mouseenter', function() {
                leaderboardEl.style.color = "rgba(255, 255, 255, 0.55)"
            })
            leaderboardEl.addEventListener('mouseleave', function() {
                leaderboardEl.style.color = "rgb(255, 255, 255)"
            })

            localStorage.teller = 2
        }
    }

    if (!localStorage.teller) {
        localStorage.teller = 1
    }
    if (localStorage.teller == 1) {
        selectEl.value = "white"
        colorPalate();
    } else if (localStorage.teller == 2) {
        selectEl.value = "black"
        colorPalate();
    }
});
