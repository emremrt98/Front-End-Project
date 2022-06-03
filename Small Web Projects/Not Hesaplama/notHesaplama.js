const vize = document.querySelector("#vize");
const odev = document.querySelector("#odev");
const final = document.querySelector("#final");

const buton1 = document.querySelector(".btn-hesapla");
buton1.addEventListener("click", puanHesapla);
const harfNotu = document.querySelector(".harfNotu");

function puanHesapla(e) {
    e.preventDefault();
    const ortalamaNot = (vize.value * 0.3) + (odev.value * 0.1) + (final.value * 0.6);

    if (final.value < 30 && final.value >= 0) {

        if ((odev.value > 0 && odev.value < 100) && (vize.value > 0 && vize.value < 100)) {
            ortalamaPuanHesapla(ortalamaNot);
            harfNotu.innerText = "Harf Notu : FF";
            renkler(ortalamaNot);
        }
        else {
            alert("Yanlış Değerler Girdiniz. Yeniden Deneyiniz");
        }

    } else if (ortalamaNot >= 90 && ortalamaNot <= 100) {

        ortalamaPuanHesapla(ortalamaNot);
        harfNotu.innerText = "Harf Notu : AA";
        renkler(ortalamaNot);

    } else if (ortalamaNot >= 80 && ortalamaNot <= 89) {

        ortalamaPuanHesapla(ortalamaNot);
        harfNotu.innerText = "Harf Notu : BA";
        renkler(ortalamaNot);

    } else if (ortalamaNot >= 70 && ortalamaNot <= 79) {

        ortalamaPuanHesapla(ortalamaNot);
        harfNotu.innerText = "Harf Notu : BB";
        renkler(ortalamaNot);

    } else if (ortalamaNot >= 60 && ortalamaNot <= 69) {

        ortalamaPuanHesapla(ortalamaNot);
        harfNotu.innerText = "Harf Notu : CB";
        renkler(ortalamaNot);

    } else if (ortalamaNot >= 50 && ortalamaNot <= 59) {

        ortalamaPuanHesapla(ortalamaNot);
        harfNotu.innerText = "Harf Notu : CC";
        renkler(ortalamaNot);

    } else if (ortalamaNot >= 40 && ortalamaNot <= 49) {

        ortalamaPuanHesapla(ortalamaNot);
        harfNotu.innerText = "Harf Notu : DC";
        renkler(ortalamaNot);

    } else if (ortalamaNot >= 35 && ortalamaNot <= 39) {

        ortalamaPuanHesapla(ortalamaNot);
        harfNotu.innerText = "Harf Notu : DD";
        renkler(ortalamaNot);

    } else if (ortalamaNot >= 0 && ortalamaNot < 35) {

        ortalamaPuanHesapla(ortalamaNot);
        harfNotu.innerText = "Harf Notu : FF";
        renkler(ortalamaNot);
    } else {
        alert("Yanlış Değerler Girdiniz. Yeniden Deneyiniz");
    }
}

function ortalamaPuanHesapla(ortalamaNot) {

    const ortalamaBilgi = document.querySelector(".ortalama");
    ortalamaBilgi.innerText = `Ortalama Puan : ${ortalamaNot.toFixed(2)}`;
}

function renkler(ortalamaNot) {

    if (ortalamaNot <= 100 && ortalamaNot >= 70) {
        harfNotu.style.color = "green";
    } else if (ortalamaNot < 70 && ortalamaNot >= 50) {
        harfNotu.style.color = "orange";
    } else {
        harfNotu.style.color = "red";
    }
}

const buton2 = document.querySelector(".btn-reset");
buton2.addEventListener("click", () => {
    const ortalamaBilgi2 = document.querySelector(".ortalama");
    ortalamaBilgi2.textContent = "Ortalama Puan : --"
    harfNotu.innerText = "Harf Notu : --";
    harfNotu.style.color = "black";

});


alert("Vize Notu : %30\nÖdev Notu : %10\nFinal Notu : %60\nDeğerleri baz alınarak hesaplanmıştır.")
