import image from "./headline.jpg"

export let createElementsForHome = () => {
    let mainDiv = document.createElement("div")
    mainDiv.classList.add("home")
    let img = document.createElement("img")
    img.src = image
    img.alt = "headline"
    let headerDiv = document.createElement("h2")
    headerDiv.textContent = "CRAZZYYYYY sdfsdfsfsfsdfBURGER"
    let smallDiv = document.createElement("div")
    smallDiv.textContent = "This is the best place in the city"
    mainDiv.appendChild(img)
    mainDiv.appendChild(headerDiv)
    mainDiv.appendChild(smallDiv)
    return mainDiv
}