// TODO: Comments and Notes 
// ! we will begin at App.js & work through the student.js files to connect this comment.js section

export default function Comments({ id, info, setInfo, student }) {
    
// * handles the submit of comments added to the students profile via user input

    function handleSubmit(event) {
        event.preventDefault()

        const commentChange = info.map((students) => {
            if (students.id === id) {
                students.notes = [...students.notes,
                { commenter: event.target.commenterName.value, comment: event.target.comment.value }] 
            }
            // * should also return current comments and notes data that is already attached to students profile
            return students
        })
        // * sets new comment info to info setter
        setInfo(commentChange)
        event.target.commenterName.value = ""
        event.target.comment.value = ""



    }

    // * returns the form for the user to input their name as commenter name and comment they chose 
    // dblock ->Use the d-inline-block class to make an element display inline blocks
    return (
        <div>
            <h2>1-on-1 Notes🖊️</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="commentName" className="dblock"><strong>Commenter Name:</strong> </label>
                <input type="text" id="commenterName" name="commenterName" className="dblock" required></input>
                <label htmlFor="comment" className="dblock"><strong>Comment:</strong> </label>
                <input type="text" id="comment" name="comment" className="dblock" required></input>
                <button type="submit">Add Note</button>

            </form>
            <ul>

                {student.notes.map((before, after) =>

                    <li key={after}>{before.commenter} Says, {before.comment}</li>

                )}

            </ul>

        </div>
    )
}











