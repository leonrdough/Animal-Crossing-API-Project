async function getItems() {
    const [fishy, seaCreature, songs, fossils, arts] = await Promise.all ([
        fetch("http://acnhapi.com/v1a/fish/bitterling"),
        fetch("http://acnhapi.com/v1a/sea/seaweed"),
        fetch("http://acnhapi.com/v1a/songs/1"),
        fetch("http://acnhapi.com/v1a/fossils/amber"),
        fetch("http://acnhapi.com/v1a/art/academic_painting")
    ])
    const fishData = await fishy.json()
    const seaCreatureData = await seaCreature.json()
    const songsData = await songs.json()
    const fossilsData = await fossils.json()
    const artsData = await arts.json()
    console.log(fishData)
    console.log(seaCreatureData)
    console.log(songsData)
    console.log(fossilsData)
    console.log(artsData)
    const itemsListEl = document.querySelector(".card-list")
    itemsListEl.innerHTML = itemsHTML(fishData, seaCreatureData, songsData, fossilsData, artsData)

}

getItems()

function itemsHTML(fishData, seaCreatureData, songsData, fossilsData, artsData){

    return `<div class="card-list">
                    <div class="card home__card" onclick="showFish(${fishData.id})">
                        <div class="card__container">
                            <h3>FISH</h3>
                            <figure class="card__img--wrapper">
                                <img class="card__img" src="${fishData.image_uri}">
                            </figure>
                        </div>
                    </div>
                    <div class="card" onclick="showSeaCreature(${seaCreatureData.id})">
                        <div class="card__container">
                            <h3>Sea Creatures</h3>
                            <figure class="card__img--wrapper">
                                <img class="card__img" src="${seaCreatureData.image_uri}">
                            </figure>
                        </div>
                    </div>
                <div class="card" onclick="showSongs(${songsData.id})">
                    <div class="card__container">
                        <h3>Songs</h3>
                        <figure class="card__img--wrapper">
                            <img class="card__img" src="${songsData.image_uri}">
                        </figure>
                    </div>
                </div>
                <div class="card" onclick="showFossils(${fossilsData.id})">
                    <div class="card__container">
                        <h3>Fossils</h3>
                        <figure class="card__img--wrapper">
                            <img class="card__img--bigger" src="${fossilsData.image_uri}">
                        </figure>
                    </div>
                </div>
                <div class="card" onclick="showArt(${artsData.id})">
                    <div class="card__container">
                        <h3>Arts</h3>
                        <figure class="card__img--wrapper">
                            <img class="card__img--bigger" src="${artsData.image_uri}">
                        </figure>
                    </div>
                </div>
            </div>`
}

function showArt(id) {
    localStorage.setItem("id", id)
    window.location.href = `${window.location.origin}/art/art.html`
}

function showFish(id) {
    localStorage.setItem("id", id)
    window.location.href = `${window.location.origin}/fish/fish.html`
}

function showSongs(id) {
    localStorage.setItem("id", id)
    window.location.href = `${window.location.origin}/songs/songs.html`
}

function showFossils(id) {
    localStorage.setItem("id", id)
    window.location.href = `${window.location.origin}/fossils/fossils.html`
}

function showSeaCreature(id) {
    localStorage.setItem("id", id)
    window.location.href = `${window.location.origin}/sea creatures/seaCreatures.html`
}