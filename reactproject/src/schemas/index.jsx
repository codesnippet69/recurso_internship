import * as YUP from 'yup'


export const studentSchema = YUP.object({
studentName: YUP.string().min(3, "Name must be minimum 3 character").max(20," max 20 characters").required("PLease Enter Your Name"),
studentId : YUP.string().required("Please enter StudentID"),
studentAge: YUP.number().min(1).max(120).required("Please enter age"),
studentDepartement : YUP.string().max(20, "Max allowed characters are 20" ).required("Please Enter A Departement Name")
})

