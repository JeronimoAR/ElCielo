let mapa = document.querySelector('.map-container')

if (window.innerWidth <= 425) {
    mapa.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1768.8767354728989!2d-72.9315316502886!3d5.578373363960058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6a5b00664c6bd1%3A0x30c0c151ea6c7c37!2sCaba%C3%B1as%20El%20Cielo!5e0!3m2!1ses-419!2sco!4v1716217297463!5m2!1ses-419!2sco" width="300" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
} else {
    mapa.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1768.8767354728989!2d-72.9315316502886!3d5.578373363960058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6a5b00664c6bd1%3A0x30c0c151ea6c7c37!2sCaba%C3%B1as%20El%20Cielo!5e0!3m2!1ses-419!2sco!4v1716217297463!5m2!1ses-419!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
}

let buttonLeft = document.querySelector('.last'), buttonRight = document.querySelector('.next')
let image = document.getElementById('slider-img')

let images = [`${image.src}`, './assets/images/InsideShack.JPG', './assets/images/lake.JPG', './assets/images/shacks.JPG', './assets/images/shacksFromDistance.JPG']
let counter = 0

buttonLeft.addEventListener('click', () => {
    if (counter == 0) {
        counter = 4
        image.src = images[counter]
    } else {
        image.src = images[--counter]
    }
})
buttonRight.addEventListener('click', () => {
    if (counter >= 4) {
        counter = 0
        image.src = images[counter]
    } else {
        image.src = images[++counter]
    }
})
