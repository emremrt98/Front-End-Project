let loader = document.querySelector("#preloader");

window.addEventListener("load", function () {
    setTimeout(() => {
        loader.style.display = "none";
    }, 1750);

})


let fixed = document.querySelector(".fixed-icon")
// HOME

$(".fixed-icon").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 700);
    return false;
})


setInterval(() => {
    if (($(window).scrollTop()) <= 100) {
        fixed.style.opacity = 0
    
    }
    else{
        fixed.style.opacity = 1;
    }
    
}, 10);



let mainImage = document.querySelector(".main-image");


function imageI(){
    mainImage.innerHTML = `<img src="../assets/gallery-1.jpg" >`
}
function imageI2(){
    mainImage.innerHTML = `<img src="../assets/gallery-2.jpg" >`
}
function imageI3(){
    mainImage.innerHTML = `<img src="../assets/gallery-3.jpg" >`
}
function imageI4(){
    mainImage.innerHTML = `<img src="../assets/gallery-4.jpg" >`
}



let count = document.querySelector(".count");
let addCart = document.querySelector(".addCart");
let adet = document.querySelector(".inputAdet");
let total = 0;
addCart.addEventListener("click", function(){
    let alertt = document.querySelector(".alert")
    total += parseInt(adet.value);

    if(total>10){
        alertt.style.opacity="1"
        setTimeout(() => {
            alertt.style.opacity="0"
        }, 2000);
        total -= parseInt(adet.value);
    }else{
        

        count.textContent = total;
        count.style.opacity = "1";
        
        
    }
    
   
    

 
})


// alert kısmı//


