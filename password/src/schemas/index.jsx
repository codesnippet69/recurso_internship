import * as YUP from "yup"


export const signUpSchema = YUP.object({
  firstName: YUP.string()
    .min(3, "First name must be at least 3 characters")
    .max(25, "First name must be at most 25 characters")
    .required("Please enter your first name"),
  lastName: YUP.string()
    .min(2, "Last name must be at least 2 characters")
    .max(25, "Last name must be at most 25 characters")
    .required("Please enter your last name"),
  email: YUP.string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  phoneNumber: YUP.string()
    .matches(/^\d{10,14}$/, "Please enter a valid phone number")
    .required("Please enter your phone number"),
  password: YUP.string()
    .min(6, "Password must be at least 6 characters")
    .required("Please enter your password"),
  confirmPassword: YUP.string()
    .oneOf([YUP.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
})