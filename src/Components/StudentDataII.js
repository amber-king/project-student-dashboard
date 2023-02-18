// TODO: StudentDataII

import { useState } from "react"
import Achievement from "./Achievement.js";
import Comments from "./Comments.js";

export default function StudentDataII({ student }) {
    const [moreInfo, setMoreInfo] = useState(false) // * state for show more & hide less option

    // * sets the more info to the setter for the show more or hide less option
    function toggleMoreInfo() {
        setMoreInfo(!moreInfo);
    }

    // * toggle button for show more & hide less option
    // * hooked onto student data(student 1), return w/ Achievement and Comments information for the student
    return (
        <div>
            <a href="#" onClick={toggleMoreInfo} >{!moreInfo ? "Show more" : "Hide less"}</a>

            {moreInfo ? (
                <div>
                    < Achievement />
                    < Comments />
                </div>
            ) : (null)}

        </div>
    )


}