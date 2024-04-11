

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

let bokserEls=document.querySelectorAll('div div')
let buttonEl=document.querySelector('#StartKnapp')
console.log(`lengde på bokserEls array: ${bokserEls.length}`)
console.log(`bokserEls: ${bokserEls}`)
let levelEl = document.querySelector('#level')








let level=1

/* let klikkeBokser = level+2   //antall bokser som blir hvite
    console.log(`Klikkebokser(antall bokser som skal lyse): ${klikkeBokser}`) */

let hviteBokser =[] 

buttonEl.addEventListener('click',blinking)

function blinking(){
    

    let klikkeBokser = level+2   //antall bokser som blir hvite
    console.log(`Klikkebokser(antall bokser som skal lyse): ${klikkeBokser}`)


    

    buttonEl.style.display = 'none'
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
        
    }

    setTimeout(function(){
    for(i=0;i<hviteBokser.length;i++){
        hviteBokser[i].style.backgroundColor="rgba(0, 0, 0, 0.153)"}
        /* hviteBokser = [] */
    },1000)





    } // slutter blinkbokser
    



for(h=0;h<bokserEls.length;h++){
    bokserEls[h].addEventListener('click',valgt)
}
let valgteBokser = []
function valgt(){
    
    if(hviteBokser.includes(this)){
        this.style.backgroundColor='white'
        if(!valgteBokser.includes(this)){
            valgteBokser.push(this)
        }

        if(hviteBokser.length===valgteBokser.length){

            levelFlash()
            setTimeout(function(){
                for(i=0;i<valgteBokser.length;i++){
                    valgteBokser[i].style.backgroundColor="rgba(0, 0, 0, 0.153)"
                    
                }
                valgteBokser = []
                hviteBokser = []
            },500)
            setTimeout(function(){
                levelEl.innerHTML=`${level}`
            },1000)
            
            setTimeout(blinking,1400)
            
    
        }

    }
    else if(!hviteBokser.includes(this)){
        document.write(`<h1 style="color: black;
        text-align: center;
        font-size: 22px;
        padding-top: 125px;
        font-family: Helvetica, Arial, sans-serif;
        ">Feil!!!</h1>`)
        console.log(`Du klikket på feil boks og tapte, du nådde level:${level}`)

        
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

