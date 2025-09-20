import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import Footer from './Footer.jsx';
import './Home.css';
import DragonImg from '../assets/Images/Homeblob.png';
import Logo from '../assets/Images/Logo.png';
import profile from '../assets/Images/person.png';
import bground from '../assets/Images/white.png';

import homeIcon from '../assets/Images/Home.png';
import aboutIcon from '../assets/Images/aboutus.png';
import articlesIcon from '../assets/Images/articles.png';
import creativeIcon from '../assets/Images/creativespace.png';
import joinIcon from '../assets/Images/joinus.png';
import contactIcon from '../assets/Images/contactus.png';

import safetyicon from '../assets/Images/safety.png';
import educationicon from '../assets/Images/education.png';
import freedomicon from '../assets/Images/freedom.png';
import expressicon from '../assets/Images/expression.png';
import equalityicon from '../assets/Images/equality.png';
import healthicon from '../assets/Images/health.png';

const slides = [
  {
    id: 'safety',
    title: 'Safety',
    text: 'Girls deserve to feel safe at home, school, and in public. Speak up, stand strong, and know that your safety matters.',
    color: '#A182D4',
    icon: safetyicon
  },
  {
    id: 'education',
    title: 'Education',
    text: 'Every girl has the right to go to school and learn. Education gives you power to shape your future and change your world.',
    color: '#8C9EFF',
    icon: educationicon
  },
  {
    id: 'freedom',
    title: 'Freedom',
    text: 'Girls have the right to dream, move, and choose freely without being forced into decisions they donot want.',
    color: '#C792E9',
    icon: freedomicon
  },
  {
    id: 'expression',
    title: 'Expression',
    text: 'Your voice matters. Whether through art, speech, writing, or dance you deserve to express who you are.',
    color: '#B388EB',
    icon: expressicon
  },
  {
    id: 'equality',
    title: 'Equality',
    text: 'You have the same rights and value as anyone else. No one should treat you unfairly because you are a girl.',
    color: '#D1A4FF',
    icon: equalityicon
  },
  {
    id: 'health',
    title: 'Health',
    text: 'You have the right to physical and mental healthcare. It is okay to ask for help and take care of your body and mind.',
    color: '#9FA8DA',
    icon: healthicon
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));//forward cycles through the slides array
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));//backward cycles through the slides array
  };

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
           src={profile} 
            alt="Profile" 
            className='profile-image'
            style={{
              width: '40px',
              height: '40px',
              cursor: 'pointer',
              objectFit: 'cover',
              zIndex: 1000
            }}
            onClick={() => navigate('/profile')}
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
                <h1 style={{ fontSize: '2.8rem', marginBottom: '20px' }}>
                  My Space<br />My Voice
                </h1>
                <p style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
                  Qaleesi: Your personalized space to learn, express, and grow. 
                  Customize it your way, because your voice matters.
                </p>
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

        {/* Key Pillars Section - Full Width and Centered */}
        <div style={{ 
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '40px 0'
        }}>
          <section className="key-pillars">
            <h2 style={{ 
              textAlign: 'center', 
              color: '#36074A', 
              marginBottom: '30px',
              fontSize: '2rem'
            }}>
              Key pillars
            </h2>
            <div className="pillar-icons" style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '15px',
              flexWrap: 'nowrap',
              marginBottom: '30px'
            }}>
              {slides.map((slide, index) => (
                <div 
                  key={slide.id}
                  className={`pillar-icon ${currentSlide === index ? 'active' : ''}`}
                  style={{ 
                    backgroundColor: currentSlide === index ? slide.color : '#E6E0EB',
                    padding: '15px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    minWidth: '100px',
                    width: '100px',
                    textAlign: 'center',
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center',
                    gap:'8px',
                    color: currentSlide === index ? '#2A0845' : '#36074A'
                  }}
                  onClick={() => setCurrentSlide(index)}
                >
                  <img 
                    src={slide.icon} 
                    alt={slide.title}
                    style={{
                      width: 'auto',
                      height: '60px',
                      marginBottom: '5px'
                    }}
                  />
                  {slide.title}
                </div>
              ))}
            </div>

            <div className="content-box" style={{
              backgroundColor: slides[currentSlide].color,
              padding: '40px',
              borderRadius: '20px',
              position: 'relative',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              <button className="arrow left" onClick={prevSlide}>&larr;</button>
              <p className="content-text" style={{
                textAlign: 'center',
                color: '#2A0845',
                fontSize: '2.0rem',
                lineHeight: '1.6',
                margin: '0 auto',
                maxWidth: '800px',
                fontWeight: 'bold',
                transition: 'all 0.3s ease' 
              }}>
                {slides[currentSlide].text}
              </p>
              <button className="arrow right" onClick={nextSlide}>&rarr;</button>
            </div>
          </section>
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
