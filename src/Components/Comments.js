// TODO: Comments and Notes 
// import { useState } from "react"

// ! for tomorrow 2/20
// ! we will begin at App.js &  work through the student.js files to connect this comment.js section

// * handles the submit of comments added to the students profile via user input
// * should also return current comments and notes data that is already attached to students profile

export default function Comments() {

    // const [addedCmt,setaddedCmt] = useState({ // * state to add in commenter name and comment
    //     commenterName: "",
    //     comment: ""
    // })
    // const [currentCmt, setCurrentCmt] = useState () // * state to filter through for the comments currently there for the student prof.

    function handleSubmit(event) {
        // event.prevenDefault()

    }

    // * returns the form for the user to input their name as commenter name and comment they chose 
    // dblock ->Use the d-inline-block class to make an element display inline blocks
    return (
        <div>
            <h2>1-on-1 Notes</h2>
            <form>
                <label htmlFor="commentName" className="dblock"><strong>Commenter Name:</strong> </label>
                <input type="text" id="commenterName" name="commenterName" className="dblock" required></input>
                <label htmlFor="comment" className="dblock"><strong>Comment:</strong> </label>
                <input type="text" id="commentHere" name="comment" className="dblock" required></input>
                <button onClick={handleSubmit} >Add Note</button>

            </form>
            <ul>
                <li key={1}>Insert Comment Here</li>
            </ul>

        </div>
    )
}











