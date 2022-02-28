import React from "react";

function Footer() {
    const date = new Date().getFullYear();
  
    return (
        <footer>
            liez &copy; <span>{date}</span>
        </footer>
    )
}

export default Footer