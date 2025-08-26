import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Student Dashboard</h2>
      <div style={styles.links}>
        <NavLink to="/" style={styles.link} end>
          Home
        </NavLink>
        <NavLink to="/students" style={styles.link}>
          Students
        </NavLink>
        <NavLink to="/about" style={styles.link}>
          About
        </NavLink>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#282c34",
    padding: "10px 20px",
  },
  logo: {
    color: "#61dafb",
    margin: 0,
  },
  links: {
    display: "flex",
    gap: "15px",
  },
  link: ({ isActive }) => ({
    color: isActive ? "#61dafb" : "white",
    textDecoration: "none",
    fontWeight: isActive ? "bold" : "normal",
  }),
};

export default Navbar;
