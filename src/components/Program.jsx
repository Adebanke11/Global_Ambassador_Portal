import React, { useState } from 'react';
import { Calendar, BookOpenCheck, Target, BarChart3, Radio, MessageSquareText, Presentation, FileText } from 'lucide-react';

const Programs = () => {
  const [activePillar, setActivePillar] = useState('fellowship');

  const theme = {
    deep: '#491754',
    accent: '#52295a',
    gold: '#ffcc00', 
    vibrant: '#803c98',
    grey: '#ccc'
  };

  const programPillars = [
    { id: 'fellowship', title: "Fellowship Curriculum", icon: <BookOpenCheck size={18} />, color: theme.gold },
    { id: 'advocacy', title: "Community Advocacy", icon: <Target size={18} />, color: '#fff' },
    { id: 'reporting', title: "Impact Assessment (KPIs)", icon: <BarChart3 size={18} />, color: '#fff' }
  ];

  const learningPath = [
    { m: 'M1', title: "Institutional Foundations", desc: "NGiT mission, modular tech integrations, and strategic impact frameworks.", tags: ["Master the Narrative"] },
    { m: 'M2', title: "Applied AI Fundamentals", desc: "Exploring AI’s role in the African digital economy; translating complex tech concepts.", tags: ["AI READINESS"] },
    { m: 'M3', title: "Ambassador Role & Responsibilities", desc: "What's expected, how you'll be measured, and what success looks like.", tags: ["TECH LEADERSHIP"] },
    { m: 'M4', title: "Strategic Communication", desc: "Professional correspondence, advocacy storytelling, and institutional pitching.", tags: ["ADVOCACY SCRIPTS"] },
    { m: 'M5', title: "Digital Event Engineering", desc: "Logistics, promotion, and delivery of campus workshops (0 to 50+ students).", tags: ["CHECKLIST"] },
    { m: 'M6', title: "Institutional Partnerships", tags: ["ROLE-PLAY", "POLICY"] },
    { m: 'M7', title: "Technical Community Management", desc: "Building trust, managing tech-focused student groups, and long-term impact scaling.", tags: ["COMMUNITY"] },
    { m: 'M8', title: "Data Reporting & Impact", tags: ["TEMPLATE", "KPIs"] },
  ];

  const calendarEvents = [
    { date: "May 2026", event: "Pre-Launch Prep: Finalizing manuals and training modules." },
    { date: "Late June 2026", event: "Recruitment & Selection: Application launch and candidate interviews." },
    { date: "July 2026", event: "Onboarding: 7-day roadmap and institutional orientation." },
    { date: "Aug – Sep 2026", event: "Training Phase: Full delivery of Modules M1–M8." },
    { date: "Oct – Jan 2027", event: "Active Implementation: Campus events and partnership meetings." },
    { date: "Feb 2027", event: "Program Synthesis: Final certification, reporting, and alumni transition." },
  ];

  return (
    <section className="py-5" id='program' style={{ backgroundColor: '#fff' }}>
      <div className="container py-4">
        
        <div className="mb-5 text-center text-lg-start" data-aos="fade-up">
          <small className="text-uppercase fw-bold tracking-widest" style={{ color: theme.gold, letterSpacing: '3px' }}>
            The Program
          </small>
      
          <h1 className="display-4 fw-black mt-3 mb-4" style={{ letterSpacing: '-2px' }}>
            Master AI & Digital Skills: <br />
            <span style={{ color: theme.gold }}>What You’ll Learn & Achieve</span>
          </h1>
          <p className="lead mx-auto mx-lg-0" style={{ maxWidth: '750px', opacity: 0.8 }}>
            A rigorous, high-impact 9-month program. Ambassadors undergo 8 specialized modules, spearhead local advocacy, and deliver measurable tech-readiness outcomes in their constituencies.
          </p>
        </div>

        {/* PILLAR SWITCHER */}
        <div className="mb-5 d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start" data-aos="fade-up" data-aos-delay="0">
          {programPillars.map(pillar => (
            <button 
              key={pillar.id}
              onClick={() => setActivePillar(pillar.id)}
              className="btn d-flex align-items-center gap-2 px-4 py-2 rounded-pill fw-bold"
              style={{
                transition: 'all 0.3s ease',
                backgroundColor: activePillar === pillar.id ? theme.vibrant : 'rgba(255,255,255,0.05)',
                border: `1px solid ${activePillar === pillar.id ? theme.gold : 'rgba(255,255,255,0.1)'}`,
                color: activePillar === pillar.id ? '#fff' : theme.deep,
                fontSize: '13px'
              }}
            >
              {React.cloneElement(pillar.icon, { color: activePillar === pillar.id ? theme.gold : '#fff' })}
              {pillar.title}
            </button>
          ))}
        </div>

        {/* CALENDAR */}
        <div className="row g-5 align-items-start">
          
          {/* MODULES  */}
          <div className="col-lg-7">
            <h4 className="fw-bold mb-4" style={{ color: theme.gold }}>Technical & Leadership Learning Path</h4>
            <div className="row g-3">
              {learningPath.map((mod, idx) => (
                <div key={idx} className="col-12 p-3 rounded-4" style={{ background: theme.accent, border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div className="d-flex align-items-center gap-3 mb-2">
                    <span className="fw-bold text-uppercase" style={{ color: theme.gold, fontSize: '11px', letterSpacing: '1px' }}>{mod.m}</span>
                    <h6 className="fw-bold mb-0 text-white" style={{ fontSize: '16px' }}>{mod.title}</h6>
                  </div>
                  <p className="small text-white-50 mb-3" style={{ fontSize: '13px' }}>{mod.desc}</p>
                  <div className="d-flex flex-wrap gap-2">
                    {mod.tags.map(tag => (
                      <span key={tag} className="badge rounded-pill px-3 py-1" style={{ fontSize: '10px', background: 'rgba(255,255,255,0.05)', border: `1px solid ${theme.vibrant}`, color: '#fff' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CALENDAR */}
          <div className="col-lg-5" style={{ top: '100px' }} data-aos="fade-left">
            <div className="p-4 rounded-4" style={{ background: theme.accent, borderLeft: `6px solid ${theme.gold}` }}>
              <div className="d-flex align-items-center gap-3 mb-4">
                <Calendar color={theme.gold} size={28} />
                <h4 className="fw-bold mb-0 text-white">2026 Strategic Calendar</h4>
              </div>
              <ul className="list-unstyled mt-3">
                {calendarEvents.map((event, idx) => (
                  <li key={idx} className="mb-4 d-flex align-items-start gap-3 calendar-line-container">
                    {/* ring design */}
                    <div 
                      className="d-flex align-items-center justify-content-center flex-shrink-0 mt-1 ring-icon" 
                      style={{ 
                        width: '28px', height: '28px', 
                        border: `2px solid ${theme.vibrant}`, 
                        color: theme.gold,
                        borderRadius: '50%',
                        fontSize: '11px', fontWeight: 'bold'
                      }}
                    >
                      {idx + 1}
                    </div>
                    <div>
                      <div className="fw-bold text-white mb-1" style={{ fontSize: '15px' }}>{event.date}</div>
                      <div className="small text-white-50" style={{ fontSize: '13px' }}>{event.event}</div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-3 border-top" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                <p className="small mb-0 text-white-50">This curriculum is supported by NGiT's <strong>modular technical integrations</strong> for partner institutions.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Programs;