let color = "white"
let boksene = document.querySelectorAll('div div')
let knapp = document.getElementById('knapp')

let blinkBokser = []
let klikkedeBokser = []

knapp.addEventListener('click', sequenceBlink)

let j = 0
function sequenceBlink(){


    if (j < 5) {
        i = Math.floor(Math.random() * boksene.length)
        let boks = boksene[i]
        blinkBokser.push(boks)
        setTimeout(function(){boks.style.backgroundColor = 'white'},150)

        setTimeout(function(){

            boks.style.backgroundColor = 'rgba(0, 0, 0, 0.153)'
            j++
            sequenceBlink()
        }, 500)
        boks.addEventListener('click', )
        
    }

}



function finnSequence(){
    klikkedeBokser = []

    // Legg til en klikkhendelseslytter for hver boks
    boksene.forEach(function(boks) {
        boksene.addEventListener('click', function() {
            // Legg den klikkede boksen til clickedBoxes
            klikkedeBokser.push(boks)

/*             setTimeout(function(){ boks.style.backgroundColor = 'white' }, 200)
            setTimeout(function(){ boks.style.backgroundColor = 'rgba(0, 0, 0, 0.153)' }, 700) */

            // Sjekk om clickedBoxes matcher blinkBokser
            if (klikkedeBokser.length === blinkBokser.length) {
                let match = true
                for (let i = 0; i < klikkedeBokser.length; i++) {
                    if (klikkedeBokser[i] !== blinkBokser[i]) {
                        match = false
                        return
                    }
                }
                if (match === true) {
                    console.log('Du har trykket på div elementene i riktig rekkefølge!')
                } else {
                    console.log('Feil rekkefølge!')
                }
            }
        })
    })
}
setTimeout(function(){ console.log(blinkBokser) }, 4500)

boksene[0].addEventListener('click',function a(){
    setTimeout(function(){
        boksene[0].style.backgroundColor = 'rgba(255, 255, 255, 0.7)'
    }, 0)

    setTimeout(function(){
        boksene[0].style.backgroundColor = 'rgba(0, 0, 0, 0.153)'
    }, 70)
})
boksene[1].addEventListener('click',function b(){
    setTimeout(function(){
        boksene[1].style.backgroundColor = 'rgba(255, 255, 255, 0.7)'
    }, 0)

    setTimeout(function(){
        boksene[1].style.backgroundColor = 'rgba(0, 0, 0, 0.153)'
    }, 70)
})
boksene[2].addEventListener('click',function c(){
    setTimeout(function(){
        boksene[2].style.backgroundColor = 'rgba(255, 255, 255, 0.7)'
    }, 0)

    setTimeout(function(){
        boksene[2].style.backgroundColor = 'rgba(0, 0, 0, 0.153)'
    }, 70)
})
boksene[3].addEventListener('click',function d(){
    setTimeout(function(){
        boksene[3].style.backgroundColor = 'rgba(255, 255, 255, 0.7)'
    }, 0)

    setTimeout(function(){
        boksene[3].style.backgroundColor = 'rgba(0, 0, 0, 0.153)'
    }, 70)
})
boksene[4].addEventListener('click',function e(){
    setTimeout(function(){
        boksene[4].style.backgroundColor = 'rgba(255, 255, 255, 0.7)'
    }, 0)

    setTimeout(function(){
        boksene[4].style.backgroundColor = 'rgba(0, 0, 0, 0.153)'
    }, 70)
})
boksene[5].addEventListener('click',function f(){
    setTimeout(function(){
        boksene[5].style.backgroundColor = 'rgba(255, 255, 255, 0.7)'
    }, 0)

    setTimeout(function(){
        boksene[5].style.backgroundColor = 'rgba(0, 0, 0, 0.153)'
    }, 70)
})
boksene[6].addEventListener('click',function g(){
    setTimeout(function(){
        boksene[6].style.backgroundColor = 'rgba(255, 255, 255, 0.7)'
    }, 0)

    setTimeout(function(){
        boksene[6].style.backgroundColor = 'rgba(0, 0, 0, 0.153)'
    }, 70)
})
boksene[7].addEventListener('click',function h(){
    setTimeout(function(){
        boksene[7].style.backgroundColor = 'rgba(255, 255, 255, 0.7)'
    }, 0)

    setTimeout(function(){
        boksene[7].style.backgroundColor = 'rgba(0, 0, 0, 0.153)'
    }, 70)
})
boksene[8].addEventListener('click',function i(){
    setTimeout(function(){
        boksene[8].style.backgroundColor = 'rgba(255, 255, 255, 0.7)'
    }, 0)

    setTimeout(function(){
        boksene[8].style.backgroundColor = 'rgba(0, 0, 0, 0.153)'
    }, 70)
})
