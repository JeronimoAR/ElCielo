import { printDetails } from "./functions/printDetails.js"

const query = location.search
const params = new URLSearchParams(query)
const id = params.get("id")

printDetails(id)

document.addEventListener("DOMContentLoaded", (event) => {
    paypal.Buttons({
        hostedButtonId: "FRL54K4QFX75S",
        style: {
            layout: 'vertical',
            color: 'black',
            shape: 'rect',
            label: 'pay'
        }

    }).render("#paypal-container-FRL54K4QFX75S")
})