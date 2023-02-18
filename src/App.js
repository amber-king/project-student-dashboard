import { useState } from "react"
import React from "react"
import Info from "./data/data.json" // * import of object of student data
import Header from "./Components/Header.js" // * import of header info 
import Cohorts from "./Components/Cohorts" // * import of cohorts 
import StudentsData from "./Components/StudentsData.js" // * import of student info

function App() {
  const [info, setInfo] = useState(Info) // * state for data.json
  const[cohort, setCohort] = useState("All Students")
 
  return (
    <div>
      <Header />
      <main>
       
        <Cohorts info={info} setCohort={setCohort}/>
        <StudentsData info={info} cohort={cohort} />
      </main>
      {/* <Footer/> */}
      <h3>Footer Here</h3>

    </div>

  );
}

export default App;
