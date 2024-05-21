function createShackCard(shack) {
    return `
    <a href="./shacks.html?id=${shack.id}">
        <figure class="card">
            <img src="${shack.img}" alt="${shack.id}">
            <figcaption>
                <p>${shack.title}</p>
            </figcaption>
        </figure>
    </a>
    `
}

export { createShackCard }