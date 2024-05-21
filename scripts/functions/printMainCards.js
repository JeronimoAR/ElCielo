import { getShacks } from "../shacks.js"
import { createShackCard } from "./createShackCard.js"

function printMainCards() {
    const shacks = getShacks()
    let cardsTemplate = ""
    

    shacks.then((shacksArray) => {
        const cardsContainer = document.getElementById("cards")
        for (const shack of shacksArray) {
            cardsTemplate += createShackCard(shack)
        }
        cardsContainer.innerHTML = cardsTemplate
    })  
    
}

export { printMainCards }