

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
console.log(bokserEls.length)




let level=1

let klikkeBokser = level+2
console.log(`Klikkebokser ${klikkeBokser}`)
let hviteBokser =[]


/* while(hviteBokser.length<klikkeBokser){
    let a=Math.floor(Math.random()*bokserEls.length)

    console.log(`før: ${a}`)
    if(!hviteBokser.includes(a)){
    console.log(`etter: ${a}`)
    hviteBokser.push(a)
    }
} */

/* while(hviteBokser.length<klikkeBokser){
    let a=Math.floor(Math.random()*bokserEls.length)
    let boksEl=bokserEls[a]
    console.log(`før: ${boksEl}`)
    if(!hviteBokser.includes(boksEl)){
    console.log(`etter: ${boksEl}`)
    hviteBokser.push(boksEl)
    }
} */
buttonEl.addEventListener('click',blinking)

function blinking(){
    while(hviteBokser.length<klikkeBokser){
        let a=Math.floor(Math.random()*bokserEls.length)
        console.log(`før: ${bokserEls[a]}`)
        if(!hviteBokser.includes(bokserEls[a])){
        console.log(`etter: ${bokserEls[a]}`)
        hviteBokser.push(bokserEls[a])
        }
    }




    console.log(`bokser i array: ${hviteBokser}`)




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
        hviteBokser = []
    },1000)







        

    //blinkBokser[g].style.backgroundColor = 'rgba(90, 90, 90, 0.3)'


    //if (!tallIndekser.includes(tilfeldigIndeks)) 


    /* function write(){
        document.write(`<h1 style="color: black;
        text-align: center;
        font-size: 22px;
        padding-top: 125px;
        font-family: Helvetica, Arial, sans-serif;
        ">Sqeuence Memory</h1>`)



    } */





    console.log(bokserEls)
    
}



/* neste:  
gjøre klikking mulig og gjøre at om man klikker feil / riktig får man feilmeldig/nytt level  */