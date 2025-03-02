import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Chitter</h1>
      <Link style={linkStyle} to="/"> Home </Link>
      |
      <Link style={linkStyle} to="/about"> About </Link>
      |
      <Link
        style={linkStyle} to="/">
        <span onClick={sessionStorage.clear()}> Logout </span>
      </Link>
    </header>
  )
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

export default Header;
