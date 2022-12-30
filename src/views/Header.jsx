import { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class Header extends Component {
    state = {
        
    }

  render() {
    return (
      <section className='header flex'>
          <div className='logo'>Btc Wallet</div>
          <nav className='nav flex'>
            <NavLink exact to="/"  className={`nav-link ${this.state.active === 'home'? 'active' : ''}`}>Home</NavLink>
            <NavLink to="/contact"  className={`nav-link ${this.state.active === 'contacts'? 'active' : ''}`}>Contacts</NavLink>
            <NavLink to="/statistics"  className={`nav-link ${this.state.active === 'statistics'? 'active' : ''}`}>Statistics</NavLink>
            <NavLink to="/signup"  className={`nav-link ${this.state.active === 'statistics'? 'active' : ''}`}>Signup</NavLink>
          </nav>
      </section>
    )
  }
}
