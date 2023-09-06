import { setSocioLocationId } from "./TransientState.js"

export const locationTypeChoices = async () => {
    const response = await fetch("http://localhost:8088/socioLocations")
    const locations = await response.json()

    document.addEventListener("change", handleLocationChange)

    let choicesHTML = "<h2>Which type of area do you live in?</h2>"
    // for (const location of locations) {
    //     choicesHTML += `<input type="radio" name="location" value="${location.id}" />${location.label}`
    // }

    const divStringArray = locations.map(
        (location) => {
            return `<input type="radio" name="location" value="${location.id}" />${location.label}`
        }
    )

    choicesHTML += divStringArray.join("")

    return choicesHTML
}

const handleLocationChange = (changeEvent) => {
    if(changeEvent.target.name === "location") {
        const convertedToInt = parseInt(changeEvent.target.value)
        setSocioLocationId(convertedToInt)
    }
}
