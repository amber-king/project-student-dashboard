
export default function Achievement(){
    return (
        <div className="achievement">
             <div>
                <h3>Codewars:</h3>
                <ul>
                    <li key={1}>Current Total:</li>
                    <li key={2}>Last Week:</li>
                    <li key={3}>Goal:</li>
                 </ul>
                 <h5>Percent of Goal Achieved:</h5>
             </div>
             <div>
                <h3>Scores</h3>
                <ul>
                    <li key={1}>Assignements:</li>
                    <li key={2}>Projects:</li>
                    <li key={3}>Assessments:</li>
                 </ul>
             </div>
             <div>
                <h3>Certifications</h3>
                <ul>
                    <li key={1}>Resume:</li>
                    <li key={2}>LinkedIn:</li>
                    <li key={3}>Mock Interview:</li>
                    <li key={4}>GitHub:</li>
                 </ul>
             </div>
             
        

           </div>
              
          )

       
    
}

