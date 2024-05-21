function getShacks() {
    return fetch("./scripts/json/shacks.json").then((response) => {
        if (response.ok) {
        } else {

        }
        return response.json()
    }).then((data) => {
        return data.shacks
    })
}
export { getShacks }
