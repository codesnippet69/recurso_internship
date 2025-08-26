import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/NavBar'
import WelcomeMessage from './components/welcome'
import StudentsPage from './components/showStudentList'
import StudentForm from './components/addStudent'
import { useState,useEffect } from "react";

function App() {
  const [students, setStudents] = useState([])

  const [name, setName] = useState("");

  useEffect(() => {
    const userName = prompt("Enter your name:");
    if (userName) {
      setName(userName);
    }
  }, []);
const addStudent = (student)=>{
    setStudents([...students,student])
}
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<WelcomeMessage name={name} />} />
        <Route path="/students" element={<StudentsPage students={students} />} />
         <Route path="/addStudents" element={<StudentForm addStudent={addStudent} />} />
        <Route path="/about" element={<div style={{ padding: 20 }}><h2>About</h2><p>Simple demo app with routing.</p></div>} />
      </Routes>
    </>
  )
}

export default App
