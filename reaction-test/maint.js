let hovdMeny = document.querySelector(".hovd-meny")
let klikkBar = document.querySelector(".klikkbar")
let beskjed = document.querySelector(".klikkbar .mld")
let sluttSkjerm = document.querySelector(".slutt-skjerm")
let reaksjonTidTekst = document.querySelector(".slutt-skjerm .reaksjon-tid-tekst")
let spillIgjenBtn = document.querySelector(".slutt-skjerm .spill-igjen-btn")
let Home = document.querySelector(".slutt-skjerm .homeBtn")


//Variabler brukt i funksjoner
let klokke
let grønnAktivert
let tidNå
let ventPåStart
let ventPåGrønn
let resultat

//Default variabelverdier(nullstiller)
let i = () => {
  grønnAktivert = false
  ventPåStart = false
  ventPåGrønn = false
  //Tømmer array
  resultat = []
}

i()

//Startsiden(lytter, starter spillet)
hovdMeny.addEventListener("click", () => {
  hovdMeny.classList.remove("active")
  startSpill()
})

//Start spillet
let startSpill = () => {
  klikkBar.style.backgroundColor = "rgb(193, 18, 31)"
  beskjed.innerHTML = "Wait For the Green Color..."
  beskjed.style.color = "white"

  //Klokke(timer)
  let tilfeldigTall = Math.floor(Math.random() * 1000 + 2000)
  //setGrønnFarge kommer etter "tilfeldigTall" sek
  klokke = setTimeout(setGrønnFarge, tilfeldigTall)

  ventPåStart = false
  ventPåGrønn = true

  console.log("Tilfeldig tall: ", tilfeldigTall)
}

//Trykk nå(Grønn skjerm)
let setGrønnFarge = () => {
  klikkBar.style.backgroundColor = "rgb(50, 205, 50)"
  beskjed.innerHTML = "Click Now!"
  beskjed.style.color = "rgb(17, 17, 17)"
  //Definerer linje 65(klikkbar funksjon)
  grønnAktivert = true
  tidNå = Date.now()
};


//Underveis i testen(sender bruker til funksjon "arkiverReaksjonsTid")
klikkBar.addEventListener("click", () => {
  if (grønnAktivert) {
    let clickTime = Date.now()
    let reaksjonTid = clickTime - tidNå
    console.log("Reaksjons tid: ", reaksjonTid)
    aktiverReaksjonsTid(reaksjonTid)
    return
  }

  //Fortsetter spillet 
  if (ventPåStart) {
    startSpill()
    return
  }

  //
  if (ventPåGrønn) {
    aktiverForTidlig()
  }
})

//Resultat(middlertidlig og avsluttende)
let aktiverReaksjonsTid = (rt) => {
  klikkBar.style.backgroundColor = "rgb(250, 240, 202)"
  beskjed.innerHTML = `<div class='reaksjon-tid-tekst'>${rt} ms</div>Click to Continiue.`
  grønnAktivert = false
  ventPåStart = true //Bruker blir sendt til 73
  resultat.push(rt)
  console.log("Resultater: ", resultat)

  if (resultat.length >= 3) {
    sluttSpill()
  }
}

//Trykket for tidlig
let aktiverForTidlig = () => {
  klikkBar.style.backgroundColor = "rgb(250, 240, 202)"
  beskjed.innerHTML = "Too Early! Click to Continue"
  beskjed.style.color = "rgb(17, 17, 17)"
  ventPåStart = true
  clearTimeout(klokke)
}

//Slutt spillet
let sluttSpill = () => {
  sluttSkjerm.classList.add("active")
  clearTimeout(klokke)

  let total = 0

  resultat.forEach((s) => {
    total += s
  })

  //Utregning av gjennomsnittstid(siste oppgitte tall)
  let gjennomsnitt = Math.round(total / resultat.length)
  console.log("Total: ", total)
  console.log("Avarage Result: ", gjennomsnitt)

  reaksjonTidTekst.innerHTML = `${gjennomsnitt} ms`

  document.write(`
  <h1 style="color: white;
  text-align: center;
  font-size: 22px;
  padding-top: 125px;
  font-family: Roboto, sans-serif;
  ">Reaction Time Test</h1>
  <h1 style="color: white;
  text-align: center;
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 100px;
  padding-top: 0px;
  font-family: Roboto, sans-serif;
  ">${gjennomsnitt}ms</h1>
  <h1 style="color: white;
  text-align: center;
  font-size: 22px;
  padding-top: 0px;
  font-family: Roboto, sans-serif;
  ">Better Luck Next Time</h1>
  `)
  //Lager tre knapper(tre muligheter)
  let nyKnapp = document.createElement('button')
  nyKnapp.textContent = ('Try Again')
  document.body.appendChild(nyKnapp)

  let nyKnapp2 = document.createElement('button')
  nyKnapp2.textContent = ('Home')
  document.body.appendChild(nyKnapp2)

  let nyKnapp3 = document.createElement('button')
  nyKnapp3.textContent = ('Save Score')
  document.body.appendChild(nyKnapp3)

  nyKnapp.addEventListener('mouseenter', function () {
    nyKnapp.style.backgroundColor = 'white'
  })
  nyKnapp.addEventListener('mouseleave', function () {
    nyKnapp.style.backgroundColor = 'rgb(254, 217, 32)'
  })
  nyKnapp.addEventListener('click', function () {
    location.reload()
  })
  nyKnapp2.addEventListener('mouseenter', function () {
    nyKnapp2.style.backgroundColor = 'white'
  })
  nyKnapp2.addEventListener('mouseleave', function () {
    nyKnapp2.style.backgroundColor = 'rgba(255, 255, 255, 0.400)'
  })
  nyKnapp2.addEventListener('click', function () {
    window.location.href = '../index.html'
  })
  nyKnapp3.addEventListener('mouseenter', function () {
    nyKnapp3.style.backgroundColor = 'white'
  })
  nyKnapp3.addEventListener('mouseleave', function () {
    nyKnapp3.style.backgroundColor = 'rgb(254, 217, 32)'
  })

  let knapper = [nyKnapp, nyKnapp2, nyKnapp3]

  for(i=0;i<knapper.length;i++){
  knapper[i].style.display='flex'
  knapper[i].style.width='160px'
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
                
            
  /* det som ikke er felles:  */
                
  nyKnapp3.style.marginBottom = '50px'
  nyKnapp3.style.backgroundColor = 'rgb(254, 217, 32)'



  if (selectEl.value === "white") {
    nyKnapp.style.backgroundColor = 'rgb(254, 217, 32)'
    nyKnapp2.style.backgroundColor = 'rgba(255, 255, 255, 0.400)'
    document.body.style.transition = 'background-color 1s ease'
    document.body.style.backgroundColor = 'rgb(43, 135, 209)'
  }
  else if (selectEl.value === "black") {
    nyKnapp.style.backgroundColor = 'rgb(254, 217, 32)'
    nyKnapp2.style.backgroundColor = 'rgba(255, 255, 255, 0.400)'
    document.body.style.transition = 'background-color 1s ease'
    document.body.style.backgroundColor = 'black'
  }

  nyKnapp3.addEventListener('click', function () {
    document.body.innerHTML = ""
    document.write(`
          <h1 style="color: white;
          text-align: center;
          font-size: 22px;
          padding-top: 125px;
          font-family: Roboto, sans-serif;
          ">Reaction Time Test</h1>
          <h1 style="color: white;
          text-align: center;
          margin-top: 0px;
          margin-bottom: 0px;
          font-size: 100px;
          padding-top: 0px;
          font-family: Roboto, sans-serif;
          ">${gjennomsnitt}ms</h1>
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
    inputEl.maxLength="8"

    inputEl.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        let playerName = String(inputEl.value)/* .substring(0, 8)   trenger ikke denne når vi har maxLength*/
        let highscore = gjennomsnitt
        localStorage.setItem('highscore3', highscore)
        localStorage.setItem('playerName3', playerName)
        console.log(localStorage.getItem('playerName3'))
        console.log(localStorage.getItem('highscore3'))
        window.location.href = '../leaderboard/leaderboard.html'
      }
    })
  })
}

//Dark Mode
let header = document.querySelector("#header")
let selectEl = document.querySelector("select")
let lenkene = document.querySelectorAll("a")


//for responsiv burger
let navEl = document.querySelector('nav')
let burgerEl = document.querySelector('.fa-chart-bar')

burgerEl.addEventListener('click', showNav)

function showNav() {
    navEl.classList.toggle('show')
    selectEl.classList.toggle('show')

}

selectEl.addEventListener("change", colorPalate)

function colorPalate() {

  if (selectEl.value === "white") {

    localStorage.teller = 1

    burgerEl.style.color="black"
    header.style.backgroundColor = 'white'
    hovdMeny.style.backgroundColor = 'rgb(43, 135, 209)'
    selectEl.style.backgroundColor = 'white'
    selectEl.style.color = 'black'

    lenkene.forEach(function (lenkene) {
      lenkene.style.color = 'black'

      lenkene.addEventListener('mouseenter', function () {
        lenkene.style.color = 'rgba(0,0,0, 0.55)'
      })
      lenkene.addEventListener('mouseleave', function () {
        lenkene.style.color = 'black'
      })
    })


  burgerEl.addEventListener('mouseover',function(){
      burgerEl.style.color="rgba(0, 0, 0, 0.55)"
  })
  burgerEl.addEventListener('mouseout',function(){
      burgerEl.style.color="rgb(0, 0, 0)"
  })

    selectEl.addEventListener('mouseenter', function () {
      selectEl.style.color = 'rgba(0,0,0, 0.55)'
    })
    selectEl.addEventListener('mouseleave', function () {
      selectEl.style.color = 'black'
    })
  }

  else if (selectEl.value === "black") {

    localStorage.teller = 2


    burgerEl.style.color="black"
    hovdMeny.style.backgroundColor = 'rgb(17, 17, 17)'
    selectEl.style.backgroundColor = 'black'
    selectEl.style.color = 'white'
    header.style.backgroundColor = 'black'

    lenkene.forEach(function (lenkene) {
      lenkene.style.color = 'white'

      lenkene.addEventListener('mouseenter', function () {
        lenkene.style.color = 'rgba(255,255,255, 0.55)'
      })
      lenkene.addEventListener('mouseleave', function () {
        lenkene.style.color = 'white'
      })
    })

    burgerEl.addEventListener('mouseover',function(){
      burgerEl.style.color="rgba(0, 0, 0, 0.55)"
  })
  burgerEl.addEventListener('mouseout',function(){
      burgerEl.style.color="rgb(0, 0, 0)"
  })

    selectEl.addEventListener('mouseenter', function () {
      selectEl.style.color = 'rgba(255,255,255, 0.55)'
    })
    selectEl.addEventListener('mouseleave', function () {
      selectEl.style.color = 'white'
    })
  }
}


console.log(localStorage.teller)
//hvis teller ikke eksisterer i localstorage skal den settes til 1
if (!localStorage.teller) {
  localStorage.teller = 1
}
if (localStorage.teller == 1) {
  selectEl.value = "white"
  colorPalate()
}
else if (localStorage.teller == 2) {
  selectEl.value = "black"
  colorPalate()
}

setTimeout(function () {
  hovdMeny.style.transition = 'background-color 1s ease'
  header.style.transition = 'background-color 1s ease'
}, 100)