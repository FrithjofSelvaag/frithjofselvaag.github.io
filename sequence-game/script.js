let color = "white"
let boksene = document.querySelectorAll('div div')
let knapp = document.getElementById('knapp')

let blinkBokser = []
let klikkedeBokser = []

knapp.addEventListener('click', sequenceBlink)

let level = 1

let j = 0
function sequenceBlink(){
    if (j < level) {
        let i = Math.floor(Math.random() * boksene.length)
        let boks = boksene[i]
        blinkBokser.push(boks)

        let g = 0

        setTimeout(function rekkefolgen(){
            if(g < level){
                setTimeout(function(){blinkBokser[g].style.backgroundColor = 'white'}, 150)
                setTimeout(function(){
                    blinkBokser[g].style.backgroundColor = 'rgba(0, 0, 0, 0.153)'
                    g++
                    rekkefolgen()
                }, 600)
            }}, 100)

        j++
        sequenceBlink()
    }
}

function sjekkRekkefolge() {
    for (let i = 0; i < klikkedeBokser.length; i++) {
        if (klikkedeBokser[i] !== blinkBokser[i]) {
            document.write(`<h1>FEIL REKKEFØLGE 
            du kom til level ${level}</h1>`)
        }}
    if (klikkedeBokser.length === blinkBokser.length) {
        let match = true
        for (let i = 0; i < klikkedeBokser.length; i++) {
            if (klikkedeBokser[i] !== blinkBokser[i]) {
                match = false
                break
            }}

        if (match) {
            console.log('Du har trykket på div-elementene i riktig rekkefølge!')
            level +=1
            setTimeout(function(){
                sequenceBlink()
            }, 200)
        }

        klikkedeBokser = []
    }
}


for (let h = 0; h < boksene.length; h++) {
    boksene[h].addEventListener('click', function() {
        setTimeout(function(){
            boksene[h].style.backgroundColor = 'rgba(255, 255, 255, 0.7)'
        }, 0)
    
        setTimeout(function(){
            boksene[h].style.backgroundColor = 'rgba(0, 0, 0, 0.153)'
        }, 80)

        klikkedeBokser.push(boksene[h])
        sjekkRekkefolge()
    })
}