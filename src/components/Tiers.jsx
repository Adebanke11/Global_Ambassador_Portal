import React from 'react';
import { Check, Star, Zap, TrendingUp } from 'lucide-react';

const PerformanceTiers = () => {
  const theme = {
    deep: '#491754',
    royal: '#52295a',
    gold: '#ffcc00',
    vibrant: '#803c98',
    lightBg: '#f8f9fa'
  };

  const tiers = [
    {
      title: "Top Performer",
      subtitle: "120%+ of all KPIs for 2+ consecutive months",
      badge: "STAR AMBASSADOR",
      icon: <Star size={18} />,
      color: theme.gold,
      benefits: [
        "Highest commission rate (5%)",
        "Monthly cash performance bonus",
        "Physical certificate + digital credential",
        "Priority for internships",
        "LinkedIn recommendation from NGiT leadership",
        "Invite to NGiT Annual Summit",
        "Ambassador Spotlight feature"
      ],
      featured: true
    },
    {
      title: "Consistent Performer",
      subtitle: "80-119% of all KPIs maintained monthly",
      badge: "ACTIVE AMBASSADOR",
      icon: <Zap size={18} />,
      color: theme.royal,
      benefits: [
        "Standard commission rate (3%)",
        "Digital certificate",
        "LinkedIn recommendation",
        "NGiT course access (free)",
        "Alumni network membership",
        "Career opportunity access"
      ],
      featured: false
    },
    {
      title: "Growing Performer",
      subtitle: "50-79% of KPIs — with an active improvement plan",
      badge: "DEVELOPING",
      icon: <TrendingUp size={18} />,
      color: "#6c757d",
      benefits: [
        "Base commission rate (2%)",
        "Digital certificate on completion",
        "Community access",
        "1-on-1 coaching support",
        "NGiT course access"
      ],
      featured: false
    }
  ];

  return (
    <section id="tiers" className="py-5" style={{ backgroundColor: theme.lightBg }}>
      <div className="container py-4">
        <div className="mb-5">
          <span className="text-uppercase fw-bold small tracking-widest" style={{ color: theme.vibrant, letterSpacing: '2px' }}>
            Performance Tiers
          </span>
          <h2 className="display-5 fw-bold mt-2" style={{ color: theme.deep }}>
            The Higher You Perform, <br /> the More You Earn
          </h2>
          <p className="lead text-muted col-lg-6">
            Your tier is reviewed monthly. Rewards scale with your output — so your effort directly determines your outcome.
          </p>
        </div>

        <div className="row g-4 align-items-stretch">
          {tiers.map((tier, index) => (
            <div key={index} className="col-lg-4">
              <div 
                className={`h-80 p-4 p-xl-5 rounded-5 shadow-sm border-0 bg-white transition-hover`}
                style={{ 
                  border: tier.featured ? `2px solid ${theme.gold}` : '1px solid rgba(0,0,0,0.05)',
                  position: 'relative'
                }}
              >
                {/* Tier Badge */}
                <div 
                  className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-4 small fw-bold"
                  style={{ backgroundColor: `${tier.color}20`, color: tier.color }}
                >
                  {tier.icon} {tier.badge}
                </div>

                <h3 className="fw-bold mb-1" style={{ color: theme.deep }}>{tier.title}</h3>
                <p className="small text-muted mb-2" style={{ minHeight: '20px' }}>{tier.subtitle}</p>


                <ul className="list-unstyled d-grid gap-3">
                  {tier.benefits.map((benefit, bIndex) => (
                    <li key={bIndex} className="d-flex align-items-start gap-3 small">
                      <Check size={16} className="mt-1 flex-shrink-0" style={{ color: theme.gold }} />
                      <span style={{ color: '#444' }}>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .transition-hover {
          transition: transform 0.3s ease, shadow 0.3s ease;
        }
        .transition-hover:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(82, 41, 90, 0.1) !important;
        }
        .tracking-widest {
          letter-spacing: 0.1em;
        }
      `}</style>
    </section>
  );
};

export default PerformanceTiers;