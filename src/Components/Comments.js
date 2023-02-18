// TODO: Comments and Notes 

export default function Comments(){
    // * handles the submit of comments added to the students profile via user input
    // * should also return current comments and notes data that is already attached to students profile
    function handleSubmit(event) { 
     }
  
     
     
     // * returns the form for the user to input their name as commenter name and comment they chose 

      return (
          <div>
              <h2>1-on-1 Notes</h2>
              <form>
                  <label htmlFor="commenterName" className="dblock">Commenter Name</label>
                  <input type="text" id="commenterName" name="commenterName" className="dblock" required></input>
                  <label htmlFor="coment" className="dblock">Comment</label>
                  <input type="text" id="coment" name="coment" className="dblock" required></input>
                 <button onClick={handleSubmit} >Add Note</button>
                 
              </form>
               <ul>
                  <li key={1}>Insert Comment Here</li> 
               </ul>
  
          </div>
      )
  }
  
  









