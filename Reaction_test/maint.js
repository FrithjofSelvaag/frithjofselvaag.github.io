let hovdMeny = document.querySelector(".hovd-meny");
let klikkBar = document.querySelector(".klikkbar");
let beskjed = document.querySelector(".klikkbar .mld");
let sluttSkjerm = document.querySelector(".slutt-skjerm");
let reaksjonTidTekst = document.querySelector(".slutt-skjerm .reaksjon-tid-tekst");
let spillIgjenBtn = document.querySelector(".slutt-skjerm .spill-igjen-btn");
let Home = document.querySelector(".slutt-skjerm .homeBtn");


//Variabler brukt i funksjoner
let klokke;
let grønnAktivert;
let tidNå;
let ventPåStart;
let ventPåGrønn;
let resultat;

//Default variabelverdier
let i = () => {
  grønnAktivert = false;
  ventPåStart = false;
  ventPåGrønn = false;
  //Tømmer array
  resultat = [];
};

i();

//Startsiden(lytter, starter spillet)
hovdMeny.addEventListener("click", () => {
  hovdMeny.classList.remove("active");
  startSpill();
});

//Start spillet
let startSpill = () => {
  klikkBar.style.backgroundColor = "rgb(193, 18, 31)";
  beskjed.innerHTML = "Wait For the Green Color...";
  beskjed.style.color = "white";

  //Klokke(timer)
  let tilfeldigTall = Math.floor(Math.random() * 1000 + 2000);
  //setGrønnFarge kommer etter "tilfeldigTall" sek
  klokke = setTimeout(setGrønnFarge, tilfeldigTall);

  ventPåStart = false;
  ventPåGrønn = true;

  console.log("Tilfeldig tall: ", tilfeldigTall)
};

//Trykk nå(grønn)
let setGrønnFarge = () => {
  klikkBar.style.backgroundColor = "rgb(50, 205, 50)";
  beskjed.innerHTML = "Click Now!";
  beskjed.style.color = "rgb(17, 17, 17)";
  //Definerer linje 105(klikkbar funksjon)
  grønnAktivert = true;
  tidNå = Date.now();
};


//Underveis i testen(sender bruker til funksjon "arkiverReaksjonsTid")
klikkBar.addEventListener("click", () => {
  if (grønnAktivert) {
    let clickTime = Date.now();
    let reaksjonTid = clickTime - tidNå;
    console.log("Reaksjons tid: ", reaksjonTid);
    aktiverReaksjonsTid(reaksjonTid);
    return;
  }

  //Fortsetter spillet 
  if (ventPåStart) {
    startSpill();
    return;
  }

  //
  if (ventPåGrønn) {
    aktiverForTidlig();
  }
});

//Resultat(middlertidlig og avsluttende)
let aktiverReaksjonsTid = (rt) => {
  klikkBar.style.backgroundColor = "rgb(250, 240, 202)";
  beskjed.innerHTML = `<div class='reaksjon-tid-tekst'>${rt} ms</div>Click to Continiue.`;
  grønnAktivert = false;
  ventPåStart = true;
  resultat.push(rt);
  console.log("Resultater: ", resultat);

  if (resultat.length >= 3) {
    sluttSpill();
  }
};

//Trykket for tidlig
let aktiverForTidlig = () => {
  klikkBar.style.backgroundColor = "rgb(250, 240, 202)";
  beskjed.innerHTML = "Too Early! Click to Continue";
  beskjed.style.color = "rgb(17, 17, 17)";
  ventPåStart = true;
  clearTimeout(klokke);
};

//Slutt spillet
let sluttSpill = () => {
  sluttSkjerm.classList.add("active");
  clearTimeout(klokke);

  let total = 0;

  resultat.forEach((s) => {
    total += s;
  });

  //Utregning av gjennomsnittstid(siste oppgitte tall)
  let gjennomsnitt = Math.round(total / resultat.length);
  console.log("Total: ", total);
  console.log("Avarage Result: ", gjennomsnitt);

  reaksjonTidTekst.innerHTML = `${gjennomsnitt} ms`;

  document.write(`
  <h1 style="color: white;
  text-align: center;
  font-size: 22px;
  padding-top: 125px;
  font-family: Helvetica, Arial, sans-serif;
  ">Reaction Time Test</h1>
  <h1 style="color: white;
  text-align: center;
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 100px;
  padding-top: 0px;
  font-family: Helvetica, Arial, sans-serif;
  ">${gjennomsnitt}ms</h1>
  <h1 style="color: white;
  text-align: center;
  font-size: 22px;
  padding-top: 0px;
  font-family: Helvetica, Arial, sans-serif;
  ">Better Luck Next Time</h1>
  `)
  //Lager tre knapper(tre muligheter)
  let nyKnapp = document.createElement('button')
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
    window.location.href = '../Hovedside/index.html'
  })
  nyKnapp3.addEventListener('mouseenter', function () {
    nyKnapp3.style.backgroundColor = 'white'
  })
  nyKnapp3.addEventListener('mouseleave', function () {
    nyKnapp3.style.backgroundColor = 'rgb(254, 217, 32)'
  })
  nyKnapp.style.display = 'flex'
  nyKnapp.style.backgroundColor = "rgb(254, 217, 32)"
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
          font-family: Helvetica, Arial, sans-serif;
          ">Reaction Time Test</h1>
          <h1 style="color: white;
          text-align: center;
          margin-top: 0px;
          margin-bottom: 0px;
          font-size: 100px;
          padding-top: 0px;
          font-family: Helvetica, Arial, sans-serif;
          ">${gjennomsnitt}ms</h1>
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

    inputEl.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        let playerName = String(inputEl.value).substring(0, 8);
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