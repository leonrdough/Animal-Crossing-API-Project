async function getItems() {
    const [fishy, seaCreature, songs, fossils, arts] = await Promise.all ([
        fetch("http://acnhapi.com/v1a/fish/bitterling"),
        fetch("http://acnhapi.com/v1a/sea/seaweed"),
        fetch("http://acnhapi.com/v1a/music/1"),
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
    const itemsListEl = document.querySelector(".items__list")
    itemsListEl.innerHTML = itemsHTML(fishData, seaCreatureData, songsData, fossilsData, artsData)

}

getItems()

function itemsHTML(fishData, seaCreatureData, songsData, fossilsData, artsData){

    return `<div class="items__list">
        <div class="items__card">
            <div class="items__card--container">
                <h3>FISH</h3>
                <img src="${fishData.image_uri}">
            </div>
        </div>
        <div class="items__card">
            <div class="items__card--container">h3>
                <h3>Sea Creatures</h3>
                <img src="${seaCreatureData.image_uri}">
            </div>
        </div>
        <div class="items__card">
            <div class="items__card--container">h3>
                <h3>Songs</h3>
                <img src="${songsData.image_uri}">
            </div>
        </div>
        <div class="items__card">
            <div class="items__card--container">h3>
                <h3>Fossils</h3>
                <img src="${fossilsData.image_uri}">
            </div>
        </div>
        <div class="items__card">
            <div class="items__card--container">h3>
                <h3>Arts</h3>
                <img src="${artsData.image_uri}">
            </div>
        </div>
    </div>`
}
