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

async function achieveHero(hero) {
    const name = hero.displayName
    const desc = hero.description
    const img = hero.bustPortrait
    const abilities = hero.abilities
    const ability = []
    for (let element of abilities) {
        ability.push(element.displayIcon)

    }

    await defineElement(name, desc, img, ability)
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
inputValue.addEventListener("input", function (e) {
    const charactersNames = document.querySelectorAll(".hero-name")
    const search = inputValue.value.toLowerCase()
    charactersNames.forEach(character => {
        character.parentElement.style.display = 'block';
        if (!character.innerText.toLowerCase().includes(search)) {
            character.parentElement.style.display = 'none';
        }
    })
})



