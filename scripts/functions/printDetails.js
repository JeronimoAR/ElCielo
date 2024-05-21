import { getShacks } from "../shacks.js";

function printDetails(id) {
    const shacks = getShacks()
    const shacksContainer = document.getElementById("shack-container")
    shacks.then((shacksArray) => {
        const shack = shacksArray.find(shack => shack.id == id)
        const shackTemplate = `
        <img src="${shack.img}" alt="${shack.id}">
        <figcaption>
            <h1>${shack.title}</h1>
            <p>${shack.description}</p>
            <p>${shack.price}</p>
            <br>
            <p>Reserva ahora:</p>
            <div id="paypal-container-FRL54K4QFX75S"></div>
        </figcaption>
        `
        shacksContainer.innerHTML = shackTemplate
    })
}

export { printDetails }