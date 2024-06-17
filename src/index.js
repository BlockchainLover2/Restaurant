import {createElementsForHome} from "./home"
import {createElementsForMenu} from "./menu"
import "./styles.css"
const contentDiv = document.querySelector("#content")


let start = () =>{
    addEventListeners()

}


let addEventListeners = () =>{
    const buttons = document.querySelectorAll("nav button")
    buttons.forEach(button =>{
        button.addEventListener("click",()=> switchTabs(button.textContent))
    })
}


let switchTabs = (buttonName) =>{
    while (contentDiv.hasChildNodes())
    contentDiv.removeChild(contentDiv.firstChild)

    const div = (function () {
        switch (buttonName) {
            case "Home":
              return createElementsForHome();
            case "Menu":
                return createElementsForMenu()
            default:
                return null
        }
    })()

    if(buttonName !=="Menu")
        document.body.classList.add("all-screen-background")
    else
        document.body.classList.remove("all-screen-background")


    if(div)
        contentDiv.appendChild(div)
}

start()



