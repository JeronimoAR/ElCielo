let mapa = document.querySelector('.map-container')

if(window.innerWidth <= 425){
    mapa.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1325.1402509850477!2d-72.93093409376483!3d5.578403388142786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1715385618852!5m2!1ses-419!2sco" width="300" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
}else{
    mapa.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1985.4617985396687!2d-72.93236338785995!3d5.5783129993002705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwMzQnNDEuOSJOIDcywrA1NSc1My4yIlc!5e0!3m2!1ses-419!2sco!4v1715373482268!5m2!1ses-419!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
}

let buttonLeft = document.querySelector('.last'), buttonRight = document.querySelector('.next')
let image = document.getElementById('slider-img')

let images = [`${image.src}`,'./assets/images/InsideShack.JPG','./assets/images/lake.JPG','./assets/images/shacks.JPG','./assets/images/shacksFromDistance.JPG']
let counter = 0

buttonLeft.addEventListener('click', () => {
    if(counter == 0){
        counter = 4
        image.src = images[counter]
    }else{
        image.src = images[--counter]
    }
})
buttonRight.addEventListener('click', () => {
    if(counter >= 4){
        counter = 0
        image.src = images[counter]
    }else{
        image.src = images[++counter]
    }
})


//Responsive navbar
var navBtns = document.querySelectorAll(".nav-btns div a");
var list = document.getElementById("nav-btns");
var listbtn = document.querySelector(".checkbtn");

var size = window.innerWidth;
var flag = false;
window.addEventListener("resize", () => {
    list.style.left = "200%";
    size = window.innerWidth;
    flag = false;
});

if (window.innerWidth < 490) {
    for (var i = 0; i < navBtns.length; i++) {
        navBtns[i].addEventListener("click", () => {
            list.style.left = size + "px";
            flag = false;
        });
    }
}

function buttons() {
    if (flag) {
        flag = false;
        list.style.left = size + "px";
    } else {
        flag = true;
        list.style.left = size - 160 + "px";
        document.addEventListener("mousemove", (e) => {
            if (e.clientX < (size - 160) || e.clientY > 348) {
                list.style.left = size + "px";
                flag = false;
            }
        })
    }
}