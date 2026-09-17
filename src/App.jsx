import { useEffect, useState } from 'react';

const images = {
  hero: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1500&q=88',
  industries: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1800&q=88',
  team: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=88',
};

const services = [
  ['01', 'Strategy & consulting', 'Make the right choices with a clear view of where to play and how to win.', 'Business strategy · Digital strategy · Technology roadmap · Operating model'],
  ['02', 'Technology & transformation', 'Modernize the foundations that make better experiences and better work possible.', 'Digital transformation · Cloud modernization · Integration · Product delivery'],
  ['03', 'AI & intelligent automation', 'Apply emerging technology where it creates meaningful advantage, not noise.', 'AI strategy · Workflow automation · Use-case design · Implementation'],
  ['04', 'Data & decision intelligence', 'Turn scattered information into a stronger signal for the decisions ahead.', 'Data strategy · Analytics · Business intelligence · Governance'],
  ['05', 'Process & operations', 'Redesign the way work moves so teams can spend more energy on outcomes.', 'Process optimization · Efficiency · Workflow redesign · Scale'],
  ['06', 'Implementation & enablement', 'Make change stick through thoughtful delivery, adoption and momentum.', 'Solution implementation · Change management · Enablement · Improvement'],
];

const solutions = ['Business transformation', 'Digital transformation', 'AI transformation', 'Operational excellence', 'Technology modernization', 'Data transformation'];
const industries = ['Financial services', 'Healthcare', 'Retail & consumer', 'Manufacturing', 'Technology', 'Professional services'];
const faqs = [
  ['What types of businesses do you work with?', 'We work with leadership teams across industries where growth, complexity or change has created a need for clearer choices and stronger execution.'],
  ['What services do you provide?', 'Our work spans strategy, technology transformation, AI and automation, data, operations and implementation enablement.'],
  ['Do you only provide strategy or also implementation?', 'Both. We can help frame the right direction, then stay with your team through delivery, adoption and continuous improvement.'],
  ['How do you approach digital transformation?', 'We start with the business outcome and current reality, then build the smallest practical path to meaningful change.'],
  ['Can you work with our existing technology stack?', 'Yes. We begin with what is already working and make deliberate choices about what should be improved, connected or replaced.'],
  ['How long does a typical engagement take?', 'It depends on the question. Early discovery may take a few weeks; implementation engagements are shaped around the outcome and your team capacity.'],
  ['How do we get started?', 'Send a short note through the form below. We will come back with a useful first conversation, not a generic sales pitch.'],
];

function Brand({ light = false }) {
  return <a className={`brand${light ? ' brand-light' : ''}`} href="#hero" aria-label="Northstar Advisory home"><span className="brand-mark">N</span><span>NORTHSTAR <em>ADVISORY</em></span></a>;
}

function Eyebrow({ children, light = false }) {
  return <p className={`eyebrow${light ? ' eyebrow-light' : ''}`}><span className="eyebrow-line" />{children}</p>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => { setScrolled(window.scrollY > 12); const maxScroll = document.documentElement.scrollHeight - window.innerHeight; document.documentElement.style.setProperty('--scroll-progress', `${maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0}%`); }; onScroll(); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll); }, []);
  const close = () => { setOpen(false); document.body.classList.remove('menu-open'); };
  const toggle = () => { setOpen((value) => { document.body.classList.toggle('menu-open', !value); return !value; }); };
  return <header className={`site-header${scrolled ? ' scrolled' : ''}`}><span className="scroll-progress" aria-hidden="true" /><div className="nav-shell"><Brand /><button className="menu-toggle" onClick={toggle} aria-expanded={open} aria-controls="primary-navigation"><span /><span /><span /><span className="sr-only">{open ? 'Close navigation' : 'Open navigation'}</span></button><nav className={`primary-nav${open ? ' open' : ''}`} id="primary-navigation" aria-label="Primary navigation">{['Services', 'Solutions', 'Industries', 'How we work', 'About', 'Insights'].map((item) => <a key={item} href={`#${item === 'How we work' ? 'process' : item.toLowerCase()}`} onClick={close}>{item}</a>)}<a className="nav-cta" href="#contact" onClick={close}>Talk to an expert <span aria-hidden="true">↗</span></a></nav></div></header>;
}

function ChallengeSection() {
  const challenges = [['01', 'Work gets stuck', 'Manual handoffs and unclear ownership add drag to the work that matters most.'], ['02', 'Technology fragments', 'Systems multiply without a shared architecture, leaving teams to bridge the gaps.'], ['03', 'Decisions slow down', 'When insight lives in too many places, confidence and momentum are the first things to go.'], ['04', 'Scale feels expensive', 'Operational complexity grows faster than the organization can absorb it.']];
  return <section className="problem section-pad" id="challenges"><div className="container split-heading"><div><Eyebrow>The real challenge</Eyebrow></div><div><h2>Growth gets harder when your strategy, systems and operations move in different directions.</h2><p className="section-lede">The symptoms are familiar. We help leadership teams connect the dots, make better decisions and turn ambition into a practical path forward.</p></div></div><div className="challenge-grid container">{challenges.map(([number, title, text], index) => <article className={`challenge-card${index === 3 ? ' challenge-card-dark' : ''} reveal`} key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p><a href="#contact" aria-label={`Discuss ${title.toLowerCase()}`}>↗</a></article>)}</div></section>;
}

function Services() { return <section className="services section-pad" id="services"><div className="container"><div className="section-topline"><Eyebrow>What we do</Eyebrow><span className="section-index">02 / 06</span></div><div className="section-intro-row"><h2>How we help businesses move forward.</h2><p>Our work sits at the intersection of business ambition and practical delivery. Bring us the knot; we will help you find the thread.</p></div><div className="service-list">{services.map(([number, title, description, capabilities]) => <article className="service-item" key={number}><span className="service-number">{number}</span><div><h3>{title}</h3><p>{description}</p><div className="capabilities">{capabilities}</div></div><span className="service-arrow">↗</span></article>)}</div><div className="center-cta"><a className="text-link" href="#contact">Discuss your priorities <span aria-hidden="true">↗</span></a></div></div></section>; }

function Footer() { return <footer className="site-footer"><div className="container footer-top"><Brand light /><p>Clear thinking for meaningful change.<br />Strategy, technology and transformation.</p><div className="footer-links"><div><h3>Explore</h3>{['Services', 'Solutions', 'Industries', 'About'].map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}</div><div><h3>Connect</h3><a href="#contact">Contact</a><a href="#insights">Insights</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://x.com/" target="_blank" rel="noreferrer">X ↗</a></div></div></div><div className="container footer-bottom"><span>© 2026 Northstar Advisory</span><div><a href="#contact">Privacy policy</a><a href="#contact">Terms</a><a href="#contact">Cookie policy</a></div><span>Built for the work ahead.</span></div></footer>; }

function ContactForm() {
  const [status, setStatus] = useState('');
  const submit = (event) => { event.preventDefault(); if (!event.currentTarget.checkValidity()) { setStatus('Please complete the required fields so we can respond properly.'); event.currentTarget.reportValidity(); return; } setStatus('Thank you. Your enquiry is ready for the Northstar team.'); event.currentTarget.reset(); };
  return <form className="contact-form" onSubmit={submit} noValidate><div className="form-row"><label>Full name<input type="text" name="name" autoComplete="name" required /></label><label>Work email<input type="email" name="email" autoComplete="email" required /></label></div><div className="form-row"><label>Company<input type="text" name="company" autoComplete="organization" required /></label><label>Job title<input type="text" name="role" autoComplete="organization-title" /></label></div><label>Phone <span>(optional)</span><input type="tel" name="phone" autoComplete="tel" /></label><label>What can we help you with?<select name="topic" defaultValue="" required><option value="" disabled>Select a focus area</option><option>Strategy and transformation</option><option>Technology and digital</option><option>AI and automation</option><option>Data and operations</option><option>Something else</option></select></label><label>Message<textarea name="message" rows="4" required /></label><button className="button button-primary" type="submit">Start the conversation <span aria-hidden="true">↗</span></button><p className={`form-status${status.startsWith('Thank') ? ' success' : status ? ' error' : ''}`} role="status" aria-live="polite">{status}</p></form>;
}

function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal, .section-pad, .trust-band, .final-cta');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    document.querySelectorAll('.section-pad, .trust-band, .final-cta').forEach((element) => element.classList.add('motion-ready'));

    if (reduceMotion || !('IntersectionObserver' in window)) {
      revealElements.forEach((element) => element.classList.add('visible', 'in-view'));
      return undefined;
    }

    const observer = new IntersectionObserver((entries, activeObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible', 'in-view');
          activeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return <><a className="skip-link" href="#main-content">Skip to content</a><Header /><main id="main-content">
    <section className="hero section-pad" id="hero"><div className="hero-copy reveal"><Eyebrow>Independent operating partner</Eyebrow><h1>Make the hard work<br /><span>clearer.</span></h1><p className="hero-intro">We help leadership teams make better decisions when growth, systems and execution stop moving together.</p><div className="hero-actions"><a className="button button-primary" href="#contact">Talk to an expert <span aria-hidden="true">↗</span></a><a className="text-link" href="#services">Explore our services <span aria-hidden="true">↓</span></a></div></div><div className="hero-visual reveal reveal-delay-1"><div className="hero-image-wrap"><img src={images.hero} alt="A bright, modern workplace with a long collaborative table" fetchPriority="high" /><span className="image-tag">Strategy in motion <b>01</b></span></div><div className="hero-note"><span className="note-number">/ 01</span><p>Clarity for the decisions<br />that move business forward.</p></div></div></section>
    <section className="trust-band"><div className="container trust-inner"><p>Trusted thinking for teams building what comes next.</p><div className="client-marks"><span>ALTA</span><span>VERGE</span><span>MERIDIAN</span><span>KINETIC</span><span>FIELDWORK</span></div></div></section>
    <ChallengeSection />
    <section className="contrast-section section-pad"><div className="container"><div className="split-heading contrast-heading"><div><Eyebrow light>From friction to flow</Eyebrow></div><h2>Transformation should be felt in the work, not just seen in a roadmap.</h2></div><div className="contrast-grid"><div className="contrast-side before"><p className="contrast-label">Before</p><ul>{['Manual processes and repeated work', 'Fragmented tools and handoffs', 'Slow, uncertain decisions', 'Operational complexity'].map((text) => <li key={text}>{text}</li>)}</ul></div><div className="contrast-arrow" aria-hidden="true">→</div><div className="contrast-side after"><p className="contrast-label">After</p><ul>{['Connected operations with clear ownership', 'Useful visibility across the business', 'Faster, more confident decisions', 'Systems that can scale with you'].map((text) => <li key={text}>{text}</li>)}</ul></div></div></div></section>
    <Services />
    <section className="solutions section-pad" id="solutions"><div className="container"><div className="solutions-layout"><div className="solutions-sticky"><Eyebrow>Beyond the brief</Eyebrow><h2>We solve for the business, not just the brief.</h2><p>Sometimes the answer is a new operating model. Sometimes it is a better question. Our perspective stays anchored in the outcome.</p></div><div className="solution-grid">{solutions.map((title, index) => <a className={`solution-card${index === 0 ? ' solution-featured' : ''}`} href="#contact" key={title}><span>0{index + 1}</span><h3>{title}</h3>{index === 0 && <p>Align the organization, ambition and ways of working for the next chapter.</p>}<strong>↗</strong></a>)}</div></div></div></section>
    <section className="industries section-pad" id="industries"><div className="container"><div className="industry-head"><div><Eyebrow>Where we focus</Eyebrow><h2>Context changes the answer.</h2></div><p>We bring cross-industry perspective while staying close to the realities of your market, customers and operating model.</p></div><div className="industry-visual"><img src={images.industries} alt="Colleagues collaborating around a screen in a bright office" loading="lazy" /><div className="industry-list">{industries.map((industry) => <a href="#contact" key={industry}>{industry}<span>↗</span></a>)}</div></div></div></section>
    <section className="process section-pad" id="process"><div className="container"><div className="section-topline"><Eyebrow>How we work</Eyebrow><span className="section-index">03 / 06</span></div><div className="section-intro-row"><h2>From challenge to measurable outcome.</h2><p>We keep the path clear, collaborative and grounded in the decisions your team needs to make next.</p></div><div className="process-list">{[['01', 'Discover', 'Understand the business, objectives, constraints and opportunities in their proper context.'], ['02', 'Define', 'Identify priorities, design the strategy and establish a roadmap people can act on.'], ['03', 'Deliver', 'Implement practical solutions alongside your team, with momentum and care.'], ['04', 'Scale', 'Measure outcomes, optimize what is working and support long-term capability.']].map(([number, title, text]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>
    <section className="why section-pad" id="about"><div className="container why-grid"><div className="why-image"><img src={images.team} alt="A consulting team in a focused workshop" loading="lazy" /><span>Useful change<br />is a team sport.</span></div><div className="why-copy"><Eyebrow>Why Northstar</Eyebrow><h2>Good advice is only the beginning.</h2><p className="lead">We believe the best consulting makes a business more capable, not more dependent. That means bringing a sharp point of view, doing the hard work of implementation and leaving your team stronger.</p><div className="principles">{['Business-first thinking', 'Technical depth without theatre', 'Outcomes you can see in the work'].map((text, index) => <div key={text}><span>0{index + 1}</span><h3>{text}</h3></div>)}</div><a className="text-link" href="#contact">Meet the people behind the work <span aria-hidden="true">↗</span></a></div></div></section>
    <section className="cases section-pad" id="insights"><div className="container"><div className="section-topline"><Eyebrow>Selected work</Eyebrow><a className="text-link" href="#contact">View all insights <span aria-hidden="true">↗</span></a></div><div className="section-intro-row"><h2>Progress has a practical shape.</h2><p>Our casework is grounded in the details that make transformation real. Selected examples are structured here for your own future stories.</p></div><div className="case-grid">{[['https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85', 'Operations / Transformation', 'Operational transformation for a growing enterprise'], ['https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=85', 'Technology / Strategy', 'A clearer technology path for a complex portfolio'], ['https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=85', 'Data / Enablement', 'Turning scattered information into useful decisions']].map(([image, category, title], index) => <article className={`case-card${index === 0 ? ' case-large' : ''}`} key={title}><div className={`case-image${index > 0 ? ' case-image-alt' : ''}`}><img src={image} alt={title} loading="lazy" /><span>{category}</span></div><div className="case-body"><h3>{title}</h3>{index === 0 ? <dl><div><dt>Challenge</dt><dd>Disconnected workflows were slowing down operations.</dd></div><div><dt>Solution</dt><dd>Redesigned processes and implemented integrated digital workflows.</dd></div><div><dt>Result</dt><dd>Placeholder for measurable business outcome.</dd></div></dl> : <p>Challenge, solution and result structured for a future case study.</p>}<a className="text-link" href="#contact">Read the story <span aria-hidden="true">↗</span></a></div></article>)}</div></div></section>
    <section className="story section-pad"><div className="container story-grid"><div><Eyebrow>Our point of view</Eyebrow><h2>We do not just advise. We work alongside your team to make change happen.</h2></div><div><p className="story-lede">Northstar is an independent consultancy for leaders navigating meaningful change. We combine strategic perspective with the practical discipline to make new ways of working last.</p><p>Our role is to ask the useful question, bring the right people into the room and stay close enough to delivery to know whether the answer works. No theatre. No handoff into the unknown.</p><a className="button button-outline" href="#contact">Meet our team <span aria-hidden="true">↗</span></a></div></div></section>
    <section className="faq section-pad" id="faq"><div className="container faq-grid"><div><Eyebrow>Questions, answered</Eyebrow><h2>Start with a better question.</h2><p>Not sure where to begin? That is exactly what the first conversation is for.</p></div><div className="accordion">{faqs.map(([question, answer], index) => <details open={index === 0} key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>
    <section className="final-cta"><div className="container final-cta-inner"><Eyebrow light>Make the next move</Eyebrow><h2>Ready to turn your next challenge into an opportunity?</h2><div className="final-actions"><p>Let’s discuss where your business is today, where you want to go, and what it will take to get there.</p><div><a className="button button-light" href="#contact">Talk to an expert <span aria-hidden="true">↗</span></a><a className="text-link text-link-light" href="#contact">Send an enquiry <span aria-hidden="true">↗</span></a></div></div></div></section>
    <section className="contact section-pad" id="contact"><div className="container contact-grid"><div className="contact-intro"><Eyebrow>Contact</Eyebrow><h2>Let’s find the useful next step.</h2><p>Tell us a little about what you are working through. We will respond with a considered point of view and a clear next step.</p><div className="contact-details"><a href="mailto:hello@northstar.advisory"><span>Email</span>hello@northstar.advisory</a><a href="tel:+442079460218"><span>Phone</span>+44 (0)20 7946 0218</a><p><span>Office</span>18 Finsbury Square<br />London EC2A 1BR</p></div></div><ContactForm /></div></section>
  </main><Footer /></>;
}

export default App;
