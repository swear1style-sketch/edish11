import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { CopperplateLanding as CobaltLanding } from './copperplate-engine.js';

// The Edish Connect Official Geometric Emblem SVG
export function BrandEmblem({ size = 32 }) {
  return React.createElement('svg', {
    viewBox: '0 0 36 36',
    fill: 'none',
    width: size,
    height: size,
    style: { display: 'inline-block', verticalAlign: 'middle', marginRight: 10 }
  }, [
    React.createElement('rect', {
      key: 'r',
      x: 2,
      y: 2,
      width: 32,
      height: 32,
      rx: 7,
      stroke: 'currentColor',
      strokeWidth: 1.5,
      strokeOpacity: 0.8,
      fill: 'none'
    }),
    React.createElement('path', {
      key: 'p',
      d: 'M8 28C8 16.954 16.954 8 28 8',
      stroke: 'currentColor',
      strokeWidth: 2.2,
      strokeLinecap: 'round'
    }),
    React.createElement('line', {
      key: 'l1',
      x1: 18,
      y1: 12,
      x2: 18,
      y2: 24,
      stroke: 'currentColor',
      strokeWidth: 1.8,
      strokeLinecap: 'round'
    }),
    React.createElement('line', {
      key: 'l2',
      x1: 12,
      y1: 18,
      x2: 24,
      y2: 18,
      stroke: 'currentColor',
      strokeWidth: 1.8,
      strokeLinecap: 'round'
    }),
    React.createElement('circle', {
      key: 'c',
      cx: 18,
      cy: 18,
      r: 2.2,
      fill: 'currentColor'
    })
  ]);
}

// Counting House Calculator Component
export function CountingHouseCalculator({ onOpenModal }) {
  const [teamSize, setTeamSize] = useState(8);
  const [tier, setTier] = useState('fullstack'); // 'fullstack', 'cloud', 'aiml'

  const tierRates = {
    fullstack: { label: 'Full-Stack & Mobile Pod', usRate: 155000, blrRate: 54000, jprRate: 36000 },
    cloud: { label: 'Cloud Native & DevOps Pod', usRate: 175000, blrRate: 62000, jprRate: 41000 },
    aiml: { label: 'AI/ML & Platform Pod', usRate: 195000, blrRate: 72000, jprRate: 46000 }
  };

  const current = tierRates[tier];
  const annualUS = teamSize * current.usRate;
  const annualBlr = teamSize * current.blrRate;
  const annualJpr = teamSize * current.jprRate;
  const netSavingsBlr = annualBlr - annualJpr;
  const netSavingsUS = annualUS - annualJpr;
  const arbitragePercent = Math.round(((annualBlr - annualJpr) / annualBlr) * 100);

  const fmt = (num) => '$' + num.toLocaleString('en-US');

  return React.createElement('section', {
    id: 'calculator',
    className: 'ctl-calc-section',
    'data-sec': 'calculator',
    'aria-label': 'Capability Arbitrage Calculator'
  }, [
    React.createElement('div', { key: 'wrap', className: 'ctl-wrap' }, [
      React.createElement('div', { key: 'head', style: { maxWidth: 680 } }, [
        React.createElement('p', {
          key: 'kicker',
          className: 'ctl-kicker',
          style: { fontFamily: 'var(--ctl-sans)', textTransform: 'uppercase', letterSpacing: '0.18em', fontSize: '0.75rem', color: 'var(--ctl-ink)', marginBottom: 8 }
        }, 'Capability Arbitrage · Counting House'),
        React.createElement('h2', {
          key: 'title',
          style: { fontFamily: 'var(--ctl-serif)', fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)', fontWeight: 400, color: 'var(--ctl-ink)', margin: '0 0 16px 0', lineHeight: 1.15 }
        }, [
          'The Mathematics of ',
          React.createElement('em', { key: 'em', style: { fontStyle: 'italic', textDecoration: 'underline', textDecorationThickness: '1px', textUnderlineOffset: '6px' } }, 'Dedicated Pods')
        ]),
        React.createElement('p', {
          key: 'sub',
          style: { fontFamily: 'var(--ctl-sans)', fontSize: '1rem', color: 'var(--ctl-text)', lineHeight: 1.6 }
        }, 'Model your technical pod topography in Jaipur. Benefit from 58% lower operational cost than Bengaluru and 3x higher engineer tenure, with 100% statutory equity transfer at month 12.')
      ]),

      React.createElement('div', { key: 'grid', className: 'ctl-calc-grid' }, [
        // Left Column: Interactive Parameters
        React.createElement('div', { key: 'controls', className: 'ctl-calc-card' }, [
          React.createElement('div', { key: 'pills-group', className: 'ctl-calc-slider-group' }, [
            React.createElement('div', { className: 'ctl-calc-slider-label' }, [
              React.createElement('span', { key: 'l' }, '1. Engineering Discipline'),
              React.createElement('span', { key: 'v', className: 'ctl-calc-slider-val', style: { fontSize: '1rem' } }, current.label)
            ]),
            React.createElement('div', { className: 'ctl-calc-pills' }, [
              React.createElement('button', {
                key: 'fs',
                type: 'button',
                className: 'ctl-calc-pill' + (tier === 'fullstack' ? ' active' : ''),
                onClick: () => setTier('fullstack')
              }, 'Full-Stack'),
              React.createElement('button', {
                key: 'cl',
                type: 'button',
                className: 'ctl-calc-pill' + (tier === 'cloud' ? ' active' : ''),
                onClick: () => setTier('cloud')
              }, 'Cloud & DevOps'),
              React.createElement('button', {
                key: 'ai',
                type: 'button',
                className: 'ctl-calc-pill' + (tier === 'aiml' ? ' active' : ''),
                onClick: () => setTier('aiml')
              }, 'AI / Platform')
            ])
          ]),

          React.createElement('div', { key: 'team-group', className: 'ctl-calc-slider-group' }, [
            React.createElement('div', { className: 'ctl-calc-slider-label' }, [
              React.createElement('span', { key: 'tl' }, '2. Dedicated Pod Size'),
              React.createElement('span', { key: 'tv', className: 'ctl-calc-slider-val' }, `${teamSize} Engineers`)
            ]),
            React.createElement('input', {
              type: 'range',
              min: 3,
              max: 40,
              step: 1,
              value: teamSize,
              className: 'ctl-calc-slider',
              onChange: (e) => setTeamSize(parseInt(e.target.value, 10))
            }),
            React.createElement('div', {
              style: { display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontFamily: 'var(--ctl-sans)', color: 'var(--ctl-text)', marginTop: 8 }
            }, [
              React.createElement('span', { key: 'min' }, '3 (Focused Pilot)'),
              React.createElement('span', { key: 'mid' }, '15 (Full Guild)'),
              React.createElement('span', { key: 'max' }, '40+ (Turnkey GCC)')
            ])
          ]),

          React.createElement('div', {
            key: 'assurance',
            style: { borderTop: '1px dashed color-mix(in oklab, var(--ctl-ink) 20%, transparent)', paddingTop: 18, marginTop: 12 }
          }, [
            React.createElement('div', {
              style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, fontSize: '0.82rem', fontFamily: 'var(--ctl-sans)', color: 'var(--ctl-text)' }
            }, [
              React.createElement('div', { key: 'a1' }, '✦ 94% Retention SLA'),
              React.createElement('div', { key: 'a2' }, '✦ SOC2 / ISO Compliant'),
              React.createElement('div', { key: 'a3' }, '✦ Sub-4 Wk Onboarding'),
              React.createElement('div', { key: 'a4' }, '✦ 100% IP Sovereignty')
            ])
          ])
        ]),

        // Right Column: The Ledger Output Card
        React.createElement('div', { key: 'ledger', className: 'ctl-ledger-card' }, [
          React.createElement('div', {
            style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(247, 244, 236, 0.2)', paddingBottom: 12, marginBottom: 16 }
          }, [
            React.createElement('span', {
              style: { fontFamily: 'var(--ctl-sans)', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.75rem', color: '#F5D48A' }
            }, 'Annual Cost Comparison Ledger'),
            React.createElement('span', {
              style: { fontFamily: 'var(--ctl-serif)', fontStyle: 'italic', fontSize: '0.9rem', color: 'rgba(247, 244, 236, 0.8)' }
            }, `${teamSize} Seats`)
          ]),

          React.createElement('div', { className: 'ctl-ledger-row' }, [
            React.createElement('span', { key: 'l1' }, 'US / Western Europe (In-House)'),
            React.createElement('span', { key: 'v1', className: 'ctl-ledger-val' }, fmt(annualUS))
          ]),

          React.createElement('div', { className: 'ctl-ledger-row' }, [
            React.createElement('span', { key: 'l2' }, 'Tier-1 India (Bengaluru / NCR)'),
            React.createElement('span', { key: 'v2', className: 'ctl-ledger-val' }, fmt(annualBlr))
          ]),

          React.createElement('div', {
            className: 'ctl-ledger-row',
            style: { background: 'rgba(245, 212, 138, 0.1)', margin: '4px -12px', padding: '14px 12px', borderBottom: 'none' }
          }, [
            React.createElement('span', { key: 'l3', style: { fontWeight: 600, color: '#F5D48A' } }, 'Edish Connect (Jaipur GCC)'),
            React.createElement('span', { key: 'v3', className: 'ctl-ledger-val', style: { fontWeight: 700, color: '#F5D48A' } }, fmt(annualJpr))
          ]),

          React.createElement('div', { className: 'ctl-ledger-total' }, [
            React.createElement('div', { key: 'tlabel' }, [
              React.createElement('div', { style: { fontFamily: 'var(--ctl-sans)', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(247, 244, 236, 0.7)' } }, 'Annual Net Arbitrage'),
              React.createElement('div', { style: { fontFamily: 'var(--ctl-sans)', fontSize: '0.85rem', color: '#F5D48A', marginTop: 4 } }, `${arbitragePercent}% lower than Bengaluru`)
            ]),
            React.createElement('div', { key: 'tamt', className: 'ctl-ledger-savings-amt' }, `${fmt(netSavingsBlr)}/yr`)
          ]),

          React.createElement('div', { style: { marginTop: 28 } }, [
            React.createElement('button', {
              key: 'btn',
              type: 'button',
              className: 'ctl-btn',
              style: { width: '100%', justifyContent: 'center', background: '#F5D48A', color: '#0A192F', borderColor: '#F5D48A', fontWeight: 600 },
              onClick: () => onOpenModal({ teamSize, tier: current.label, savings: fmt(netSavingsBlr) })
            }, [
              React.createElement('span', { key: 'txt' }, 'Reserve Capability Center Pod →')
            ])
          ])
        ])
      ])
    ])
  ]);
}

// Interactive Consultation Modal Dialog
export function ConsultationModal({ isOpen, onClose, initialData = {} }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    podSize: initialData.teamSize || 8,
    model: 'Dedicated Engineering Pod',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return React.createElement('div', {
    className: 'ctl-modal-backdrop',
    onClick: (e) => { if (e.target === e.currentTarget) onClose(); }
  }, [
    React.createElement('div', { key: 'box', className: 'ctl-modal-box' }, [
      React.createElement('button', {
        key: 'close',
        type: 'button',
        className: 'ctl-modal-close',
        onClick: onClose,
        'aria-label': 'Close dialog'
      }, '✕'),

      submitted ? React.createElement('div', { key: 'success', style: { textAlign: 'center', padding: '30px 10px' } }, [
        React.createElement('div', { style: { fontSize: '2.5rem', marginBottom: 16 } }, '✦'),
        React.createElement('h3', {
          style: { fontFamily: 'var(--ctl-serif)', fontSize: '2rem', fontStyle: 'italic', margin: '0 0 12px 0' }
        }, 'Advisory Request Received'),
        React.createElement('p', {
          style: { fontFamily: 'var(--ctl-sans)', fontSize: '0.95rem', color: 'var(--ctl-text)', lineHeight: 1.6 }
        }, `Thank you, ${formData.name || 'Partner'}. A founding principal from our Jaipur advisory practice will review your specification and reach out within 24 hours.`),
        React.createElement('button', {
          type: 'button',
          className: 'ctl-btn',
          style: { marginTop: 24 },
          onClick: onClose
        }, React.createElement('span', null, 'Return to Ledger'))
      ]) : React.createElement('form', { key: 'form', onSubmit: handleSubmit }, [
        React.createElement('p', {
          key: 'kicker',
          style: { fontFamily: 'var(--ctl-sans)', textTransform: 'uppercase', letterSpacing: '0.16em', fontSize: '0.72rem', color: 'var(--ctl-ink)', margin: '0 0 6px 0' }
        }, 'Confidential Strategy Session'),
        React.createElement('h3', {
          key: 'title',
          style: { fontFamily: 'var(--ctl-serif)', fontSize: '1.9rem', fontStyle: 'italic', margin: '0 0 18px 0', lineHeight: 1.2 }
        }, 'Initiate Your Capability Pod'),
        React.createElement('p', {
          key: 'desc',
          style: { fontFamily: 'var(--ctl-sans)', fontSize: '0.85rem', color: 'var(--ctl-text)', margin: '0 0 20px 0' }
        }, 'Speak directly with an enterprise partner. No sales SDRs, no generic staffing rosters.'),

        React.createElement('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 } }, [
          React.createElement('div', { key: 'name-field' }, [
            React.createElement('label', { style: { fontFamily: 'var(--ctl-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' } }, 'Your Name'),
            React.createElement('input', {
              required: true,
              type: 'text',
              className: 'ctl-modal-input',
              placeholder: 'e.g. Vikram Singhania',
              value: formData.name,
              onChange: (e) => setFormData({ ...formData, name: e.target.value })
            })
          ]),
          React.createElement('div', { key: 'email-field' }, [
            React.createElement('label', { style: { fontFamily: 'var(--ctl-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' } }, 'Work Email'),
            React.createElement('input', {
              required: true,
              type: 'email',
              className: 'ctl-modal-input',
              placeholder: 'name@enterprise.com',
              value: formData.email,
              onChange: (e) => setFormData({ ...formData, email: e.target.value })
            })
          ])
        ]),

        React.createElement('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 } }, [
          React.createElement('div', { key: 'company-field' }, [
            React.createElement('label', { style: { fontFamily: 'var(--ctl-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' } }, 'Company / Entity'),
            React.createElement('input', {
              required: true,
              type: 'text',
              className: 'ctl-modal-input',
              placeholder: 'e.g. Acme FinTech Ltd.',
              value: formData.company,
              onChange: (e) => setFormData({ ...formData, company: e.target.value })
            })
          ]),
          React.createElement('div', { key: 'model-field' }, [
            React.createElement('label', { style: { fontFamily: 'var(--ctl-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' } }, 'Preferred Model'),
            React.createElement('select', {
              className: 'ctl-modal-input',
              value: formData.model,
              onChange: (e) => setFormData({ ...formData, model: e.target.value })
            }, [
              React.createElement('option', { key: 'm1', value: 'Dedicated Engineering Pod' }, 'Dedicated Engineering Pod'),
              React.createElement('option', { key: 'm2', value: 'Build-Operate-Transfer (BOT)' }, 'Build-Operate-Transfer (BOT)'),
              React.createElement('option', { key: 'm3', value: 'Jaipur GCC Advisory' }, 'Jaipur GCC Advisory'),
              React.createElement('option', { key: 'm4', value: 'AI/ML & Cloud Migration Pod' }, 'AI/ML & Cloud Migration Pod')
            ])
          ])
        ]),

        React.createElement('div', { key: 'notes-field' }, [
          React.createElement('label', { style: { fontFamily: 'var(--ctl-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' } }, 'Technical Stack & Scope (Optional)'),
          React.createElement('textarea', {
            className: 'ctl-modal-input',
            style: { height: 70, resize: 'none' },
            placeholder: 'e.g. 8 engineers for Go / React / Kubernetes microservices migration...',
            value: formData.notes,
            onChange: (e) => setFormData({ ...formData, notes: e.target.value })
          })
        ]),

        React.createElement('button', {
          key: 'sub-btn',
          type: 'submit',
          className: 'ctl-btn',
          style: { width: '100%', justifyContent: 'center', marginTop: 10 }
        }, React.createElement('span', null, 'Request Confidential Partner Briefing →'))
      ])
    ])
  ]);
}

// Master Edish Connect App Component
export default function EdishApp() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleOpenModal = (data = {}) => {
    setModalData(data);
    setModalOpen(true);
  };

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Operating Models", href: "#solutions" },
    { label: "Staircase Framework", href: "#services" },
    { label: "Arbitrage Calculator", href: "#calculator" },
    { label: "Chronicle", href: "#insights" }
  ];

  const heroData = {
    title: "Built at Your Comfort\nRooted in Heritage",
    subtitle: "Jaipur capability center & dedicated engineering pods. Where three centuries of mathematical precision meet modern software engineering.",
    action: { label: "Explore Operating Models", href: "#solutions" },
    est: "EST. 1727",
    edition: "VOL. I — Nº 01"
  };

  const clientList = [
    "PNC Financial",
    "Bank of America",
    "Xponentium",
    "Atos",
    "Material+",
    "FinTech UK",
    "Enterprise Cloud",
    "Sovereign Health"
  ];

  const aboutData = {
    kicker: "The Jaipur Advantage · Est. 1727",
    statement: "We bring the architectural discipline of Jaipur's 1727 grid to *dedicated engineering pods* — zero attrition, 58% cost arbitrage, total IP sovereignty.",
    body: "Founded as an elite capability center and pod advisory, Edish Connect designs, builds, and transfers sovereign tech teams in Jaipur. We unite premier technical talent with the stability of India's most livable Tier-2 tech capital.",
    stats: [
      { value: 58, suffix: "%", label: "Cost Arbitrage vs Bengaluru" },
      { value: 94, suffix: "%", label: "Annual Pod Retention Rate" },
      { value: 4, suffix: "wks", label: "Average Time-to-Deploy" }
    ],
    seal: "Edish Connect · Jaipur 1727 Precision · Engineering Meets Inspiration · "
  };

  const solutionsCopy = {
    kicker: "Operating Models",
    title: "Three pathways, *one sovereign standard*",
    intro: "Pull a bookmark from the shelf. Each is an operating model engineered for risk-free talent acquisition, full IP custody, and long-term capability building."
  };

  const solutionsList = [
    {
      kicker: "Model I",
      title: "Dedicated Engineering Pods",
      quote: "Your own high-velocity team, embedded directly into your sprint rituals.",
      body: "Pre-vetted, autonomous full-stack pods (Architects, Tech Leads, Senior Engineers, QA, DevOps) working exclusively for your company. Retain direct daily standup control while we handle Tier-2 talent sourcing and infrastructure.",
      points: ["Direct Sprint & Jira Integration", "Single-Client Exclusivity", "Sub-4 Week Pod Deployment"],
      art: "typewriter",
      tone: "paper"
    },
    {
      kicker: "Model II",
      title: "Build-Operate-Transfer (BOT)",
      quote: "De-risk expansion today, own the Indian legal entity tomorrow.",
      body: "We build your development center from ground up, operate the entity under strict compliance (SOC2, ISO, GDPR), and seamlessly transfer 100% legal equity, leases, and staff to your parent company at agreed milestone.",
      points: ["Zero Day-1 Regulatory Burden", "Guaranteed Equity Handover", "100% IP & Patent Ringfencing"],
      art: "steamer",
      tone: "ink"
    },
    {
      kicker: "Model III",
      title: "Jaipur GCC Advisory",
      quote: "A fortress capability center in India's most stable Tier-2 tech capital.",
      body: "Full-scope capability center setup for global enterprises. Benefit from Jaipur's 15+ premier technical universities (MNIT, BITS Pilani feeder), 3x lower attrition than Bengaluru, and world-class Tier-4 data center connectivity.",
      points: ["Turnkey Class-A Facility Setup", "MNIT & Premier Campus Pipeline", "State Industrial & Tax Incentives"],
      art: "monogram",
      tone: "paper"
    },
    {
      kicker: "Model IV",
      title: "Autonomous AI & Cloud Pods",
      quote: "Modern architectures built by engineers who stay for the journey.",
      body: "Specialized pods for AI/ML model fine-tuning, cloud native migrations (AWS, Azure, GCP), and legacy modernization. Backed by senior enterprise architects with 15+ years experience at Fortune 100 institutions.",
      points: ["LLM Fine-Tuning & RAG Pipelines", "Enterprise Cloud Architecture", "Rigorous Code Review Standards"],
      art: "tower",
      tone: "ink"
    }
  ];

  const servicesCopy = {
    kicker: "Execution Framework",
    title: "A ledger of *the Staircase transition*",
    intro: "Engagements are fixed in scope, transparent in timeline, and led by a founding principal from initial architecture to sovereign transfer."
  };

  const servicesList = [
    {
      title: "Architecture & Talent Blueprint",
      summary: "Skill matrix mapping, regulatory alignment, and Jaipur tech ecosystem matching.",
      details: "We define technical pod topography, salary benchmarks, compliance firewalls, and workstation requirements tailored to your stack.",
      deliverables: ["Skill Matrix", "Compliance Map", "Tech Pod Topography"],
      duration: "Weeks 1–2"
    },
    {
      title: "Pod Inception & Pilot",
      summary: "Handpicked senior engineers onboarded and running your first production sprint.",
      details: "Rigorous multi-round vetting (top 3% selection), cultural alignment, secure hardware deployment, and full integration with your CI/CD pipelines.",
      deliverables: ["Top 3% Talent Filter", "CI/CD Integration", "Hardware Provisioning"],
      duration: "Weeks 3–4"
    },
    {
      title: "Governance & Pod Expansion",
      summary: "Autonomous delivery cadence with dedicated delivery leads and retention metrics.",
      details: "Continuous sprint velocity tracking, ongoing skills upgrading, HR and retention management ensuring 94%+ retention and zero project stalls.",
      deliverables: ["Sprint Governance", "94% Retention SLA", "Continuous Upskilling"],
      duration: "Months 2–12"
    },
    {
      title: "Sovereign Legal Transfer",
      summary: "Turnkey handover of legal entity, employment contracts, and Class-A infrastructure.",
      details: "When you are ready, we transfer full statutory equity, Indian subsidiary registration, vendor agreements, and office leases without operational friction.",
      deliverables: ["Subsidiary Incorporation", "Direct Employment Novation", "Zero Penalty Buyout"],
      duration: "Months 12–24"
    }
  ];

  const pressCopy = {
    kicker: "Insights & Evidence",
    title: "The Capability Chronicle",
    intro: "Field reports, economic analyses, and architectural monographs from our Jaipur advisory practice."
  };

  const pressList = [
    {
      title: "Tier-2 vs Tier-1 India: Why Jaipur is the New Global Capability Center Capital",
      source: "GCC Digest",
      date: "October 24, 2026",
      category: "Feature"
    },
    {
      title: "The 58% Arbitrage: How US FinTechs De-Risked Engineering Budgets in 2026",
      source: "Financial Tech Review",
      date: "November 14, 2026",
      category: "Analysis"
    },
    {
      title: "Building Sovereign Tech Teams: How BOT Models Protect IP Better Than Outsourcing",
      source: "Enterprise Architecture",
      date: "November 12, 2026",
      category: "Monograph"
    },
    {
      title: "Jaipur 1727: How Three Centuries of Urban Precision Prefigured Modern Systems Design",
      source: "Cultural Systems",
      date: "September 18, 2026",
      category: "History"
    }
  ];

  const notesList = [
    {
      title: "Zero Attrition Culture",
      body: "Engineers in Jaipur build long-term tenure, eliminating the 30%+ annual turnover penalty endemic to Bengaluru tech corridors."
    },
    {
      title: "Sovereign IP Ownership",
      body: "All code, repositories, and architectural artifacts are created directly on your secure VPC with zero intermediary IP rights."
    },
    {
      title: "MNIT Talent Feeder",
      body: "Direct recruitment pipeline from Jaipur's premier institutions, producing world-class computer science and mathematical minds."
    },
    {
      title: "Tier-4 Infrastructure",
      body: "Enterprise-grade fiber redundancy, biometric access, and SOC2 Type II compliance built into every dedicated pod facility."
    }
  ];

  const contactBandData = {
    title: "Let us build your *dedicated pod* in Jaipur.",
    body: "Schedule a confidential capability evaluation. A founding principal — never a salesperson — will evaluate your stack and team requirements within 24 hours.",
    action: { label: "Schedule Strategy Call", href: "#contact" },
    secondary: { label: "Explore Staircase Framework", href: "#services" }
  };

  const contactData = {
    email: "advisory@edishconnect.com",
    phone: "+91 (141) 281-0172",
    location: "Jaipur (HQ) · London · Singapore"
  };

  const columnsData = [
    {
      title: "The Advisory",
      links: [
        { label: "Jaipur Advantage", href: "#about" },
        { label: "Staircase Framework", href: "#services" },
        { label: "Cost Arbitrage", href: "#calculator" },
        { label: "Chronicle", href: "#insights" }
      ]
    },
    {
      title: "Operating Models",
      links: [
        { label: "Dedicated Pods", href: "#solutions" },
        { label: "BOT Advisory", href: "#solutions" },
        { label: "Jaipur GCC", href: "#solutions" },
        { label: "AI & Cloud Pods", href: "#solutions" }
      ]
    },
    {
      title: "Direct Access",
      links: [
        { label: "Schedule Call", href: "#contact" },
        { label: "SOC2 Compliance", href: "#" },
        { label: "Talent Benchmarks", href: "#" },
        { label: "Partner Portal", href: "#" }
      ]
    }
  ];

  return React.createElement(React.Fragment, null, [
    React.createElement(CobaltLanding, {
      key: 'landing',
      brand: "EDISH CONNECT",
      monogram: "E",
      logo: React.createElement(BrandEmblem, { size: 28 }),
      nav: navItems,
      cta: { label: "Book Strategy Call", href: "#contact" },
      hero: heroData,
      clients: clientList,
      clientsLabel: "Trusted by engineering leaders & enterprise architects worldwide",
      about: aboutData,
      solutionsCopy: solutionsCopy,
      solutions: solutionsList,
      servicesCopy: servicesCopy,
      services: servicesList,
      pressCopy: pressCopy,
      press: pressList,
      notes: notesList,
      contactBand: contactBandData,
      contact: contactData,
      tagline: "Dedicated Tech Teams in India. Built at your comfort, rooted in heritage.",
      columns: columnsData,
      copyright: "© 2026 Edish Connect. All rights reserved. Engineering Meets Inspiration.",
      palette: "cobalt",
      intro: false,
      calculator: React.createElement(CountingHouseCalculator, {
        key: 'calc',
        onOpenModal: handleOpenModal
      }),
      onOpenModal: () => handleOpenModal()
    }),

    // Injected Consultation Modal
    React.createElement(ConsultationModal, {
      key: 'modal',
      isOpen: modalOpen,
      initialData: modalData,
      onClose: () => setModalOpen(false)
    })
  ]);
}
