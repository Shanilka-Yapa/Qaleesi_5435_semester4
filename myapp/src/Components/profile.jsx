import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Images/Logo.png';
import homeIcon from '../assets/Images/Home.png';

const Profile = () => {
  const storedUser = JSON.parse(localStorage.getItem("user")) || {};

  return (
    <div style={{
      backgroundColor: '#7a5697ff', // Light purple background
      minHeight: '100vh',
      padding: '20px',
      fontFamily: 'Josefin Sans, sans-serif'
    }}>
      <div style={{
        backgroundColor: '#36074A',
        borderRadius: '20px',
        padding: '50px',
        color: 'white',
        maxWidth: '1000px',
        margin: '40px auto',
        minHeight: '400px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <img 
            src={Logo} 
            alt="Logo" 
            className='logo'
          />
          <Link to="/home" style={{ marginLeft: '20px', color: 'white' }}>
            <img 
              src={homeIcon} 
              alt="Home" 
              style={{ width: '24px', height: '24px' }} 
            />
          </Link>
        </div>

        <div style={{ display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: '30px' }}>
          <h2 style={{ 
            margin: 0,
            fontSize: '44px'}}>
            Welcome, <span style={{ color: '#FFD700' }}>{storedUser.username || 'Guest'}</span>
          </h2>
          <div style={{
            width: '130px',
            height: '130px',
            borderRadius: '50%',
            background: 'linear-gradient(180deg, #FFB6C1 0%, #87CEEB 100%)',
          }}></div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', fontSize:'26px'}}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <label style={{ width: '100px', color: '#E6E0EB', paddingRight: '100px' }}>Username</label>
            <input
              type="text"
              value={storedUser.username || ''}
              readOnly
              style={{
                backgroundColor: 'white',
                border: 'none',
                borderRadius: '20px',
                padding: '12px 20px',
                width:'500px',
                fontFamily: 'Josefin Sans, sans-serif',
                fontSize:'1.2rem'
              }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <label style={{ width: '100px', color: '#E6E0EB', paddingRight: '100px' }}>Email</label>
            <input
              type="email"
              value={storedUser.email || ''}
              readOnly
              style={{
                backgroundColor: 'white',
                border: 'none',
                borderRadius: '20px',
                padding: '12px 20px',
                width:'500px',
                fontFamily: 'Josefin Sans, sans-serif',
                fontSize:'1.2rem'
              }}
            />
          </div>

        </div>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'flex-end', 
          gap: '15px',
          marginTop: '20px' 
        }}>
          <button
            style={{
              backgroundColor: '#E6E0EB',
              color: '#36074A',
              border: 'none',
              borderRadius: '20px',
              padding: '8px 20px',
              cursor: 'pointer',
              width: '80px'
            }}
          >
            Edit
          </button>
          <button
            style={{
              backgroundColor: '#E6E0EB',
              color: '#36074A',
              border: 'none',
              borderRadius: '20px',
              padding: '8px 20px',
              cursor: 'pointer',
              width: '80px'
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;