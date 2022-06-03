function getTime() {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();

    ekranaYaz(hour, minute, second);
}


function ekranaYaz(hour, minute, second) {

    (hour < 10) ? document.querySelector("#hour").textContent = "0" + hour : document.querySelector("#hour").textContent = hour;
    (minute < 10) ? document.querySelector("#minute").textContent = "0" + minute : document.querySelector("#minute").textContent = minute;
    (second < 10) ? document.querySelector("#second").textContent = "0" + second : document.querySelector("#second").textContent = second;


}


setInterval(function () {
    getTime();
}, 1000);




