const ad = document.getElementById("ad");
const soyad = document.getElementById("soyad");
const mail = document.getElementById("mail");

const form = document.getElementById("form-rehber");
const kisiListesi = document.querySelector(".kisi-listesi")

//event listener tanımlanması

form.addEventListener("submit", kaydet);
kisiListesi.addEventListener("click", kisiIslemleriniYap);
// Tüm kişiler için dizi oluşturalım

const tumKisilerDizisi = [];
let secilenSatir = undefined;

function kisiIslemleriniYap(event) {

    if (event.target.classList.contains("btn--delete")) {
        const silinecekTr = event.target.parentElement.parentElement;
        const silinecekMail = event.target.parentElement.previousElementSibling.textContent;
        rehberdenSil(silinecekTr, silinecekMail);
    } else if (event.target.classList.contains("btn--edit")) {
        document.querySelector(".kaydetGuncelle").value = "Güncelle";
        const secilenTR = event.target.parentElement.parentElement;
       
        ad.value = secilenTR.cells[0].textContent;
        soyad.value = secilenTR.cells[1].textContent;
        mail.value = secilenTR.cells[2].textContent;
        secilenSatir = secilenTR
    }
}

function rehberdenSil(silinecekTrElement, silinecekMail) {
    silinecekTrElement.remove();
    tumKisilerDizisi.forEach((kisi, index) => {
        if (kisi.mail === silinecekMail) {
            tumKisilerDizisi.splice(index, 1);
        }
    });
    console.log("silme yapildi");
    console.log(tumKisilerDizisi);  
}


function kaydet(e) {
    e.preventDefault();

    const eklenecekVeyaGuncellenecekKisi = {
        ad: ad.value,
        soyad: soyad.value,
        mail: mail.value
    }
    const sonuc = verileriKontrolEt(eklenecekVeyaGuncellenecekKisi);
    if (sonuc.durum) {
        if(secilenSatir){
            kisiyiGuncelle(eklenecekVeyaGuncellenecekKisi);
        }else{
            kisiyiEkle(eklenecekVeyaGuncellenecekKisi);
        }
        

    } else {
        bilgiOlustur(sonuc.mesaj, sonuc.durum);
    }
}


function kisiyiGuncelle(kisi){
    secilenSatir.cells[0].textContent = kisi.ad;
    secilenSatir.cells[1].textContent = kisi.soyad;
    secilenSatir.cells[2].textContent = kisi.mail;
    document.querySelector(".kaydetGuncelle").value = "Kaydet";
    secilenSatir = undefined;
}


function verileriKontrolEt(kisi) {

    for (const deger in kisi) {

        if (kisi[deger]) {

        } else {
            return {
                durum: false,
                mesaj: 'Boş alan bırakmayınız'
            }

        }

    }
    alanlariTemizle();
    return {
        durum: true,
        mesaj: "İşlem Başarılı"
    }
}


function bilgiOlustur(mesaj, durum) {
    const olusturanBilgi = document.createElement("div");
    olusturanBilgi.textContent = mesaj;
    olusturanBilgi.className = "bilgi";

    olusturanBilgi.classList.add(durum ? "bilgi--success" : "bilgi--error");

    document.querySelector(".container").insertBefore(olusturanBilgi, form)

    setTimeout(function () {
        const silinecekDiv = document.querySelector(".bilgi")
        if (silinecekDiv) {
            silinecekDiv.remove();
        }
    }, 2000);
}


function alanlariTemizle() {
    ad.value = "";
    soyad.value = "";
    mail.value = "";

}


function kisiyiEkle(eklenecekKisi) {

    const olusuturalanTrElementi = document.createElement("tr");
    olusuturalanTrElementi.innerHTML = `<tr>
    <td>${eklenecekKisi.ad}</td>
    <td>${eklenecekKisi.soyad}</td>
    <td>${eklenecekKisi.mail}</td>
    <td>
        <button class="btn btn--edit"><i class="far fa-edit"></i></button>
        <button class="btn btn--delete"><i class="fa-solid fa-calendar-xmark"></i></button>
    </td>
</tr>`;

    kisiListesi.appendChild(olusuturalanTrElementi);
    tumKisilerDizisi.push(eklenecekKisi);

    bilgiOlustur("Kişi rehbere kaydedildi", true);

}