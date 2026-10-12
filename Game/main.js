let coins = 0;
let coinsPerKlikkaus = 1;
let hinta = 10;

const poopcoinsTeksti = document.getElementById("poop coins");
const klikkausMaara = document.getElementById("klikkausMaara");
const hintaTeksti = document.getElementById("hinta");
const viesti = document.getElementById("viesti");

const klikkausNappi = document.getElementById("klikkausNappi");
const ostaNappi = document.getElementById("ostaNappi");
const aloitaAlusta = document.getElementById("aloitaAlusta");

//pelin näytöllä näkyvät tiedot
function paivitaPeli() {
    poopcoinsTeksti.textContent = coins;
    klikkausMaara.textContent =
        "+" + coinsPerKlikkaus + "poop coin / click";
    hintaTeksti.textContent = hinta;

    if (coins >= hinta) {
        ostaNappi.classList.remove("disabled");
    } else {
        ostaNappi.classList.add("disabled");
    }
}

// klikkaus pisteet
klikkausNappi.addEventListener("click", function() {
    coins = coins + coinsPerKlikkaus;
    viesti.textContent = "";

    paivitaPeli();
});

// päivityksen osto
ostaNappi.addEventListener("click", function() {
    if (coins >= hinta) {
        coins = coins - hinta;
        coinsPerKlikkaus = coinsPerKlikkaus + 2;

        // seuraava maksaa enemmän
        hinta = Math.round(hinta * 2);

        viesti.textContent = "You bought an upgrade!";
    } else {
        viesti.textContent = "You don't have enough poop coins.";
    }

    paivitaPeli();
});

// peli alkaa alusta
aloitaAlusta.addEventListener("click", function() {
    coins = 0;
    coinsPerKlikkaus = 1;
    hinta = 10;

    viesti.textContent = "";

    paivitaPeli();
});

// päivitetyt tiedot
paivitaPeli();