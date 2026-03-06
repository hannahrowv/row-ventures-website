import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export default function RowVentures() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle'); // idle | submitting | success | error

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  const openCalendly = () => window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1zyC_iXGATumFHM1UdMmjBeb-JjBkyK45-RXkOqTHKPrYX2BubM_zs8jyRQZEXCx7n_HiVCGCa', '_blank');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    try {
      const res = await fetch('https://formspree.io/f/xdawoerd', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <div className="w-full overflow-x-hidden" style={{ background: '#05091A', color: '#E2EAF5', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@200;300;400&display=swap');
        * { box-sizing: border-box; }
        .serif { font-family: 'DM Serif Display', serif; }
        body::after {
          content: '';
          position: fixed; inset: 0;
          pointer-events: none; z-index: 9999;
          opacity: .03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 128px 128px;
        }
        @keyframes drift {
          0%, 100% { transform: translateY(0) translateX(0); opacity: .07; }
          50% { transform: translateY(-28px) translateX(16px); opacity: .22; }
        }
        @keyframes bob {
          0%, 100% { opacity: .3; transform: translateX(-50%) translateY(0); }
          50% { opacity: .65; transform: translateX(-50%) translateY(6px); }
        }
        .btn-row {
          display: inline-block;
          font-size: 11px; font-weight: 300; letter-spacing: .2em;
          text-transform: uppercase; color: #7390B8;
          border: 1px solid #1A3560; padding: 14px 38px;
          background: none; cursor: pointer; text-decoration: none;
          transition: all .35s;
        }
        .btn-row:hover { color: #E2EAF5; border-color: #C4A87A; background: rgba(196,168,122,.05); }
        .path-card { background: #090F22; padding: 44px 40px; border-top: 3px solid transparent; transition: background .3s; }
        .path-card:hover { background: rgba(10,18,40,.95); }
        .path-card.gold { border-top-color: #C4A87A; }
        .path-card.blue { border-top-color: #4A7FA8; }
        .tier-card { background: #090F22; padding: 36px 32px; transition: background .3s; }
        .tier-card:hover { background: rgba(9,18,42,.98); }
        .founder-card { background: #090F22; padding: 48px 44px; transition: background .3s; }
        .founder-card:hover { background: rgba(9,16,38,.98); }
        .why-cell { padding: 48px 44px; transition: background .3s; }
        .why-cell:hover { background: rgba(8,16,40,.8); }
        input::placeholder, textarea::placeholder { color: #334D6E; }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 100,
        padding: '26px 52px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        transition: 'background .4s',
        ...(isScrolled ? { background: 'rgba(5,9,26,.96)', borderBottom: '1px solid #102040', backdropFilter: 'blur(14px)' } : {})
      }}>
        <div className="serif" style={{ fontSize: 15, letterSpacing: '.14em' }}>ROW VENTURES</div>
        <div style={{ display: 'flex', gap: 44, alignItems: 'center' }}>
          {[['services','Services'],['approach','Why Row'],['about','About'],['contact','Contact']].map(([id, label]) => (
            <button key={id} onClick={() => scrollTo(id)} style={{ fontSize: 11, fontWeight: 300, letterSpacing: '.18em', textTransform: 'uppercase', color: '#7390B8', background: 'none', border: 'none', cursor: 'pointer' }}>
              {label}
            </button>
          ))}
        </div>
        <button onClick={openCalendly} style={{ fontSize: 11, fontWeight: 300, letterSpacing: '.18em', textTransform: 'uppercase', color: '#7390B8', border: '1px solid #1A3560', padding: '10px 26px', background: 'none', cursor: 'pointer', transition: 'all .3s' }}>
          Book a call
        </button>
      </nav>

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 80% 60% at 20% 70%, rgba(10,30,80,.7) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 85% 25%, rgba(5,20,60,.5) 0%, transparent 55%), radial-gradient(ellipse 100% 40% at 50% 100%, rgba(15,40,100,.4) 0%, transparent 50%), linear-gradient(180deg,#06091C 0%,#040818 50%,#050A20 100%)'
        }}/>
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} preserveAspectRatio="xMidYMid slice" viewBox="0 0 1440 900">
          <defs>
            <filter id="wn">
              <feTurbulence type="fractalNoise" baseFrequency=".004 .003" numOctaves="5" seed="8"/>
              <feDisplacementMap in="SourceGraphic" scale="45" xChannelSelector="R" yChannelSelector="G"/>
            </filter>
            <linearGradient id="wg1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(20,55,120,.2)"/>
              <stop offset="100%" stopColor="rgba(5,9,26,.5)"/>
            </linearGradient>
            <linearGradient id="wg2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(30,70,140,.1)"/>
              <stop offset="100%" stopColor="rgba(5,12,40,.3)"/>
            </linearGradient>
          </defs>
          <g filter="url(#wn)">
            <path d="M0,280 Q200,240 400,270 T800,265 T1200,270 T1440,260 L1440,900 L0,900Z" fill="url(#wg1)" opacity=".7"/>
            <path d="M0,340 Q300,310 600,335 T1100,330 T1440,320 L1440,900 L0,900Z" fill="url(#wg2)" opacity=".5"/>
            <path d="M0,400 Q250,385 500,400 T1000,395 T1440,390 L1440,900 L0,900Z" fill="rgba(8,20,60,.08)" opacity=".6"/>
          </g>
          <path d="M0,220 Q360,205 720,220 T1440,218" stroke="rgba(100,160,220,.07)" strokeWidth="1.5" fill="none" filter="url(#wn)"/>
          <path d="M0,460 Q360,448 720,460 T1440,458" stroke="rgba(80,130,200,.05)" strokeWidth="1" fill="none" filter="url(#wn)"/>
          <path d="M0,310 Q400,298 800,310 T1440,308" stroke="rgba(196,168,122,.05)" strokeWidth="1" fill="none" filter="url(#wn)"/>
        </svg>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          {[...Array(20)].map((_, i) => (
            <div key={i} style={{
              position: 'absolute', borderRadius: '50%', background: '#C4A87A',
              width: (1 + (i * 0.17) % 3) + 'px', height: (1 + (i * 0.17) % 3) + 'px',
              left: ((i * 37 + 11) % 100) + '%', top: ((i * 53 + 7) % 100) + '%',
              opacity: 0.05 + (i % 4) * 0.04,
              animation: `drift ${25 + (i % 8) * 5}s ease-in-out infinite`,
              animationDelay: `${(i % 6) * 2.5}s`
            }}/>
          ))}
        </div>
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: 900, padding: '90px 24px 0' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 14, fontSize: 10, fontWeight: 300, letterSpacing: '.26em', textTransform: 'uppercase', color: '#C4A87A', marginBottom: 30 }}>
            <span style={{ display: 'block', height: 1, width: 28, background: '#8A6A3A', opacity: .6 }}/>
            Strategic Finance for Founders
            <span style={{ display: 'block', height: 1, width: 28, background: '#8A6A3A', opacity: .6 }}/>
          </div>
          <h1 className="serif" style={{ fontSize: 'clamp(42px, 5.5vw, 72px)', fontWeight: 400, fontStyle: 'italic', lineHeight: 1.08, letterSpacing: '-.01em', color: '#E2EAF5', marginBottom: 26 }}>
            Where financial strategy<br/>meets early-stage ambition
          </h1>
          <p style={{ fontSize: 16, fontWeight: 200, color: '#7390B8', letterSpacing: '.05em', marginBottom: 48, lineHeight: 1.75 }}>
            We partner with pre-seed and seed-stage founders to transform complex numbers into compelling narratives — and bold ambition into fundable businesses.
          </p>
          <button onClick={openCalendly} className="btn-row">Schedule a discovery call</button>
        </div>
        <div style={{ position: 'absolute', bottom: 38, left: '50%', transform: 'translateX(-50%)', zIndex: 2, color: '#334D6E', animation: 'bob 2.6s ease-in-out infinite' }}>
          <ChevronDown size={22}/>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(to right, transparent, #1A3560, transparent)' }}/>

      {/* SERVICES */}
      <section id="services" style={{ padding: '112px 52px', background: '#05091A' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
            <span style={{ fontSize: 11, fontWeight: 300, letterSpacing: '.2em', color: '#C4A87A' }}>01</span>
            <span style={{ height: 1, width: 36, background: '#1A3560' }}/>
            <span style={{ fontSize: 10, fontWeight: 300, letterSpacing: '.22em', textTransform: 'uppercase', color: '#334D6E' }}>Our Services</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, paddingBottom: 64, borderBottom: '1px solid #102040', marginBottom: 72, alignItems: 'end' }}>
            <h2 className="serif" style={{ fontWeight: 400, fontStyle: 'italic', fontSize: 'clamp(34px,4vw,56px)', lineHeight: 1.1, color: '#E2EAF5' }}>Two ways to work<br/>with us</h2>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: '#7390B8' }}>Whether you need an ongoing finance partner embedded in your business every month, or focused support to get you through a raise — we meet you where you are and work the way you need.</p>
          </div>

          {/* Two paths */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: '#1A3560', marginBottom: 80 }}>
            <div className="path-card gold">
              <p style={{ fontSize: 10, fontWeight: 300, letterSpacing: '.22em', textTransform: 'uppercase', color: '#334D6E', marginBottom: 10 }}>Ongoing Partnership</p>
              <p className="serif" style={{ fontSize: 28, fontWeight: 400, color: '#E2EAF5', marginBottom: 14 }}>Fractional CFO</p>
              <p style={{ fontSize: 14, lineHeight: 1.75, color: '#7390B8', marginBottom: 20 }}>We embed as the finance pillar of your business — available every month as you build, scale, and navigate your most critical decisions. Three tiers to meet you where you are.</p>
              <p style={{ fontSize: 11, fontWeight: 300, letterSpacing: '.16em', textTransform: 'uppercase', color: '#C4A87A' }}>Choose your tier →</p>
            </div>
            <div className="path-card blue">
              <p style={{ fontSize: 10, fontWeight: 300, letterSpacing: '.22em', textTransform: 'uppercase', color: '#334D6E', marginBottom: 10 }}>Project-Based</p>
              <p className="serif" style={{ fontSize: 28, fontWeight: 400, color: '#E2EAF5', marginBottom: 14 }}>Raise Ready</p>
              <p style={{ fontSize: 14, lineHeight: 1.75, color: '#7390B8', marginBottom: 20 }}>Focused, end-to-end support for founders actively preparing for or running a fundraise — from financial model to close. One engagement, one goal: get you funded.</p>
              <p style={{ fontSize: 11, fontWeight: 300, letterSpacing: '.16em', textTransform: 'uppercase', color: '#4A7FA8' }}>See what's included →</p>
            </div>
          </div>

          <p style={{ fontSize: 11, fontWeight: 300, letterSpacing: '.2em', textTransform: 'uppercase', color: '#334D6E', marginBottom: 28 }}>Fractional CFO — Monthly Retainer</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: '#102040', marginBottom: 24 }}>
            {[
              { name: 'Foundation', price: '$4k', best: 'Best for: pre-revenue or early-revenue startups building from scratch', items: ['Monthly financial statements & reporting','KPI dashboard setup and tracking','Budget vs. actual review','Cash flow monitoring','Monthly founder call'] },
              { name: 'Strategic Finance', price: '$6k', best: 'Best for: seed-stage companies with active operations and investors', items: ['Everything in Foundation','Cash runway forecasting','Scenario & burn planning','Hiring & headcount modeling','Board & investor reporting','2–3 calls monthly'] },
              { name: 'Growth CFO', price: '$10k', best: 'Best for: companies scaling, raising, or managing increasing complexity', items: ['Everything in Strategic Finance','Weekly founder access','Cap table & dilution modeling','Term sheet support & financing strategy','Board meeting preparation','Strategic financial advisory'] },
            ].map((tier) => (
              <div key={tier.name} className="tier-card">
                <p className="serif" style={{ fontSize: 22, fontWeight: 400, color: '#E2EAF5', marginBottom: 5 }}>{tier.name}</p>
                <p style={{ fontSize: 11, fontWeight: 300, letterSpacing: '.06em', color: '#334D6E', marginBottom: 28, lineHeight: 1.6, fontStyle: 'italic' }}>{tier.best}</p>
                <p style={{ fontSize: 40, fontWeight: 200, color: '#E2EAF5', letterSpacing: '-.02em', lineHeight: 1, marginBottom: 4 }}>{tier.price}</p>
                <span style={{ fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: '#334D6E', marginBottom: 28, display: 'block' }}>per month</span>
                <ul style={{ listStyle: 'none' }}>
                  {tier.items.map((item, j) => (
                    <li key={j} style={{ fontSize: 13, color: '#7390B8', padding: '9px 0', borderBottom: j < tier.items.length - 1 ? '1px solid #102040' : 'none', fontWeight: 300 }}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 12, color: '#334D6E', letterSpacing: '.06em' }}>Add-on across all tiers: Bookkeeping ($800–2k/month depending on transaction volume)</p>

          {/* Advisory */}
          <div style={{ marginTop: 88, paddingTop: 64, borderTop: '1px solid #102040' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
              <span style={{ height: 1, width: 36, background: '#4A7FA8', opacity: .5 }}/>
              <span style={{ fontSize: 10, fontWeight: 300, letterSpacing: '.22em', textTransform: 'uppercase', color: '#4A7FA8' }}>Project-Based</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
              <div>
                <span style={{ display: 'inline-block', fontSize: 10, fontWeight: 300, letterSpacing: '.22em', textTransform: 'uppercase', color: '#4A7FA8', border: '1px solid rgba(74,127,168,.3)', padding: '6px 14px', marginBottom: 20 }}>Raise Ready</span>
                <p className="serif" style={{ fontSize: 34, fontWeight: 400, fontStyle: 'italic', color: '#E2EAF5', marginBottom: 20 }}>Full Raise Support<br/>Starting at $10k</p>
                <p style={{ fontSize: 15, lineHeight: 1.85, color: '#7390B8', marginBottom: 36 }}>We translate your vision into a strong, credible narrative for investors — handling every financial dimension of your raise from first draft to close. One focused engagement, built around your timeline.</p>
                <button onClick={openCalendly} className="btn-row">Discuss your raise</button>
              </div>
              <ul style={{ listStyle: 'none' }}>
                {['Financial model build','Pitch deck financial narrative & refinement','Full data room preparation','Raise structure & strategy (SAFE, valuation, terms)','Investor Q&A preparation','Pitch coaching sessions','Post-raise financial plan'].map((item, i, arr) => (
                  <li key={i} style={{ fontSize: 13, color: '#7390B8', padding: '12px 0', borderBottom: i < arr.length - 1 ? '1px solid #102040' : 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ display: 'block', width: 4, height: 4, borderRadius: '50%', background: '#4A7FA8', flexShrink: 0 }}/>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(to right, transparent, #1A3560, transparent)' }}/>

      {/* WHY ROW */}
      <section id="approach" style={{ padding: '112px 52px', background: '#070C1E' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
            <span style={{ fontSize: 11, fontWeight: 300, letterSpacing: '.2em', color: '#C4A87A' }}>02</span>
            <span style={{ height: 1, width: 36, background: '#1A3560' }}/>
            <span style={{ fontSize: 10, fontWeight: 300, letterSpacing: '.22em', textTransform: 'uppercase', color: '#334D6E' }}>Why Row Ventures</span>
          </div>
          <h2 className="serif" style={{ fontWeight: 400, fontStyle: 'italic', fontSize: 'clamp(34px,4vw,56px)', lineHeight: 1.1, color: '#E2EAF5' }}>Finance as a strategic<br/>asset, not a reporting function</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', border: '1px solid #102040', marginTop: 64 }}>
            {[
              { num: '01', tag: 'Built for early stage', title: 'Founders first', body: "We support founders from ideation to MVP and beyond — building scalable financial frameworks designed for the critical early stages, not retrofitted from corporate playbooks." },
              { num: '02', tag: 'Our approach', title: 'Operators, not consultants', body: "We embed alongside your team and think like operators. Our goal is to make finance a strategic asset that drives your decisions — not just a function that reports on them." },
              { num: '03', tag: 'Investor credibility', title: 'The bridge to your investors', body: "We bring clarity and confidence to every stakeholder interaction — from the first pitch to the board room. Your financials will inspire trust from investors, teams, and customers alike." },
              { num: '04', tag: 'In the details', title: 'Hands in the spreadsheets', body: "We get into the weeds so you don't have to. Complex ideas become real strategy. Messy numbers become compelling narratives. Ambitious visions become fundable businesses." },
            ].map((cell, i) => (
              <div key={i} className="why-cell" style={{ borderRight: i % 2 === 0 ? '1px solid #102040' : 'none', borderBottom: i < 2 ? '1px solid #102040' : 'none' }}>
                <p style={{ fontSize: 11, letterSpacing: '.2em', color: '#C4A87A', marginBottom: 18, fontWeight: 300 }}>{cell.num}</p>
                <p style={{ fontSize: 10, fontWeight: 300, letterSpacing: '.22em', textTransform: 'uppercase', color: '#334D6E', marginBottom: 12 }}>{cell.tag}</p>
                <h3 style={{ fontWeight: 300, fontSize: 20, letterSpacing: '.04em', color: '#E2EAF5', marginBottom: 10 }}>{cell.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.85, color: '#7390B8' }}>{cell.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(to right, transparent, #1A3560, transparent)' }}/>

      {/* ABOUT */}
      <section id="about" style={{ padding: '112px 52px', background: '#05091A' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
            <span style={{ fontSize: 11, fontWeight: 300, letterSpacing: '.2em', color: '#C4A87A' }}>03</span>
            <span style={{ height: 1, width: 36, background: '#1A3560' }}/>
            <span style={{ fontSize: 10, fontWeight: 300, letterSpacing: '.22em', textTransform: 'uppercase', color: '#334D6E' }}>About Row</span>
          </div>
          <div style={{ maxWidth: 780, marginBottom: 64 }}>
            <h2 className="serif" style={{ fontWeight: 400, fontStyle: 'italic', fontSize: 'clamp(34px,4vw,56px)', lineHeight: 1.1, color: '#E2EAF5', marginBottom: 26 }}>Founded by operators,<br/>built for founders</h2>
            <p style={{ fontSize: 17, lineHeight: 1.85, color: '#7390B8' }}>Row Ventures was born from a simple observation: early-stage founders are making their most consequential financial decisions with the least support. We built Row to close that gap — bringing the kind of financial rigor usually reserved for large institutions to the founders who need it most.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: '#102040' }}>
            {[
              { name: 'Sarah Jackson', role: 'Co-Founder', bio: "Sarah's path spanned Goldman Sachs — where she controlled and projected revenue for consumer lending businesses and supported investor narratives — and a fractional CFO firm where she worked with founders across Australia on tax, business structuring, and strategy. She translates complex financial models into the narratives that move investors.", tags: 'Institutional Finance · Fractional CFO · Investor Narratives' },
              { name: 'Hannah Stinson', role: 'Co-Founder', bio: "Hannah rose to VP at Goldman Sachs managing a team across corporate lending businesses through multiple credit vehicles, developing a systems-level instinct for how complex financial structures hold together. She builds the financial infrastructure that lets founders see their business clearly and scale with confidence.", tags: 'Financial Systems · Corporate Lending · FP&A' },
            ].map((f) => (
              <div key={f.name} className="founder-card">
                <p className="serif" style={{ fontSize: 28, fontWeight: 400, color: '#E2EAF5', marginBottom: 5 }}>{f.name}</p>
                <p style={{ fontSize: 10, fontWeight: 300, letterSpacing: '.24em', textTransform: 'uppercase', color: '#C4A87A', marginBottom: 24 }}>{f.role}</p>
                <p style={{ fontSize: 14, lineHeight: 1.85, color: '#7390B8', marginBottom: 20 }}>{f.bio}</p>
                <p style={{ fontSize: 11, color: '#334D6E', letterSpacing: '.1em' }}>{f.tags}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section style={{ background: '#070C1E', padding: '88px 52px', textAlign: 'center' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p className="serif" style={{ fontSize: 'clamp(22px,2.8vw,36px)', fontWeight: 400, fontStyle: 'italic', color: '#E2EAF5', maxWidth: 760, margin: '0 auto 18px', lineHeight: 1.4 }}>
            "Financial discipline isn't about restraint — it's about unlocking opportunity."
          </p>
          <p style={{ fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: '#334D6E' }}>Row Ventures</p>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(to right, transparent, #1A3560, transparent)' }}/>

      {/* CONTACT */}
      <section id="contact" style={{ padding: '112px 52px', background: '#05091A', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
            <span style={{ fontSize: 11, fontWeight: 300, letterSpacing: '.2em', color: '#C4A87A' }}>04</span>
            <span style={{ height: 1, width: 36, background: '#1A3560' }}/>
            <span style={{ fontSize: 10, fontWeight: 300, letterSpacing: '.22em', textTransform: 'uppercase', color: '#334D6E' }}>Get Started</span>
          </div>
          <h2 className="serif" style={{ fontWeight: 400, fontStyle: 'italic', fontSize: 'clamp(34px,4vw,56px)', lineHeight: 1.1, color: '#E2EAF5', marginBottom: 56 }}>Let's talk</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96, alignItems: 'start' }}>
            <div>
              <p style={{ fontSize: 10, fontWeight: 300, letterSpacing: '.22em', textTransform: 'uppercase', color: '#334D6E', marginBottom: 16 }}>Direct contact</p>
              <div style={{ marginBottom: 44 }}>
                <a href="mailto:hello@row-ventures.com" style={{ display: 'block', fontSize: 15, color: '#7390B8', textDecoration: 'none', padding: '7px 0', letterSpacing: '.04em' }}>hello@row-ventures.com</a>
              </div>
              <p style={{ fontSize: 10, fontWeight: 300, letterSpacing: '.22em', textTransform: 'uppercase', color: '#334D6E', marginBottom: 16 }}>Schedule time</p>
              <button onClick={openCalendly} className="btn-row">Book a 30-min discovery call</button>
              <p style={{ fontSize: 12, color: '#334D6E', marginTop: 12, letterSpacing: '.04em', lineHeight: 1.6 }}>Free. No pressure. Just a conversation about where you are and where you want to go.</p>
            </div>
            <div>
              <p style={{ fontSize: 10, fontWeight: 300, letterSpacing: '.22em', textTransform: 'uppercase', color: '#334D6E', marginBottom: 0 }}>Or send us a note</p>
              {formStatus === 'success' ? (
                <div style={{ borderTop: '1px solid #102040', paddingTop: 40, paddingBottom: 40 }}>
                  <p className="serif" style={{ fontSize: 22, fontStyle: 'italic', color: '#C4A87A', marginBottom: 12 }}>Message received.</p>
                  <p style={{ fontSize: 14, color: '#7390B8', lineHeight: 1.75 }}>Thanks for reaching out — we'll be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                  {[
                    ['text','Name','name'],
                    ['email','Email','email'],
                    ['text','Company / stage (e.g. pre-seed, seed)','company'],
                  ].map(([type, ph, field], i) => (
                    <div key={field} style={{ borderBottom: '1px solid #102040', ...(i === 0 ? { borderTop: '1px solid #102040' } : {}) }}>
                      <input
                        type={type} placeholder={ph} name={field} required={field !== 'company'}
                        value={formData[field]}
                        onChange={e => setFormData(d => ({ ...d, [field]: e.target.value }))}
                        style={{ width: '100%', background: 'transparent', border: 'none', outline: 'none', padding: '20px 0', fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: 14, color: '#E2EAF5', letterSpacing: '.04em' }}
                      />
                    </div>
                  ))}
                  <div style={{ borderBottom: '1px solid #102040' }}>
                    <textarea
                      rows={4} placeholder="What are you working on, and what do you need help with?" name="message" required
                      value={formData.message}
                      onChange={e => setFormData(d => ({ ...d, message: e.target.value }))}
                      style={{ width: '100%', background: 'transparent', border: 'none', outline: 'none', padding: '20px 0', fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: 14, color: '#E2EAF5', letterSpacing: '.04em', resize: 'none' }}
                    />
                  </div>
                  {formStatus === 'error' && (
                    <p style={{ fontSize: 13, color: '#B05050', marginTop: 16, letterSpacing: '.03em', lineHeight: 1.6 }}>
                      We're having trouble receiving messages right now. Please email us directly at hello@row-ventures.com.
                    </p>
                  )}
                  <button type="submit" className="btn-row" disabled={formStatus === 'submitting'} style={{ marginTop: 28, width: '100%', padding: 16, opacity: formStatus === 'submitting' ? 0.5 : 1, cursor: formStatus === 'submitting' ? 'wait' : 'pointer' }}>
                    {formStatus === 'submitting' ? 'Sending...' : 'Send message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid #102040', padding: '36px 52px', background: '#05091A', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span className="serif" style={{ fontSize: 14, letterSpacing: '.14em', color: '#7390B8' }}>ROW VENTURES</span>
        <span style={{ fontSize: 11, color: '#334D6E', letterSpacing: '.1em' }}>© 2025 Row Ventures</span>
      </footer>

    </div>
  );
}
