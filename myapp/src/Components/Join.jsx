import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import Footer from './Footer.jsx';
import './Home.css';
import './Join.css';

import Logo from '../assets/Images/Logo.png';
import arrow from '../assets/Images/arrowback.png';
import bground from '../assets/Images/white.png';
import img1 from '../assets/Images/volunt1.png';
import img2 from '../assets/Images/volunt2.png';
import img3 from '../assets/Images/volunt3.png';


import homeIcon from '../assets/Images/Home.png';
import aboutIcon from '../assets/Images/aboutus.png';
import articlesIcon from '../assets/Images/articles.png';
import creativeIcon from '../assets/Images/creativespace.png';
import joinIcon from '../assets/Images/joinus.png';
import contactIcon from '../assets/Images/contactus.png';
import hands from '../assets/Images/volunteer1.png';


export default function Join() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const navigate = useNavigate();


    const MenuItem = ({ icon, text, path }) => {
        const currentPath = window.location.pathname;
        const isHome = path === '/';
        const isActive = currentPath === path;

    return (
      <li style={{ marginBottom: '15px' }}>
        <Link 
          to={path} 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: 'white',
            textDecoration: 'none',
            fontSize: '16px',
            padding: '10px',
            borderRadius: '5px',
            transition: 'all 0.3s ease',
            opacity: isActive || isHome ? 1 : 0.6,
            fontWeight: isActive || isHome ? 'bold' : 'normal'
          }}
        >
          <img 
            src={icon} 
            alt={text} 
            style={{ 
              width: '24px', 
              height: '24px',
              opacity: isActive || isHome ? 1 : 0.6
            }} 
          />
          {text}
        </Link>
      </li>
    );
  };

  return (
    <div className="home-container" style={{
      minHeight: '100vh',
      position: 'relative',
      overflowY: 'auto',
      overflowX: 'hidden',
      fontFamily:'josefin sans, sans-serif'
    }}>
      <header className="header" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 40px',
        backgroundColor: '#fff',
        position: 'relative'
      }}>
        <img src={Logo} alt="Qaleesi Logo" className="logo" />

      
        <img 
           src={arrow} 
            alt="arrow back" 
            className='profile-image'
            style={{
              width: '40px',
              height: '40px',
              cursor: 'pointer',
              objectFit: 'cover',
              zIndex: 1000
            }}
            onClick={() => navigate('/home')}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          />

      </header>

      <main style={{ padding: '20px' }}>
        <div style={{ display: 'flex', gap: '40px', marginBottom: '40px' }}>
          {/* Left Menu */}
          <nav style={{
            width: '250px',
            backgroundColor: '#36074A',
            padding: '20px',
            borderRadius: '10px',
            height: '400px',
          }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0}}>
            <MenuItem icon={homeIcon} text="Home" path="/home"/>
            <MenuItem icon={aboutIcon} text="About us" path="/about" />
            <MenuItem icon={articlesIcon} text="Articles" path="/articles" />
            <MenuItem icon={creativeIcon} text="Creative space" path="/creative" />
            <MenuItem icon={joinIcon} text="Join us" path="/join" />
            <MenuItem icon={contactIcon} text="Contact us" path="/contact" />
          </ul>
          </nav>

          {/* Right Content */}
          <div style={{ flex: 1 }}>
            <section className="hero-section" style={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '20px',
                padding: '40px',
                color: 'white',
                height: '400px',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                backgroundImage: `url(${bground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',

            }}>
                <img src={hands} alt="Volunteer Hands" style={{
                    width: '100%',
                    maxWidth: '1000px',
                    marginTop: '20px',
                    borderRadius: '10px',
                }} />

            </section>
          </div>
        </div>

        <section
        style={{
            backgroundColor: '#ceb7dbff',
            padding: '60px 20px',
            borderRadius: '50px',
            fontFamily: 'Josefin Sans, sans-serif',
            color: '#36074A',
            maxWidth: '2000px',
            margin: '0 auto',
            fontSize: '1.3rem',
            border: '2px dashed #36074A',
        }}
        >
          <h2>Fill the following form</h2>
          <div className="form-container">
            <div className="form-group">
              <label htmlFor="first-name" className="form-label">First name</label>
              <input type="text" id="first-name" name="first-name" className="form-input" />
            </div>

            <div className="form-group">
              <label htmlFor="last-name" className="form-label">Last name</label>
              <input type="text" id="last-name" name="last-name" className="form-input" />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" id="email" name="email" className="form-input" />
            </div>

            <div className="form-group">
              <label htmlFor="phone-no" className="form-label">Phone no</label>
              <input type="tel" id="phone-no" name="phone-no" className="form-input" />
            </div>

            <div className="form-group">
              <label htmlFor="reason" className="form-label">Reason</label>
              <input type="text" id="reason" name="reason" className="form-input" />
            </div>

            <button className="form-button">Submit</button>
          </div>

    </section>
    <section style={{
            padding: '60px 20px',
            borderRadius: '50px',
            fontFamily: 'Josefin Sans, sans-serif',
            color: '#36074A',
            maxWidth: '2000px',
            margin: '0 auto',
            fontSize: '1.3rem',
            border: '2px dashed #36074A',
    }}>
      <h2>Our Volunteers</h2>
      <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px' // space between images
}}>
    <img src={img1} alt="Volunteer 1" style={{
        width: '100%',
        maxWidth: '800px',
        borderRadius: '10px',
    }} />
    <img src={img2} alt="Volunteer 2" style={{
        width: '100%',
        maxWidth: '800px',
        borderRadius: '10px',
    }} />
    <img src={img3} alt="Volunteer 3" style={{
        width: '100%',
        maxWidth: '800px',
        borderRadius: '10px',
    }} />
</div>


    </section>

      </main>
      <Footer />
    </div>
  );
}

// MenuItem component
const MenuItem = ({ icon, text, path }) => (
  <li style={{ marginBottom: '15px' }}>
    <Link to={path} style={{
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      color: '#36074A',
      textDecoration: 'none',
      fontSize: '16px',
      padding: '10px',
      borderRadius: '5px',
      transition: 'background-color 0.3s ease'
    }}>
      {icon}
      {text}
    </Link>
  </li>
);
