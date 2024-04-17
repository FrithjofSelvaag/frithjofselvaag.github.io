


let buttonEl=document.querySelector('#StartKnapp')

let levelEl = document.querySelector('#level')


let erIOvergang = false
setTimeout(function(){
    document.body.style.transition.backgroundColor ="1s ease;"
    
},100)


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
    
    setTimeout(function(){
        for(let i = 0;i<bokserEls.length;i++)
        bokserEls[i].style.transition="transform 0.6s, background-color 0.2s ease"
    },100)
    
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

        
        if(selectEl.value == "white"){
            hviteBokser[i].style.backgroundColor="rgba(0, 0, 0, 0.153)"
            
        }
        else if(selectEl.value == "black"){
            hviteBokser[i].style.backgroundColor="rgba(255, 255, 255, 0.153)"
            
        }
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
            erIOvergang=2
            if(level==2){
                
                seier() 
                return
            }
            setTimeout(function(){
                for(i=0;i<valgteBokser.length;i++){
                    
                    if(selectEl.value == "white"){
                        valgteBokser[i].style.backgroundColor="rgba(0, 0, 0, 0.153)"
                        
                    }
                    else if(selectEl.value =="black"){
                        valgteBokser[i].style.backgroundColor="rgba(255, 255, 255, 0.153)"
                        
                    }
                    valgteBokser[i].classList.remove("flipped")
                    
                }
                for(let i=0;i<valgtFeil.length;i++){
                    if(selectEl.value == "white"){
                        valgtFeil[i].style.backgroundColor="rgba(0, 0, 0, 0.153)"
                        
                    }
                    else if(selectEl.value =="black"){
                        valgtFeil[i].style.backgroundColor="rgba(255, 255, 255, 0.153)"
                       
                    }
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
                }

                
            
                


                
                bokserEls=document.querySelectorAll('.tiles > div') 

                
                if(selectEl.value=="white"){                                    //definerer fargen på boksene igjenn, nå som de er laget på nytt 
                for(let i=0;i<bokserEls.length;i++){                            //Dette er eneste stedet de lages på nytt
                    bokserEls[i].style.backgroundColor="rgba(0, 0, 0, 0.153)"
                    }
                }
                else if(selectEl.value=="black"){                   
                    for(let i=0;i<bokserEls.length;i++){
                        bokserEls[i].style.backgroundColor="rgba(255, 255, 255, 0.153)"
                        }
                }


                for(let h=0;h<bokserEls.length;h++){
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
        this.style.backgroundColor='rgba(200, 7, 15, 0.7)'
        
        let feilBoks = this

        setTimeout(function(){
            
        
        if(selectEl.value == "white"){
            feilBoks.style.backgroundColor="rgba(0, 0, 0, 0.5)"
            
        }
        else if(selectEl.value =="black"){
            feilBoks.style.backgroundColor="rgba(0, 100, 100, 0.5)"
           
        }
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
                            
                            if(selectEl.value == "white"){
                                valgteBokser[i].style.backgroundColor="rgba(0, 0, 0, 0.153)"
                                
                            }
                            else if(selectEl.value =="black"){
                                valgteBokser[i].style.backgroundColor="rgba(255, 255, 255, 0.153)"
                               
                            }
                            valgteBokser[i].classList.remove("flipped") 
                        }
                        for(let i=0;i<valgtFeil.length;i++){
                            if(selectEl.value == "white"){
                                valgtFeil[i].style.backgroundColor="rgba(0, 0, 0, 0.153)"
                                
                            }
                            else if(selectEl.value == "black"){
                                valgtFeil[i].style.backgroundColor="rgba(255, 255, 255, 0.153)"
                               
                            }
                            
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

                            if(selectEl.value == "white"){
                                valgteBokser[i].style.backgroundColor="rgba(0, 0, 0, 0.153)"
                                
                            }
                            else if(selectEl.value =="black"){
                                valgteBokser[i].style.backgroundColor="rgba(255, 255, 255, 0.153)"
                            
                        }
                        valgteBokser[i].classList.remove("flipped") 
                        }
                        for(let i=0;i<valgtFeil.length;i++){
                            if(selectEl.value == "white"){
                                valgtFeil[i].style.backgroundColor="rgba(0, 0, 0, 0.153)"
                                
                            }
                            else if(selectEl.value == "black"){
                                valgtFeil[i].style.backgroundColor="rgba(255, 255, 255, 0.153)"
                            
                        }
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
                    font-family: Roboto, sans-serif;
                    ">Visual Memory</h1>
                    <h1 style="color: white;
                    text-align: center;
                    margin-top: 0px;
                    margin-bottom: 0px;
                    font-size: 100px;
                    padding-top: 0px;
                    font-family: Roboto, sans-serif;
                    ">Level ${level}</h1>
                    <h1 style="color: white;
                    text-align: center;
                    font-size: 22px;
                    padding-top: 0px;
                    font-family: Roboto, sans-serif;
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

                

                        if(selectEl.value === "white"){
                            nyKnapp.style.backgroundColor = 'rgb(254, 217, 32)'
                            nyKnapp2.style.backgroundColor = 'rgba(255, 255, 255, 0.400)'
                            document.body.style.transition = 'background-color 1s ease'
                            setTimeout(function(){document.body.style.backgroundColor = 'red'}, 10)
                            setTimeout(function(){document.body.style.backgroundColor = 'rgb(43, 135, 209)'}, 200)
                        }
                        else if(selectEl.value === "black"){
                            nyKnapp.style.backgroundColor = 'rgb(254, 217, 32)'
                            nyKnapp2.style.backgroundColor = 'rgba(255, 255, 255, 0.400)'
                            document.body.style.transition = 'background-color 1s ease'
                            setTimeout(function(){document.body.style.backgroundColor = 'red'}, 10)
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
                            ">Visual Memory</h1>
                            <h1 style="color: white;
                            text-align: center;
                            margin-top: 0px;
                            margin-bottom: 0px;
                            font-size: 100px;
                            padding-top: 0px;
                            font-family: Roboto, sans-serif;
                            ">Level ${level}</h1>
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
                        
                            inputEl.addEventListener('keydown', function(e) {
                                if (e.key === 'Enter') {
                                    let playerName = String(inputEl.value)
                                    let highscore = level - 1
                                    localStorage.setItem('highscore2', highscore)
                                    localStorage.setItem('playerName2', playerName)
                                    console.log(localStorage.getItem('playerName2'))
                                    console.log(localStorage.getItem('highscore2'))
                                    window.location.href = '../leaderboard/leaderboard.html'
                            }
                        })
                
                })//slutt på ny skjerm etter lagre
            },50)//slutt på setTimeout løkke
        }
    }
        
    
    
    
    








}

function seier(){
                    
    document.write(`
    <h1 style="color: white;
    text-align: center;
    font-size: 90px;
    padding-top: 125px;
    font-family: Roboto, sans-serif;
    ">Congratulations! You won!</h1>

    <h2 style="color: white;
    text-align: center;
    font-size: 40px;
    padding-top: 0px;
    font-family: Roboto, sans-serif;
    ">Remember to save your score!</h1>

    >`) 

    

    let lagreKnapp = document.createElement('button')
    lagreKnapp.textContent = ('Save Score')
    lagreKnapp.classList.add('knapp')
    document.body.appendChild(lagreKnapp)


    let hjemKnapp = document.createElement('button')
    hjemKnapp.textContent = ('Home')
    hjemKnapp.classList.add('knapp')
    document.body.appendChild(hjemKnapp)


    hjemKnapp.addEventListener('mouseenter', function() {
        hjemKnapp.style.backgroundColor = 'white'
    })
    hjemKnapp.addEventListener('mouseleave', function() {
        hjemKnapp.style.backgroundColor = 'rgba(255, 255, 255, 0.400)'
    })
    hjemKnapp.addEventListener('click', function(){
        window.location.href = '../Hovedside/index.html'
    })

    lagreKnapp.addEventListener('mouseenter', function() {
        lagreKnapp.style.backgroundColor = 'white'
    })
    lagreKnapp.addEventListener('mouseleave', function() {
        lagreKnapp.style.backgroundColor = 'rgb(254, 217, 32)'
    })
    

    hjemKnapp.style.display = 'flex'
    hjemKnapp.style.margin = '20px auto'
    hjemKnapp.style.width = '160px'
    hjemKnapp.style.height = '50px'
    hjemKnapp.style.justifyContent = 'center'
    hjemKnapp.style.alignItems = 'center'
    hjemKnapp.style.fontWeight = '40px'
    hjemKnapp.style.border = 'none'
    hjemKnapp.style.borderRadius = '5px'
    hjemKnapp.style.transition = 'background-color 0.5s ease'
    hjemKnapp.style.fontSize = '30px'
    hjemKnapp.style.fontFamily = 'Roboto", sans-serif'


    lagreKnapp.style.display = 'flex'
    lagreKnapp.style.margin = '20px auto'
    lagreKnapp.style.width = '300px'
    lagreKnapp.style.height = '70px'
    lagreKnapp.style.justifyContent = 'center'
    lagreKnapp.style.alignItems = 'center'
    lagreKnapp.style.fontWeight = '40px'
    lagreKnapp.style.border = 'none'
    lagreKnapp.style.borderRadius = '5px'
    lagreKnapp.style.transition = 'background-color 0.5s ease'
    lagreKnapp.style.fontSize = '40px'
    lagreKnapp.style.fontFamily = 'Roboto", sans-serif'
    lagreKnapp.style.backgroundColor = 'rgb(254, 217, 32)'

    if(selectEl.value === "white"){
        
        hjemKnapp.style.backgroundColor = 'rgba(255, 255, 255, 0.400)'
        document.body.style.transition = 'background-color 1s ease'
        setTimeout(function(){document.body.style.backgroundColor = 'green'}, 10)
        setTimeout(function(){document.body.style.backgroundColor = 'rgb(43, 135, 209)'}, 200)
    }
    else if(selectEl.value === "black"){
        hjemKnapp.style.backgroundColor = 'rgba(255, 255, 255, 0.400)'
        document.body.style.transition = 'background-color 1s ease'
        setTimeout(function(){document.body.style.backgroundColor = 'green'}, 10)
        setTimeout(function(){document.body.style.backgroundColor = 'black'}, 200)
    }
    

    lagreKnapp.addEventListener('click', function(){
        document.body.innerHTML = ""
        document.write(`
        <h1 style="color: white;
        text-align: center;
        font-size: 22px;
        padding-top: 125px;
        font-family: Roboto, sans-serif;
        ">Visual Memory</h1>
        <h1 style="color: white;
        text-align: center;
        margin-top: 0px;
        margin-bottom: 0px;
        font-size: 100px;
        padding-top: 0px;
        font-family: Roboto, sans-serif;
        ">Level ${level}</h1>
        <h1 style="color: white;
        text-align: center;
        font-size: 22px;
        padding-top: 0px;
        font-family: Roboto, sans-serif;
        "<h1>Write Your Name</h1>`)
        let labelEl = document.createElement('label')
        
        document.body.appendChild(labelEl)
        
        inputEl.classList.add('input')
        labelEl.appendChild(inputEl)

        labelEl.style.color = 'white'
        labelEl.style.display = 'flex'
        labelEl.style.margin = 'auto'
        labelEl.style.justifyContent = 'center'
    
        inputEl.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                let playerName = String(inputEl.value).substring(0, 8);
                let highscore = level - 1
                localStorage.setItem('highscore2', highscore)
                localStorage.setItem('playerName2', playerName)
                console.log(localStorage.getItem('playerName2'))
                console.log(localStorage.getItem('highscore2'))
                window.location.href = '../leaderboard/leaderboard.html'
        }
    })

})
          //så lenge det er gøy
        
}

function levelFlash(){
    console.log('Du har klikket på alle de rikgtige boksene')
    
        erIOvergang = true
        level +=1
        console.log(`level i levelFlash: ${level}`)
        console.log(`nåværende level: ${level}`)
        document.body.style.transition = 'background-color 1s ease'

        
        if(selectEl.value == "white"){
            document.body.style.backgroundColor = 'rgb(70, 190, 255)'
            
        }
        else if(selectEl.value == "black"){
            document.body.style.backgroundColor="rgb(150, 75, 0)"
        }
        setTimeout(function(){
            if(selectEl.value == "white"){
                document.body.style.backgroundColor = 'rgb(43, 135, 209)'
                
            }
            else if(selectEl.value == "black"){
                document.body.style.backgroundColor="rgb(17, 17, 17)"
            }
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
        setTimeout(function(){
            if(selectEl.value == "white"){
                document.body.style.backgroundColor = 'rgb(43, 135, 209)'
                
            }
            else if(selectEl.value == "black"){
                document.body.style.backgroundColor="rgb(17, 17, 17)"
            }
        console.log('endrer farge tilbake nå') 
    }, 350)
}




// fargeendringer for black and white mode 

//kaller på elementer fra DOM



let bodyEl = document.querySelector('body')



let headerEl = document.querySelector('header')
let homeEl = document.querySelector("header div a")
let leaderboardEl = document.querySelector('header nav a')


// for responsiv burger
let selectEl = document.querySelector('header select')
let navEl = document.querySelector('nav')
let burgerEl = document.querySelector('.fa-chart-bar')

burgerEl.addEventListener('click', showNav)

function showNav() {
    navEl.classList.toggle('show')
    selectEl.classList.toggle('show')

}





selectEl.addEventListener("change", colorPalate)









function colorPalate(){


    console.log(`valgFeil array: ${valgtFeil}`)
    console.log(`valgteBokser array: ${valgteBokser}`)







    if (selectEl.value === "white") {
        //navbar farger
        burgerEl.style.color="white"
        headerEl.style.backgroundColor="white"
        homeEl.style.color="black"
        leaderboardEl.style.color="black"
        selectEl.style.backgroundColor="white"
        selectEl.style.color="black"
        
        bodyEl.style.backgroundColor="rgb(43, 135, 209)"

        
        //hover effekter: 

        burgerEl.addEventListener('mouseover',function(){
            burgerEl.style.color="rgba(0, 0, 0, 0.55)"
        })
        burgerEl.addEventListener('mouseout',function(){
            burgerEl.style.color="rgb(0, 0, 0)"
        })
        selectEl.addEventListener('mouseover',function(){
            selectEl.style.color="rgba(0, 0, 0, 0.55)"
        })
        selectEl.addEventListener('mouseout',function(){
            selectEl.style.color="rgb(0, 0, 0)"
        })
        homeEl.addEventListener('mouseover', function(){
            homeEl.style.color="rgba(0, 0, 0, 0.55)"
        })
        homeEl.addEventListener('mouseout', function(){
            homeEl.style.color="rgb(0, 0, 0)"
        })
        leaderboardEl.addEventListener("mouseover",function(){
            leaderboardEl.style.color="rgba(0, 0, 0, 0.55)"
        })
        leaderboardEl.addEventListener("mouseout",function(){
            leaderboardEl.style.color="rgb(0, 0, 0)"
        })


        //beholder farge på bokser etter bytte

        for(let i=0;i<bokserEls.length;i++){                             
            bokserEls[i].style.backgroundColor="rgba(0, 0, 0, 0.153)"
        } 
            
        for(let i = 0;i<valgteBokser.length;i++){      // Om hvitebokser har noe i seg vil disse boksene skifte farge til hvit om vi bytter til dark mode midt i et level
            valgteBokser[i].style.backgroundColor="white"
        }
        for(let i=0;i<valgtFeil.length;i++){
            valgtFeil[i].style.backgroundColor="rgba(0, 0, 0, 0.5)"
        }



        localStorage.teller = 1
        
        
        


    }


    else if(selectEl.value === "black") {

        //navbar farger
        burgerEl.style.color="white"
        headerEl.style.backgroundColor="black"
        homeEl.style.color="white"
        leaderboardEl.style.color="white"
        selectEl.style.backgroundColor="black"
        selectEl.style.color="white"

        
        bodyEl.style.backgroundColor="rgb(17, 17, 17)"
        

        

        //hover effekter: 

        burgerEl.addEventListener('mouseover',function(){
            burgerEl.style.color="rgba(255, 255, 255, 0.55)"
        })
        burgerEl.addEventListener('mouseout',function(){
            burgerEl.style.color="rgb(255, 255, 255)"
        })
        selectEl.addEventListener('mouseover',function(){
            selectEl.style.color="rgba(255, 255, 255, 0.55)"
        })
        selectEl.addEventListener('mouseout',function(){
            selectEl.style.color="rgb(255, 255, 255)"
        })
        homeEl.addEventListener('mouseover', function(){
            homeEl.style.color="rgba(255, 255, 255, 0.55)"
        })
        homeEl.addEventListener('mouseout', function(){
            homeEl.style.color="rgb(255, 255, 255)"
        })
        leaderboardEl.addEventListener("mouseover",function(){
            leaderboardEl.style.color="rgba(255, 255, 255, 0.55)"
        })
        leaderboardEl.addEventListener("mouseout",function(){
            leaderboardEl.style.color="rgb(255, 255, 255)"
        })
        
    
        


        
        

        //beholder farge på bokser etter bytte
        for(let i=0;i<bokserEls.length;i++){
            bokserEls[i].style.backgroundColor="rgba(255, 255, 255, 0.153)"
        }
        for(let i = 0;i<valgteBokser.length;i++){      // Om hvitebokser har noe i seg vil disse boksene skifte farge til hvit om vi bytter til dark mode midt i et level
                valgteBokser[i].style.backgroundColor="white"
        }
        for(let i=0;i<valgtFeil.length;i++){
            valgtFeil[i].style.backgroundColor="rgba(0, 100, 100, 0.5)"
        }


        localStorage.teller = 2
        
        
        
        


    }



}

//local storage, bevarer light/dark mode
/* let h2El = document.querySelector('h2')
let knappEl = document.getElementById('knapp') */   //hva gjør dette? du har ikke noe med id knapp eller h2 i din

console.log(localStorage.teller)
//hvis teller ikke eksisterer i localstorage skal den settes til 1
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

setTimeout(function(){
    document.body.style.transition = 'background-color 1s ease'
}, 100)

//score oppsettet
/* if(!localStorage.getItem('score')){
    localStorage.setItem('score', 0)
}
function giPoints(){
    let currentScore = localStorage.getItem('score')
    let newScore = Number(currentScore) + Number(level - 1)
    localStorage.setItem('score', newScore)
    console.log(newScore)
} */


