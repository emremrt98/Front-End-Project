const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const mail = document.querySelector("#mail");
const pass = document.querySelector("#password");

const form1 = document.querySelector("form");


form1.addEventListener("submit", function(e){

    e.preventDefault();
    const olusturanBilgi = document.createElement("p");
    olusturanBilgi.textContent = "Succeed";
    olusturanBilgi.classList.add("register");
    olusturanBilgi.classList.add("p-Header");
    document.getElementById("frame").appendChild(olusturanBilgi);

    animation();
    setTimeout(() => {
        
        document.querySelector(".register").remove();
        
    }, 2000);
})


let screen = document.querySelector(".register");

function animation(){
    let part1 = gsap.timeline({defaults:{ease : Expo.InOut}})
    part1.fromTo(screen, 1,{x : "25rem"}, {x : 0})
    part1.fromTo(
        ".register", 
        1,
        {x : "2rem", opacity : 0},
        {x : 0, opacity : 1}, 
        "-=1")


        part1.fromTo(
            ".register", 
            2,
            {x : 0, opacity : 1},
            {x : "-2rem", opacity : 0} )


}



