import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import Footer from './Footer.jsx';
import './Home.css';
import './Contact.css';
import Logo from '../assets/Images/Logo.png';
import arrow from '../assets/Images/arrowback.png';
import bground from '../assets/Images/white.png';
import callIcon from '../assets/Images/call.png';
import locationIcon from '../assets/Images/location.png';

import homeIcon from '../assets/Images/Home.png';
import aboutIcon from '../assets/Images/aboutus.png';
import articlesIcon from '../assets/Images/articles.png';
import creativeIcon from '../assets/Images/creativespace.png';
import joinIcon from '../assets/Images/joinus.png';
import contactIcon from '../assets/Images/contactus.png';

export default function Contact() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    //handle form submit
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch("http://localhost:5000/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, message: name }), // name is the  message
});

      if (response.ok) {
        alert(`Thanks! for contacting us. You will receive a reply email as soon as possible.`);
        setEmail('');
        setName('');
      } else {
        alert("There was an issue sending your message. Please try again.");
        }
      } catch (error) {
        console.error("Error sending contact form:", error);
        alert("Server error. Please try again later.");
      }
    };

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
            fontWeight: isActive || isHome ? 'bold' : 'normal'}}>
          <img 
            src={icon} 
            alt={text} 
            style={{ 
              width: '24px', 
              height: '24px',
              opacity: isActive || isHome ? 1 : 0.6}} />
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
      fontFamily:'josefin sans, sans-serif'}}>
      <header className="header" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 40px',
        backgroundColor: '#fff',
        position: 'relative'}}>
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
              zIndex: 1000}}
            onClick={() => navigate('/home')}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}/>
      </header>

      <main style={{ padding: '20px' }}>
        <div style={{ display: 'flex', gap: '40px', marginBottom: '40px' }}>
          {/* Left Menu */}
          <nav style={{
            width: '250px',
            backgroundColor: '#36074A',
            padding: '20px',
            borderRadius: '10px',
            height: '400px',}}>
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
                backgroundPosition: 'center',}}>
                
                <div className="hero-text">
                    <h1 style={{ fontSize: '4.9rem', 
                        marginBottom: '20px',
                        letterSpacing: '5px',
                        paddingTop:'0',
                        color:'aliceblue'}}>Contact us</h1>
                </div>

                <div className="contact-form">
                    <h2 style={{
                        fontSize:'2.5rem'}}>Any questions or remarks? Just write us a message!</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            style={{
                                fontFamily: 'Josefin Sans, sans-serif',  
                            }}
                            type="email"  //input expects an email
                            placeholder="Enter a valid email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required/>
                        <input
                            style={{
                                fontFamily: 'Josefin Sans, sans-serif',
                            }}
                            type="text"
                            placeholder="Enter your Messsage"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required/><br />

                        <button type="submit" style={{
                            fontFamily: 'Josefin Sans, sans-serif'
                        }}
                        >SUBMIT</button>
                    </form>
                </div>
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
            fontSize: '1.3rem'}}>
    {/* Call and location */}
          <div
              style={{
                marginTop: '60px',
                textAlign: 'center',
                backgroundColor: '#340f4dff',
                height: 'auto',
                padding: '20px',
                borderRadius: '50px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                fontFamily: 'Josefin Sans, sans-serif',
                color: 'white',
                fontSize: '1.2rem'}}>
            {/*Phone section*/}
            <div style={{
                display:'flex',
                alignItems:'flex-start',
                gap:'12px',
                maxWidth:'45%'}}>
                <img 
                    src={callIcon}
                    alt="Phone Icon"
                    style={{
                        width: '60px',
                        height: '60px',
                        border:'none',
                        outline:'none'}} />
                <div style={{ lineHeight: '1.5'}}>
                    <h4 style={{ margin: '0 0 8px 0'}}> PHONE (LANDLINE)</h4>
                    <p style={{ margin: '0'}}>+912 3567 8987<br />+912 5252 3336</p>
                </div>
            </div>

            {/*Location section*/}
            <div style={{
                display:'flex',
                alignItems:'flex-start',
                gap:'12px',
                maxWidth:'45%'}}>
                <img
                    src={locationIcon}
                    alt="Location Icon"
                    style={{
                        width: '60px',
                        height: '60px',
                        border:'none',
                        outline:'none'}} />
                <div style={{ lineHeight: '1.5'}}>
                    <h4 style={{ margin: '0 0 8px 0'}}> LOCATION</h4>
                    <p style={{ margin: '0'}}>123 Main Street<br />City, State, 12345</p>
                </div>
            </div>
        </div>
    </section>
    </main>
    <Footer />
    </div>
  );
}
