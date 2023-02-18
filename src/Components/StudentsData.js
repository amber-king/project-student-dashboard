// TODO: StudentDataI

import StudentDataII from "./StudentDataII.js"
export default function Students({ info, cohort }) {
    // * empty array iterated through to match corresponding student clicked with correct cohort
    let newStudentArr = []
    if (cohort === "All Students") {
        newStudentArr = info
    } else {
        newStudentArr = info.filter((student) => student.cohort.cohortCode === cohort) // * runs through student info to set corresponding cohort for the student
    }

    // * returns the the student email,full name,dob and profile pic through the map method
    // * w/toggle button to change b/t show more & hide less ->StudentDataII
    // .replace(), modifies the string to the coders desire without changing the orignal data
    return (
        <div className="students">
            <div>
                <h3>{cohort.replace(/\d+/g, '') + " " + cohort.replace(/\D/g, '')}</h3>
                <h4>Total Students: {newStudentArr.length} </h4>
            </div>

            <ul>
                {newStudentArr.map((student, index) => (
                    <li key={index} className="firstStudent">
                        <div className="picture">
                            <img src={student.profilePhoto} alt="student-pic "></img>
                            <div className="infoSpot">
                                <p><strong>{student.names.preferredName} {student.names.middleName.slice(0, 1)}. {student.names.surname}</strong></p>
                                <p>{student.username}</p>
                                <p>Birthday: {student.dob}</p>


                            </div>

                        </div>
                        <StudentDataII student={student} />
                        {/*  The <hr> HTML element represents a thematic break between paragraph-level elements*/}

                    </li>
                ))}
            </ul>
        </div>
    )

}