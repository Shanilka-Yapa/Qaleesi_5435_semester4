import { useState,useEffect } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import Footer from './Footer.jsx';
import './Home.css';
import DragonImg from '../assets/Images/articlesdragon.png';
import Logo from '../assets/Images/Logo.png';
import arrow from '../assets/Images/arrowback.png';
import books from '../assets/Images/books.png';
import bground from '../assets/Images/white.png';

import homeIcon from '../assets/Images/Home.png';
import aboutIcon from '../assets/Images/aboutus.png';
import articlesIcon from '../assets/Images/articles.png';
import creativeIcon from '../assets/Images/creativespace.png';
import joinIcon from '../assets/Images/joinus.png';
import contactIcon from '../assets/Images/contactus.png';

import img1 from '../assets/Images/Malala.png';
import img2 from '../assets/Images/Greta.png';
import img3 from '../assets/Images/Amanda.png';
import img4 from '../assets/Images/Waris.png';
import img5 from '../assets/Images/Halima.png';

export default function Articles() {


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
              backgroundImage: `url(${bground})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '20px',
              padding: '40px',
              color: 'white',
              height: '400px',
              alignItems: 'center'
            }}>

              <div className="hero-text">
                <h1 style={{ 
                    fontSize: '2.8rem', 
                    marginBottom: '20px',
                    letterSpacing: '10px' }}>
                  Articles:<br />
                </h1>
                <p style={{ 
                    fontSize: '1.5rem', 
                    lineHeight: '1.6',
                    letterSpacing: '13px' ,
                    fontWeight: 'bold'}}>
                  HANDLE WITH CURIOSITY.
                </p>

                <img src={books} alt="Books" style={{ 
                    width: '250px', 
                    height: 'auto',
                    borderRadius: '10px' }} />
              </div>

              <img 
                src={DragonImg} 
                alt="Dragon Mascot" 
                style={{
                  width: '450px',
                  height: 'auto',
                  marginRight: '40px'
                }}
              />
            </section>
          </div>
        </div>
        
        {/* Clickable Image Slider */}
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '40px',
            border: '2px dashed #36074A',
            borderRadius: '10px',
            padding: '20px',
        }}>
            <div
                onClick={() => setCurrentSlide(prev => (prev + 1) % 5)}
                style={{
                    width: '950px',
                    height: '600px',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                    position: 'relative',
                    cursor: 'pointer',
                }}
            >
            {[img1, img2, img3, img4, img5].map((img, index) => (
            <img
                key={index}
                src={img}
                alt={`Slide ${index + 1}`}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    transition: 'opacity 1s ease-in-out',
                    opacity: currentSlide === index ? 1 : 0,
                    pointerEvents: currentSlide === index ? 'auto' : 'none',
                }}
            />
        ))}
        </div>
        </div>



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
