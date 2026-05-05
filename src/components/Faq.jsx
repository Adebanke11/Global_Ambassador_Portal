import React from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

const FAQ = () => {
  const ngit = {
    deep: '#491754',
    royal: '#52295a',
    gold: '#ffcc00',
    vibrant: '#803c98',
    softPurple: '#fdfbff'
  };

  const faqs = [
    {
      question: "Can students from any university apply?",
      answer: "Yes. We're recruiting from universities and polytechnics across Nigeria and other African countries. As long as you're enrolled and meet the eligibility criteria, you can apply."
    },

    {
      question: "Must I be a Computer Science student to apply?",
      answer: "Not at all! We are looking for leaders, not just coders. Whether you are studying Law, Arts, or Engineering, if you have a passion for tech and a strong influence on your campus, you belong here."
    },
    {
      question: "Will this interfere with my lectures and exams?",
      answer: "We are built 'by students, for students.' The program is flexible, requiring 5-8 hours a week. We also observe 'blackout periods' during major exam seasons to ensure your grades remain the priority."
    },
    {
      question: "Is there any financial cost to join?",
      answer: "Joining the NGiT Ambassador program is 100% free. We provide the training, the community, and the exclusive kits at no cost to our selected leaders."
    },
    {
      question: "What if NGiT hasn't launched at my institution yet?",
      answer: "That makes you even more important! You will be the 'Pioneer Ambassador' for your school, leading the charge and establishing the very first NGiT chapter on your campus."
    },
    {
      question: "What are the tangible benefits for my career?",
      answer: "Beyond the prestige, you get a verified Leadership Certification, direct access to our partner internship pool, and hands-on experience in community management that tech recruiters highly value."
    }
  ];

  return (
    <section className="py-5" id="faq" style={{ backgroundColor: '#fff' }}>
      <style>{`
        .ngit-accordion-btn:not(.collapsed) {
          background-color: ${ngit.softPurple} !important;
          color: ${ngit.vibrant} !important;
          box-shadow: none !important;
        }
        .ngit-accordion-btn:focus {
          box-shadow: none !important;
          border-color: rgba(128, 60, 152, 0.2);
        }
        .accordion-item {
          border-radius: 16px !important;
          margin-bottom: 1rem;
          border: 1px solid #eee !important;
        }
        .accordion-button::after {
          background-size: 1.25rem;
        }
      `}</style>

      <div className="container py-5">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-7">
            <div className="d-inline-block p-2 rounded-circle mb-3" style={{ backgroundColor: 'rgba(128, 60, 152, 0.1)' }}>
              <HelpCircle color={ngit.vibrant} size={32} />
            </div>
            <h2 className="display-5 fw-black" style={{ color: ngit.deep, fontWeight: '900' }}>
              Frequently Asked <span style={{ color: ngit.vibrant }}>Questions</span>
            </h2>
            <p className="text-muted">Everything you need to know before joining the 2026 cohort.</p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="accordion accordion-flush" id="ambassadorFaq">
              {faqs.map((faq, i) => (
                <div className="accordion-item shadow-sm" key={i}>
                  <h2 className="accordion-header">
                    <button 
                      className="accordion-button ngit-accordion-btn collapsed fw-bold p-4" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target={`#collapse${i}`}
                    >
                      {faq.question}
                    </button>
                  </h2>
                  <div 
                    id={`collapse${i}`} 
                    className="accordion-collapse collapse" 
                    data-bs-parent="#ambassadorFaq"
                  >
                    <div className="accordion-body p-4 pt-0 text-muted" style={{ lineHeight: '1.7' }}>
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Support Callout */}
            <div className="mt-5 p-4 rounded-4 text-center" style={{ border: `2px dashed ${ngit.vibrant}33` }}>
              <p className="mb-0 text-muted">
                Still have a specific question? Reach out to the NGiT Coordination Team at <br />
                <a href="mailto:operations@naijagirlsintech.ng" className="fw-bold text-decoration-none" style={{ color: ngit.vibrant }}>
                   operations@naijagirlsintech.ng
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;