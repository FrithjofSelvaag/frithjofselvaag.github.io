const hovdMeny = document.querySelector(".hovd-meny");
const klikkBar = document.querySelector(".klikkbar");
const beskjed = document.querySelector(".klikkbar .mld");
const sluttSkjerm = document.querySelector(".slutt-skjerm");
const reaksjonTidTekst = document.querySelector(
  ".slutt-skjerm .reaksjon-tid-tekst"
);
const spillIgjenBtn = document.querySelector(".slutt-skjerm .spill-igjen-btn");

let klokke;
let grønnAktivert;
let tidNå;
let ventPåStart;
let ventPåGrønn;
let resultat;

const i = () => {
  grønnAktivert = false;
  ventPåStart = false;
  ventPåGrønn = false;
  resultat = [];
};

i();

const setGrønnFarge = () => {
  klikkBar.style.backgroundColor = "#32cd32";
  beskjed.innerHTML = "Trykk Nå!";
  beskjed.style.color = "#111";
  grønnAktivert = true;
  tidNå = Date.now();
};

const startSpill = () => {
  klikkBar.style.backgroundColor = "#c1121f";
  beskjed.innerHTML = "Vent på Fargen Grønn...";
  beskjed.style.color = "#fff";

  let tilfeldigTall = Math.floor(Math.random() * 4000 + 3000);
  klokke = setTimeout(setGrønnFarge, tilfeldigTall);

  ventPåStart = false;
  ventPåGrønn = true;

  console.log("Random number: ", tilfeldigTall)
};

hovdMeny.addEventListener("click", () => {
  hovdMeny.classList.remove("active");
  startSpill();
});

const sluttSpill = () => {
  sluttSkjerm.classList.add("active");
  clearTimeout(klokke);

  let total = 0;

  resultat.forEach((s) => {
    total += s;
  });

  let averageResultat = Math.round(total / resultat.length);
  console.log("Total: ", total);
  console.log("Gjennomsnittlig Resultat: ", averageResultat);

  reaksjonTidTekst.innerHTML = `${averageResultat} ms`;
};

const aktiverReaksjonsTid = (rt) => {
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

const aktiverForTidlig = () => {
  klikkBar.style.backgroundColor = "#faf0ca";
  beskjed.innerHTML = "For Tidlig! Trykk for å Fortsette";
  beskjed.style.color = "#111";
  ventPåStart = true;
  clearTimeout(klokke);
};

klikkBar.addEventListener("click", () => {
  if (grønnAktivert) {
    let clickTime = Date.now();
    let reaksjonTid = clickTime - tidNå;
    console.log("Reaksjons tid: ", reaksjonTid);
    aktiverReaksjonsTid(reaksjonTid);
    return;
  }

  if (ventPåStart) {
    startSpill();
    return;
  }

  if (ventPåGrønn) {
    aktiverForTidlig();
  }
});

spillIgjenBtn.addEventListener("click", () => {
  sluttSkjerm.classList.remove("active");
  i();
  startSpill();
});

