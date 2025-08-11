import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import Footer from './Footer.jsx';
import './Home.css';
import './Contact.css';
import './Creative.css';
import Logo from '../assets/Images/Logo.png';
import arrow from '../assets/Images/arrowback.png';
import bground from '../assets/Images/white.png';
import create from '../assets/Images/Dragon 6.png';



import homeIcon from '../assets/Images/Home.png';
import aboutIcon from '../assets/Images/aboutus.png';
import articlesIcon from '../assets/Images/articles.png';
import creativeIcon from '../assets/Images/creativespace.png';
import joinIcon from '../assets/Images/joinus.png';
import contactIcon from '../assets/Images/contactus.png';



export default function Creative() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can replace this with actual form submission logic
        console.log('Submitted:', { email, name });
        alert(`Thanks for reaching out, ${name}!`);
        setEmail('');
        setName('');
    };

    
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
              alignItems: 'center',
              flexDirection:'row-reverse'
            }}>

              <div className="hero-text">
                <h1 style={{ fontSize: '2.8rem', marginBottom: '20px' }}>
                  Welcome to your<br />Creative playground
                </h1>

              </div>

              <img 
                src={create} 
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

        <section>
            <div className="idea-form-container">
                <h1 className="form-title">SHARE YOUR IDEA OR IMAGE</h1>
                <div className="idea-input-box">
                    <textarea
                        className="idea-textarea"
                        placeholder="Write your brilliant idea here"
                    ></textarea>
                </div>
                <div className="button-container">
                    <button className="upload-button">Upload</button>
                    <button className="upload-button">Submit</button>
                </div>
            </div>
        </section><br />

        <section>
            <div className="idea-form-container" style={{
            backgroundColor: '#ceb7dbff',
            padding: '60px 20px',
            borderRadius: '50px',
            fontFamily: 'Josefin Sans, sans-serif',
            color: '#36074A',
            maxWidth: '2000px',
            margin: '0 auto',
            fontSize: '1.3rem'
            }}>
                <h1 className='form-title'>YOUR GALLERY</h1>
                <div className="container">
                    <div className="empty-box">
                        <div className='button-row'>
                            <button className='edit-button'>Edit</button>
                            <button className='edit-button'>Delete</button>
                        </div>
                    </div>
                    <div className="empty-box"></div>
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
