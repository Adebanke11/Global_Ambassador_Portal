import React from 'react';
import { CheckCircle2, Star, School, UserCheck } from 'lucide-react';

const Eligibility = () => {
  const ngit = {
    deep: '#491754',
    royal: '#52295a',
    gold: '#ffcc00',
    vibrant: '#803c98',
    lightGrey: '#f4f4f9'
  };

  const requirements = [
    "Currently an undergraduate in any Nigerian Tertiary Institution.",
    "Passionate about technology and female empowerment.",
    "Minimum CGPA of 2.5 or equivalent academic standing.",
    "Strong communication and networking skills.",
    "Willing to commit 5-8 hours weekly.",
    "Access to a smartphone and reliable internet.",
    "Active presence on social media (LinkedIn, Twitter, or IG)."
  ];

  return (
    <section className="py-5" id="eligibility" style={{ backgroundColor: ngit.lightGrey }}>
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-black" style={{ color: ngit.deep }}>Are you the <span style={{ color: ngit.vibrant }}>Chosen One?</span></h2>
          <p className="text-muted">Review the requirements below before starting your application.</p>
        </div>

        <div className="row g-4 align-items-stretch">
          {/* Left Card: The Checklist */}
          <div className="col-lg-6">
            <div className=" p-4 p-md-5 rounded-5 shadow-sm border-0">
              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="p-2 rounded-3" style={{ backgroundColor: 'rgba(255, 204, 0, 0.1)' }}>
                  <UserCheck color={ngit.gold} size={28} />
                </div>
                <h4 className="fw-bold mb-0">Basic Requirements</h4>
              </div>
              
              <ul className="list-unstyled">
                {requirements.map((req, i) => (
                  <li key={i} className="d-flex align-items-start gap-3 mb-4">
                    <CheckCircle2 color={ngit.vibrant} size={22} className="mt-1 flex-shrink-0" />
                    <span className="text-muted fw-medium">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

{/* Application Form */}
<div className="col-lg-6 mt-5 mt-lg-0" id="apply">
  <div className="p-4 p-md-5 h-100 rounded-5 text-dark shadow-lg bg-white" 
       style={{ border: `1px solid rgba(0,0,0,0.05)` }}>
    
    <div className="mb-4">
      <h3 className="fw-bold mb-1" style={{ color: ngit.deep }}>Start Your Application</h3>
      <p className="text-muted small">Fill in the form below and our team will be in touch within 3 business days.</p>
    </div>

    <form className="row g-3">
      {/* Name Fields */}
      <div className="col-md-6">
        <label className="form-label small fw-bold">First Name *</label>
        <input type="text" className="form-control border-0 bg-light p-3 rounded-3" placeholder="Amina" required />
      </div>
      <div className="col-md-6">
        <label className="form-label small fw-bold">Last Name *</label>
        <input type="text" className="form-control border-0 bg-light p-3 rounded-3" placeholder="Bakare" required />
      </div>

      {/* Email */}
      <div className="col-12">
        <label className="form-label small fw-bold">Email Address *</label>
        <input type="email" className="form-control border-0 bg-light p-3 rounded-3" placeholder="aminaB@example.com" required />
      </div>

      {/* Phone */}
      <div className="col-12">
        <label className="form-label small fw-bold">Phone Number *</label>
        <input type="tel" className="form-control border-0 bg-light p-3 rounded-3" placeholder="+234 800 000 0000" required />
      </div>

      {/* Institution Info */}
      <div className="col-md-7">
        <label className="form-label small fw-bold">University / Institution *</label>
        <input type="text" className="form-control border-0 bg-light p-3 rounded-3" placeholder="University of Lagos" required />
      </div>
      <div className="col-md-5">
        <label className="form-label small fw-bold">Current Year *</label>
        <select className="form-select border-0 bg-light p-3 rounded-3 shadow-none">
          <option>Select level</option>
          <option>100 Level</option>
          <option>200 Level</option>
          <option>300 Level</option>
          <option>400 Level+</option>
        </select>
      </div>

      {/* Dept */}
      <div className="col-12">
        <label className="form-label small fw-bold">Department / Course of Study *</label>
        <input type="text" className="form-control border-0 bg-light p-3 rounded-3" placeholder="e.g. Economics, Law, Engineering, etc." required />
      </div>

      {/* Long Text */}
      <div className="col-12">
        <label className="form-label small fw-bold">Why do you want to be an NGiT Ambassador? *</label>
        <textarea className="form-control border-0 bg-light p-3 rounded-3" rows="4" placeholder="Share your motivation and community involvement..."></textarea>
      </div>

      <div className="col-12">
        <label className="form-label small fw-bold">What student communities or clubs are you part of?</label>
        <input type="text" className="form-control border-0 bg-light p-3 rounded-3" placeholder="Tech Club, Student Union, etc." />
      </div>

      {/* Submit Button */}
      <div className="col-12 mt-4">
        <button type="submit" 
                className="btn btn-lg w-100 py-3 fw-bold shadow-sm" 
                style={{ backgroundColor: ngit.deep, color: '#fff', borderRadius: '12px' }}>
          SUBMIT APPLICATION
        </button>
      </div>
    </form>
  </div>
</div>
          {/* Right Card
          <div className="col-lg-6">
            <div className="p-4 p-md-5 h-100 rounded-5 text-white shadow-lg" 
                 style={{ background: `linear-gradient(135deg, ${ngit.royal} 0%, ${ngit.deep} 100%)` }}>
              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="p-2 rounded-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                  <Star color={ngit.gold} size={28} fill={ngit.gold} />
                </div>
                <h4 className="fw-bold mb-0">What makes you stand out?</h4>
              </div>

              <p className="opacity-75 mb-4">
                Our selection process is highly competitive. We are searching for catalyst leaders who are less interested in titles and more obsessed with creating a tangible tech footprint.
                </p>

              <div className="space-y-4">
                <div className="mb-4 p-3 rounded-4" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                   <h6 className="fw-bold text-gold" style={{ color: ngit.gold }}>Community Experience</h6>
                   <small className="opacity-75">Tell us about clubs you've led or events you've volunteered for.</small>
                </div>
                <div className="mb-4 p-3 rounded-4" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                   <h6 className="fw-bold text-gold" style={{ color: ngit.gold }}>The "Growth" Mindset</h6>
                   <small className="opacity-75">You are eager to learn and help others grow in tech.</small>
                </div>
              </div>

              <div className="mt-5 text-center">
                <a href="#apply_now">
                <button className="btn btn-lg w-100 py-3 fw-bold fs-mobile" 
                        style={{ backgroundColor: ngit.gold, color: ngit.deep, borderRadius: '15px' }}>
                  START APPLICATION 2026
                </button>
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Eligibility;