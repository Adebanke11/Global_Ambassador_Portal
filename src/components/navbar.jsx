import { useState } from "react";
import { Navbar, Container, Nav, Offcanvas, NavDropdown } from "react-bootstrap";
import image from '../assets/ngit_logo.png';
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const ResponsiveNav = () => {
  const theme = {
    deep: '#491754',
    royal: '#52295a',
    gold: '#ffcc00',
    vibrant: '#803c98',
    grey: '#ccc'
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* 1. SOCIAL BAR */}
      <div className='d-flex justify-content-center align-items-center py-2 bg-light'>
        <p className='me-4 mb-0 small text-dark'>Follow our socials:</p>
        <div className="d-flex gap-3">
          <a href="https://www.facebook.com/share/1871JCCKP9/" target="_blank" rel="noopener noreferrer" className="social-hover"><FaFacebook color={theme.gold} size={18} /> </a>
          <a href="https://www.linkedin.com/company/naijagirlsintech/" target="_blank" rel="noopener noreferrer" className="social-hover"><FaLinkedin color={theme.gold} size={18} /> </a>
          <a href="https://www.instagram.com/naija_girlsintech" target="_blank" rel="noopener noreferrer" className="social-hover"><FaInstagram color={theme.gold} size={18} /> </a>
          <a href="https://www.tiktok.com/@naija_girls_intech" target="_blank" rel="noopener noreferrer" className="social-hover"><FaTiktok color={theme.gold} size={18} /> </a>
          <a href="https://www.x.com/9jagirlsintech" target="_blank" rel="noopener noreferrer" className="social-hover"><FaXTwitter color={theme.gold} size={18} /> </a>
        </div>
      </div>

      
      <Navbar 
        bg="white" 
        expand="lg" 
        className="sticky-top shadow-sm" 
        style={{ top: 0, zIndex: 1020 }}
      >
        <Container fluid>
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <img src={image} alt="NGiT Logo" width="60" height="60" className="me-3" />
            <div className="d-none d-lg-block">
              <h5 className="mb-0 fw-bold" style={{ color: '#3b1641', lineHeight: '1.2' }}><a href='/' style={{textDecoration: 'none', color: 'black'}}>NGiT</a></h5>
              <p className="mb-0 small text-muted text-uppercase" style={{ fontSize: '11px', letterSpacing: '1px' }}>
                Global Ambassador Portal
              </p>
            </div>
          </Navbar.Brand>

          <Navbar.Toggle onClick={handleShow} />

          <Navbar.Collapse className="d-none d-lg-flex">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/about" className="nav-link-black px-3">About</Nav.Link>
                 <Nav.Link as={HashLink} smooth to="/#program" className="nav-link-black px-3">Program</Nav.Link>
               <Nav.Link as={HashLink} smooth to="/#tiers" className="nav-link-black px-3">Tiers</Nav.Link>
               <Nav.Link href="https://naijagirlsintech.ng/blog/" target="_blank" className="nav-link-black px-3">Blog</Nav.Link>
               <Nav.Link as={HashLink} smooth to="/#faq" className="nav-link-black px-3">FAQ</Nav.Link>
            {/* Drop-down */}
<NavDropdown 
                title="Apply Now" 
                id="apply-dropdown" 
                className="apply-dropdown-custom ms-5"
              >
                <NavDropdown.Item as={HashLink} smooth to="/#apply">
                  <div className="fw-bold">Student Ambassador</div>
                  <small className="text-muted" style={{ fontSize: '11px' }}>Join the 2026/27 Fellowship</small>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/">
                  <div className="fw-bold">Partner Institution</div>
                  <small className="text-muted" style={{ fontSize: '11px' }}>Schools & Organizations</small>
                </NavDropdown.Item>
              </NavDropdown>
              {/*  */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <style>{`
        .social-hover { transition: transform 0.2s ease; text-decoration: none; }
        .social-hover:hover { transform: translateY(-2px); }
        .nav-link-black { color: #333 !important; }

        .dropdown-item:hover, 
  .dropdown-item:focus, 
  .dropdown-item:active {
    background-color: #fff9e6 !important;
    color: ${theme.deep} !important;
    outline: none;
  }
      
        .apply-dropdown-custom .dropdown-toggle {
          background-color: ${theme.gold} !important;
          color: ${theme.deep} !important;
          font-weight: bold !important;
          border-radius: 50px;
          padding: 8px 25px !important;
          border: none;
        }

        .apply-dropdown-custom .dropdown-toggle::after { display: none; }

        @media (min-width: 992px) {
          .apply-dropdown-custom:hover .dropdown-menu {
            display: block;
            margin-top: 0px;
            animation: fadeIn 0.3s ease;
            z-index: 1000 !important;
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
          .offcanvas-header .btn-close {
    background-color: transparent;
    opacity: 1; 
    padding: 1rem;
    transition: all 0.3s ease;
    filter: invert(13%) sepia(54%) saturate(1937%) hue-rotate(253deg) brightness(92%) contrast(95%);
  }

  .offcanvas-header .btn-close:hover {
    transform: rotate(90deg); 
    filter: invert(34%) sepia(85%) saturate(1200%) hue-rotate(250deg) brightness(85%) contrast(100%); 
  }

  .offcanvas-header .btn-close:focus {
    box-shadow: none;
    outline: none; 
    outline-offset: none;
  }
      `}
      </style>

      {/* 3. Offcanvas */}
      <Offcanvas show={show} onHide={handleClose} placement="start" style={{ width: '70%' }}>
        <Offcanvas.Header closeButton>
           <Offcanvas.Title className="fw-bold" style={{ color: theme.deep }}> <a href="/"><img src={image} alt="NGiT Logo" width="70" height="70" className="me-3"/> </a> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column gap-3">
            <div className="d-flex justify-content-between">
          <Nav.Link as={Link} to="/about" className="nav-link-black px-3" onClick={handleClose}>About</Nav.Link>
             </div>
               <Nav.Link as={HashLink} smooth to="/#program" className="nav-link-black px-3" onClick={handleClose}>Program</Nav.Link>
               <Nav.Link as={HashLink} smooth to="/#tiers" className="nav-link-black px-3" onClick={handleClose}>Tiers</Nav.Link>
               <Nav.Link as={HashLink} smooth to="/#faq" className="nav-link-black px-3" onClick={handleClose}>FAQ</Nav.Link>
               {/* Dropdown mobile */}
               <NavDropdown 
                title="Apply Now" 
                id="apply-dropdown" 
                className="apply-dropdown-custom"
              >
                <NavDropdown.Item as={HashLink} smooth to="/#apply" onClick={handleClose}>
                  <div className="fw-bold">Student Ambassador</div>
                  <small className="text-muted" style={{ fontSize: '11px' }}>Join the 2026/27 Fellowship</small>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/" onClick={handleClose}>
                  <div className="fw-bold">Partner Institution</div>
                  <small className="text-muted" style={{ fontSize: '11px' }}>Schools & Organizations</small>
                </NavDropdown.Item>
              </NavDropdown>
              </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ResponsiveNav;