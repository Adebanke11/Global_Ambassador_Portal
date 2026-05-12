import React, { useState, useEffect } from 'react';
import { Mail, X, Send } from 'lucide-react';

const NewsletterPopup = () => {
  const [stage, setStage] = useState('hidden'); 
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const ngit = { gold: '#ffcc00', deep: '#130c14', royal: '#52295a' };

  // Handle Scroll Trigger
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400 && stage === 'hidden') {
        setStage('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [stage]);

  // Inject Animation CSS
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
      @keyframes slideInUp {
        from { transform: translateY(50px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
        .ngit-popup-input:focus {
        outline: none !important;
        border: 1px solid ${ngit.gold} !important; 
        box-shadow: none !important;
      }
        .ngit-popup-input {
  font-size: 16px !important; 
}
      body { overflow-x: hidden; }
    `;
    document.head.appendChild(styleSheet);
    return () => document.head.removeChild(styleSheet);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const scriptURL = 'https://script.google.com/macros/s/AKfycbzxieI6dRzosKy19w-sHhmEc32bcVBjPNroL2HTNBjGo9g_cH-uVFj0stAgfqWWExI/exec';

    const formData = new FormData();
    formData.append('Email', email);
    formData.append('Source', 'Ambassador Portal');

    fetch(scriptURL, { method: 'POST', body: formData })
      .then(response => {
        setStatus('Success! Welcome to the network.');
        setEmail('');
        // Minimize after 3 seconds 
        setTimeout(() => setStage('minimized'), 3000);
      })
      .catch(error => {
        setStatus('Error: Please try again.');
        console.error('Error!', error.message);
      });
  };

  if (stage === 'hidden') return null;

  return (
    <div style={styles.container}>
      {/* minimize icon */}
      {stage === 'minimized' && (
        <button 
          onClick={() => {
            setStage('visible');
            setStatus(''); 
          }}
          style={{ ...styles.fab, backgroundColor: ngit.gold }}
          title="Join Newsletter"
        >
          <Mail size={24} style={{color:"#fff"}} />
        </button>
      )}

      {stage === 'visible' && (
        <div style={styles.card}>
          <button onClick={() => setStage('minimized')} style={styles.closeBtn}>
            <X size={18} />
          </button>
          
          <div style={{ backgroundColor: ngit.royal, padding: '15px', borderRadius: '12px 12px 0 0' }}>
             <h6 className="m-0 text-white fw-bold">Stay in the loop!</h6>
          </div>

          <div style={{ padding: '20px' }}>
            <p className="small text-muted mb-3" style={{ fontSize: '13px' }}>
              Subscribe for the latest tech cohorts and campus events.
            </p>
            
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input 
                  type="email" 
                  className="form-control form-control-sm ngit-popup-input" 
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                  style={{ fontSize: '13px' }}
                />
                <button 
                  className="btn btn-sm" 
                  style={{ backgroundColor: ngit.gold, color: ngit.deep }} 
                  type="submit"
                >
                  <Send size={14} />
                </button>
              </div>
              {status && (
                <div className="mt-2 fw-bold" style={{ fontSize: '11px', color: ngit.royal }}>
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    zIndex: 2000, 
    width: '280px', 
    height: 'auto',
    pointerEvents: 'none',
  },
  fab: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
    cursor: 'pointer',
    animation: 'slideInUp 0.4s ease-out',
    pointerEvents: 'auto', 
    marginLeft: 'auto',
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
    overflow: 'hidden',
    position: 'relative',
    animation: 'slideInUp 0.4s ease-out',
    pointerEvents: 'auto',
  },
  closeBtn: {
    position: 'absolute',
    top: '12px',
    right: '10px',
    border: 'none',
    background: 'transparent',
    color: '#fff',
    cursor: 'pointer',
    zIndex: 10,
  }
};

export default NewsletterPopup;