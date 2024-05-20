function loadLayout() {
    loadHeader()
    loadFooter()
}

function loadHeader() {
    const header = document.getElementById("header")
    header.innerHTML = `
    <a href="index.html"><img src="./assets/images/LOGO HORIZONTAL.png" alt="Logo"></a>
    <input type="checkbox" id="check" />
        <label for="check" class="checkbtn">
            <i class="fa-solid fa-bars"></i>
        </label>
    <nav>
        <div class="nav-btns" id="nav-btns">
            <a href="#">
                <h3>Contacto</h3>
            </a>
            <a href="#">
                <h3>Nosotros</h3>
            </a>
            <a href="#">
                <h3>Cabañas</h3>
            </a>
            <a href="#">
                <h3>Enlace</h3>
            </a>
        </div>
    </nav>`
    var size = window.innerWidth;
    var flag = false

    //Responsive navbar
    var navBtns = document.querySelectorAll(".nav-btns div a");
    var list = document.getElementById("nav-btns");
    var listbtn = document.querySelector(".checkbtn");

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
        listbtn.addEventListener('click', buttons)
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
}

function loadFooter() {
    const footer = document.getElementById('footer')
    footer.innerHTML = `
    <a href="index.html"><img src="./assets/images/LOGO HORIZONTAL.png" alt="Logo"></a>
    <a href="#" target="_blank"><i class="fa-brands fa-instagram"></i></a>
    <p>elcielocabanaslt@gmail.com</p>
    <a href="" target="_blank"><i class="fa-brands fa-spotify"></i></a>
    `
}

loadLayout()
