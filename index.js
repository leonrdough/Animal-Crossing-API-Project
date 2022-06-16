
// async function main() {
//     const fishes = await fetch("http://acnhapi.com/v1/fish")
//     const fishesData = await fishes.json()
//     console.log(fishesData)
//     const fishesListEl = document.querySelector(".fish-list")
//     fishesListEl.innerHTML = fishesData
//     .map(
//         (fish) => 
//         `<div class="fish-card">
//             <div class="fish-card__container">
//                 <h3>${fish.id}</h4>
//                 <p><b>Price:</b> email@email.com</p>
//                 <p><b>Catch Phrase:</b> 0000000000</p>
//                 <p><b>Item Phrase:</b> <a href="https://website.website" target="_blank">website.website</a></p>
//             </div>
//         </div>`
//     )
//     .join("")
// }

// main()
const id = localStorage.getItem("id")
async function fishermen() {
    const fishes = await fetch(`http://acnhapi.com/v1/fish`)
    const fishesData = await fishes.json()
    const fishListEl = document.querySelector(".fish-list")
    console.log(fishesData)
    fishListEl.innerHTML = fishesData?.map((fish) => fishHTML(fish) ).join("")
}

fishermen()

function fishHTML(fish) {
    return `<div class="fish-card" onclick="showUserPosts(${fish.id})">
    <div class="fish-card__container">
        <h3>${fish.name-USen}</h4>
        <p><b>Email:</b>${fish.email}</p>
        <p><b>Phone:</b>${fish.phone}</p>
        <p><b>Website:</b> <a href="https://${fish.website}" target="_blank">${fish.website}</a></p>
    </div>
    </div>`
}