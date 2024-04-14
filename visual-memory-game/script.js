


let buttonEl=document.querySelector('#StartKnapp')

let levelEl = document.querySelector('#level')


let erIOvergang = false



let tilesEl=document.querySelector('.tiles')
let bokserEls=document.querySelectorAll('.tiles > div')

let level=1
let hviteBokser =[] 

buttonEl.addEventListener('click',startSpill)


function lagBokser(n){
    tilesEl.innerHTML=''

    
    for(let i=0;i<n;i++){
        tilesEl.innerHTML+=`<div></div>`
        
    }
    bokserEls=document.querySelectorAll('.tiles > div')
    

    
}
lagBokser(9)

console.log(`BokserEls: ${bokserEls}`)
console.log(bokserEls)
console.log(`BokserEls lengde: ${bokserEls.length}`)


function startSpill(){
    buttonEl.style.display = 'none'
    

    for(h=0;h<bokserEls.length;h++){
        bokserEls[h].addEventListener('click',valgt)
    }
    
    erIOvergang=true
    nesteLevel()
}


function nesteLevel(){
    
    
    setTimeout(function(){
        erIOvergang = false
    },1200)
    let klikkeBokser = level+2   //antall bokser som blir hvite
    console.log(`Klikkebokser(antall bokser som skal lyse): ${klikkeBokser}`)




    while(hviteBokser.length<klikkeBokser){
        let a=Math.floor(Math.random()*bokserEls.length)
        if(!hviteBokser.includes(bokserEls[a])){
        hviteBokser.push(bokserEls[a])
        }
        console.log(`boksene som legges inn i hviteBokse: ${bokserEls[a]}`)
    }


                                                   
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





} 
    




let hjerteEnEl =document.querySelector('#Heart1')
let hjerteToEl =document.querySelector('#Heart2')
let hjerteTreEl =document.querySelector('#Heart3')

let valgteBokser = []

let valgtFeil = []

let livTapt = []

function valgt(){

    if(erIOvergang){
        return
    }
    
    
    if(hviteBokser.includes(this)){
        this.style.backgroundColor='white'
        this.classList.add("flipped")
        if(!valgteBokser.includes(this)){
            valgteBokser.push(this)
        }
    }
    

        if(hviteBokser.length===valgteBokser.length){

            levelFlash()
            overgang=2
            setTimeout(function(){
                for(i=0;i<valgteBokser.length;i++){
                    valgteBokser[i].style.backgroundColor="rgba(0, 0, 0, 0.153)"
                    valgteBokser[i].classList.remove("flipped")
                    
                }
                for(let i=0;i<valgtFeil.length;i++){
                    valgtFeil[i].style.backgroundColor="rgba(0, 0, 0, 0.153)"    
                }
                valgteBokser = []
                hviteBokser = []
                valgtFeil=[]
            },400)
            setTimeout(function(){
                levelEl.innerHTML=`${level}`
            },1000)
            setTimeout(function(){
                for(let i=0;i<bokserEls.length;i++){
                    bokserEls[i].removeEventListener("click",valgt) 
                }


                console.log(`level length===lenght: ${level}`)
                
                if(level<3){
                    antallBokser=9
                    lagBokser(antallBokser)
                }
                if(level>=3){
                    antallBokser=16
                    tilesEl.style.gridTemplateColumns = `repeat(4, 90px)`
                    tilesEl.style.gap = '10px'
                    console.log(bokserEls.length)
                    lagBokser(antallBokser)
                    bokserEls.forEach(function(boks){
                        boks.style.height = '90px'
                    })
                    // I fix Joffen :)   <3
            
                    
                }if(level>=6){
                    antallBokser=25
                    tilesEl.style.gridTemplateColumns = `repeat(5, 72px)`
                    tilesEl.style.gap = '8px'
                    console.log(bokserEls.length)
                    lagBokser(antallBokser)
                    bokserEls.forEach(function(boks){
                        boks.style.height = '72px'
                    })
                }if(level>=9){
                    antallBokser=36
                    tilesEl.style.gridTemplateColumns = `repeat(6, 60px)`
                    tilesEl.style.gap = '6px'
                    console.log(bokserEls.length)
                    lagBokser(antallBokser)
                    bokserEls.forEach(function(boks){
                        boks.style.height = '60px'
                    })
                }if(level>=12){
                    antallBokser=49
                    tilesEl.style.gridTemplateColumns = `repeat(7, 51px)`
                    tilesEl.style.gap = '5px'
                    console.log(bokserEls.length)
                    lagBokser(antallBokser)
                    bokserEls.forEach(function(boks){
                        boks.style.height =  '51px'
                    })
                }if(level>=15){
                    antallBokser=64
                    tilesEl.style.gridTemplateColumns = `repeat(8, 45px)`
                    tilesEl.style.gap = '5px'
                    console.log(bokserEls.length)
                    lagBokser(antallBokser)
                    bokserEls.forEach(function(boks){
                        boks.style.height =  '45px'
                    })
                }if(level>=18){
                    document.write('congratulations You won')
                }
                
                


                
                bokserEls=document.querySelectorAll('.tiles > div') 

                for(h=0;h<bokserEls.length;h++){
                    bokserEls[h].addEventListener('click',valgt)
                }
                
                console.log('kjørt lag bokser')
            },1000)
            setTimeout(function(){
                
            },1400)

            setTimeout(
                nesteLevel,1400)
            
    
        }


    



    
    

    else if(!hviteBokser.includes(this)){
        
        if(!valgtFeil.includes(this)){
        valgtFeil.push(this)
        this.style.backgroundColor='rgba(200, 7, 15, 0.7'
        
        let feilBoks = this

        setTimeout(function(){
        feilBoks.style.backgroundColor="rgba(0, 0, 0, 0.5)"
        },200)

        //risteeffekt kun for de to første feilene.
        if(livTapt.length<2){                    /* når vi taper et liv går livTapt.length opp en. tap --> 1 tap --> 2. Er da to på sisste livet */
            this.classList.add("shake")          /* shake gjelder altså for de to første forøkene.  */
        setTimeout(function(){
            feilBoks.classList.remove("shake")
        },250)
        
        }
        else if(livTapt.length==2){              /* her her vi for sisste livet - Siden valgtFeil øker før denne spilles vil feil --> length 1 */
            if(valgtFeil.length!=3){             /* Så kjøres denne. så feil --> lengde 2. denn spilles. Denne spilles sisste gang ved length 3*/
                this.classList.add("shake")      /* Da tar vi den bort fordi det så stygt ut å ha den ide skjermen gikk til home - try again - leaderboard siden*/
                setTimeout(function(){
                    feilBoks.classList.remove("shake")
                },250)
            }
        }
        
        
        console.log(`antall feil dette livet:${valgtFeil.length}`)
    }   
    
        if (valgtFeil.length==3){
            livTapt.push(1)
            levelFlashTap()
            
            
            
            //resterter levelet.

                if (livTapt.length==1){ 
                    hjerteEnEl.style.color = 'rgb(140, 0, 0)'
                    
                    setTimeout(function(){
                        for(let i=0;i<valgteBokser.length;i++){
                            valgteBokser[i].style.backgroundColor="rgba(0, 0, 0, 0.153)"
                            valgteBokser[i].classList.remove("flipped") 
                        }
                        for(let i=0;i<valgtFeil.length;i++){
                            valgtFeil[i].style.backgroundColor="rgba(0, 0, 0, 0.153)"
                            
                        }
                    hviteBokser = []
                    valgteBokser = []
                    valgtFeil = []
                }, 400)
                    setTimeout(function(){
                    
                    nesteLevel()
                }, 1400)
                }
                if (livTapt.length==2){
                    hjerteToEl.style.color = 'rgb(140, 0, 0)'
                    
                    setTimeout(function(){
                        for(let i=0;i<valgteBokser.length;i++){
                            valgteBokser[i].style.backgroundColor="rgba(0, 0, 0, 0.153)"
                            valgteBokser[i].classList.remove("flipped") 
                        }
                        for(let i=0;i<valgtFeil.length;i++){
                            valgtFeil[i].style.backgroundColor="rgba(0, 0, 0, 0.153)"
                            
                        }
                    hviteBokser = []
                    valgteBokser = []
                    valgtFeil = []
                }, 400)
                    setTimeout(function(){
                    
                    nesteLevel()
                }, 1400)
                }
                if (livTapt.length==3){
                    hjerteTreEl.style.color = 'rgb(140, 0, 0)'
                }


            
            
        }
        if(livTapt.length===3){

            setTimeout(function(){

        

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
                
                })//slutt på ny skjerm
            },50)//slutt på setTimeout løkke
        }
    }
        
        
        
    
    








}

function levelFlash(){
    console.log('Du har klikket på alle de rikgtige boksene')
    
        erIOvergang = true
        level +=1
        console.log(`level i levelFlash: ${level}`)
        console.log(`nåværende level: ${level}`)
        document.body.style.transition = 'background-color 1s ease'
        document.body.style.backgroundColor = 'rgb(70, 190, 255)'
        setTimeout(function(){document.body.style.backgroundColor = 'rgb(43, 135, 209)'
        console.log('endrer farge tilbake nå') 
    }, 350)
}

function levelFlashTap(){
    console.log('Du klikket på feil bokser - Nå vil elevet begynne på nytt')
    console.log('Du har nå et liv mindre')
        erIOvergang = true
        console.log(`level i levelFlash: ${level}`)
        console.log(`nåværende level: ${level}`)
        document.body.style.transition = 'background-color 1s ease'
        document.body.style.backgroundColor = 'red'
        setTimeout(function(){document.body.style.backgroundColor = 'rgb(43, 135, 209)'
        console.log('endrer farge tilbake nå') 
    }, 350)
}






 


/*
fiksa slik at man kan holde på evig eller stopper på et nivår

endre fra i = 0 til let i = 0 i for løkker
*/
