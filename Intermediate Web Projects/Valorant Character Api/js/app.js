
// Fetch Kullanarak Valorant Sitesinden Verileri Çekip JSON formatına çevirdik
function getApi() {
    const url = "https://valorant-api.com/v1/agents";
    fetch(url).then(response => response.json())
        .then(async element => {
            await character(element)
        });
}
// Çektiğimiz verilerin bir dizi olarak gelmesi sonucu foreach yardımıyla üzerinde gezip karakterlerimize ulaştık
function character(element) {
    const characterArray = element.data;
    characterArray.forEach(async characterObje => {
        await getCharacterData(characterObje);
    });
}
// Class tanımlayarak daha komplike bir yapı elde ettik ve içeriye yolladığımız verilerden her bir karakter için
// yeni bir class oluşturduk.
class DefineCharacter {
    constructor(name, desc, img, abilityArray) {
        this.name = name;
        this.desc = desc;
        this.img = img;
        this.abilitiesArray = abilityArray
    }

    characterAbilities() {
        let abilityArray = [];

        this.abilitiesArray.forEach(element => {

            abilityArray.push(element.displayIcon);
        })
        return abilityArray;
    }
}

// Edindiğimiz karakter objelerini Destructuring  yardımıyla parçalayarak class oluşmasını sağladık.
function getCharacterData(characterObje) {

    const { displayName: characterName, description: characterDesc, bustPortrait: characterImg, abilities: abilitiesArray } = characterObje;
    const characters = new DefineCharacter(characterName, characterDesc, characterImg, abilitiesArray);

    // console.log(characterName);
    // const characterName = characterObje.displayName;
    // const characterDesc = characterObje.description;
    // const characterImg = characterObje.bustPortrait;
    // const abilitiesArray = characterObje.abilities;
    // let abilityArray = [];

    // abilitiesArray.forEach(element => {
    //     abilityArray.push(element.displayIcon);
    // })

    createCharacter(characters.name, characters.desc, characters.img, characters.characterAbilities());
}
// Klasik JS Dom yapılarından faydalanarak kartlarımızı oluşturup ekranımıza yansıttık
function createCharacter(name, desc, img, abilityArray) {
    let hero = `<img class="card-image" src="${img}"  alt="">
    <h4 class="hero-name">${name}</h4>
    <p class="card-desc">${desc}</p>
    <div class="ability">
     <img class="ability-images" src="${abilityArray[0]}" alt="">
     <img class="ability-images" src="${abilityArray[1]}" alt="">
     <img class="ability-images" src="${abilityArray[2]}" alt="">
     <img class="ability-images" src="${abilityArray[3]}" alt="">
    </div>`

    const generalCard = document.querySelector(".general-card")
    const card = document.createElement("div")
    card.className = ("card")
    card.innerHTML = hero


    generalCard.appendChild(card)
}


// Search ekranında karakterlerimize erişmeye çalıştık
getApi();

const searching = document.querySelector('.search-input');
searching.addEventListener('input', _ => {
    const value = searching.value.toUpperCase();
    const characterName = document.querySelectorAll('.hero-name');
    characterName.forEach(element => {
        element.parentElement.style.display = "block";
        if(!element.innerText.includes(value)){
            element.parentElement.style.display = "none";
        }
    })
    
})
