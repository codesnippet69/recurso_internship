import Display from "./components/liftingstateup1";
import Enter from "./components/lift2";
import UserForms from "./components/registrationforms";
import UserForms2 from "./components/formik";
import { NavLink } from "react-router-dom";
import PassApp from "./components/passwordGenerator";

function FromButton() {
  const buttonStyle = {
    margin: "10px",
    padding: "12px 24px",
    background: "#1976d2",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background 0.2s",
  };

  const containerStyle = {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    marginTop: "40px",
  };

  return (
    <div style={containerStyle}>
      <NavLink to="/formik">
        <button style={buttonStyle}>Forms Using Formik</button>
      </NavLink>
      <NavLink to="/passwordgenerator">
        <button style={buttonStyle}>Password Generator</button>
      </NavLink>
    </div>
  );
}

export default FromButton;
