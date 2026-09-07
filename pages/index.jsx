import { useState, useEffect, useRef } from "react";

// ─── Utility ────────────────────────────────────────────────────────────────
const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
};

const FadeIn = ({ children, delay = 0, dir = "up", className = "" }) => {
  const [ref, inView] = useInView();
  const transforms = { up: "translateY(40px)", down: "translateY(-40px)", left: "translateX(-40px)", right: "translateX(40px)", none: "none" };
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "none" : transforms[dir],
      transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
    }}>{children}</div>
  );
};

// ─── Icons (inline SVG) ──────────────────────────────────────────────────────
const Icons = {
  Menu: () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>,
  X: () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>,
  ChevronRight: () => <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6" /></svg>,
  ChevronLeft: () => <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6" /></svg>,
  Mail: () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
  Phone: () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.64A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" transform="translate(1 1)" /></svg>,
  MapPin: () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>,
  Star: () => <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>,
  LinkedIn: () => <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>,
  Twitter: () => <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" /></svg>,
  Instagram: () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>,
  ArrowRight: () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>,
  Award: () => <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" /></svg>,
  Users: () => <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>,
  Zap: () => <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
  Target: () => <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>,
  Quote: () => <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>,

  // Ajwa Creatives Icons
  Megaphone: () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M3 11l19-9-9 19-2-8-8-2z" /></svg>,
  Video: () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></svg>,
  Palette: () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor" /><circle cx="17.5" cy="10.5" r=".5" fill="currentColor" /><circle cx="8.5" cy="7.5" r=".5" fill="currentColor" /><circle cx="6.5" cy="12.5" r=".5" fill="currentColor" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 011.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" /></svg>,
  Code: () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
  TechSpark: () => <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 2L2 12l10 10 10-10L12 2z" /><path d="M12 6l6 6-6 6-6-6 6-6z" fill="currentColor" fillOpacity="0.2" /><circle cx="12" cy="12" r="2" fill="currentColor" /></svg>,

  // Heilen Happiness Icons
  LotusHeart: () => <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 21a9 9 0 009-9c0-4.97-4.03-9-9-9s-9 4.03-9 9a9 9 0 009 9z" strokeDasharray="2 2" /><path d="M12 7c-1.5 2.5-3.5 3.5-3.5 5.5S10 16 12 18s3.5-2 3.5-4-2-3-3.5-5.5z" fill="currentColor" fillOpacity="0.2" /><path d="M12 18c-2 0-3.5-1.5-3.5-3.5s2.5-4 3.5-5.5c1 1.5 3.5 3.5 3.5 5.5S14 18 12 18z" /></svg>,
  MindPerson: () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" /><path d="M6 20v-2a6 6 0 0112 0v2" /><path d="M12 2v2M19 5l-1.5 1.5M5 5l1.5 1.5" /></svg>,
  DualHearts: () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor" fillOpacity="0.15" /></svg>,
  FamilyHome: () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path d="M9 22V12h6v10" /></svg>,
  MaritalUnion: () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="8" cy="12" r="4" /><circle cx="16" cy="12" r="4" /><path d="M12 8a4.5 4.5 0 010 8" /></svg>,
};

// ─── Logo Component ──────────────────────────────────────────────────────────
const Logo = ({ height = 44, showText = true, glowing = false, lightTheme = false }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <svg
        width={height}
        height={height}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter: glowing ? "drop-shadow(0 0 12px rgba(226,196,122,0.65))" : "drop-shadow(0 0 8px rgba(226,196,122,0.35))",
          transition: "all 0.3s ease"
        }}
      >
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFE59E" />
            <stop offset="40%" stopColor="#E2C47A" />
            <stop offset="70%" stopColor="#C5A059" />
            <stop offset="100%" stopColor="#8F6E29" />
          </linearGradient>
          <linearGradient id="heilenTeal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4FD1C5" />
            <stop offset="100%" stopColor="#00A389" />
          </linearGradient>
          <linearGradient id="ajwaIndigo" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#818CF8" />
            <stop offset="100%" stopColor="#4F46E5" />
          </linearGradient>
          <linearGradient id="silverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#CBD5E0" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="44" stroke="url(#goldGrad)" strokeWidth="2" strokeDasharray="180 30" transform="rotate(-45 50 50)" opacity="0.95" />
        <circle cx="50" cy="50" r="39" stroke="url(#silverGrad)" strokeWidth="0.8" strokeDasharray="90 10" transform="rotate(45 50 50)" opacity="0.4" />
        <path d="M 33 26 C 33 46, 33 68, 50 68 C 45 68, 41 54, 41 26 Z" fill="url(#heilenTeal)" style={{ filter: "drop-shadow(0 2px 4px rgba(0,163,137,0.3))" }} />
        <path d="M 67 26 C 67 46, 67 68, 50 68 C 55 68, 59 54, 59 26 Z" fill="url(#ajwaIndigo)" style={{ filter: "drop-shadow(0 2px 4px rgba(79,70,229,0.3))" }} />
        <path d="M 50 68 L 50 82" stroke="url(#goldGrad)" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="50" cy="46" r="4.5" fill="url(#goldGrad)" style={{ filter: "drop-shadow(0 0 5px #FFE59E)" }} />
      </svg>
      {showText && (
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.0 }}>
          <span style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: height * 0.44,
            fontWeight: 800,
            color: lightTheme ? "#0B234D" : "#FFF",
            letterSpacing: "2.5px",
            transition: "all 0.3s ease"
          }}>UNAIS</span>
          <span style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: height * 0.17,
            fontWeight: 800,
            color: lightTheme ? "#C5A059" : "#E2C47A",
            letterSpacing: "4.5px",
            textTransform: "uppercase",
            marginTop: 2,
            transition: "all 0.3s ease"
          }}>GROUP</span>
        </div>
      )}
    </div>
  );
};

// ─── Navbar ──────────────────────────────────────────────────────────────────
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const links = ["About", "Divisions", "Portfolio", "Team", "Contact"];
  const scrollTo = (id) => { document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" }); setOpen(false); };
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? "#FFFFFF" : "rgba(255, 255, 255, 0.96)",
      backdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(15, 35, 77, 0.08)",
      boxShadow: scrolled ? "0 4px 30px rgba(15, 35, 77, 0.03)" : "none",
      transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)", padding: "0 5%",
    }}>
      {/* Official Top Banner */}
      <div style={{
        background: "#0B234D",
        margin: "0 -5.3%",
        padding: "8px 5%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
      }} className="official-top-banner">
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 10, height: 6, background: "#C5A059", borderRadius: 1 }} />
          <span style={{
            color: "rgba(255,255,255,0.85)",
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "1.5px",
            textTransform: "uppercase"
          }}>An Official Corporate Portal of Unais Group</span>
        </div>
        <span style={{
          color: "#FFE59E",
          fontFamily: "'Instrument Serif', serif",
          fontSize: 12,
          fontStyle: "italic",
          letterSpacing: "0.5px"
        }}>Koduvalli, Kerala, India</span>
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <Logo height={44} showText={true} lightTheme={true} />
        </div>
        {/* Desktop links */}
        <div style={{ display: "flex", gap: 40 }} className="nav-links">
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)} style={{
              background: "none", border: "none", color: "#0B234D",
              fontFamily: "'Instrument Sans', sans-serif", fontWeight: 600,
              cursor: "pointer", transition: "all 0.25s ease", padding: "4px 0",
              textTransform: "uppercase", fontSize: 12, letterSpacing: "1.5px",
              position: "relative"
            }}
              className="nav-link-btn"
              onMouseEnter={e => { e.target.style.color = "#C5A059"; }}
              onMouseLeave={e => { e.target.style.color = "#0B234D"; }}
            >{l}</button>
          ))}
        </div>
        <button onClick={() => scrollTo("Contact")} style={{
          background: "#0B234D", color: "#FFFFFF",
          border: "2px solid #0B234D", borderRadius: 6, padding: "10px 24px",
          fontFamily: "'Instrument Sans', sans-serif",
          fontWeight: 700, fontSize: 12, letterSpacing: "1px", cursor: "pointer",
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          textTransform: "uppercase",
          boxShadow: "0 2px 8px rgba(11,35,77,0.15)"
        }}
          onMouseEnter={e => { e.target.style.background = "#C5A059"; e.target.style.borderColor = "#C5A059"; }}
          onMouseLeave={e => { e.target.style.background = "#0B234D"; e.target.style.borderColor = "#0B234D"; }}
          className="nav-cta"
        >Get Started</button>
        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} style={{ display: "none", background: "none", border: "none", color: "#0B234D", cursor: "pointer" }} className="hamburger">
          {open ? <Icons.X /> : <Icons.Menu />}
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div style={{
          background: "#FFFFFF", padding: "20px 5%", borderTop: "1px solid rgba(15, 35, 77, 0.08)",
        }}>
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)} style={{
              display: "block", width: "100%", textAlign: "left", background: "none", border: "none",
              color: "#0B234D", fontSize: 15, fontFamily: "'Instrument Sans', sans-serif", padding: "12px 0",
              cursor: "pointer", borderBottom: "1px solid rgba(15, 35, 77, 0.04)", fontWeight: 600
            }}>{l}</button>
          ))}
        </div>
      )}
      <style>{`
            @media(max-width:768px){.nav-links{display:none!important}.nav-cta{display:none!important}.hamburger{display:flex!important}.official-top-banner{display:none!important}}
          `}</style>
    </nav>
  );
};

// ─── Executive Matrix Graphic ───────────────────────────────────────────────
const HeroGraphic = () => {
  return (
    <div style={{
      position: "relative", width: "100%", display: "flex", alignItems: "center", justifyContent: "center",
      padding: "40px 0"
    }} className="hero-graphic-container">

      {/* Subtle architectural vertical gridlines for high-end structure */}
      <div style={{ position: "absolute", left: "-20%", right: "-20%", height: "1px", background: "rgba(11,35,77,0.06)", zIndex: 1 }} />
      <div style={{ position: "absolute", top: "-20%", bottom: "-20%", width: "1px", background: "rgba(11,35,77,0.06)", zIndex: 1 }} />

      {/* Main Editorial Board Framed Box */}
      <div style={{
        position: "relative",
        width: "100%",
        maxWidth: 460,
        background: "#FFFFFF",
        border: "1.5px solid #0B234D",
        boxShadow: "0 30px 70px rgba(11,35,77,0.08), 0 0 0 10px rgba(11,35,77,0.01)",
        padding: "48px 36px",
        zIndex: 5,
        borderRadius: 2
      }}>

        {/* Elegant Classical Gold Corner Accents */}
        <div style={{ position: "absolute", top: 8, left: 8, width: 24, height: 24, borderTop: "2px solid #C5A059", borderLeft: "2px solid #C5A059" }} />
        <div style={{ position: "absolute", top: 8, right: 8, width: 24, height: 24, borderTop: "2px solid #C5A059", borderRight: "2px solid #C5A059" }} />
        <div style={{ position: "absolute", bottom: 8, left: 8, width: 24, height: 24, borderBottom: "2px solid #C5A059", borderLeft: "2px solid #C5A059" }} />
        <div style={{ position: "absolute", bottom: 8, right: 8, width: 24, height: 24, borderBottom: "2px solid #C5A059", borderRight: "2px solid #C5A059" }} />

        {/* Presidential Gold Embossed Emblem Seal */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 32, textAlign: "center" }}>
          <div style={{
            width: 72, height: 72, borderRadius: "50%",
            background: "#0B234D",
            border: "2px solid #C5A059",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 4px 15px rgba(11,35,77,0.2)",
            marginBottom: 16
          }}>
            <Logo showText={false} height={44} lightTheme={false} />
          </div>
          <span style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: 10,
            fontWeight: 800,
            color: "#C5A059",
            letterSpacing: "3px",
            textTransform: "uppercase"
          }}>Corporate Seals of Quality</span>
          <h3 style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: 22,
            fontWeight: 600,
            color: "#0B234D",
            marginTop: 4
          }}>Flagship Operations</h3>
          <div style={{ width: 60, height: 1, background: "rgba(11,35,77,0.15)", margin: "12px auto 0" }} />
        </div>

        {/* Matrix Properties */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

          {/* Division 1: Heilen */}
          <div style={{
            borderBottom: "1px dashed rgba(11,35,77,0.15)",
            paddingBottom: 20
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#00A389" }} />
                <h4 style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: 18,
                  fontWeight: 600,
                  color: "#0B234D"
                }}>Heilen Happiness</h4>
              </div>
              <span style={{
                background: "rgba(0,163,137,0.06)",
                color: "#00A389",
                fontSize: 9,
                fontFamily: "'Instrument Sans', sans-serif",
                fontWeight: 700,
                padding: "3px 8px",
                borderRadius: 100,
                letterSpacing: "0.5px"
              }}>WELLNESS DIVISION</span>
            </div>
            <p style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: 12,
              color: "#4B5563",
              lineHeight: 1.6
            }}>
              Kerala's premier sanctuary for holistic family counseling and emotional guidance.
            </p>
          </div>

          {/* Division 2: Ajwa */}
          <div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#4F46E5" }} />
                <h4 style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: 18,
                  fontWeight: 600,
                  color: "#0B234D"
                }}>Ajwa Creatives</h4>
              </div>
              <span style={{
                background: "rgba(79,70,229,0.06)",
                color: "#4F46E5",
                fontSize: 9,
                fontFamily: "'Instrument Sans', sans-serif",
                fontWeight: 700,
                padding: "3px 8px",
                borderRadius: 100,
                letterSpacing: "0.5px"
              }}>TECHNOLOGY DIVISION</span>
            </div>
            <p style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: 12,
              color: "#4B5563",
              lineHeight: 1.6
            }}>
              Stately high-scale custom software development and elite digital campaigns.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

// ─── Timeline Graphic ────────────────────────────────────────────────────────
const TimelineGraphic = () => {
  const steps = [
    { year: "2015", title: "Corporate Genesis", desc: "Established in Koduvalli, Kerala, forming regional foundations.", accent: "#63B3ED" },
    { year: "2018", title: "Heilen Happiness", desc: "Launched dedicated wings for family counseling and emotional resilience.", accent: "#2DD4BF" },
    { year: "2021", title: "Ajwa Creatives", desc: "Built highly-scale software development and creative units.", accent: "#818CF8" },
    { year: "2026", title: "Conglomerate Growth", desc: "Serving over 200+ global brands and local communities with distinction.", accent: "#a78bfa" }
  ];
  return (
    <div style={{
      background: "linear-gradient(135deg, rgba(4,14,35,0.92), rgba(9,28,62,0.96)), url('images/hero_corporate_blend.png') center/cover no-repeat", borderRadius: 24,
      padding: "48px 40px", position: "relative", overflow: "hidden",
      border: "1px solid rgba(99,179,237,0.15)",
      boxShadow: "0 30px 70px rgba(4,14,35,0.35)",
      height: "100%"
    }}>
      <div style={{ position: "absolute", top: -40, right: -40, width: 250, height: 250, background: "radial-gradient(circle, rgba(99,179,237,0.12) 0%, transparent 70%)", borderRadius: "50%" }} />

      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: "#fff", marginBottom: 36, letterSpacing: "0.5px" }}>Our Growth Journey</h3>

      <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 32 }}>
        {/* Vertical line */}
        <div style={{ position: "absolute", left: 16, top: 8, bottom: 8, width: 2, background: "linear-gradient(to bottom, #63B3ED, #2DD4BF, #818CF8, #a78bfa)" }} />

        {steps.map((s, idx) => (
          <div key={idx} style={{ display: "flex", gap: 24, position: "relative", zIndex: 2 }}>
            <div style={{
              width: 34, height: 34, borderRadius: "50%", background: "#040E23",
              border: `3.5px solid ${s.accent}`, display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: `0 0 15px ${s.accent}40`, flexShrink: 0
            }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: s.accent }} />
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                <span style={{ fontSize: 18, fontWeight: 800, color: s.accent, fontFamily: "'DM Sans', sans-serif" }}>{s.year}</span>
                <h4 style={{ fontSize: 15, fontWeight: 700, color: "#fff", fontFamily: "'DM Sans', sans-serif" }}>{s.title}</h4>
              </div>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.6, marginTop: 4 }}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── Hero ─────────────────────────────────────────────────────────────────────
const Hero = () => {
  const scrollTo = (id) => document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  return (
    <section style={{
      minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden",
      background: "#F8FAFC",
      paddingTop: 120
    }}>
      {/* Architectural Thin Grid Patterns (White House Style Grid) */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.03, pointerEvents: "none" }}>
        <svg width="100%" height="100%"><defs><pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse"><path d="M 80 0 L 0 0 0 80" fill="none" stroke="#0B234D" strokeWidth="0.8" /></pattern></defs><rect width="100%" height="100%" fill="url(#grid)" /></svg>
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 5% 80px", position: "relative", zIndex: 2, width: "100%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 60, alignItems: "center" }} className="hero-split-grid">
          {/* Left content */}
          <div>
            {/* Badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(197,160,89,0.08)",
              border: "1px solid rgba(197,160,89,0.25)", borderRadius: 4, padding: "8px 20px",
              marginBottom: 32, animation: "fadeDown 0.8s ease forwards",
            }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#C5A059" }} />
              <span style={{ color: "#C5A059", fontSize: 11, fontFamily: "'Instrument Sans', sans-serif", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>
                ESTABLISHED 2015 · KERALA'S PREMIER CONGLOMERATE
              </span>
            </div>
            <h1 style={{
              fontFamily: "'Instrument Serif', serif", fontSize: "clamp(42px, 6.5vw, 80px)", fontWeight: 400,
              color: "#0B234D", lineHeight: 1.05, marginBottom: 28, maxWidth: 850,
              animation: "fadeUp 0.9s ease 0.2s forwards", opacity: 0,
              letterSpacing: "-1px"
            }}>
              Shaping Wellness.<br />
              <span style={{ color: "#C5A059", fontStyle: "italic" }}>
                Defining Technology.
              </span>
            </h1>
            <p style={{
              color: "#334155", fontSize: "clamp(16px, 1.8vw, 18px)", fontFamily: "'Instrument Sans', sans-serif",
              maxWidth: 680, lineHeight: 1.8, marginBottom: 48,
              animation: "fadeUp 0.9s ease 0.4s forwards", opacity: 0,
            }}>
              Unais Group is Kerala's elite corporate conglomerate, driving global impact through two flagship properties: <strong>Heilen Happiness</strong>, pioneering holistic mental counseling, and <strong>Ajwa Creatives</strong>, engineered for custom enterprise software development & digital strategy.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", animation: "fadeUp 0.9s ease 0.6s forwards", opacity: 0 }}>
              <button onClick={() => scrollTo("divisions")} style={{
                background: "#0B234D", color: "#fff", border: "2px solid #0B234D",
                borderRadius: 6, padding: "16px 36px", fontSize: 13, fontFamily: "'Instrument Sans', sans-serif",
                fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 8,
                boxShadow: "0 4px 15px rgba(11,35,77,0.15)", transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                textTransform: "uppercase", letterSpacing: "1px"
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "#C5A059"; e.currentTarget.style.borderColor = "#C5A059"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#0B234D"; e.currentTarget.style.borderColor = "#0B234D"; }}
              >Our Divisions <Icons.ArrowRight /></button>
              <button onClick={() => scrollTo("contact")} style={{
                background: "transparent", color: "#0B234D", border: "2.5px solid #0B234D",
                borderRadius: 6, padding: "16px 36px", fontSize: 13, fontFamily: "'Instrument Sans', sans-serif",
                fontWeight: 700, cursor: "pointer", transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                textTransform: "uppercase", letterSpacing: "1px"
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(11,35,77,0.04)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
              >Contact Us</button>
            </div>
          </div>
          {/* Right Graphic Column */}
          <div className="hero-graphic-wrapper" style={{ position: "relative", zIndex: 3 }}>
            <HeroGraphic />
          </div>
        </div>
        {/* Stats Bar with Clean Editorial Dividers */}
        <div style={{ display: "flex", gap: 48, marginTop: 80, flexWrap: "wrap", animation: "fadeUp 0.9s ease 0.8s forwards", opacity: 0 }}>
          {[["2", "Flagship divisions"], ["200+", "Global clients"], ["10+", "Years of growth"], ["100%", "Corporate trust"]].map(([n, l], idx) => (
            <div key={l} style={{ display: "flex", alignItems: "center", gap: 32 }}>
              {idx > 0 && <div style={{ width: 1, height: 44, background: "rgba(11,35,77,0.12)" }} />}
              <div>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 40, fontWeight: 600, color: "#C5A059", lineHeight: 1 }}>{n}</div>
                <div style={{ color: "#4B5563", fontSize: 11, fontFamily: "'Instrument Sans', sans-serif", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", marginTop: 6 }}>{l}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Scroll indicator */}
      <div style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <span style={{ color: "#0B234D", fontSize: 11, fontFamily: "'Instrument Sans', sans-serif", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", opacity: 0.6 }}>Scroll</span>
        <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, #0B234D, transparent)", opacity: 0.3 }} />
      </div>
      <style>{`
        @keyframes fadeDown { from{opacity:0;transform:translateY(-20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.5)} }
        @media(max-width:992px){
          .hero-split-grid { grid-template-columns: 1fr!important; text-align: center; }
          .hero-graphic-wrapper { display: none!important; }
        }
      `}</style>
    </section>
  );
};

// ─── About ────────────────────────────────────────────────────────────────────
const About = () => (
  <section id="about" style={{ padding: "120px 5%", background: "#fff" }}>
    <div style={{ maxWidth: 1280, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="about-grid">
        {/* Left timeline graphic */}
        <FadeIn dir="left">
          <TimelineGraphic />
        </FadeIn>
        {/* Right text */}
        <FadeIn dir="right" delay={0.2}>
          <div>
            <div style={{ color: "#4299E1", fontSize: 12, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 16 }}>About Unais Group</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, color: "#040E23", lineHeight: 1.2, marginBottom: 24 }}>
              Two Properties.<br />One Commitment.
            </h2>
            <p style={{ color: "#4A5568", fontSize: 16, fontFamily: "'DM Sans', sans-serif", lineHeight: 1.9, marginBottom: 24 }}>
              Established in 2015 at Koduvalli, Kerala, Unais Group has evolved into a highly respected conglomerate. Our corporate philosophy is anchored on two distinct pillars: elevating mental well-being and pioneering digital brilliance.
            </p>
            <p style={{ color: "#4A5568", fontSize: 16, fontFamily: "'DM Sans', sans-serif", lineHeight: 1.9, marginBottom: 40 }}>
              Through <strong>Heilen Happiness</strong>, we address the critical societal need for holistic counseling and relationship guidance. Through <strong>Ajwa Creatives</strong>, we offer high-performance software engineering, visual graphic design, and complete digital marketing campaigns.
            </p>
            <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
              {[["Human Well-being", "Providing secure, professional, and empathetic spaces for recovery and mental clarity."],
              ["Digital Catalyst", "Empowering businesses with custom apps and marketing strategies that drive scale."]].map(([t, d]) => (
                <div key={t} style={{ flex: 1, minWidth: 200 }}>
                  <div style={{ width: 32, height: 3, background: "linear-gradient(135deg, #4299E1, #63B3ED)", borderRadius: 2, marginBottom: 12 }} />
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, color: "#040E23", marginBottom: 6 }}>{t}</div>
                  <div style={{ color: "#718096", fontSize: 14, fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6 }}>{d}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
    <style>{`@media(max-width:768px){#about .about-grid{grid-template-columns:1fr!important}}`}</style>
  </section>
);

// ─── Divisions / Properties ──────────────────────────────────────────────────
const DivisionCard = ({ name, subtitle, description, services, themeColor, darkColor, accentColor, logoImg, bgImg, logo: Logo, delay }) => {
  const [hover, setHover] = useState(false);
  const scrollToContact = () => { document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); };
  return (
    <FadeIn delay={delay} dir="up">
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={scrollToContact}
        style={{
          background: hover ? `linear-gradient(135deg, ${darkColor}f2 0%, #030a17f2 100%), url('${bgImg}') center/cover no-repeat` : "#fff",
          border: "1px solid",
          borderColor: hover ? accentColor : "#E2E8F0",
          borderRadius: 24,
          padding: "48px 40px",
          cursor: "pointer",
          transition: "all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)",
          transform: hover ? "translateY(-12px)" : "translateY(0)",
          boxShadow: hover ? `0 40px 100px rgba(0,0,0,0.25)` : "0 8px 30px rgba(0,0,0,0.03)",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        {/* Glow effect */}
        <div style={{
          position: "absolute",
          top: -40,
          right: -40,
          width: 180,
          height: 180,
          background: hover ? `radial-gradient(circle, ${accentColor}30 0%, transparent 70%)` : "transparent",
          borderRadius: "50%",
          transition: "all 0.5s"
        }} />

        {/* Card Header */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 24 }}>
          <div style={{
            height: 56,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            transition: "all 0.5s",
          }}>
            <img
              src={logoImg}
              alt={name}
              style={{
                height: "100%",
                maxWidth: "260px",
                objectFit: "contain",
                filter: hover ? "brightness(0) invert(1)" : "none",
                transition: "all 0.5s"
              }}
            />
          </div>
          <div style={{ borderTop: "1px solid", borderColor: hover ? "rgba(255,255,255,0.1)" : "#EDF2F7", paddingTop: 16 }}>
            <span style={{
              color: accentColor,
              fontSize: 11,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              letterSpacing: "2.5px",
              textTransform: "uppercase"
            }}>{subtitle}</span>
          </div>
        </div>

        <p style={{
          color: hover ? "rgba(255,255,255,0.7)" : "#5A6578",
          fontSize: 15.5,
          fontFamily: "'DM Sans', sans-serif",
          lineHeight: 1.8,
          marginBottom: 36,
          transition: "color 0.5s",
          flexGrow: 1,
        }}>{description}</p>

        {/* Services List inside Division */}
        <div style={{ marginBottom: 32 }}>
          <h4 style={{
            color: hover ? "#fff" : "#040E23",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700,
            fontSize: 14,
            textTransform: "uppercase",
            letterSpacing: "1px",
            marginBottom: 20,
            transition: "color 0.5s"
          }}>Core Services</h4>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16 }}>
            {services.map((s, index) => {
              const SIcon = s.icon;
              return (
                <div key={index} style={{
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                  padding: "16px",
                  borderRadius: 12,
                  background: hover ? "rgba(255,255,255,0.03)" : "#F8FAFC",
                  border: "1px solid",
                  borderColor: hover ? "rgba(255,255,255,0.05)" : "#EDF2F7",
                  transition: "all 0.3s"
                }}>
                  <div style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: hover ? "rgba(255,255,255,0.06)" : "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: hover ? accentColor : themeColor,
                    flexShrink: 0,
                    border: hover ? "none" : "1px solid #EDF2F7"
                  }}>
                    <SIcon />
                  </div>
                  <div>
                    <h5 style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: 14.5,
                      color: hover ? "#fff" : "#040E23",
                      marginBottom: 4,
                      transition: "color 0.3s"
                    }}>{s.title}</h5>
                    <p style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 13,
                      lineHeight: 1.6,
                      color: hover ? "rgba(255,255,255,0.55)" : "#718096",
                      transition: "color 0.3s"
                    }}>{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          color: accentColor,
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 700,
          fontSize: 14,
          marginTop: "auto",
          transition: "all 0.3s"
        }}>
          Explore {name} Services <Icons.ChevronRight />
        </div>
      </div>
    </FadeIn>
  );
};

const Divisions = () => {
  const data = [
    {
      name: "Heilen Happiness",
      subtitle: "Mental Health & Counseling Wing",
      description: "At Heilen Happiness, we are dedicated to making a difference in the lives of individuals and families in Kerala and beyond. We are your partners in happiness, specializing in nurturing emotional resilience to ensure that joy and well-being are integral to your life journey through our holistic mental health support.",
      themeColor: "#0D9488",
      darkColor: "#062E2B",
      accentColor: "#2DD4BF",
      logoImg: "images/heilen_logo.png",
      bgImg: "images/heilen_wellness_bg.png",
      logo: Icons.LotusHeart,
      delay: 0,
      services: [
        { icon: Icons.MindPerson, title: "Personal Counseling", desc: "Empower yourself to navigate life's challenges, achieve personal growth, and find inner balance with our one-on-one sessions tailored to your needs." },
        { icon: Icons.DualHearts, title: "Relationship Support", desc: "Strengthen your bonds and resolve conflicts through relationship counseling. Discover effective communication, enhance intimacy, and build connections." },
        { icon: Icons.FamilyHome, title: "Family Counseling", desc: "Heal and harmonize family dynamics. Our family counseling promotes effective communication, resolves conflicts, and nurtures healthy relationships." },
        { icon: Icons.MaritalUnion, title: "Sexual & Marital Counseling", desc: "Foster intimacy, understanding, and harmony in your relationship. Address sexual and marital concerns in a secure, confidential environment." }
      ]
    },
    {
      name: "Ajwa Creatives",
      subtitle: "Technology & Creative Agency",
      description: "Ajwa Creatives is a premier technology and digital wing of Unais Group. We deliver highly scalable software development, result-oriented digital marketing strategies, professional video production, and visual branding assets for companies worldwide.",
      themeColor: "#4F46E5",
      darkColor: "#1E1B4B",
      accentColor: "#818CF8",
      logoImg: "images/ajwa_logo.png",
      bgImg: "images/ajwa_creatives_bg.png",
      logo: Icons.TechSpark,
      delay: 0.2,
      services: [
        { icon: Icons.Megaphone, title: "Digital Marketing", desc: "Strategic SEO, content planning, social media campaigns, and PPC that drive measurable lead acquisition and exponential brand growth." },
        { icon: Icons.Code, title: "Software Development", desc: "Custom, high-performance web applications, enterprise portals, and mobile apps built using modern technologies and architectures." },
        { icon: Icons.Palette, title: "Graphic Design", desc: "High-end visual branding, corporate logo design, digital UI/UX wireframing, and complete marketing media collateral." },
        { icon: Icons.Video, title: "Video Production", desc: "Premium video editing, cinematic corporate storytelling, visual graphics effects, and engaging social reels that capture audiences." }
      ]
    }
  ];

  return (
    <section id="divisions" style={{ padding: "120px 5%", background: "#F8FAFC" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <div style={{ color: "#4299E1", fontSize: 12, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 16 }}>Our Divisions</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, color: "#040E23", lineHeight: 1.2, marginBottom: 20 }}>Two Flagship Properties</h2>
            <p style={{ color: "#718096", fontSize: 17, fontFamily: "'DM Sans', sans-serif", maxWidth: 640, margin: "0 auto", lineHeight: 1.7 }}>Unais Group drives holistic progress through wellness advocacy and technological acceleration.</p>
          </div>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))", gap: 40 }} className="divisions-grid">
          {data.map(div => <DivisionCard key={div.name} {...div} />)}
        </div>
      </div>
      <style>{`
        @media(max-width:992px) {
          .divisions-grid { grid-template-columns: 1fr!important; }
        }
      `}</style>
    </section>
  );
};

// ─── Why Choose Us ─────────────────────────────────────────────────────────────
const WhyUs = () => (
  <section style={{ padding: "120px 5%", background: "linear-gradient(135deg, #040E23 0%, #071A3E 60%, #0A2353 100%)", position: "relative", overflow: "hidden" }}>
    <div style={{ position: "absolute", inset: 0, opacity: 0.04 }}>
      <svg width="100%" height="100%"><defs><pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse"><circle cx="15" cy="15" r="1" fill="#63B3ED" /></pattern></defs><rect width="100%" height="100%" fill="url(#dots)" /></svg>
    </div>
    <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ color: "#63B3ED", fontSize: 12, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 16 }}>Why Unais Group</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>Built on Excellence,<br />Driven by Results</h2>
        </div>
      </FadeIn>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 28 }}>
        {[
          { icon: Icons.Award, label: "Conglomerate Synergy", desc: "Fusing mental well-being and digital innovation to solve human and business challenges.", delay: 0 },
          { icon: Icons.Users, label: "Diverse Specialists", desc: "Certified clinical social workers and elite software developers under one group.", delay: 0.1 },
          { icon: Icons.Zap, label: "Kerala Rooted, Global Impact", desc: "Based in Koduvalli, Kerala, serving clients and individuals globally since 2015.", delay: 0.2 },
          { icon: Icons.Target, label: "Purpose & Performance", desc: "We are deeply committed to emotional health and business scalability.", delay: 0.3 },
        ].map(({ icon: Icon, label, desc, delay }) => (
          <FadeIn key={label} delay={delay} dir="up">
            <div style={{
              background: "rgba(255,255,255,0.04)", border: "1px solid rgba(99,179,237,0.15)",
              borderRadius: 20, padding: "40px 32px", textAlign: "center",
              backdropFilter: "blur(10px)", transition: "all 0.3s",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(99,179,237,0.1)"; e.currentTarget.style.borderColor = "rgba(99,179,237,0.4)"; e.currentTarget.style.transform = "translateY(-6px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.borderColor = "rgba(99,179,237,0.15)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div style={{ color: "#63B3ED", display: "flex", justifyContent: "center", marginBottom: 20 }}><Icon /></div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 12 }}>{label}</h3>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7 }}>{desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

// ─── Portfolio ─────────────────────────────────────────────────────────────────
const portfolioItems = [
  { division: "Ajwa Creatives", cat: "Digital Marketing", title: "Brand Growth Campaign", color: "#818CF8", shape: "M 20 80 Q 50 10 80 80 L 80 100 L 20 100 Z" },
  { division: "Heilen Happiness", cat: "Counseling", title: "Empowering Women Workshop", color: "#2DD4BF", shape: "M 50 10 A 40 40 0 1 1 49.99 10 Z" },
  { division: "Ajwa Creatives", cat: "Software Dev", title: "E-Commerce Platform", color: "#4F46E5", shape: "M 20 20 L 80 20 L 80 80 L 20 80 Z" },
  { division: "Heilen Happiness", cat: "Wellness Program", title: "Corporate Resilience Program", color: "#0D9488", shape: "M 10 50 L 50 10 L 90 50 L 50 90 Z" },
  { division: "Ajwa Creatives", cat: "Graphic Design", title: "Visual Identity System", color: "#63B3ED", shape: "M 50 10 L 90 30 L 90 70 L 50 90 L 10 70 L 10 30 Z" },
  { division: "Heilen Happiness", cat: "Family Support", title: "Harmonious Family Seminar", color: "#14B8A6", shape: "M 10 50 L 50 10 L 90 50 L 70 90 L 30 90 Z" },
];

const Portfolio = () => {
  const [active, setActive] = useState("All");
  const cats = ["All", "Heilen Happiness", "Ajwa Creatives"];
  const filtered = active === "All" ? portfolioItems : portfolioItems.filter(i => i.division === active);
  return (
    <section id="portfolio" style={{ padding: "120px 5%", background: "#fff" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ color: "#4299E1", fontSize: 12, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 16 }}>Our Footprint</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, color: "#040E23", lineHeight: 1.2, marginBottom: 20 }}>Impact & Works</h2>
          </div>
        </FadeIn>
        {/* Filter tabs */}
        <FadeIn delay={0.1}>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 48 }}>
            {cats.map(c => (
              <button key={c} onClick={() => setActive(c)} style={{
                padding: "10px 24px", borderRadius: 100, fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
                fontSize: 13, cursor: "pointer", transition: "all 0.3s",
                background: active === c ? "linear-gradient(135deg, #4299E1, #2B6CB0)" : "#F7FAFC",
                color: active === c ? "#fff" : "#718096", border: active === c ? "none" : "1px solid #E2E8F0",
                boxShadow: active === c ? "0 4px 20px rgba(66,153,225,0.4)" : "none",
              }}>{c}</button>
            ))}
          </div>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
          {filtered.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08} dir="up">
              <div style={{ borderRadius: 16, overflow: "hidden", cursor: "pointer", transition: "all 0.4s", border: "1px solid #E2E8F0" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 32px 80px rgba(0,0,0,0.12)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ height: 200, background: `linear-gradient(135deg, ${item.color}20, ${item.color}40)`, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                  <svg width="100" height="100" viewBox="0 0 100 100" opacity={0.6}><path d={item.shape} fill={item.color} /></svg>
                  <div style={{ position: "absolute", top: 16, left: 16, background: item.color, color: "#fff", padding: "4px 12px", borderRadius: 100, fontSize: 11, fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}>{item.cat}</div>
                </div>
                <div style={{ padding: 24, background: "#fff" }}>
                  <span style={{ color: item.color, fontSize: 11, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>{item.division}</span>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: "#040E23", margin: "6px 0 12px" }}>{item.title}</h3>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#4299E1", fontSize: 13, fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>Explore Detail <Icons.ChevronRight /></div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Team ─────────────────────────────────────────────────────────────────────
const Team = () => (
  <section id="team" style={{ padding: "120px 5%", background: "#F7FAFC" }}>
    <div style={{ maxWidth: 1280, margin: "0 auto" }}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ color: "#4299E1", fontSize: 12, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 16 }}>Our Leadership</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, color: "#040E23", lineHeight: 1.2 }}>Meet Our Experts</h2>
        </div>
      </FadeIn>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 280px))", justifyContent: "center", gap: 32 }}>
        {[
          { name: "Muhammed Unais", role: "Founder And CEO", initials: "MU", color: "#4299E1" },
          { name: "Aboobacker Amani", role: "CAO", initials: "AA", color: "#14B8A6" },
          { name: "Asaf Hamza", role: "COO", initials: "AH", color: "#68D391" },
        ].map(({ name, role, initials, color }, i) => (
          <FadeIn key={name} delay={i * 0.1} dir="up">
            <div style={{ textAlign: "center", background: "#fff", borderRadius: 20, padding: 32, border: "1px solid #E2E8F0", transition: "all 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 24px 60px rgba(0,0,0,0.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{
                width: 96, height: 96, borderRadius: "50%", background: `linear-gradient(135deg, ${color}33, ${color}66)`,
                margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: color,
                border: `3px solid ${color}44`,
              }}>{initials}</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: "#040E23", marginBottom: 4 }}>{name}</h3>
              <p style={{ color: "#718096", fontSize: 13, fontFamily: "'DM Sans', sans-serif", marginBottom: 20 }}>{role}</p>
              <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
                {[Icons.LinkedIn, Icons.Twitter, Icons.Instagram].map((Icon, j) => (
                  <a key={j} href="#" style={{ color: "#A0AEC0", transition: "color 0.2s", display: "flex" }}
                    onMouseEnter={e => e.currentTarget.style.color = color}
                    onMouseLeave={e => e.currentTarget.style.color = "#A0AEC0"}
                  ><Icon /></a>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

// ─── Testimonials ──────────────────────────────────────────────────────────────
const testimonials = [
  { name: "Ananya Krishnan", company: "Calicut, Kerala", text: "Heilen Happiness helped me through career anxiety. Their personal counseling sessions are incredibly compassionate and customized. A true partner in happiness.", rating: 5, property: "Heilen Happiness" },
  { name: "Priya Sharma", company: "CEO, TechStart Kerala", text: "Ajwa Creatives transformed our brand digital presence. Their custom software and marketing strategies tripled our user engagement in 6 months.", rating: 5, property: "Ajwa Creatives" },
  { name: "Dr. Mohammed Salim", company: "Ernakulam, Kerala", text: "Family counseling at Heilen Happiness provided us with communication frameworks that completely harmonized our household dynamic.", rating: 5, property: "Heilen Happiness" },
  { name: "Rajeev Pillai", company: "Director, Pinnacle Corp", text: "Professional, robust development and exceptional digital media from Ajwa. They engineered our enterprise scale e-commerce perfectly.", rating: 5, property: "Ajwa Creatives" },
];

const Testimonials = () => {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((idx - 1 + testimonials.length) % testimonials.length);
  const next = () => setIdx((idx + 1) % testimonials.length);
  const t = testimonials[idx];
  return (
    <section style={{ padding: "120px 5%", background: "linear-gradient(135deg, #040E23 0%, #071A3E 100%)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 600, background: "radial-gradient(circle, rgba(66,153,225,0.08) 0%, transparent 70%)", borderRadius: "50%" }} />
      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
        <FadeIn>
          <div style={{ color: "#63B3ED", fontSize: 12, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 16 }}>Testimonials</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: 64 }}>What Our Clients Say</h2>
        </FadeIn>
        <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(99,179,237,0.15)", borderRadius: 24, padding: "56px 48px", backdropFilter: "blur(10px)", transition: "all 0.4s" }}>
          <div style={{ color: "#4299E1", marginBottom: 24, display: "flex", justifyContent: "center" }}><Icons.Quote /></div>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(17px, 2.5vw, 22px)", color: "rgba(255,255,255,0.85)", lineHeight: 1.8, marginBottom: 36, fontStyle: "italic" }}>
            "{t.text}"
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 4, marginBottom: 20 }}>
            {Array(t.rating).fill(0).map((_, i) => <span key={i} style={{ color: "#F6AD55" }}><Icons.Star /></span>)}
          </div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700, color: "#fff" }}>{t.name}</div>
          <div style={{ color: "#63B3ED", fontSize: 13, fontFamily: "'DM Sans', sans-serif", marginTop: 4 }}>{t.company} · <span style={{ color: t.property === "Heilen Happiness" ? "#2DD4BF" : "#818CF8", fontWeight: 700 }}>{t.property}</span></div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 16, marginTop: 36 }}>
          <button onClick={prev} style={{ width: 44, height: 44, borderRadius: "50%", border: "1px solid rgba(99,179,237,0.3)", background: "none", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(99,179,237,0.15)"; e.currentTarget.style.borderColor = "#63B3ED"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "none"; e.currentTarget.style.borderColor = "rgba(99,179,237,0.3)"; }}
          ><Icons.ChevronLeft /></button>
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} style={{ width: i === idx ? 24 : 8, height: 8, borderRadius: 4, border: "none", background: i === idx ? "#4299E1" : "rgba(255,255,255,0.2)", cursor: "pointer", transition: "all 0.3s" }} />
          ))}
          <button onClick={next} style={{ width: 44, height: 44, borderRadius: "50%", border: "1px solid rgba(99,179,237,0.3)", background: "none", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(99,179,237,0.15)"; e.currentTarget.style.borderColor = "#63B3ED"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "none"; e.currentTarget.style.borderColor = "rgba(99,179,237,0.3)"; }}
          ><Icons.ChevronRight /></button>
        </div>
      </div>
    </section>
  );
};

// ─── Contact ──────────────────────────────────────────────────────────────────
const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);
  const submit = () => { if (form.name && form.email && form.message) { setSent(true); setTimeout(() => setSent(false), 4000); setForm({ name: "", email: "", service: "", message: "" }); } };
  const inp = { width: "100%", padding: "14px 18px", borderRadius: 10, border: "1px solid #E2E8F0", fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "#040E23", background: "#fff", outline: "none", boxSizing: "border-box", transition: "border-color 0.2s" };
  return (
    <section id="contact" style={{ padding: "120px 5%", background: "#fff" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ color: "#4299E1", fontSize: 12, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 16 }}>Get In Touch</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, color: "#040E23", lineHeight: 1.2, marginBottom: 20 }}>Let's Build Something Great</h2>
            <p style={{ color: "#718096", fontSize: 17, fontFamily: "'DM Sans', sans-serif", maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>Ready to take your brand or life to the next level? We'd love to hear from you.</p>
          </div>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 60, alignItems: "start" }}>
          {/* Info */}
          <FadeIn dir="left">
            <div>
              <div style={{ background: "linear-gradient(135deg, #040E23, #0A2353)", borderRadius: 20, padding: 40, marginBottom: 28 }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 32 }}>Contact Information</h3>
                {[
                  { icon: Icons.Mail, label: "Email Inquiries", val: "Unaisgroup@gmail.com" },
                  { icon: Icons.Phone, label: "Phone Support", val: "+91 97450 50226" },
                  { icon: Icons.MapPin, label: "Corporate Office", val: "Unais Group, Mangalya Shopping Mall, Koduvally, Kozhikkode" },
                ].map(({ icon: Icon, label, val }) => (
                  <div key={label} style={{ display: "flex", gap: 16, marginBottom: 28, alignItems: "flex-start" }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(99,179,237,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#63B3ED", flexShrink: 0 }}><Icon /></div>
                    <div>
                      <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, fontFamily: "'DM Sans', sans-serif", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 4 }}>{label}</div>
                      <div style={{ color: "#fff", fontSize: 15, fontFamily: "'DM Sans', sans-serif" }}>{val}</div>
                    </div>
                  </div>
                ))}
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 28, marginTop: 4 }}>
                  <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, fontFamily: "'DM Sans', sans-serif", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 16 }}>Follow Us</div>
                  <div style={{ display: "flex", gap: 12 }}>
                    {[Icons.LinkedIn, Icons.Twitter, Icons.Instagram].map((Icon, i) => (
                      <a key={i} href="#" style={{ width: 40, height: 40, borderRadius: 10, border: "1px solid rgba(99,179,237,0.25)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", transition: "all 0.3s" }}
                        onMouseEnter={e => { e.currentTarget.style.background = "rgba(99,179,237,0.15)"; e.currentTarget.style.borderColor = "#63B3ED"; e.currentTarget.style.color = "#63B3ED"; }}
                        onMouseLeave={e => { e.currentTarget.style.background = "none"; e.currentTarget.style.borderColor = "rgba(99,179,237,0.25)"; e.currentTarget.style.color = "#fff"; }}
                      ><Icon /></a>
                    ))}
                  </div>
                </div>
              </div>
              {/* Map embed */}
              <div style={{ borderRadius: 20, overflow: "hidden", border: "1px solid #E2E8F0" }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.1!2d75.9!3d11.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba659e4d6a5a3c5%3A0x1234567890abcdef!2sKoduvalli%2C+Kozhikode%2C+Kerala!5e0!3m2!1sen!2sin!4v1234567890" width="100%" height="200" style={{ border: 0 }} loading="lazy" title="Unais Group Location" />
              </div>
            </div>
          </FadeIn>
          {/* Form */}
          <FadeIn dir="right" delay={0.2}>
            <div style={{ background: "#F7FAFC", borderRadius: 20, padding: 48, border: "1px solid #E2E8F0" }}>
              {sent && (
                <div style={{ background: "linear-gradient(135deg, #C6F6D5, #9AE6B4)", border: "1px solid #68D391", borderRadius: 12, padding: "16px 20px", marginBottom: 24, color: "#276749", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 15, display: "flex", alignItems: "center", gap: 8 }}>
                  ✓ Message sent! We'll be in touch soon.
                </div>
              )}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
                <div>
                  <label style={{ display: "block", fontSize: 13, fontFamily: "'DM Sans', sans-serif", fontWeight: 600, color: "#4A5568", marginBottom: 8, letterSpacing: "0.3px" }}>Your Name</label>
                  <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Full name" style={inp}
                    onFocus={e => e.target.style.borderColor = "#4299E1"} onBlur={e => e.target.style.borderColor = "#E2E8F0"} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 13, fontFamily: "'DM Sans', sans-serif", fontWeight: 600, color: "#4A5568", marginBottom: 8, letterSpacing: "0.3px" }}>Email Address</label>
                  <input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" type="email" style={inp}
                    onFocus={e => e.target.style.borderColor = "#4299E1"} onBlur={e => e.target.style.borderColor = "#E2E8F0"} />
                </div>
              </div>
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: "block", fontSize: 13, fontFamily: "'DM Sans', sans-serif", fontWeight: 600, color: "#4A5568", marginBottom: 8, letterSpacing: "0.3px" }}>Property & Service Interested In</label>
                <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} style={{ ...inp }}
                  onFocus={e => e.target.style.borderColor = "#4299E1"} onBlur={e => e.target.style.borderColor = "#E2E8F0"}>
                  <option value="">Select property / service...</option>
                  <optgroup label="Heilen Happiness (Wellness & Mental Health)">
                    <option value="Personal Counseling">Personal Counseling</option>
                    <option value="Relationship Support">Relationship Support</option>
                    <option value="Family Counseling">Family Counseling</option>
                    <option value="Sexual & Marital Counseling">Sexual & Marital Counseling</option>
                  </optgroup>
                  <optgroup label="Ajwa Creatives (Tech & Digital Agency)">
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Software Development">Software Development</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Video Editing">Video Editing</option>
                  </optgroup>
                  <optgroup label="Unais Group">
                    <option value="General Inquiries">General Inquiries / Corporate</option>
                  </optgroup>
                </select>
              </div>
              <div style={{ marginBottom: 28 }}>
                <label style={{ display: "block", fontSize: 13, fontFamily: "'DM Sans', sans-serif", fontWeight: 600, color: "#4A5568", marginBottom: 8, letterSpacing: "0.3px" }}>Your Message</label>
                <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell us how we can help you..." rows={5} style={{ ...inp, resize: "vertical" }}
                  onFocus={e => e.target.style.borderColor = "#4299E1"} onBlur={e => e.target.style.borderColor = "#E2E8F0"} />
              </div>
              <button onClick={submit} style={{
                width: "100%", padding: "16px 0", background: "linear-gradient(135deg, #4299E1, #2B6CB0)",
                color: "#fff", border: "none", borderRadius: 10, fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700, fontSize: 15, cursor: "pointer", letterSpacing: "0.5px",
                boxShadow: "0 8px 32px rgba(66,153,225,0.4)", transition: "all 0.3s",
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 16px 48px rgba(66,153,225,0.5)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(66,153,225,0.4)"; }}
              >Send Message →</button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

// ─── Footer ───────────────────────────────────────────────────────────────────
const Footer = () => (
  <footer style={{ background: "#020C1F", padding: "60px 5% 32px", borderTop: "1px solid rgba(99,179,237,0.1)" }}>
    <div style={{ maxWidth: 1280, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 48, flexWrap: "wrap" }} className="footer-grid">
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ width: 36, height: 36, background: "linear-gradient(135deg, #63B3ED, #4299E1)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "#fff", fontSize: 16 }}>U</div>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#fff" }}>Unais <span style={{ color: "#63B3ED" }}>Group</span></span>
          </div>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, fontFamily: "'DM Sans', sans-serif", lineHeight: 1.8, maxWidth: 300 }}>
            Empowering minds and building brands since 2015. Home to Heilen Happiness and Ajwa Creatives. Based in Koduvalli, Kozhikode, Kerala, India.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
            {[Icons.LinkedIn, Icons.Twitter, Icons.Instagram].map((Icon, i) => (
              <a key={i} href="#" style={{ width: 36, height: 36, borderRadius: 8, border: "1px solid rgba(99,179,237,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.5)", transition: "all 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.color = "#63B3ED"; e.currentTarget.style.borderColor = "#63B3ED"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.5)"; e.currentTarget.style.borderColor = "rgba(99,179,237,0.2)"; }}
              ><Icon /></a>
            ))}
          </div>
        </div>
        {[
          { title: "Our Properties", links: ["Heilen Happiness", "Ajwa Creatives", "Unais Group Corporate"] },
          { title: "Heilen Services", links: ["Personal Counseling", "Relationship Support", "Family Counseling", "Sexual & Marital Support"] },
          { title: "Ajwa Services", links: ["Digital Marketing", "Software Development", "Graphic Design", "Video Production"] },
        ].map(({ title, links }) => (
          <div key={title}>
            <h4 style={{ color: "#fff", fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, marginBottom: 20 }}>{title}</h4>
            {links.map(l => (
              <div key={l} style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, fontFamily: "'DM Sans', sans-serif", marginBottom: 12, cursor: "pointer", transition: "color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.color = "#63B3ED"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.45)"}
              >{l}</div>
            ))}
          </div>
        ))}
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 13, fontFamily: "'DM Sans', sans-serif" }}>© 2026 Unais Group. All rights reserved. Established 2015.</p>
        <div style={{ display: "flex", gap: 20 }}>
          <a href="/privacy-policy" style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, fontFamily: "'DM Sans', sans-serif", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.color = "#63B3ED"}
            onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}
          >Privacy Policy</a>
        </div>
        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 13, fontFamily: "'DM Sans', sans-serif" }}>Crafted with passion in Kerala 🇮🇳</p>
      </div>
    </div>
  </footer>
);

// ─── App Root ─────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        *{margin:0;padding:0;box-sizing:border-box}
        html{scroll-behavior:smooth}
        body{font-family:'DM Sans',sans-serif;background:#fff;overflow-x:hidden}
        ::-webkit-scrollbar{width:6px}
        ::-webkit-scrollbar-track{background:#040E23}
        ::-webkit-scrollbar-thumb{background:linear-gradient(#4299E1,#63B3ED);border-radius:3px}
        @media(max-width:768px){
          #contact > div > div:last-child{grid-template-columns:1fr!important}
          footer > div > div:first-child{grid-template-columns:1fr 1fr!important}
        }
      `}</style>
      <Navbar />
      <Hero />
      <About />
      <Divisions />
      <WhyUs />
      <Portfolio />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
