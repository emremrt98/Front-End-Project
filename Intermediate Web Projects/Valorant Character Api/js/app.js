function getApi() {
    const url = "https://valorant-api.com/v1/agents"
    fetch(url).then(res => res.json())
        .then(async data => await valHero(data))
        .catch(err => console.log("error"))
}

function valHero(info) {
    const data = info.data
    data.forEach(async hero => {
        await achieveHero(hero)
    });
}

class Hero {
    constructor(name, desc, img, abilities) {
        this.name = name,
            this.desc = desc,
            this.img = img,
            this.abilities = abilities
    }

    characterAbilities() {
        const ability = [];
        for (let element of this.abilities) {
            ability.push(element.displayIcon)
        }
        return ability;
    }
}

async function achieveHero(hero) {

    // İstersek class tanımlayıp her seferinde bir sınıf oluşturarak ekrana karakterleri geçebilirsiniz.
    const character = new Hero(hero.displayName, hero.description, hero.bustPortrait, hero.abilities);

    // İstersekte Descructuring yöntemiyle objelere erişip yolumuza devam edebiliriz
    //const { displayName: name, description: desc, bustPortrait: img, abilities } = hero;

    // const ability = []
    // for (let element of abilities) {
    //     ability.push(element.displayIcon)

    // }
    //await defineElement(name, desc, img, ability)
    await defineElement(character.name, character.desc, character.img, character.characterAbilities())
}
function defineElement(name, desc, img, ability) {
    let hero = `<img class="card-image" src="${img}"  alt="">
    <h4 class="hero-name">${name}</h4>
    <p class="card-desc">${desc}</p>
    <div class="ability">
     <img class="ability-images" src="${ability[0]}" alt="">
     <img class="ability-images" src="${ability[1]}" alt="">
     <img class="ability-images" src="${ability[2]}" alt="">
     <img class="ability-images" src="${ability[3]}" alt="">
    </div>`
    const generalCard = document.querySelector(".general-card")
    const card = document.createElement("div")
    card.className = ("card")
    card.innerHTML = hero

    generalCard.appendChild(card)
}

getApi()

const inputValue = document.querySelector(".search-input")

inputValue.addEventListener("input", function () {
    const charactersNames = document.querySelectorAll(".hero-name")
    const search = inputValue.value.toLowerCase()
    charactersNames.forEach(character => {
        character.parentElement.style.display = 'block';
        if (!character.innerText.toLowerCase().includes(search)) {
            character.parentElement.style.display = 'none';
        }
    })
})



