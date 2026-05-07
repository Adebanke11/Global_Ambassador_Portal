import React from 'react';
import { Megaphone, Users, Calendar, Share2, Award, Zap } from 'lucide-react';

const AmbassadorRoles = () => {
  const ngit = {
    deep: '#491754',
    royal: '#52295a',
    gold: '#ffcc00',
    vibrant: '#803c98',
    softPurple: '#fdfbff' // Defined for the CSS template
  };

  const roles = [
    {
      title: "Be the Voice",
      desc: "Represent NGiT in your university. Be the primary link between our community and your fellow female students.",
      icon: <Megaphone size={32} strokeWidth={1.5} />
    },
    {
      title: "Build the Tribe",
      desc: "Identify and recruit passionate girls on your campus. Help them start their tech journey with NGiT resources.",
      icon: <Users size={32} strokeWidth={1.5} />
    },
    {
      title: "Host the Movement",
      desc: "Coordinate campus-wide tech awareness events, workshops, and meetups with support from the NGiT HQ.",
      icon: <Calendar size={32} strokeWidth={1.5} />
    },
    {
      title: "Drive the Culture",
      desc: "Share NGiT opportunities, scholarship info, and tech news on your campus social circles and groups.",
      icon: <Share2 size={32} strokeWidth={1.5} />
    }
  ];

  return (
    <section className="py-5 bg-white">
      <style>{`
        .role-card {
          transition: all 0.3s ease;
          border-radius: 24px;
          background-color: ${ngit.softPurple};
          cursor: pointer;
        }
        
        .icon-container {
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          display: inline-block;
          color: ${ngit.vibrant};
        }

        .role-card:hover {
          background-color: #fff !important;
          box-shadow: 0 20px 40px rgba(0,0,0,0.05) !important;
          transform: translateY(-5px);
        }

        .role-card:hover .icon-container {
          transform: translateX(15px); /* Adjusted for better balance within card padding */
          color: ${ngit.gold}; 
        }
      `}</style>

      <div className="container py-5">
        {/* Header Section */}
        <div className="row align-items-center mb-5 text-center text-lg-start">
          <div className="col-lg-8">
            <h6 className="fw-bold text-uppercase mb-2" style={{ color: ngit.vibrant, letterSpacing: '2px' }}>Role & Responsibilities</h6>
            <h2 className="display-4 fw-black" style={{ color: ngit.deep, fontWeight: '900' }}>Represent. Recruit. <br /><span style={{color: ngit.gold}}>Lead.</span></h2>
          </div>
        </div>

        {/* Roles Grid */}
        <div className="row g-4 justify-content-center">
          {roles.map((role, i) => (
            <div className="col-md-6 col-lg-3 col-sm-12 text-center text-lg-start" key={i}>
              <div className="p-4 h-100 role-card shadow-sm border-0 card mx-auto" style={{ borderRadius: '24px', backgroundColor: ngit.softPurple, maxWidth: '350px' }}>
                <div className="fs-1 mb-3 icon-container">{role.icon}</div>
                <h5 className="fw-bold" style={{ color: ngit.royal }}>{role.title}</h5>
                <p className="small text-muted mb-0" style={{ lineHeight: '1.6' }}>{role.desc}</p>
              </div>
            </div>
          ))}
        </div>

      
        <div className="mt-5 p-4 rounded-4 text-white d-flex flex-wrap justify-content-center justify-content-md-between align-items-center text-center text-md-start" 
             style={{ background: `linear-gradient(90deg, ${ngit.deep}, ${ngit.royal})` }}>
          <div className="mb-3 mb-md-0">
            <h4 className="fw-bold mb-1">What's in it for you?</h4>
            <p className="mb-0 opacity-75">Mentorship, Global Networking, and Leadership Certification.</p>
          </div>
          <a href="#apply">
            <button className="btn btn-lg fw-bold px-4" style={{ backgroundColor: ngit.gold, color: ngit.deep, borderRadius: '12px' }}>
              Check Eligibility
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AmbassadorRoles;