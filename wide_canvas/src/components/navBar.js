import React, { Component }from 'react'
import { NavLink } from 'react-router-dom';


class Navbar extends Component {
  
    render() {
      return (
        <div id="nav_head">
          <h1 id="nav_heading">WideCanvas</h1>

          <nav>
          <ul>
          <NavLink
            className = "navLinks"
            to="/signup"
            exact
          >Special Request</NavLink>
  
          <NavLink
            className = "navLinks"
            to="/signup"
            exact
          >Newsletter</NavLink>
  
            
          <NavLink
            className = "navLinks"
            to="/signup"
            exact
          >Cart symbol here</NavLink>
  
          
          </ul>
          </nav>
        </div>
      )
    }
  }
  
  export default Navbar;