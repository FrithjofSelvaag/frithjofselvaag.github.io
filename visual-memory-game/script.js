

//gjøre:
/*En funskjon som kjører hver gang et nytt level nås. Denne funskjonen gjør at et antall bokser blir hvite og så tilbake til fagen etter et par
sekunder. 

Etter dette har skjedd kan du trykke på boksene. Lag en for-løkke innenfor click funskjonen på boksene. Går igejnnom arrayet med boksene som 
ble hvite. i++ i<x.length i+1..... Slutter om den finner en boks som stemmer. Om den ikke gjør de tapper du. om den gjør det blir boksen hvit. 
boksen må da tas ut av løkken slik at den ikke blir hvit igjenn og legges inn i et annet array der den ikke endres når trykkes på.

når alle boksene som stemmer er tatt. kan ta når det arrayet som får riktige bokser er like langt som det som ikke får like bokser. 
kommer nytt level og vi legger en boks til inn i rekkefølgen. 


når vi når et visst nivå må jeg legge til slik at vi går fra 9 til 16, så 25 bokser. enneten ved docuemnt.write også skrive alt inn, men med flere
bokser eller ved å linke til en ny side jeg opierrer over til.


må også lage skjerm jeg kommer til ved tap - kan kopiere litt fra henrik her. 
*/
let bokserEls=document.querySelectorAll('.tiles div')

/* let bokserEls=document.querySelectorAll('div div') */
let buttonEl=document.querySelector('#StartKnapp')
console.log(`lengde på bokserEls array: ${bokserEls.length}`)
console.log(`bokserEls: ${bokserEls}`)
let levelEl = document.querySelector('#level')










/* let klikkeBokser = level+2   //antall bokser som blir hvite
    console.log(`Klikkebokser(antall bokser som skal lyse): ${klikkeBokser}`) */


let level=1
let hviteBokser =[] 

buttonEl.addEventListener('click',startSpill)




function startSpill(){
    buttonEl.style.display = 'none'

    for(h=0;h<bokserEls.length;h++){
        bokserEls[h].addEventListener('click',valgt)
    }

    nesteLevel()
}







function nesteLevel(){
    



    
    let klikkeBokser = level+2   //antall bokser som blir hvite
    console.log(`Klikkebokser(antall bokser som skal lyse): ${klikkeBokser}`)

// mulig å lage noe sånnt som ,if level, 3, 6,10, 15 ,2...+5+5+ antall == roten av tall + 1 ^^2 
if (level === 3) {

    for(let i=0;i<bokserEls.length;i++){
        bokserEls[i].innerHTML=``
    }
    for (let i = 0;i<16;i==0){
        let nyBoks=document.createElement('div')
        bokserEls.appendChild(nyBoks)
    }
    let tilesEl = document.querySelector('.tiles')
    tilesEl.style.gridTemplateColumns = `repeat(4, 120px)`; 
}

    

    
    //levelEl.innerHTML=`${level}`

    while(hviteBokser.length<klikkeBokser){
        let a=Math.floor(Math.random()*bokserEls.length)
        if(!hviteBokser.includes(bokserEls[a])){
        hviteBokser.push(bokserEls[a])
        }
    }




    




    /* function blirHvit(boks) {
        boks.style.backgroundColor = 'white';
    }

    hviteBokser.forEach(element => blirHvit(element)); */
                                                            //begge disse funker - bruke øverste for å vise kompetanse. nedreste er mer forstålig
    for(i=0;i<hviteBokser.length;i++){
        hviteBokser[i].style.backgroundColor="white"
        hviteBokser[i].classList.add("flipped")
        
    }

    setTimeout(function(){
    for(i=0;i<hviteBokser.length;i++){
        hviteBokser[i].style.backgroundColor="rgba(0, 0, 0, 0.153)"
        hviteBokser[i].classList.remove("flipped")
    }
        
        
    },1000)





    } // slutter blinkbokser
    



/* for(h=0;h<bokserEls.length;h++){
    bokserEls[h].addEventListener('click',valgt)
} */








let valgteBokser = []
function valgt(){
    
    if(hviteBokser.includes(this)){
        this.style.backgroundColor='white'
        this.classList.add("flipped")
        if(!valgteBokser.includes(this)){
            valgteBokser.push(this)
        }

        if(hviteBokser.length===valgteBokser.length){

            levelFlash()
            setTimeout(function(){
                for(i=0;i<valgteBokser.length;i++){
                    valgteBokser[i].style.backgroundColor="rgba(0, 0, 0, 0.153)"
                    valgteBokser[i].classList.remove("flipped")
                    
                }
                valgteBokser = []
                hviteBokser = []
            },500)
            setTimeout(function(){
                levelEl.innerHTML=`${level}`
            },1000)
            
            setTimeout(nesteLevel,1400)
            
    
        }


    }






    else if(!hviteBokser.includes(this)){
        document.write(`
            <h1 style="color: white;
            text-align: center;
            font-size: 22px;
            padding-top: 125px;
            font-family: Helvetica, Arial, sans-serif;
            ">Visual Memory</h1>
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

            let nyKnapp = document.createElement('button')  //prøv igjenn knapp
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

            nyKnapp.style.backgroundColor = 'rgb(254, 217, 32)'
                nyKnapp2.style.backgroundColor = 'rgba(255, 255, 255, 0.400)'
                document.body.style.transition = 'background-color 1s ease'
                setTimeout(function(){document.body.style.backgroundColor = 'red'}, 10)
                setTimeout(function(){document.body.style.backgroundColor = 'rgb(43, 135, 209)'}, 200)

                nyKnapp3.addEventListener('click', function(){
                    document.body.innerHTML = ""
                    document.write(`
                    <h1 style="color: white;
                    text-align: center;
                    font-size: 22px;
                    padding-top: 125px;
                    font-family: Helvetica, Arial, sans-serif;
                    ">Visual Memory</h1>
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
                            let playerName = String(inputEl.value)
                            let highscore = level
                            localStorage.setItem('highscore', highscore)
                            localStorage.setItem('playerName', playerName)
                            console.log(localStorage.getItem('playerName'))
                            console.log(localStorage.getItem('highscore'))
                            window.location.href = '../leaderboard/leaderboard.html'
                    }
                })
        
        })
        
        
        
    
}
}








/* } */ // slutter blinkbokser

function levelFlash(){
    console.log('Du har klikket på alle de rikgtige boksene')
    
    
        level +=1
        console.log(`nåværende level: ${level}`)
        document.body.style.transition = 'background-color 1s ease'
        document.body.style.backgroundColor = 'rgb(70, 190, 255)'
        setTimeout(function(){document.body.style.backgroundColor = 'rgb(43, 135, 209)'
        console.log('endrer farge tilbake nå') 
    }, 350)
}



//document.body.style.backgroundColor = 'rgb(70, 190, 255)'
//                setTimeout(function(){document.body.style.backgroundColor = 'rgb(43, 135, 209)'}, 350)


/* neste:  
gjøre klikking mulig og gjøre at om man klikker feil / riktig får man feilmeldig/nytt level  */

/* neste: 
øke areal på visse leveler level 3, 6 og 9 eller no
gjøre at skjer innefor en loop slik at man ikke kan klikke på ting før
antall bokser som blinker skal øke med 1 hver gang

*/



/* funker ikke når alt er innenfor en funksjon - vil ha sånn at jeg kan klikke på bokser før start

hvorfor dobbler level da?

det funker ikke når det ikke er over 9 bokser. 



nå slutter den halveis, men 

let klikkeBokser = level+2   //antall bokser som blir hvite
    console.log(`Klikkebokser(antall bokser som skal lyse): ${klikkeBokser}`)


er innenfor funskjonen

om dette er utenfor stiger ikke klikkbokser og det funker evig med 3 bokser.

når innefor som nå. funker fint til 9 bokser
*/

