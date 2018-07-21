import React, { Component } from 'react'
import '../App.css'

class Header extends Component {
    render() {
        return(
            <div className='navbar'>
                <div className='navbarleft'>
                    <a>Projects</a>
                    <a>Career Timeline</a>
                </div>
                <div className='navtitle'>
                    <h2>Ben Sullivan</h2>
                    <h3>Full-Stack Developer</h3>
                </div>
                <div className='navbarright'>
                    <a>About Me</a>
                    <a>Contact</a>
                </div>
            </div>
        )
    }
}

export default Header