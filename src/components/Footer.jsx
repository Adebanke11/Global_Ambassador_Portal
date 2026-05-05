import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Home } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const ngit = {
    royal: '#52295a',
    deep: '#130c14',
    gold: '#ffcc00',
  };

  return (
    <footer style={{ backgroundColor: ngit.deep, color: '#fff' }} className="pt-5 pb-3">
      <div className="container">
        <div className="row g-4">
          
          {/* Brand & Mission */}
          <div className="col-lg-6">
            <p className="text-white-50 small mb-4" style={{ lineHeight: '1.8' }}>
              Bridging the gender digital divide by empowering the next generation of 
              female tech leaders through campus-led innovation and community impact.
            </p>
            <div className="d-flex gap-3">
              <a href="https://www.instagram.com/naija_girlsintech" target="_blank" rel="noopener noreferrer" className="text-white opacity-75 hover-gold"><FaInstagram size={20} /></a> 
             <a href="https://www.linkedin.com/company/naijagirlsintech/" target="_blank" rel="noopener noreferrer" className="text-white opacity-75 hover-gold"><FaLinkedin size={20} /></a>
              <a href="https://www.x.com/9jagirlsintech" target="_blank" rel="noopener noreferrer" className="text-white opacity-75 hover-gold"><FaXTwitter size={20} /></a>
              <a href="https://www.facebook.com/share/1871JCCKP9/" target="_blank" rel="noopener noreferrer" className="text-white opacity-75 hover-gold"><FaFacebook size={20} /></a>
              <a href="https://www.tiktok.com/@naija_girls_intech" target="_blank" rel="noopener noreferrer" className="text-white opacity-75 hover-gold"><FaTiktok size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          {/* <div className="col-lg-2 col-md-4">
            <h6 className="fw-bold mb-4">Programs</h6>
            <ul className="list-unstyled small d-grid gap-2 text-white-50">
              <li><Link to="/#apply_now" className="text-decoration-none text-reset">Ambassador Program</Link></li>
              <li><Link to="/#program" className="text-decoration-none text-reset">Tech Fellowship</Link></li>
              <li><a href="#" className="text-decoration-none text-reset">Partner Schools</a></li>
              <li><a href="#" className="text-decoration-none text-reset">Mentorship</a></li>
            </ul>
          </div> */}

          {/* Contact Information */}
          <div className="col-lg-3 col-md-4">
            <h6 className="fw-bold mb-4">Contact Us</h6>
            
            <ul className="list-unstyled small d-grid gap-3 text-white-50">
                <li className="d-flex gap-2 ">
                <Home size={24} style={{ color: ngit.gold }} />
                Lagos, Nigeria | United Kingdom | Active across Africa
              </li>
              <li className="d-flex gap-2 align-items-center">
                <Mail size={16} style={{ color: ngit.gold }} />
                operations@naijagirlsintech.ng
              </li>
              <li className="d-flex gap-2 align-items-center">
                <Phone size={16} style={{ color: ngit.gold }} />
                +234 701 746 6460 
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div className="col-lg-3 col-md-4">
            <h6 className="fw-bold mb-4">Stay Updated</h6>
            <p className="small text-white-50">Subscribe to receive the latest news on our programs, training cohorts, and tech events.</p>
            <div className="input-group mb-3">
              <input 
                type="email" 
                className="form-control border-0 bg-light p-2 text-dark" 
                placeholder="amina.b@example.com" 
                style={{ borderRadius: '8px 0 0 8px', fontSize: '13px' }}
              />
              <button 
                className="btn" 
                style={{ backgroundColor: ngit.gold, color: ngit.deep, borderRadius: '0 8px 8px 0' }}
              >
                Join
              </button>
            </div>
          </div>

        </div>

        <hr className="mt-5 mb-4" style={{ opacity: 0.1 }} />

        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="small text-white-50 mb-0">
              © 2026 Naija Girls in Tech. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
      
      <style>{`
        .hover-gold:hover {
          color: ${ngit.gold} !important;
          transition: 0.3s;
        }
      `}</style>
    </footer>
  );
};

export default Footer;