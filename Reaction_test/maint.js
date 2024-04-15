let hovdMeny = document.querySelector(".hovd-meny");
let klikkBar = document.querySelector(".klikkbar");
let beskjed = document.querySelector(".klikkbar .mld");
let sluttSkjerm = document.querySelector(".slutt-skjerm");
let reaksjonTidTekst = document.querySelector(
  ".slutt-skjerm .reaksjon-tid-tekst");
let spillIgjenBtn = document.querySelector(".slutt-skjerm .spill-igjen-btn");
let Home = document.querySelector(".slutt-skjerm .homeBtn");
let saveS = document.querySelector(".slutt-skjerm ")

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

//Trykk nå(grønn)
let setGrønnFarge = () => {
  klikkBar.style.backgroundColor = "#32cd32";
  beskjed.innerHTML = "Click Now!";
  beskjed.style.color = "#111";
  //Definerer linje 105(klikkbar funksjon)
  grønnAktivert = true;
  tidNå = Date.now();
};

//Start spillet
let startSpill = () => {
  klikkBar.style.backgroundColor = "#c1121f";
  beskjed.innerHTML = "Wait For the Green Color...";
  beskjed.style.color = "#fff";

  //Klokke(timer)
  let tilfeldigTall = Math.floor(Math.random() * 1000);
  //setGrønnFarge kommer etter "tilfeldigTall" sek
  klokke = setTimeout(setGrønnFarge, tilfeldigTall);

  ventPåStart = false;
  ventPåGrønn = true;

  console.log("Tilfeldig tall: ", tilfeldigTall)
};


hovdMeny.addEventListener("click", () => {
  hovdMeny.classList.remove("active");
  startSpill();
});

//Slutt spillet
let sluttSpill = () => {
  sluttSkjerm.classList.add("active");
  clearTimeout(klokke);

  let total = 0;

  resultat.forEach((s) => {
    total += s;
  });

  //Utregning av gjennomsnittstid(siste oppgitte tall)
  let averageResultat = Math.round(total / resultat.length);
  console.log("Total: ", total);
  console.log("Avarage Result: ", averageResultat);

  reaksjonTidTekst.innerHTML = `${averageResultat} ms`;

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
  ">${averageResultat}ms</h1>
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

/*   if(selectEl.value === "white"){
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
  } */
  document.body.style.backgroundColor = "rgb(43, 135, 209)"
  nyKnapp3.addEventListener('click', function(){
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
          ">${averageResultat}ms</h1>
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
                  let highscore = averageResultat
                  localStorage.setItem('highscore', highscore)
                  localStorage.setItem('playerName', playerName)
                  console.log(localStorage.getItem('playerName'))
                  console.log(localStorage.getItem('highscore'))
                  window.location.href = '../leaderboard/leaderboard.html'
              }
          })
      })
}

//Resultat(middlertidlig og avsluttende)
let aktiverReaksjonsTid = (rt) => {
  klikkBar.style.backgroundColor = "#faf0ca";
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
  klikkBar.style.backgroundColor = "#faf0ca";
  beskjed.innerHTML = "Too Early! Click to Continue";
  beskjed.style.color = "#111";
  ventPåStart = true;
  clearTimeout(klokke);
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

spillIgjenBtn.addEventListener("click", () => {
  sluttSkjerm.classList.remove("active");
  //Aktiverer to funksjoner 
  //Setter definerende variabler til orginale verdier
  i();
  //Aktiverer spillet på nytt
  startSpill()
})


//Navbar(Hjem)
Home.addEventListener('mouseenter', function() {
  Home.style.backgroundColor = 'white'
})
Home.addEventListener('mouseleave', function() {
  Home.style.backgroundColor = 'rgba(255, 255, 255, 0.400)'
})
Home.addEventListener('click', function(){
  window.location.href = '../Hovedside/index.html'
})

inputEl.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
      let playerName = String(inputEl.value)
      let highscore = averageResultat
      localStorage.setItem('highscore', highscore)
      localStorage.setItem('playerName', playerName)
      console.log(localStorage.getItem('playerName'))
      console.log(localStorage.getItem('highscore'))
      window.location.href = '../leaderboard/leaderboard.html'
  }
})