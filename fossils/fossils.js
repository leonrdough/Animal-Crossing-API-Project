async function getFossils() {
    const fossils = await fetch("http://acnhapi.com/v1a/fossils")
    const fossilsData = await fossils.json()
    console.log(fossilsData)
    const fossilsListEl = document.querySelector(".card-list")
    fossilsListEl.innerHTML = fossilsData.map((fossil) => fossilsHTML(fossil)).join("")
}

getFossils()

function fossilsHTML(fossil) {
    return `
    <div class="card">
        <div class="card__container">
            <h3>${fossil.name["name-USen"]}</h3>
            <figure>
            <img src="${fossil["image_uri"]}">
            </figure>
            <p><b>Price:</b> ${fossil["price"]}</p>
            <p><b>Collection:</b> ${fossil["part-of"]}</p>
            <p><b>Museum-Phrase:</b> ${fossil["museum-phrase"]}</p>
        </div>
    </div>`
}