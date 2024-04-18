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
let tittelSymbolEl = document.querySelector('#tittelSymbol')
let selectEl = document.querySelector('header select')
let body = document.body
let h1El = document.querySelector('h1')
let header = document.querySelector('header')




let homeEl = document.querySelector("header div a")
let boksTekstEl = document.querySelectorAll('#storBoks .spillboks div h1')   //tekst inni boksene
let boksene = document.querySelectorAll('.spillboks div')

let spillOverskriftEl=document.querySelector('.spillOverskrift')
let leaderboardEl = document.querySelector("header nav a")


setTimeout(function(){
    tittelSymbolEl.style.transition="background-color 1s ease"
    },100)



selectEl.addEventListener("change", colorPalate)



function colorPalate(){

    /* let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256) */
    

    if (selectEl.value === "white") {

            //farger i javascript
            burgerEl.style.color="black"
            homeEl.style.color="black"
            leaderboardEl.style.color="black"
            header.style.backgroundColor = 'white'
            tittelSymbolEl.style.backgroundColor="rgb(5, 163, 215)"
            body.style.backgroundColor = 'white'
            selectEl.style.color='black'
            selectEl.style.backgroundColor ='white' 
            boksTekstEl.forEach(function(boksTekstEl) {
                boksTekstEl.style.color = 'black'
            })
            
            
            
            
            //hover effekter i javascript
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
            setTimeout(function(){
                for (let h = 0; h < boksene.length; h++) {
                    boksene[h].addEventListener('mouseover', function(){
                        boksene[h].style.transition = 'box-shadow 0.3s ease-in, transform 0.2s ease-in-out, background-color 1s ease-in-out'
                        boksene[h].style.boxShadow = '5px 10px 6px 0px rgba(0, 0, 0, 0.15)'
                    })
                    boksene[h].addEventListener('mouseout', function(){
                        boksene[h].style.boxShadow = 'none'
                    })}
            },100)
            
        
            for (let i = 0; i < boksene.length; i++) {
                let spillNavn = boksene[i].querySelector('.spillOverskrift')
                 boksene[i].addEventListener('mouseenter', function(){
                    spillNavn.style.color = "orange"
                })
                boksene[i].addEventListener('mouseleave', function(){
                    spillNavn.style.color = "black"
                })
            }


            //husker fargen
            localStorage.teller = 1
        
    }
        

    else if (selectEl.value === "black") {

        burgerEl.style.color="white"
        homeEl.style.color="white"
        leaderboardEl.style.color="white"
        tittelSymbolEl.style.backgroundColor="black"
        body.style.backgroundColor = 'rgb(17, 17, 17)'
        selectEl.style.backgroundColor = 'rgb(17, 17, 17) ' 
        selectEl.style.color='white'
        header.style.backgroundColor = 'rgb(17, 17, 17)'
        
        boksTekstEl.forEach(function(boksTekstEl) {
            boksTekstEl.style.color = 'white'
        })
            


        //legger til hover effekter i javascript:
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
                let spillNavn = boksene[i].querySelector('.spillOverskrift')  // henter overskrift for hver av boksene for hver av boksene spillnavn er navn for boksene[i]
                boksene[i].addEventListener('mouseenter', function(){         // lager hover for disse oversrkitene 
                    spillNavn.style.color = "orange"
                })
                boksene[i].addEventListener('mouseleave', function(){
                    spillNavn.style.color = "white"
                })
            }

            //husker fargen
            localStorage.teller = 2
    }





        /* else if (selectEl.value === "colors") {

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
            boksTekstEl.forEach(function(boksTekstEl) {
                boksTekstEl.style.color = `rgb(${g},${b},${r})`
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

 */
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
/* else if (localStorage.teller == 3){
    selectEl.value = "colors"
    colorPalate()
} */

setTimeout(function(){
    spillOverskriftEl.style.transition = 'background-color 0.3s ease'
    document.body.style.transition = 'background-color 1s ease'
    header.style.transition = 'background-color 1s ease'
}, 100)

/* let currentCoins = document.querySelector('.currentCoins') */


