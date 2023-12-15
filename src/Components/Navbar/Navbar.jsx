import React from 'react'
import "./navbar.css"

function Navbar() {
  return (
    <div className='container'>
        <div className='header'>
            <input type="checkbox" id='nav-check' />
            <div className='nav-header'>
                <a href="/"><img className="logoImage" src="" alt="" /></a>
            </div>
            <div className='nav-btn'>
                <label htmlFor="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>
            <div className='nav-links'>
                <a href="/">Home</a>
                <a href="/schedule">Schedule</a>
                <a href="/news">News</a>
                <a href="/ranking">Ranking</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar