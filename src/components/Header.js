import React from 'react'
import logo from "../assets/images/company-logo-transparent-png-19.png"
const Header = () => {
  return (
    <nav class="navbar">
    <div class="navbar-container">
      <div class="logo">
        <img src={logo} alt="Logo" />
        <span class="title">BrainLingo</span>
      </div>
      <ul class="menu">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Leaderboard</a>
        </li>
        <li>
          <a href="#">Daily Quiz</a>
        </li>
        <li>
          <a href="#">Game</a>
        </li>
      </ul>
      <div class="logout">
        <button>Sign Out</button>
      </div>
    </div>
  </nav>
  )
}

export default Header