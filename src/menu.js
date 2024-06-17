import burger1 from "./burger1.jpg"
import burger2 from "./burger2.jpg"

export let createElementsForMenu = () => {
    let mainDiv = document.createElement("div")
    mainDiv.classList.add("menu")
    const array = []
    array.push(new MenuItem("Normal Burger","Delicious burger with a meatball and cheese",burger1))
    array.push(new MenuItem("Special Burger","EXTRA MEATBALL",burger2))
    array.push(new MenuItem("Special Burger","EXTRA MEATBALL",burger2))
    array.push(new MenuItem("Special Burger","EXTRA MEATBALL",burger2))
    array.push(new MenuItem("Special Burger","EXTRA MEATBALL",burger2))
    array.push(new MenuItem("Special Burger","EXTRA MEATBALL",burger2))
    array.push(new MenuItem("Special Burger","EXTRA MEATBALL",burger2))
    array.push(new MenuItem("Special Burger","EXTRA MEATBALL",burger2))
    array.push(new MenuItem("Special Burger","EXTRA MEATBALL",burger2))
    array.push(new MenuItem("Special Burger","EXTRA MEATBALL",burger2))
    array.push(new MenuItem("Special Burger","EXTRA MEATBALL",burger2))
    array.push(new MenuItem("Special Burger","EXTRA MEATBALL",burger2))
    array.push(new MenuItem("Special Burger","EXTRA MEATBALL",burger2))
    array.push(new MenuItem("Special Burger","EXTRA MEATBALL",burger2))
    array.push(new MenuItem("Special Burger","EXTRA MEATBALL",burger2))
    array.push(new MenuItem("Special Burger","EXTRA MEATBALL",burger2))
    array.push(new MenuItem("Special Burger","EXTRA MEATBALL",burger2))
    array.push(new MenuItem("Special Burger","EXTRA MEATBALL",burger2))
    array.push(new MenuItem("Special Burger","EXTRA MEATBALL",burger2))
    array.push(new MenuItem("Special Burger","EXTRA MEATBALL",burger2))
    array.push(new MenuItem("Special Burger","EXTRA MEATBALL",burger2))
    array.push(new MenuItem("Special Burger","EXTRA MEATBALL",burger2))
    array.push(new MenuItem("Special Burger","EXTRA MEATBALL",burger2))

    array.forEach(x=>{
        x.elementVersion = createMenuItem(x)
        mainDiv.appendChild(x.elementVersion)
    })


    return mainDiv
}
function createMenuItem(menuObj){
    let menuItem = document.createElement("div")
    menuItem.classList.add("menu-item")
    let left = document.createElement("div");
    left.classList.add("left")
    let img = document.createElement("img")
    img.src = menuObj.image
    img.alt = menuObj.name
    left.appendChild(img)

    let right = document.createElement("div");
    right.classList.add("right")

    let textHeader = document.createElement("div")
    textHeader.textContent = menuObj.name

    let description = document.createElement("div")
    description.textContent = menuObj.description

    right.appendChild(textHeader)
    right.appendChild(description)
    menuItem.appendChild(left)
    menuItem.appendChild(right)

    return menuItem

}

class MenuItem{
    name
    description
    image
    elementVersion
    constructor(name,description,image) {
        this.name = name
        this.description = description
        this.image = image
    }
}