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

/* function showNav() {
    navEl.classList.toggle('show')
    selectEl.classList.toggle('show')

} */

// ColorPalate
let tittelSymbolEl = document.querySelector('#tittelSymbol')
let selectEl = document.querySelector('header select')
let body = document.body
let h1El = document.querySelector('h1')
let header = document.querySelector('header')
let headerSkrift = document.querySelector('header a')
let chartBar = document.querySelector('.fa-chart-bar')
let nav = document.querySelector('nav a')
let homeEl = document.querySelector('header a')

let lorem = document.querySelectorAll('#storBoks .spillboks div h1')
let boksene = document.querySelectorAll('.spillboks div')

let spillOverskriftEl=document.querySelector('.spillOverskrift')
let leaderboardEl = document.querySelector("header nav a")

selectEl.addEventListener("change", colorPalate)


function showNav() {
    navEl.classList.toggle('show')
    selectEl.classList.toggle('show')

}
function colorPalate(){

    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)
    

    if (selectEl.value === "white") {

            localStorage.teller = 1
            tittelSymbolEl.style.backgroundColor="rgb(5, 163, 215)"
            header.style.backgroundColor = 'white'/* 'rgb(5, 163, 215)' */
            body.style.backgroundColor = 'white'
            /* h1El.style.color = 'white' */
            selectEl.style.backgroundColor ='white' /* rgb(5, 163, 215)' */
            selectEl.style.color='black'
            headerSkrift.style='black'
            chartBar.style.color = 'white'
            leaderboardEl.style.color="black"
            /* spillOverskriftEl.style.color = 'black' */
            lorem.forEach(function(lorem) {
                lorem.style.color = 'black'
            })
            leaderboardEl.addEventListener('mouseover',function(){
                leaderboardEl.style.color="rgba(0, 0, 0, 0.55)"
            })
            leaderboardEl.addEventListener('mouseout',function(){
                leaderboardEl.style.color="black"

            })

            homeEl.addEventListener('mouseover',function(){
                homeEl.style.color="rgba(0, 0, 0, 0.55"
            })
            homeEl.addEventListener('mouseout',function(){
                homeEl.style.color="black"
            })
            

            selectEl.addEventListener('mouseover',function(){
                selectEl.style.color="rgba(0, 0, 0, 0.55)"
            })
            selectEl.addEventListener('mouseout',function(){
                selectEl.style.color="black"
            })
            /* for (let h = 0; h < boksene.length; h++) {
            boksene[h].addEventListener('mouseover', function(){
                boksene[h].style.boxShadow = 'none'
            })
            boksene[h].addEventListener('mouseout', function(){
                boksene[h].style.boxShadow = 'none'
            })} */
        
        
        
            for (let i = 0; i < boksene.length; i++) {
                let spillNavn = boksene[i].querySelector('.spillOverskrift');
                 boksene[i].addEventListener('mouseenter', function(){
                    spillNavn.style.color = "orange"
                })
                boksene[i].addEventListener('mouseleave', function(){
                    spillNavn.style.color = "black"
                })
            }
        
        }
        
        
        



    else if (selectEl.value === "black") {
        tittelSymbolEl.style.backgroundColor="black"
        localStorage.teller = 2
        spillOverskriftEl.style.color='white'
        body.style.backgroundColor = 'rgb(17, 17, 17)'
        selectEl.style.backgroundColor = 'rgb(17, 17, 17) ' // bedre med helt svart her?
        selectEl.style.color='white'
        header.style.backgroundColor = 'rgb(17, 17, 17)'
        /* h1El.style.color = 'white' */
        spillOverskriftEl.style.color = 'white'
        headerSkrift.style.color='white'
        leaderboardEl.style.color="white"
        chartBar.style.color = 'white'


        lorem.forEach(function(lorem) {
            lorem.style.color = 'white'
        })
        selectEl.addEventListener('mouseover',function(){
            selectEl.style.color='rgba(255, 255, 255, 0.55)'
        })
        selectEl.addEventListener('mouseout',function(){
            selectEl.style.color="white"
        })

        leaderboardEl.addEventListener('mouseover',function(){
            leaderboardEl.style.color="rgba(255, 255, 255, 0.55)"

        })

        leaderboardEl.addEventListener('mouseout',function(){
            leaderboardEl.style.color="white"

        })
        homeEl.addEventListener('mouseover',function(){
            homeEl.style.color="rgba(255, 255, 255, 0.55"
        })
        homeEl.addEventListener('mouseout',function(){
            homeEl.style.color="white"
        })


        for (let h = 0; h < boksene.length; h++) {
            boksene[h].addEventListener('mouseover', function(){
                boksene[h].style.boxShadow = '0px 0px 20px rgba(255, 255, 255, 1)'
            })
            boksene[h].addEventListener('mouseout', function(){
                boksene[h].style.boxShadow = 'none'
            })}
            
            for (let i = 0; i < boksene.length; i++) {
                let spillNavn = boksene[i].querySelector('.spillOverskrift');
                boksene[i].addEventListener('mouseenter', function(){
                    spillNavn.style.color = "orange"
                });
                boksene[i].addEventListener('mouseleave', function(){
                    spillNavn.style.color = "white"
                })
            }
        }





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
                })}
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
else if (localStorage.teller == 3){
    selectEl.value = "colors"
    colorPalate()
}

setTimeout(function(){
    document.body.style.transition = 'background-color 1s ease'
}, 100)

let currentCoins = document.querySelector('.currentCoins')


