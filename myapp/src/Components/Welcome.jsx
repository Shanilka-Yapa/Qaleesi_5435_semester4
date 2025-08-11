import React from 'react';
import './Welcome.css';
import dragon2 from '../Assets/Images/Dragon_2.png';
import Logo from '../Assets/Images/Logo.png';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div className="welcome-container" data-property-1="Default">
      <img src={Logo} alt="Logo" className="logo" />
      <div className="button-group">
        <Link to="/login"><button className="action-button">Login</button></Link>
        <Link to="/signin"><button className="action-button">Sign In</button></Link>
      </div>

    {/*Footer section*/}
    <div className='welcome-footer'>
        <p>All rights reserved</p>
    </div>

    <div className="center-container">
        <div className="purple-rectangle">
            <p className='Welcome-text'>Welcome to Qaleesi</p>
            <div style={{width: '60%', height: '100%', color: 'white', fontSize: 32, fontFamily: 'Josefin Sans', fontWeight: '500', wordWrap: 'break-word',marginTop:150,textAlign:'center',marginLeft:80}}>your platform to inspire, express, and ignite change.</div>
        </div>
        <img src={dragon2} alt="Dragon" className="dragon-image" />
    </div>
    </div>
  );
}

export default Welcome;
