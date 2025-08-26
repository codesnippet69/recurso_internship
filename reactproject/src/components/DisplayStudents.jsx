import React from "react";

export default function DisplayStudents({ students }) {
    return (
        <ul style={{ listStyle: "none", padding: 0 }}>
            {students.map((student) => (
                <li
                    key={student.studentId}
                    style={{
                        background: "#f5f5f5",
                        margin: "10px 0",
                        padding: "12px 18px",
                        borderRadius: "8px",
                        boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                        fontFamily: "Segoe UI, sans-serif",
                        fontSize: "16px",
                    }}
                >
                    <strong>{student.studentName}</strong> — ID: {student.studentId} — Age: {student.studentAge} — Dept: {student.studentDepartement}
                </li>
            ))}
        </ul>
    );
}