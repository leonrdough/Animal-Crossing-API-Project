
async function getArt() {
    const artPieces = await fetch("http://acnhapi.com/v1a/art")
    const artData = await artPieces.json()
    console.log(artData)
    const cardListEl = document.querySelector(".card-list")
    cardListEl.innerHTML = artData.map((art) => artHTML(art)).join("")
}

getArt()

function artHTML(art) {
    return `<div class="card">
        <div class="card__container">
            <h3>${art.name["name-USen"]}</h3>
            <figure class="card__img--wrapper">
                <img src="${art["image_uri"]}" class="card__img">
                </figure>
            <p><b>Price:</b> ${art["buy-price"]}</p>
            <p><b>Catch-Phrase: </b></p>
            <p><b>Museum-Description:</b>${art["museum-desc"]}</p>
        </div>
    </div>`
}