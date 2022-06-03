// Oyunun adındaki bacground değişimi
const baslik = document.querySelector("h2");

const renk = ["red", "yellow"];

setInterval(function () {

    baslik.style.backgroundImage = "linear-gradient(to right, green, red)";

    setTimeout(function () {

        baslik.style.backgroundImage = "linear-gradient(to right, red, green";

    }, 1000);

}, 2500);


// Yardım Menüsü
const help = document.querySelector("h5");

help.addEventListener('click', function () {

    alert("Merhabalar, benim adım Emre, SaTa adlı oyunun tasarımcısıyım. " +
        "Seninle tanışmak isterim.");

    var isim = prompt("Adınız : ", value = "Oyuncu");

    if (isim == null || isim === "") {
        isim = "Oyuncu";
    }

    alert(`Memnun oldum ${isim}, tanıştığımıza göre oyunun kurallarına geçebiliriz`);

    alert("1-) Oyunumuz 3 seviyeden (Kolay - Orta - Zor) oluşuyor." +
        "\n2-) Yapmanız gereken oyunun kurallarına göre gerekli tahmin değerlerini girmek ve sonucu beklemek.");

    alert("Kolay Seviye :\na-)Toplamda 3 hakkınız var.\nb-)1 - 25 arasında bir tahminde bulunmanız gerekiyor.\n" +
        "\nOrta Seviye :\na-)Toplamda 5 hakkınız var.\nb-)1-50 arasında bir tahminde bulunmanız gerekiyor.\n" +
        "\nZor Seviye :\na-)Burada rakip sensin. 100 puanın var. Her bir yanlış yaptığında -10 puan ile cezalandırılacaksın.\n" +
        "c-)Puanın 0'a geldiği zaman oyun bitecek eğer yeniden oynamak istersen 'Sıfırla' butonundan yeniden başlayabileceksin.");

    alert(`Yanlış yaparsan üzülme ve tekrar denemeye devam et. Unutma yanlış yaptığında değil vazgeçtiğinde kaybedersin.\nEğer kuralları unutursan burada seni bekliyor olacağım :) Başarılar, ${isim} `);
});


alert("Mod : Zor Seviye\nGörev : 1 - 100 arasında toplamda 100 puana sahipsiniz ve burada rakip 'Sensin' puanlarını sıfırlamadan bulmaya çalış. En yüksek puanı toplamak için kendinle yarış.");




// Seviyeleri ayarlama

let puan = 100;
const sayiUret = Math.floor((Math.random() * 100) + 1);
let buton = document.querySelector(".btn-gonder");


buton = buton.addEventListener("click", function (e) {

    e.preventDefault();
    let girilenDeger = document.querySelector("#veri");
    girilenDeger = girilenDeger.value;

    let dogruSayi = document.querySelector(".dogru-sayi");
    let bilgilendirmeMetni = document.querySelector(".bilgi-metni");
    let hakBilgisi = document.querySelector(".kalan-hak");

    if (girilenDeger > 100 || girilenDeger <= 0) {
        alert("Lütfen 1 - 100 arasında tahminler de bulun. Kuralları bilmiyorsan 'Yardım' menüsünden öğrenebilirsin");

    } else if (girilenDeger < sayiUret) {
        bilgilendirmeMetni.textContent = "Daha Yüksek Bir Sayı Giriniz";
        puan -= 10;



    } else if (girilenDeger > sayiUret) {

        bilgilendirmeMetni.textContent = "Daha Küçük Bir Sayı Giriniz";
        puan -= 10;


    } else {
        bilgilendirmeMetni.textContent = `Tebrik ederim, oyunu kazandınız`;
        bilgilendirmeMetni.style.color = "rgb(3,197,3)";
        dogruSayi.textContent = `Doğru Sayı : ${sayiUret}`;
    }
    hakBilgisi.textContent = `Kalan Puan : ${puan}`;



    if(puan < 50){
        hakBilgisi.style.color = "red"
    }else if(puan >= 50 && puan < 70){
        hakBilgisi.style.color = "orange";
    }else{
        hakBilgisi.style.color = "green";
    }


    if (puan == 0) {
        alert("Maalesef puanınız tükendi. Oyunu 'Sıfırla' butonundan yeniden başlatabilirsiniz.");
        dogruSayi.textContent = `Doğru Sayı : ${sayiUret}`;
    }
});


function resetBtn(){
    window.location.reload(false);
}

function geriBtn (){
    window.location.href = "file:///C:/Users/emrem/OneDrive/Masa%C3%BCst%C3%BC/Web%20Developer/Github%20Repo/Sayi%20Tahmin%20V2/seviye.html";
}