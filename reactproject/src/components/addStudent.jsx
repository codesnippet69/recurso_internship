import { useFormik } from "formik";
import { studentSchema } from "../schemas";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function StudentForm({ addStudent }) {
    const form= useRef(null);
    const navigate = useNavigate();


    useEffect(()=>{
        if(form.current){
            form.current.focus();
        }
    }, [])
    const initialValues = {
        studentName: "",
        studentId: "",
        studentAge: "",
        studentDepartement: "",
    };

    const { values, touched, errors, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: studentSchema,
        onSubmit: (submittedValues, actions) => {
            console.log("values submitted", { submittedValues });
            
            addStudent(submittedValues)
            actions.resetForm();
            navigate('/students');
        },
    });

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                maxWidth: "400px",
                margin: "40px auto",
                padding: "24px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                background: "#fafbfc",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                display: "flex",
                flexDirection: "column",
                gap: "18px",
            }}
        >
            <div style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="studentName" style={{ marginBottom: "6px", fontWeight: 500 }}>
                    Name
                </label>
                <input
                    id="studentName"
                    ref={form}
                    onBlur={handleBlur}
                    name="studentName"
                    type="text"
                    onChange={handleChange}
                    value={values.studentName}
                    style={{
                        padding: "8px",
                        border: errors.studentName && touched.studentName ? "1.5px solid #e57373" : "1px solid #ccc",
                        borderRadius: "4px",
                        fontSize: "16px",
                    }}
                />
                {errors.studentName && touched.studentName && (
                    <span style={{ color: "#e57373", fontSize: "13px", marginTop: "4px" }}>{errors.studentName}</span>
                )}
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="studentId" style={{ marginBottom: "6px", fontWeight: 500 }}>
                    Student ID
                </label>
                <input
                    id="studentId"
                    onBlur={handleBlur}
                    name="studentId"
                    type="text"
                    onChange={handleChange}
                    value={values.studentId}
                    style={{
                        padding: "8px",
                        border: errors.studentId && touched.studentId ? "1.5px solid #e57373" : "1px solid #ccc",
                        borderRadius: "4px",
                        fontSize: "16px",
                    }}
                />
                {errors.studentId && touched.studentId && (
                    <span style={{ color: "#e57373", fontSize: "13px", marginTop: "4px" }}>{errors.studentId}</span>
                )}
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="studentAge" style={{ marginBottom: "6px", fontWeight: 500 }}>
                    Age
                </label>
                <input
                    id="studentAge"
                    onBlur={handleBlur}
                    name="studentAge"
                    type="text"
                    onChange={handleChange}
                    value={values.studentAge}
                    style={{
                        padding: "8px",
                        border: errors.studentAge && touched.studentAge ? "1.5px solid #e57373" : "1px solid #ccc",
                        borderRadius: "4px",
                        fontSize: "16px",
                    }}
                />
                {errors.studentAge && touched.studentAge && (
                    <span style={{ color: "#e57373", fontSize: "13px", marginTop: "4px" }}>{errors.studentAge}</span>
                )}
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="studentDepartement" style={{ marginBottom: "6px", fontWeight: 500 }}>
                    Department
                </label>
                <input
                    id="studentDepartement"
                    onBlur={handleBlur}
                    name="studentDepartement"
                    type="text"
                    onChange={handleChange}
                    value={values.studentDepartement}
                    style={{
                        padding: "8px",
                        border: errors.studentDepartement && touched.studentDepartement ? "1.5px solid #e57373" : "1px solid #ccc",
                        borderRadius: "4px",
                        fontSize: "16px",
                    }}
                />
                {errors.studentDepartement && touched.studentDepartement && (
                    <span style={{ color: "#e57373", fontSize: "13px", marginTop: "4px" }}>{errors.studentDepartement}</span>
                )}
            </div>

            <button
                type="submit"
                style={{
                    marginTop: "12px",
                    padding: "10px 0",
                    background: "#1976d2",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    fontWeight: 600,
                    fontSize: "16px",
                    cursor: "pointer",
                    transition: "background 0.2s",
                }}
            >
                Submit
            </button>
        </form>
    );
}
