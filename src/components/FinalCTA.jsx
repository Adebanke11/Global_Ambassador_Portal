import React from 'react';
import { Send, Sparkles } from 'lucide-react';

const FinalCTA = () => {
  const ngit = {
    deep: '#491754',
    royal: '#52295a',
    gold: '#ffcc00',
    vibrant: '#803c98'
  };

  return (
    <section className="py-5 text-white"  id="apply_now" style={{ backgroundColor: ngit.deep }}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="mb-4 d-inline-block p-3 rounded-circle" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
              <Sparkles color={ngit.gold} size={40} />
            </div>
            
            <h2 className="display-3 fw-black mb-4" style={{ fontWeight: '900' }}>
              Your Campus is <br />
              <span style={{ color: ngit.gold }}>Waiting for You.</span>
            </h2>
            
            <p className="lead mb-5 opacity-75 mx-auto" style={{ maxWidth: '600px' }}>
              The 2026 NGiT Global Ambassador Cohort is where leadership meets technology. 
              Join 100+ pioneers and start your legacy today.
            </p>

            <div className="mt-4 opacity-50 small">
              <p>Application takes approximately 4 minutes. <br /> Deadline: June 20th, 2026</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Re-using your Arrow Animation Logic */}
      <style>{`
        .arrow-btn:hover .arrow {
          transform: translateX(10px);
        }
        .arrow-btn button {
          transition: all 0.3s ease-in-out;
        }
        .arrow-btn:hover button {
          transform: scale(1.05);
          box-shadow: 0 0 40px 15px rgba(255, 204, 0, 0.5) !important; /* The Spreading Glow */
        }
      `}</style>
    </section>
  );
};

export default FinalCTA;