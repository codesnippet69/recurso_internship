import DisplayStudents from "./DisplayStudents"
import { useNavigate } from "react-router-dom"

function StudentsPage({ students }){

const navigate = useNavigate()

return(
<div>
    <h1>Students Page</h1>

 
{students.length === 0 ? (
  <div>
    <p>No Students Found. Please Add Students.</p>
    <button onClick={() => navigate('/addStudents')} style={{ padding: '8px 12px' }}>Add Student</button>
  </div>
) : (
    <>
    <div style={{ marginBottom: 12 }}>
      <button onClick={() => navigate('/addStudents')} style={{ padding: '8px 12px' }}>Add Student</button>
    </div>
  <DisplayStudents students={students} />
  </>
)}




</div>
)
}

export default StudentsPage

