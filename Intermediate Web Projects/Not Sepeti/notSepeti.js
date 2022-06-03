const yeniGorev = document.querySelector(".input-gorev");
const yeniGorevEkleBtn = document.querySelector(".btn-gorev-ekle");
const gorevListesi = document.querySelector(".gorev-listesi");

yeniGorevEkleBtn.addEventListener('click', gorevEkle);
gorevListesi.addEventListener("click", gorevSilTamamla);

function gorevSilTamamla(e) {

    e.preventDefault();
    
    const tiklanilanEleman = e.target;
   

    if(tiklanilanEleman.classList.contains("gorev-btn-tamamlandi")){
        console.log("tamamlandi");
        tiklanilanEleman.parentElement.classList.toggle("gorev-tamamlandi")
    }
    if(tiklanilanEleman.classList.contains("gorev-btn-sil")){
        console.log("sil");
        tiklanilanEleman.parentElement.classList.toggle("kaybol");

        tiklanilanEleman.parentElement.addEventListener("transitionend", function() {

            tiklanilanEleman.parentElement.remove();
            
        })
        
    }
}

function gorevEkle(e) {

    e.preventDefault();
    
    // div oluşturma
    const gorevDiv = document.createElement("div");
    gorevDiv.classList.add("gorev-item");

    // li oluşturma
    const gorevLi = document.createElement("li");
    gorevLi.classList.add("gorev-tanim");
    gorevLi.innerText = yeniGorev.value;
    gorevDiv.appendChild(gorevLi);


    // ul'ye oluşturduğumuz divi ekleyelim
    gorevListesi.appendChild(gorevDiv);

    // tamamlandi butonu ekle
    const gorevTamamBtn = document.createElement("button");
    gorevTamamBtn.classList.add("gorev-btn");
    gorevTamamBtn.classList.add("gorev-btn-tamamlandi");
    gorevTamamBtn.innerHTML = '<i class="fas fa-check-circle"></i>'
    gorevDiv.appendChild(gorevTamamBtn);

    // sil butonu ekle
    const gorevSilBtn = document.createElement("button");
    gorevSilBtn.classList.add("gorev-btn");
    gorevSilBtn.classList.add("gorev-btn-sil");
    gorevSilBtn.innerHTML = '<i class="fas fa-minus-circle"></i>'
    gorevDiv.appendChild(gorevSilBtn);

    yeniGorev.value = "";
    

}


