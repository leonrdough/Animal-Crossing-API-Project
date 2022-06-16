async function getSea() {
    const seaCreatures = await fetch(`http://acnhapi.com/v1a/sea`)
    const seaData = await seaCreatures.json()
    const seaListEl = document.querySelector(".card-list")
    console.log(seaData)
    seaListEl.innerHTML = seaData.map((sea) => seaHTML(sea) ).join("")
}

getSea()

function seaHTML(sea) {
    return `<div class="card">
    <div class="card__container">
        <h3>${sea.name["name-USen"]}</h3>
        <figure class="card__img--wrapper"><img class="card__img" src="${sea["image_uri"]}"></figure>
        <p><b>Price:</b> ${sea["price"]}</p>
        <p><b>Catch-Phrase: </b>${sea["catch-phrase"]}</p>
        <p><b>Museum-Phrase: </b>${sea["museum-phrase"]}</p>
    </div>
    </div>`
}