const buton = document.querySelector(".btn");



buton.addEventListener("click", (e) => {
    e.preventDefault();

    const girdi = document.querySelector(".inputText").value;
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + girdi + "&{API KEY}&lang=tr" // ENTER YOUR API KEY

    fetch(url).then(weather => {
        return weather.json()
    }).then(displayResult)


});
// 
const displayResult = (res) => {
    console.log(res);
    const sehirAdi = document.getElementById("sehir");
    sehirAdi.innerText = `${res.name}, ${res.sys.country}`;
    const sicaklik = document.getElementById("sicaklik");
    sicaklik.innerText = degerDonus(res.main.temp);
    const havaDurumu = document.getElementById("havaDurumu");
    havaDurumu.innerText = res.weather[0].description;
    const hissedilenDeger = document.getElementById("hissedilen");
    hissedilenDeger.innerText = degerDonus(res.main.feels_like);


}

function degerDonus(sicaklik) {
    return `${(sicaklik - 273).toFixed(0)}`;
}