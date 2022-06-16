
async function getFish() {
    const fishes = await fetch(`http://acnhapi.com/v1a/fish`)
    const fishesData = await fishes.json()
    const fishListEl = document.querySelector(".card-list")
    console.log(fishesData)
    fishListEl.innerHTML = fishesData.map((fish) => fishHTML(fish) ).join("")
}

getFish()

function fishHTML(fish) {
    return `<div class="card">
    <div class="card__container">
        <h3>${fish.name["name-USen"]}</h3>
        <figure class="card__img--wrapper"><img class="card__img" src="${fish["image_uri"]}"></figure>
        <p><b>Price:</b> ${fish["price"]}</p>
        <p><b>Catch-Phrase: </b>${fish["catch-phrase"]}</p>
        <p><b>Museum-Phrase: </b>${fish["museum-phrase"]}</p>
    </div>
    </div>`
}