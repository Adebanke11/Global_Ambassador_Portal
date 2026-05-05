import React from 'react';
import { ClipboardCheck, GraduationCap, School, Star } from 'lucide-react';

const ProgramProcess = () => {
  const theme = {
    deep: '#491754',
    accent: '#52295a',
    gold: '#ffcc00',
    vibrant: '#803c98',
    light: '#f8f4f9' 
  };

  const phases = [
    {
      phase: "PHASE 01",
      title: "Apply & Qualify",
      desc: "Complete the online application and a virtual screening interview. We select high-potential leaders ready to drive tech readiness.",
      icon: <ClipboardCheck size={32} color={theme.deep} strokeWidth={1.5} />
    },
    {
      phase: "PHASE 02",
      title: "Onboard & Train",
      desc: "Receive your toolkit and master 8 modular training units over 4 weeks to become a certified AI Outreach Fellow.",
      icon: <GraduationCap size={32} color={theme.deep} strokeWidth={1.5} />
    },
    {
      phase: "PHASE 03",
      title: "Activate & Impact",
      desc: "Execute campus workshops, and lead AI seminars in your campus.",
      icon: <School size={32} color={theme.deep} strokeWidth={1.5} />
    },
    {
      phase: "PHASE 04",
      title: "Graduate & Lead",
      desc: "Earn your professional certification, join the NGiT Alumni Network, and unlock technical leadership opportunities.",
      icon: <Star size={32} color={theme.deep} strokeWidth={1.5} />
    }
  ];

  return (
    <section className="py-5 position-relative" style={{ backgroundColor: theme.light, color: theme.deep }}>
    
      <div style={{ height: '4px', width: '100px', backgroundColor: theme.gold, margin: '0 auto 2rem', borderRadius: '10px'}} />

      <div className="container py-5">
        <div className="text-center mb-5">
          <small className="text-uppercase fw-bold" style={{ color: theme.vibrant, letterSpacing: '2px' }}>
            The Process
          </small>
          <h2 className="display-5 fw-black mt-2 mb-3" style={{ letterSpacing: '-1px' }}>
            How the Program Works
          </h2>
          <p className="mx-auto opacity-75" style={{ maxWidth: '600px' }}>
            From initial application to local impact — four clear phases that transform you from a student into a recognized technical advocate.
          </p>
        </div>

        <div className="row g-4 position-relative">
          <div className="d-none d-lg-block position-absolute" style={{ 
           top: '40px', 
            left: '50%',
            transform: 'translateX(-50%)',
            width: '75%', 
            borderTop: `2px dashed ${theme.vibrant}`, 
            opacity: 0.2,
            zIndex: 0
          }} />

          {phases.map((item, idx) => (
            <div className="col-md-6 col-lg-3 text-center position-relative" style={{ zIndex: 1 }} key={idx}>
              {/* Icon Container */}
              <div className="d-inline-flex align-items-center justify-content-center mb-4 rounded-circle bg-white shadow-sm" 
                   style={{ width: '80px', height: '80px', border: `1px solid rgba(159, 20, 209, 0.34)` }}>
                {item.icon}
              </div>

              <div className="px-3">
                <small className="fw-bold d-block mb-2" style={{ color: theme.vibrant, fontSize: '12px' }}>
                  {item.phase}
                </small>
                <h5 className="fw-bold mb-3">{item.title}</h5>
                <p className="small opacity-75" style={{ lineHeight: '1.6' }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramProcess;