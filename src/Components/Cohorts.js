// TODO: Cohorts


export default function Cohort({ info, setCohort }) {

    function pickedCohort(before) {
        setCohort(before)
    }
    // * sets before cohort to picked/after cohort as user is clicking through the info

    function noDuplicate(noStudentArr) {
        return noStudentArr.filter((before, after) => noStudentArr.indexOf(before) === after)
        // * function does the follow run through w/ these methods to not duplicate the  student info --v
        // The filter() method creates a new array filled with elements that pass a test provided by a function.
        //The indexOf() method returns the position of the first occurrence of specified character(s) in a string.
    }

    let returnArr = noDuplicate(info.map((student) => student.cohort.cohortCode))
    returnArr.unshift("All Students")

    //  ? .Sort() attempt & results ---v
    //let organizedArr = returnArr.sort() 
    // organizedArr.unshift("All Students")
    // {organizedArr.map((before, after) => <li key={after} onClick={() => pickedCohort(before)}>{before.replace(/\d+/g, '') + " " + before.replace(/\D/g, '')}<hr></hr></li>)}
    // ? sorts by season then year but not all years together ---^
    
    // let sortedArr=returnArr.sort(function(a, b){
    //     if(a.cohort.cohortCode < b.cohort.cohortCode) { return -1; }
    //     if(a.cohort.cohortCode > b.cohort.cohortCode) { return 1; }
    //     return 0; 

    // sortedArr.unshift("All Students")
    // }
    // )
    // ? breaks page 🤦🏾‍♀️ --- ^



    // TODO: should be in the following order --v
    // ex: Fall 2025 ,Fall 2026 instead of Fall 2025,Winter 2025 ,Spring 2026 etc.



    // * the new array of info is set with a map through of the previous function by the following methods --v
    //The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
    // map() creates a new array from calling a function for every array element. 
    // map() calls a function once for each element in an array. 

    // * returns mapped through return array with the choosen cohort hooked to the button
    // .replace(), modifies the string to the coders desire without changing the orignal data
    return (
        <div className="cohorts">
            <h2>Chooose a Class by Start Date📑⤵️</h2>
            <hr></hr>
            <ul>
                {returnArr.map((before, after) => <li key={after} onClick={() => pickedCohort(before)}>{before.replace(/\d+/g, '') + " " + before.replace(/\D/g, '')}<hr></hr></li>)}

            </ul>

        </div >
    )
}