import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Globe, Zap, Fingerprint, Users, ShieldCheck, Target, Handshake, Layers, MapPin} from 'lucide-react';
import ResponsiveNav  from "../components/navbar";

const AboutPage = () => {
  const theme = {
    deep: '#491754',
    accent: '#52295a',
    gold: '#ffcc00', 
    vibrant: '#803c98',
    grey: '#ccc'
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const cardStyle = {
    backgroundColor: '#52295a',
    border: `1px solid rgba(255, 255, 255, 0.1)`,
    borderRadius: '20px',
    padding: '2rem',
    height: '100%',
    color: '#fff',
    transition: 'transform 0.3s ease'
  };

  return (
    <div style={{ backgroundColor: theme.deep, color: '#fff', minHeight: '100vh' }}>
      
      <ResponsiveNav />
      {/* HERO SECTION */}
      <section className="py-5 text-center" style={{ background: `linear-gradient(180deg, ${theme.deep}, ${theme.accent})` }}>
        <div className="container py-5">
          <small className="text-uppercase fw-bold tracking-widest" style={{ color: theme.gold, letterSpacing: '3px' }}>
            Our Identity
          </small>
          <h1 className="display-3 fw-black mt-3 mb-4" style={{ letterSpacing: '-2px' }}>
            Empowering Student Leaders, <br />
            <span style={{ color: theme.gold }}>Architecting Africa's AI Future.</span>
          </h1>
          <p className="lead mx-auto" style={{ maxWidth: '800px', opacity: 0.8 }}>
           Naija Girls in Tech (NGiT) is a pan-African movement founded by Nigerian women to equip girls across Africa with the skills, confidence, and tools to thrive in the digital age.</p>
        </div>
      </section>

      {/* CORE PILLARS SECTION */}
      <section className="py-5 px-4 bg-light" style={{color: theme.accent}}>
        <div className="container">
          <div className="row g-4">
            {[
              { 
                title: "Mission-Driven", 
                desc: "Every ambassador is a changemaker closing the digital skills gap. We focus on transforming local constituencies into technical talent hubs.", 
                icon: <ShieldCheck color="#ffcc00" size={35} strokeWidth={1.5}/>
              },
              { 
                title: "Practical First", 
                desc: "We teach real, applicable Digital skills—not just theory. Our students leave ready to implement technology in real-world scenarios immediately.", 
                icon: <Zap color="#fff" fill="#ffcc00" size={35} strokeWidth={1.5}/>
              },
              { 
                title: "Pan-African Scope", 
                desc: "Building a network of tech-enabled students across every major institution, starting with high-impact zones in Lagos and Oyo states.", 
                icon: <Globe color="#fff" fill="#ffcc00" size={35} strokeWidth={1.5}/> 
              },
              { 
                title: "Partnership-Powered", 
                desc: "We work directly with school districts and ministries to create sustainable, long-term educational impact within the existing curriculum.", 
                icon: <Handshake color="#ffcc00" size={35} strokeWidth={1.5}/> 
              }
            ].map((pillar, idx) => (
              <div className="col-md-6 col-lg-3" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                <div style={cardStyle} className="hover-lift">
                  <div className="fs-1 mb-3">{pillar.icon}</div>
                  <h5 className="fw-bold" style={{ color: theme.gold }}>{pillar.title}</h5>
                  <p className="small  mb-0">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED STRATEGY SECTION */}
      <section className="py-5" style={{ background: 'rgba(0,0,0,0.1)' }}>
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <h2 className="fw-bold mb-4">Grassroots Innovation</h2>
              <p className="mb-4 text-white-50">
                We identify and train high-potential student leaders to serve as <strong>NGiT Ambassadors</strong> within their institutions. 
          By providing them with industry-standard resources and curriculum support, we enable them to spearhead technical growth 
          and bridge the gender digital divide among their peers.
              </p>
              <div className="d-flex flex-wrap gap-2 mb-4">
                {['Innovation & Product Creation', 'Monthly AI Webinar', 'Digital Skills', 'Mentorship', 'Career Readiness', 'School Partnerships', 'Community & Policy Impact', 'Technical Leadership'].map(tag => (
                  <span key={tag} className="badge rounded-pill px-3 py-2" style={{ border: `1px solid ${theme.vibrant}`, color: theme.grey }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="p-4 rounded-4" style={{ borderLeft: `5px solid ${theme.gold}`, background: theme.accent }}>
                <h4 className="fw-bold">Current Impact Goals</h4>
                <ul className="list-unstyled mt-3">
                  <li className="mb-3"><Users color="#ffcc00" size={35} strokeWidth={1.5}/> Reaching 10,000+ students by end of 2026.</li>
                  <li className="mb-3"><MapPin color="#fff" fill="#ffcc00" size={35} strokeWidth={1.5}/> Active seminars in Lagos Nigeria and beyond.</li>
                  <li className="mb-3"><Layers color="#fff" fill="#803c98" size={35} strokeWidth={1.5}/> Modular technical integration for school LMS.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;