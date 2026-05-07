import React, { useState } from 'react';
import { CheckCircle2, Star, School, UserCheck } from 'lucide-react';

const Eligibility = () => {
  // 1
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    Phone: '',
    Institution: '',
    Level: 'Select level',
    Department: '',
    Motivation: '',
    Communities: ''
  });

  const [status, setStatus] = useState('');
  const ngit = {
    deep: '#491754',
    royal: '#52295a',
    gold: '#ffcc00',
    vibrant: '#803c98',
    lightGrey: '#f4f4f9'
  };
// 2
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // 3. Submit to Sheets
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Processing your application...');

    const scriptURL = 'https://script.google.com/macros/s/AKfycbzR_j5gS6otYzpOBicVvMir390Pe5FYixIUu4HWzFcCZcM6CGpm901VIFb1YpGvO31_pg/exec'; 

    const dataToSend = new FormData();
    // appending my form data
    Object.keys(formData).forEach(key => {
      dataToSend.append(key, formData[key]);
    });
    dataToSend.append('Source', 'Global Ambassador Application');

    fetch(scriptURL, { method: 'POST', body: dataToSend })
      .then(response => {
        setStatus('Success! Your application has been received.');
        // form reset post submission
        setFormData({
          FirstName: '', LastName: '', Email: '', Phone: '',
          Institution: '', Level: 'Select level', Department: '',
          Motivation: '', Communities: ''
        });
      })
      .catch(error => {
        setStatus('Error: Could not submit. Please try again.');
        console.error('Error!', error.message);
      });
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
    <section className="py-5" id="apply" style={{ backgroundColor: ngit.lightGrey }}>
      <div className="container py-5">
        <div className="text-center mb-5">
            <small className="text-uppercase fw-bold tracking-widest" style={{ color: ngit.gold, letterSpacing: '3px' }}>
            Application
          </small>
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
<div className="col-lg-6 mt-5 mt-lg-0">
  <div className="p-4 p-md-5 h-100 rounded-5 text-dark shadow-lg bg-white" 
       style={{ border: `1px solid rgba(0,0,0,0.05)` }}>
    
    <div className="mb-4">
      <h3 className="fw-bold mb-1" style={{ color: ngit.deep }}>Start Your Application</h3>
      <p className="text-muted small">Fill in the form below and our team will be in touch within 3 business days.</p>
    </div>

    <form className="row g-3" onSubmit={handleSubmit}>
      {/* Name Fields */}
      <div className="col-md-6">
        <label className="form-label small fw-bold">First Name *</label>
        <input name="FirstName" value={formData.FirstName} onChange={handleChange} type="text" className="form-control border-0 bg-light p-3 rounded-3" placeholder="Amina" required />
      </div>
      <div className="col-md-6">
        <label className="form-label small fw-bold">Last Name *</label>
        <input name="LastName" value={formData.LastName} onChange={handleChange} type="text" className="form-control border-0 bg-light p-3 rounded-3" placeholder="Bakare" required />
      </div>

      {/* Email */}
      <div className="col-12">
        <label className="form-label small fw-bold">Email Address *</label>
        <input name="Email" value={formData.Email} onChange={handleChange} type="email" className="form-control border-0 bg-light p-3 rounded-3" placeholder="aminaB@example.com" required />
      </div>

      {/* Phone */}
      <div className="col-12">
        <label className="form-label small fw-bold">Phone Number *</label>
        <input name="Phone" value={formData.Phone} onChange={handleChange} type="tel" className="form-control border-0 bg-light p-3 rounded-3" placeholder="+234 800 000 0000" required />
      </div>

      {/* Institution Info */}
      <div className="col-md-7">
        <label className="form-label small fw-bold">University / Institution *</label>
        <input name="Institution" value={formData.Institution} onChange={handleChange} type="text" className="form-control border-0 bg-light p-3 rounded-3" placeholder="University of Lagos" required />
      </div>
      <div className="col-md-5">
        <label className="form-label small fw-bold">Current Year *</label>
        <select name="Level" value={formData.Level} onChange={handleChange} className="form-select border-0 bg-light p-3 rounded-3 shadow-none required">
          <option value="">Select level</option>
          <option>100 Level</option>
          <option>200 Level</option>
          <option>300 Level</option>
          <option>400 Level+</option>
        </select>
      </div>

      {/* Dept */}
      <div className="col-12">
        <label className="form-label small fw-bold">Department / Course of Study *</label>
        <input name="Department" value={formData.Department} onChange={handleChange} type="text" className="form-control border-0 bg-light p-3 rounded-3" placeholder="e.g. Economics, Law, Engineering, etc." required />
      </div>

      {/* Long Text */}
      <div className="col-12">
        <label className="form-label small fw-bold">Why do you want to be an NGiT Ambassador? *</label>
        <textarea name="Motivation" value={formData.Motivation} onChange={handleChange} className="form-control border-0 bg-light p-3 rounded-3" rows="4" placeholder="Share your motivation and community involvement..."></textarea>
      </div>

      <div className="col-12">
        <label className="form-label small fw-bold">What student communities or clubs are you part of?</label>
        <input name="Communities" value={formData.Communities} onChange={handleChange} type="text" className="form-control border-0 bg-light p-3 rounded-3" placeholder="Tech Club, Student Union, etc." />
      </div>
{/* Status Message Display */}
          {status && (
            <div className="col-12 text-center p-2 rounded-3" 
                 style={{ backgroundColor: status.includes('Success') ? '#d4edda' : '#f8d7da', 
                          color: status.includes('Success') ? '#155724' : '#721c24',
                          fontSize: '14px' }}>
              {status}
            </div>
          )}

      {/* Submit Button */}
      <div className="col-12 mt-4">
        <button type="submit" 
                className="btn btn-lg w-100 py-3 fw-bold shadow-sm" 
          style={{ backgroundColor: ngit.deep, color: '#fff', borderRadius: '12px' }}
              disabled={status === 'Processing your application...'}>
              {status === 'Processing your application...' ? 'SUBMITTING...' : 'SUBMIT APPLICATION'}
        </button>
      </div>
    </form>
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default Eligibility;