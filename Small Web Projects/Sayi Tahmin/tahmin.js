let help = document.querySelector(".help");

help = help.addEventListener('click', function () {
    alert("Merhabalar, benim adım Emre, SaTa adlı oyunun tasarımcısıyım. " +
        "Seninle tanışmak isterim.");

    var isim = prompt("Adınız : ", value ="Oyuncu");

    if (isim == null || isim === "") {
        isim = "Oyuncu";
    }

    alert(`Memnun oldum ${isim}, tanıştığımıza göre oyunun kurallarına geçebiliriz`);

    alert("1-) Bilgisayar tarafından her seferinde belirlenen 1 - 50 arasında bir sayı mevcut.\n2-)Doğru sayıyı bilmek için toplam 3 hakkın var.\n" +
        "3-)Sayıyı her bilemediğinde sana program bilgi verecek ve sen o bilgiye göre yeni bir tahminde bulunacaksın.\n\nAmaç : Tüm haklarını bitirmeden doğru sayıyı tahmin etmek");
    alert(`Eğer kuralları unutursan burada seni bekliyor olacağım :) Başarılar, ${isim} `);
});


var hak = 3;
console.log(hak);
const sayiUret = Math.floor((Math.random() * 50) + 1);
let buton = document.querySelector(".btn-gonder");


buton = buton.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(hak);
    
    let girilenDeger = document.querySelector("#input");
    girilenDeger = girilenDeger.value;

    let dogruSayi = document.querySelector(".dogru");
    let bilgilendirmeMetni = document.querySelector(".bilgilendirme-metni");
    let hakBilgisi = document.querySelector(".hak");

    console.log(sayiUret);

  
    
    

    if (girilenDeger > 50 || girilenDeger <= 0) {
        alert("Lütfen 1 - 50 arasında tahminler de bulun. Kuralları bilmiyorsan 'Yardım' menüsünden öğrenebilirsin");

    } else if (girilenDeger < sayiUret) {
        bilgilendirmeMetni.textContent = "Daha Yüksek Bir Sayı Giriniz";
        hak--;
        


    } else if (girilenDeger > sayiUret) {

        bilgilendirmeMetni.textContent = "Daha Küçük Bir Sayı Giriniz";
        hak--;
   

    } else {
        bilgilendirmeMetni.textContent = `Tebrik ederim, oyunu kazandınız`;
        bilgilendirmeMetni.style.color = "rgb(3,197,3)";
        dogruSayi.textContent = `Doğru Sayı : ${sayiUret}`;
    }
    hakBilgisi.textContent = `Kalan Hak : 0${hak}`;

    (hak == 2) ? (hakBilgisi.style.color = "orange"): (hakBilgisi.style.color = "red");
    

    if(hak == 0){
        alert("Maalesef hakkınız bitmiştir. Oyunu 'Sıfırla' butonundan yeniden başlatabilirsiniz.");
        dogruSayi.textContent = `Doğru Sayı : ${sayiUret}`;
    }
});


