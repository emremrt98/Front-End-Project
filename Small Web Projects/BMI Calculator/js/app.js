
const hesapla = document.querySelector(".hesapla");
let indeks = document.querySelector(".indeks");
let durum = document.querySelector(".durum");
const sifirla = document.querySelector(".sifirla");

hesapla.addEventListener('click', (e) => {
    e.preventDefault();
    const boy = document.querySelector(".boy").value;
    const kg = document.querySelector(".kg").value;

    let sonuc = ((parseInt(kg)) / (Number(boy) ** 2)).toFixed(2);
    console.log(sonuc);

    if (sonuc >= 0 && sonuc <= 18.4) {
        indeks.textContent = sonuc;
        durum.innerText = "Zayıf"
    } else if (sonuc >= 18.5 && sonuc <= 24.9) {
        indeks.textContent = sonuc;
        durum.innerText = "Normal"
    } else if (sonuc >= 25 && sonuc <= 29.9) {
        indeks.textContent = sonuc;
        durum.innerText = "Fazla Kilolu"
    } else if (sonuc >= 30 && sonuc <= 34.9) {
        indeks.textContent = sonuc;
        durum.innerText = "Şişman"
    }

});

sifirla.addEventListener('click', sifirlama);

function sifirlama() {
    indeks.textContent = "-- --";
    durum.innerText = "-- --"
}