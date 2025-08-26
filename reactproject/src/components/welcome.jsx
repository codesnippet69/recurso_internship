import React from "react";

export default function WelcomeMessage({ name }) {
    const containerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "30vh",
        background: "#f5f7fa",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        margin: "2rem 0",
    };

    const headingStyle = {
        color: "#2d3748",
        fontSize: "2rem",
        fontWeight: 600,
        letterSpacing: "0.5px",
        textAlign: "center",
        margin: 0,
    };

    return (
        <div style={containerStyle}>
            {name ? (
                <h1 style={headingStyle}>
                    Welcome to React Student Dashboard {name}
                </h1>
            ) : (
                <h1 style={headingStyle}>
                    Welcome To Dashboard Guest! Please pass a name
                </h1>
            )}
        </div>
    );
}