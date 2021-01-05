import React from 'react'
import "../Styles/NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
    return (
        <div>
            <div className='NavBars'>
                <nav>
                    <a>Home</a>
                    <a>About</a>
                    <a>Education</a>
                    <a>Projects</a>
                    <a>Contact</a>
                </nav>
            </div>

        </div>

    )
}

export default NavBar
