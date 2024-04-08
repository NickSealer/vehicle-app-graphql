import React from 'react'
import logo from '../CarWheel.png'
import { NavLink, Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg'>
        <div className='container-fluid'>
          <a className='navbar-brand'>
            <img src={logo} className='d-inline-block align-text-top App-logo' alt='logo' style={{ width: 22 }} />
            Vehicles
          </a>
          <div className='collapse navbar-collapse' id='navbarNavDropdown'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <NavLink to='/' className='nav-link'>Home</NavLink>
              </li>
              <li>
                <NavLink to='/cars' className='nav-link'>Cars</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}
