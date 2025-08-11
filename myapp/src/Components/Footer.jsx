import { Link } from 'react-router-dom';
import facebook from '../Assets/Images/Facebook.png';
import twitter from '../Assets/Images/Twitter.png';
import instagram from '../Assets/Images/Instagram.png';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#968b9eff',
      padding: '0',
      margin: '0',
      width: '100vw',
      left: 0,
      boxSizing: 'border-box',
      zIndex: 100
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: '20px 40px',
        width: '100%',
        boxSizing: 'border-box',
        fontFamily: 'Josefin Sans, sans-serif'
      }}>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '20px' 
        }}>

          <Link 
          to="/about" 
          style={{ 
            textDecoration: 'none', 
            color: '#682e81ff',
            transition: 'color 0.3s ease' 
          }}
          onMouseEnter={(e) => e.target.style.color = '#36074A'}
          onMouseLeave={(e) => e.target.style.color = '#682e81ff'}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >About</Link>

          <Link 
          to="/home" 
          style={{ 
            textDecoration: 'none', 
            color: '#682e81ff',
            transition: 'color 0.3s ease' 
          }}
          onMouseEnter={(e) => e.target.style.color = '#36074A'}
          onMouseLeave={(e) => e.target.style.color = '#682e81ff'}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >Home</Link>
        </div>

        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '20px' 
        }}>

          <Link 
          to="/join" 
          style={{ 
            textDecoration: 'none', 
            color: '#682e81ff',
            transition: 'color 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.color = '#36074A'}
          onMouseLeave={(e) => e.target.style.color = '#682e81ff'}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >JoinUs</Link>
          
          <Link 
          to="/contact" 
          style={{ 
            textDecoration: 'none', 
            color: '#682e81ff',
            transition: 'color 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.color = '#36074A'}
          onMouseLeave={(e) => e.target.style.color = '#682e81ff'}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >ContactUs</Link>
        </div>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 40px',
        marginTop: '20px',
        color: '#36074A',
        fontFamily: 'Josefin Sans, sans-serif',
        fontWeight: 'bold',
        fontSize: '18px'
      }}>
        <div>Email: qaleesi@info.lk</div>
        <div>Telephone: 0771234567</div>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <a href="https://www.facebook.com/"><img src={facebook} alt="Facebook" style={{ width: '24px', height: '24px' }} /></a>
          <a href="https://x.com/i/flow/login"><img src={twitter} alt="Twitter" style={{ width: '24px', height: '24px' }} /></a>
          <a href="https://www.instagram.com/accounts/login/?hl=en"><img src={instagram} alt="Instagram" style={{ width: '24px', height: '24px' }} /></a>
        </div>
      </div>

      <div style={{
        textAlign: 'center',
        fontFamily: 'Josefin Sans, sans-serif',
        marginTop: '10px',
        backgroundColor: '#36074A',
        color: 'white',
        fontSize: '12px',
        width: '100%',
        padding: '8px 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        All rights reserved
      </div>
    </footer>
  );
}
