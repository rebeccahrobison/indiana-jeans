export const SubmissionList = async () => {
    // Get the submissions from your API
    const response = await fetch("http://localhost:8088/submissions")
    const submissions = await response.json()

    let submissionsHTML = ""
    // Iterate the submissions and create some <section> representations
    const divStringArray = submissions.map(
        (submission) => {
            return `<section class="submission">
            <div>Owns Jeans? ${submission.ownsBlueJeans}</div>
            <div>Area type foreign key? ${submission.socioLocationId}</div>
        </section>`
        }
    )

    submissionsHTML += divStringArray.join("")

    // Return the HTML string
    return submissionsHTML
}


    // for (const submission of submissions) {
    //     submissionsHTML += `<section class="submission">
    //         <div>Owns Jeans? ${submission.ownsBlueJeans}</div>
    //         <div>Area type foreign key? ${submission.socioLocationId}</div>
    //     </section>`
    // }