let hovdMeny = document.querySelector(".hovd-meny");
let klikkBar = document.querySelector(".klikkbar");
let beskjed = document.querySelector(".klikkbar .mld");
let sluttSkjerm = document.querySelector(".slutt-skjerm");
let reaksjonTidTekst = document.querySelector(
  ".slutt-skjerm .reaksjon-tid-tekst");
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
  let tilfeldigTall = Math.floor(Math.random() * 4000 + 3000);
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
};

//Resultat(middlertidlig og avsluttende)
let aktiverReaksjonsTid = (rt) => {
  klikkBar.style.backgroundColor = "#faf0ca";
  beskjed.innerHTML = `<div class='reaksjon-tid-tekst'>${rt} ms</div>Trykk for å Fortsette.`;
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
  startSpill();
});


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