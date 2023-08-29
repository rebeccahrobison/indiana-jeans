import { SaveSubmission } from "./SaveSubmission.js"
import { SubmissionList } from "./Submissions.js"
import { ownJeansChoices } from "./ownsJeans.js"
import { locationTypeChoices } from "./urbanDweller.js"

const container = document.querySelector("#container")

const render = async () => {
    const jeanOwnershipHTML = ownJeansChoices()
    const locationsHTML = await locationTypeChoices()
    const buttonHTML = await SaveSubmission()
    const submissionListHTML = await SubmissionList()

    container.innerHTML = `
        ${jeanOwnershipHTML}
        ${locationsHTML}
        ${buttonHTML}
        ${submissionListHTML}
    `
}

document.addEventListener("newSubmissionCreated", render)

render()