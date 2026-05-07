import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Nav } from 'react-bootstrap';

const Hero = () => {
  // NGiT Custom Color Theme
  const colors = {
    primary: '#803c98',   
    accent: '#ffcc00',    
    dark: '#491754',      
    royal: '#52295a',    
    glass: 'rgba(255, 255, 255, 0.05)'
  };

  // TIMER LOGIC 
  const deadline = "2026-06-20T00:00:00"; 

  const calculateTimeLeft = () => {
    const difference = +new Date(deadline) - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
//use effect 1: timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000); 

    return () => clearInterval(timer); // 
  }, []);

  //useEffect 2: AOS Initialization
useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-in-out',
  });
}, []);

  const sectionStyle = {
    background: `
    linear-gradient(rgba(255, 255, 255, 0.05) 0.5px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    radial-gradient(circle at top right, ${colors.royal}, ${colors.dark})
  `,
   backgroundSize: '40px 40px, 40px 40px, 100% 100%', // grid squares
  minHeight: '80vh',
  display: 'flex',
  alignItems: 'center',
  padding: '60px 0',
  color: '#fff'
  };

    const stats = [
    { num: '50', suffix: '+', label: 'Campus Ambassadors' },
    { num: '30', suffix: '+', label: 'Universities Targeted' },
    { num: '10k', suffix: '+', label: 'Students to Reach' },
    { num: '100', suffix: '%', label: 'Free to Apply' },
  ];


  return (
    <section style={sectionStyle} className="position-relative">
  
      <div className="position-absolute top-0 end-0 translate-middle" 
           style={{width: '600px', height: '600px', background: colors.primary, filter: 'blur(150px)', opacity: '0.2' }}>
      </div>

      <div className="container">
        <div className="row align-items-center">
          
          <div className="col-lg-7">
          
            <div className="d-flex align-items-center gap-2 mb-4">
              <span className="position-relative d-flex" style={{width: '12px', height: '12px'}}>
                <span className="animate-ping position-absolute inline-flex h-100 w-100 rounded-full opacity-75" style={{backgroundColor: colors.accent}}></span>
                <span className="relative inline-flex rounded-full h-100 w-100" style={{backgroundColor: colors.accent}}></span>
              </span>
              <small className="text-uppercase fw-bold tracking-widest" style={{ color: colors.accent, letterSpacing: '2px' }}>
                Applications Open for 2026
              </small>
            </div>

            <h1 className="display-2 fw-extrabold mb-4" style={{ lineHeight: '1.05', letterSpacing: '-2px', fontWeight: '900' }}>
              Don’t Just Learn Tech. <br />
              <span style={{ 
                background: `linear-gradient(to right, ${colors.accent}, #fff)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Lead the Revolution.
              </span>
            </h1>

            <p className="fs-5 mb-5 text-white-50" style={{ maxWidth: '600px', lineHeight: '1.6' }}> We are recruiting the 2026 cohort of 
              Ambassadors to build the largest female-led tech ecosystem in Africa. 
              Are you the voice your campus is waiting for?
            </p>

            <div className="d-flex flex-wrap gap-3">
              <div className='arrow-btn2'>
             <a href="#apply_now">
              <button className="btn btn-lg px-3 py-3 fw-bold shadow-lg " 
                      style={{ backgroundColor: colors.accent, color: colors.dark, border: 'none', borderRadius: '12px' }}>
                Apply as Ambassador <span className="arrow2"> → </span>
              </button>
              </a>
              </div>
           
           <a href="#program" style={{ textDecoration: 'none' }}>
               <button className="btn btn-lg px-3 py-3 fw-bold shadow-lg btn-hover text-white" 
                      style={{ backgroundColor: 'inherit', color: colors.dark, border: '0.5px solid #cccccc77', borderRadius: '12px' }}>
                Explore the Program
              </button>
              </a> 
             
            </div>
<div className="hero-hr"></div>
            <div className="row row-cols-2 g-4 mt-2 pt-4">
                {stats.map((s, index)=> (
                  <div className="col" key={s.label} data-aos="fade-up" data-aos-delay={index * 100}>
                    <div className="stat-num">{s.num}<span class="stat-suffix">{s.suffix}</span></div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                ))}
                </div>
          </div>
         
          <div className="col-lg-5 mt-5 mt-lg-0">
             {/* Right card */}
            <div className="p-4 rounded-4 border border-secondary shadow-2xl" 
                 style={{ background: colors.glass, backdropFilter: 'blur(150px)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h4 className="fw-bold mb-4" style={{ color: colors.accent }}>Why Top Students Join:</h4>
              
              <ul className="list-unstyled">
                {[
                  { title: "Global Network", desc: "Direct access to NGiT's international partners." },
                  { title: "Career Fast-Track", desc: "Priority placement in 2026 Tech Internships." },
                  { title: "Leadership Kit", desc: "Exclusive NGiT tech-stack & luxury merch." }
                ].map((item, i) => (
                  <li key={i} className="mb-4 d-flex gap-3">
                    <div className="rounded-circle d-flex align-items-center justify-content-center" 
                         style={{ width: '32px', height: '32px', flexShrink: 0, backgroundColor: colors.primary }}>
                      <small style={{color: '#fff'}}>✓</small>
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold">{item.title}</h6>
                      <small className="text-white-50">{item.desc}</small>
                    </div>
                  </li>
                ))}
              </ul>

              
              {/* Countdown */}
              <div className="mt-4 p-3 rounded-3 bg-white text-dark text-center shadow-lg">
                <small className="fw-bold text-uppercase" style={{color: colors.dark}}>Application Deadline</small>
                <div className="d-flex justify-content-around mt-2">
                  <div><span className="h4 fw-bold" style={{color: colors.primary}}>{timeLeft.days || '0'}</span><br/><small className="text-muted">Days</small></div>
                  <div><span className="h4 fw-bold" style={{color: colors.primary}}>{timeLeft.hours || '0'}</span><br/><small className="text-muted">Hrs</small></div>
                  <div><span className="h4 fw-bold" style={{color: colors.primary}}>{timeLeft.minutes || '0'}</span><br/><small className="text-muted">Min</small></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

