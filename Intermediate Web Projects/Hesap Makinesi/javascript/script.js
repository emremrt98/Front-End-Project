const result = document.querySelector(".result");   // Ekrana Yazılacak olan Değer

let toplam = "";    // Sayıları Yan yana yazmamızı sağlayan değişken

let islemSonucu = 0;    // İşlemlerin sonucu
let islemSonucu2 = 1;
function numbers(sayi) {
    toplam += sayi;
    result.textContent = toplam;
    
}


let sembol2;
function islem(sembol) {
    if (sembol == "+") {
        toplam != "" ? islemSonucu += parseInt(toplam): islemSonucu += 0;
        sembol2 = "+";
    }
    else if(sembol== "-"){
        toplam != "" ? islemSonucu -= parseInt(toplam): islemSonucu -= 0;
        sembol2 = "-";
    }
    else if(sembol == "*"){
        toplam != "" ? islemSonucu2 *= parseInt(toplam): islemSonucu2 *= 1;
        sembol2 = "*"
    }

    else if(sembol == "/"){
        toplam != "" ? islemSonucu2 /= parseInt(toplam): islemSonucu2 /= 1;
        sembol2 = "/"
    }
  
    else if (sembol == "=") {
        dortIslem(sembol2)
        
    }
    toplam = "";
    
}

function dortIslem(sembol2){
    if(sembol2 == "+"){
        islemSonucu += parseInt(toplam)
        result.textContent = Number(islemSonucu);
    }
    else if(sembol2 == "-"){
        islemSonucu -= parseInt(toplam)
        result.textContent = Number(islemSonucu);
    }
    else if(sembol2 == "*"){
        islemSonucu2 *= parseInt(toplam)
        result.textContent = Number(islemSonucu2);
    }

    else if(sembol2 == "/"){
        islemSonucu2 /= parseInt(toplam)
        result.textContent = Number(islemSonucu2);
    }
   
    
}




let count = 1;
function onOff(){
    if(count % 2 == 0){
        document.body.style.backgroundColor = "white";
    }
    else{
        document.body.style.backgroundColor = "gray";
    }
    count++;
}

