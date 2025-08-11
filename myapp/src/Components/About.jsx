import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import Footer from './Footer.jsx';
import './Home.css';
import Logo from '../assets/Images/Logo.png';
import girls from '../assets/Images/girlsabout.png';
import arrow from '../assets/Images/arrowback.png';
import bground from '../assets/Images/white.png';

import homeIcon from '../assets/Images/Home.png';
import aboutIcon from '../assets/Images/aboutus.png';
import articlesIcon from '../assets/Images/articles.png';
import creativeIcon from '../assets/Images/creativespace.png';
import joinIcon from '../assets/Images/joinus.png';
import contactIcon from '../assets/Images/contactus.png';

import mission from '../assets/Images/mission.png';
import story from '../assets/Images/story.png';
import whatWeDo from '../assets/Images/do.png';
import joinUs from '../assets/Images/join.png';
import impact from '../assets/Images/impact.png';


export default function About() {
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
              backgroundImage: `url(${bground})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '20px',
              padding: '40px',
              color: 'white',
              height: '400px',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center'
            }}>

              <div className="hero-text">
                <h1 style={{ fontSize: '2.2rem', 
                    marginBottom: '20px',
                    letterSpacing: '5px',
                    paddingBottom: '20px'                }}>
                  WHERE EVERY GIRL'S VOICE MATTERS
                </h1>
              </div>

              <img 
                src={girls} 
                alt="Girls Mascot" 
                style={{
                  width: '500px',
                  height: 'auto',
                  marginRight: '40px',
                }}
              />
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
            fontSize: '1.3rem'
        }}
        >

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
        {/* Card component */}
        {[
            {
                title: 'Our Mission',
                image: mission,
                description: 'To empower girls to speak out, express themselves creatively, learn their rights, and take action towards a more equal world.'

            },

            {
                title: 'Our Story',
                image: story,
                description: 'Qaleesi was born from one idea: When girls express themselves freely, they become unstoppable. We built Qaleesi as that space—bold, creative, and empowering.'
            },

            {
                title: 'What We Do',
                image: whatWeDo,
                description: 'From posters to pledges, Qaleesi gives every girl a voice that matters.'
            },

            {
                title: 'Join Us',
                image: joinUs,
                description: 'Volunteer with Qaleesi and make a difference today! Click here to join us.'
            },

        ].map((item, index) => (
            <div key={index}
                style={{
                    backgroundColor: '#fff',
                    borderRadius: '15px',
                    padding: '20px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}>
                <h3>{item.title}</h3>
                <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '100px', height: 'auto', borderRadius: '10px', marginBottom: '10px' }}
                />
                <p>{item.description}</p>
            </div>
        ))}

  </div>

    {/* Our Impact */}
<div
  style={{
    marginTop: '60px',
    textAlign: 'center',
    backgroundColor: '#340f4dff',
    height: 'auto',
    padding: '40px 20px',
    borderRadius: '50px',
  }}
>
  <h3 style={{ fontSize: '2rem', marginBottom: '30px', color: 'white' }}>Our Impact</h3>

  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '40px',
      flexWrap: 'wrap',
    }}
  >
    {/* Impact Image */}
    <img
      src={impact}
      alt="Our Impact"
      style={{
        width: '250px',
        height: 'auto',
        borderRadius: '10px',
      }}
    />

    {/* Achievements List */}
    <ul
      style={{
        listStyle: 'none',
        padding: 0,
        fontSize: '1.9rem',
        textAlign: 'left',
        lineHeight: '2',
        maxWidth: '600px',
        listStyleType:'disc',
        color: 'white'
      }}
    >
      <li>100+ active volunteers</li>
      <li>5000+ contribute to empower girls</li>
      <li>50+ events and workshops</li>
      <li>1000+ voices raised</li>
    </ul>
  </div>
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
