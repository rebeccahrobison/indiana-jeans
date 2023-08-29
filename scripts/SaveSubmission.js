import { saveSurveySubmission, setOwnsBlueJeans } from "./TransientState.js"


const handleSurveySubmissionClick = (clickEvent) => {
    if (clickEvent.target.id === "saveSubmission") {
        saveSurveySubmission()
    }
}

export const SaveSubmission = () => {
    document.addEventListener("click", handleSurveySubmissionClick)

    return `<button id="saveSubmission">Save Submission</button>`
}