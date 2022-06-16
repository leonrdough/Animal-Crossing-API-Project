async function getSongs() {
    const songs = await fetch("http://acnhapi.com/v1a/songs")
    const songsData = await songs.json()
    console.log(songsData)
    songsListEl = document.querySelector(".card-list")
    songsListEl.innerHTML = songsData.map((song) => songsHTML(song))
}

getSongs()

function songsHTML(song) {
    return `<div class="card">
                <div class="card__container">
                    <h3>${song.name["name-USen"]}</h3>
                    <figure class="card__img--wrapper">
                    <img class="card__img" src="${song["image_uri"]}">
                    </figure>
                    <p><b>Price:</b> ${song["buy-price"]}</p>
                    <p><b>Sell Price:</b> ${song["sell-price"]}</p>
                    <p><b>Song Link:</b><a href="${song["music_uri"]}" target="_blank"> ${song["music_uri"]}</a></p>
                </div>
            </div>`
}