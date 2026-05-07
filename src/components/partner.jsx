import React, { useState } from 'react';
import { School, Monitor, Database, ArrowRight } from 'lucide-react';
import ResponsiveNav  from "../components/navbar";

const PartnerInstitution = () => {
  const [status, setStatus] = useState('');
  
  const ngit = {
    royal: '#52295a',
    gold: '#ffcc00',
    deep: '#130c14'
  };

  const partners = [
    {
      title: "On-Campus Training",
      desc: "Bring our physical tech hubs and specialized training cohorts directly to your students.",
      icon: <School size={32} color={ngit.gold} />
    },
    {
      title: "LMS Integration",
      desc: "Deploy our custom learning management system to digitize your curriculum and track student progress.",
      icon: <Monitor size={32} color={ngit.gold} />
    },
    {
      title: "Digital Pipeline",
      desc: "Connect your graduates to career pipelines and mentorship from global tech leaders.",
      icon: <Database size={32} color={ngit.gold} />
    }
  ];

  return (
    <>
    <ResponsiveNav />
    <section id="partnerships" className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: ngit.royal }}>Partner With Us</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '700px' }}>
           <span title="Naija Girls in Tech">NGiT</span> partners with diverse educational institutions, from secondary schools to tertiary institutions, to bridge the digital divide by embedding industry-standard tech training into their curricula.
          </p>
        </div>

        <div className="row g-4 mb-5">
          {partners.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 border-0 shadow-sm p-4">
                <div className="mb-3">{item.icon}</div>
                <h5 className="fw-bold">{item.title}</h5>
                <p className="small text-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card p-4 border-0 shadow" style={{ backgroundColor: ngit.deep, color: '#fff' }}>
              <div className="row align-items-center">
                <div className="col-md-7">
                  <h4 className="fw-bold mb-3">Request Institutional Partnership</h4>
                  <p className="small opacity-75">
                    Ready to transform your school into a tech-forward institution? 
                    Let's discuss training tiers and infrastructure support.
                  </p>
                </div>
                <div className="col-md-5 text-md-end">
                  <a 
                    href="mailto:operations@naijagirlsintech.ng?subject=Institutional Partnership Inquiry"
                    className="btn px-4 py-2 fw-bold"
                    style={{ backgroundColor: ngit.gold, color: ngit.deep }}
                  >
                    Get Started <ArrowRight size={18} className="ms-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default PartnerInstitution;