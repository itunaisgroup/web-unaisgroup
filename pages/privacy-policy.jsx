import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";

// ─── Icons ───────────────────────────────────────────────────────────────────
const Icons = {
  ShieldCheck: () => (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  Lock: () => (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  ),
  Camera: () => (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  ),
  Mic: () => (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
      <path d="M19 10v2a7 7 0 01-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="23" />
      <line x1="8" y1="23" x2="16" y2="23" />
    </svg>
  ),
  Bell: () => (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 01-3.46 0" />
    </svg>
  ),
  HardDrive: () => (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <line x1="22" y1="12" x2="2" y2="12" />
      <path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z" />
      <line x1="6" y1="16" x2="6.01" y2="16" />
      <line x1="10" y1="16" x2="10.01" y2="16" />
    </svg>
  ),
  Database: () => (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  UserCheck: () => (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="8.5" cy="7" r="4" />
      <polyline points="17 11 19 13 23 9" />
    </svg>
  ),
  Mail: () => (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  Globe: () => (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  ),
  ArrowLeft: () => (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  ),
  CheckCircle: () => (
    <svg width="18" height="18" fill="none" stroke="#00A389" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  Server: () => (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  ),
  Clock: () => (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
};

// ─── Logo Component ──────────────────────────────────────────────────────────
const Logo = ({ height = 40, showText = true }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <svg
        width={height}
        height={height}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter: "drop-shadow(0 0 8px rgba(226,196,122,0.35))",
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
        <path d="M 33 26 C 33 46, 33 68, 50 68 C 45 68, 41 54, 41 26 Z" fill="url(#heilenTeal)" />
        <path d="M 67 26 C 67 46, 67 68, 50 68 C 55 68, 59 54, 59 26 Z" fill="url(#ajwaIndigo)" />
        <path d="M 50 68 L 50 82" stroke="url(#goldGrad)" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="50" cy="46" r="4.5" fill="url(#goldGrad)" />
      </svg>
      {showText && (
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.0 }}>
          <span style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: height * 0.44,
            fontWeight: 800,
            color: "#0B234D",
            letterSpacing: "2.5px"
          }}>UNAIS</span>
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: height * 0.17,
            fontWeight: 800,
            color: "#C5A059",
            letterSpacing: "4.5px",
            textTransform: "uppercase",
            marginTop: 2
          }}>GROUP</span>
        </div>
      )}
    </div>
  );
};

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("section-1");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        if (window.scrollY >= top) {
          current = section.getAttribute("id");
        }
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "section-1", title: "1. Information We Collect" },
    { id: "section-2", title: "2. How We Use Your Data" },
    { id: "section-3", title: "3. App & Device Permissions" },
    { id: "section-4", title: "4. Data Security & Sharing" },
    { id: "section-5", title: "5. Data Retention & Deletion" },
    { id: "section-6", title: "6. Your Rights" },
    { id: "section-7", title: "7. Contact Us" },
    { id: "section-8", title: "8. Policy Updates" },
  ];

  return (
    <>
      <Head>
        <title>Privacy Policy | UG Dietitian — Unais Group</title>
        <meta
          name="description"
          content="Privacy Policy for UG Dietitian platform and Unais Group internal staff operations and client management."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        html {
          scroll-behavior: smooth;
        }
        body {
          font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: #F8FAFC;
          color: #1E293B;
          line-height: 1.65;
          -webkit-font-smoothing: antialiased;
        }
        .serif-title {
          font-family: 'Playfair Display', Georgia, serif;
        }
        .policy-card {
          background: #FFFFFF;
          border-radius: 16px;
          border: 1px solid #E2E8F0;
          padding: 32px;
          margin-bottom: 28px;
          box-shadow: 0 4px 20px rgba(15, 23, 42, 0.03);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .policy-card:hover {
          border-color: #CBD5E1;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
        }
        .permission-badge {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 20px;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          margin-top: 14px;
        }
        .security-pill {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 18px;
          background: #F0FDF4;
          border: 1px solid #DCFCE7;
          border-radius: 12px;
          margin-top: 12px;
        }
        .table-of-contents-link {
          display: block;
          padding: 10px 14px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          color: #64748B;
          text-decoration: none;
          transition: all 0.2s ease;
          border-left: 3px solid transparent;
        }
        .table-of-contents-link:hover {
          color: #0B234D;
          background: #F1F5F9;
        }
        .table-of-contents-link.active {
          color: #0B234D;
          background: #EEF2F6;
          font-weight: 600;
          border-left: 3px solid #C5A059;
        }
        @media (max-width: 900px) {
          .policy-grid-layout {
            grid-template-columns: 1fr !important;
          }
          .toc-sidebar {
            display: none !important;
          }
          .policy-card {
            padding: 24px !important;
          }
        }
      `}</style>

      {/* Official Top Bar */}
      <header style={{
        background: "#0B234D",
        padding: "8px 5%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 8, height: 8, background: "#C5A059", borderRadius: "50%" }} />
          <span style={{
            color: "rgba(255,255,255,0.9)",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "1.5px",
            textTransform: "uppercase"
          }}>
            An Official Corporate Portal of Unais Group
          </span>
        </div>
        <span style={{
          color: "#FFE59E",
          fontFamily: "'Playfair Display', serif",
          fontSize: 12,
          fontStyle: "italic"
        }}>
          Koduvalli, Kerala, India
        </span>
      </header>

      {/* Navigation Header */}
      <nav style={{
        background: "#FFFFFF",
        borderBottom: "1px solid #E2E8F0",
        position: "sticky",
        top: 0,
        zIndex: 100,
        backdropFilter: "blur(12px)",
        boxShadow: "0 2px 10px rgba(0,0,0,0.02)"
      }}>
        <div style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "16px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <Logo height={42} showText={true} />
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 14,
                fontWeight: 600,
                color: "#0B234D",
                textDecoration: "none",
                padding: "8px 16px",
                borderRadius: 8,
                background: "#F1F5F9",
                transition: "all 0.2s ease"
              }}
            >
              <Icons.ArrowLeft /> Back to Home
            </Link>
            <a
              href="mailto:it.unaisgroup@gmail.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: 14,
                fontWeight: 600,
                color: "#FFFFFF",
                textDecoration: "none",
                padding: "8px 18px",
                borderRadius: 8,
                background: "linear-gradient(135deg, #0B234D 0%, #163B7A 100%)",
                boxShadow: "0 4px 12px rgba(11,35,77,0.2)"
              }}
            >
              <Icons.Mail /> Support
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <div style={{
        background: "linear-gradient(180deg, #0B234D 0%, #0F2D62 100%)",
        color: "#FFFFFF",
        padding: "60px 24px 70px",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{
          position: "absolute",
          top: "-50%",
          right: "-10%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(197,160,89,0.15) 0%, transparent 70%)",
          pointerEvents: "none"
        }} />
        
        <div style={{ maxWidth: 1240, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: 13, fontWeight: 500 }}>
              Home
            </Link>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>/</span>
            <span style={{ color: "#FFE59E", fontSize: 13, fontWeight: 600 }}>Legal & Privacy</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
            <span style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "rgba(197,160,89,0.2)",
              color: "#FFE59E",
              border: "1px solid rgba(197,160,89,0.35)",
              padding: "4px 12px",
              borderRadius: 20,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.5px"
            }}>
              <Icons.ShieldCheck /> UG DIETITIAN PLATFORM
            </span>
            <span style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.85)",
              padding: "4px 12px",
              borderRadius: 20,
              fontSize: 12,
              fontWeight: 500
            }}>
              <Icons.Clock /> Last Updated: September 7, 2026
            </span>
          </div>

          <h1 className="serif-title" style={{ fontSize: "clamp(32px, 4.5vw, 48px)", fontWeight: 700, lineHeight: 1.2, marginBottom: 16 }}>
            Privacy Policy
          </h1>
          <p style={{
            fontSize: 16,
            color: "rgba(255,255,255,0.8)",
            maxWidth: 780,
            lineHeight: 1.7
          }}>
            UG Dietitian is designed to support internal staff operations and client management, including telecaller queues, diet plans, water tracking, attendance, and team communication.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <main style={{ maxWidth: 1240, margin: "-30px auto 80px", padding: "0 24px", position: "relative", zIndex: 10 }}>
        <div className="policy-grid-layout" style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: 36, alignItems: "start" }}>
          
          {/* Sticky Table of Contents Sidebar */}
          <aside className="toc-sidebar" style={{
            position: "sticky",
            top: 96,
            background: "#FFFFFF",
            padding: 24,
            borderRadius: 16,
            border: "1px solid #E2E8F0",
            boxShadow: "0 4px 20px rgba(15, 23, 42, 0.03)"
          }}>
            <h3 style={{
              fontSize: 12,
              fontWeight: 700,
              color: "#0B234D",
              textTransform: "uppercase",
              letterSpacing: "1px",
              marginBottom: 16,
              paddingBottom: 8,
              borderBottom: "1px solid #E2E8F0"
            }}>
              Table of Contents
            </h3>
            <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`table-of-contents-link ${activeSection === item.id ? "active" : ""}`}
                >
                  {item.title}
                </a>
              ))}
            </nav>

            <div style={{
              marginTop: 24,
              padding: 16,
              background: "#F8FAFC",
              borderRadius: 10,
              border: "1px solid #E2E8F0"
            }}>
              <p style={{ fontSize: 12, color: "#64748B", marginBottom: 8, fontWeight: 500 }}>
                Need privacy assistance?
              </p>
              <a
                href="mailto:it.unaisgroup@gmail.com"
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#0B234D",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 6
                }}
              >
                <Icons.Mail /> it.unaisgroup@gmail.com
              </a>
            </div>
          </aside>

          {/* Policy Document Content */}
          <article>

            {/* Introduction Notice Card */}
            <div className="policy-card" style={{ background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)", borderLeft: "4px solid #C5A059" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: "rgba(197,160,89,0.15)",
                  color: "#8F6E29",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0
                }}>
                  <Icons.ShieldCheck />
                </div>
                <div>
                  <h2 style={{ fontSize: 18, fontWeight: 700, color: "#0B234D", marginBottom: 6 }}>
                    Scope of this Policy
                  </h2>
                  <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.7 }}>
                    This Privacy Policy applies to the <strong>UG Dietitian</strong> application and services operated by <strong>Unais Group</strong>. It explains how staff and client operational data is gathered, protected, and utilized strictly for healthcare management, staff administration, and operational coordination.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 1 */}
            <section id="section-1" className="policy-card">
              <h2 className="serif-title" style={{ fontSize: 24, fontWeight: 700, color: "#0B234D", marginBottom: 12, display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ color: "#C5A059" }}>1.</span> Information We Collect
              </h2>
              <p style={{ color: "#475569", fontSize: 15, marginBottom: 16 }}>
                We may collect and manage the following information when you use the UG Dietitian platform:
              </p>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "Staff login details, including name, phone number.",
                  "Diet plan modifications, water logs, and feedback.",
                  "Staff attendance timestamps and leave requests.",
                  "Diet photos and attendance files uploaded through the platform."
                ].map((item, idx) => (
                  <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: 12, color: "#334155", fontSize: 15 }}>
                    <div style={{ marginTop: 3 }}><Icons.CheckCircle /></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 2 */}
            <section id="section-2" className="policy-card">
              <h2 className="serif-title" style={{ fontSize: 24, fontWeight: 700, color: "#0B234D", marginBottom: 12, display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ color: "#C5A059" }}>2.</span> How We Use Your Data
              </h2>
              <p style={{ color: "#475569", fontSize: 15, marginBottom: 16 }}>
                The information collected through the platform is used strictly to:
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 }}>
                {[
                  { title: "Telecaller Management", desc: "Manage telecaller queues, client callbacks, and automated reminders." },
                  { title: "Diet & Water Tracking", desc: "Track client diet adherence, water logs, and personalized nutritional progress." },
                  { title: "Team Communication", desc: "Deliver team broadcasts, administrative announcements, and push notifications." },
                  { title: "Staff Attendance", desc: "Manage staff check-ins, timestamps, and leave requests transparently." },
                  { title: "Client Protection", desc: "Protect client data confidentiality through strict role-based access controls." }
                ].map((usage, idx) => (
                  <div key={idx} style={{ padding: 18, background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 12 }}>
                    <h4 style={{ fontSize: 15, fontWeight: 700, color: "#0B234D", marginBottom: 4 }}>{usage.title}</h4>
                    <p style={{ fontSize: 13.5, color: "#64748B", lineHeight: 1.5 }}>{usage.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3 */}
            <section id="section-3" className="policy-card">
              <h2 className="serif-title" style={{ fontSize: 24, fontWeight: 700, color: "#0B234D", marginBottom: 12, display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ color: "#C5A059" }}>3.</span> App and Device Permissions
              </h2>
              <p style={{ color: "#475569", fontSize: 15 }}>
                UG Dietitian may request access to certain device features when required for full app functionality:
              </p>

              <div className="permission-badge">
                <div style={{ color: "#0B234D", marginTop: 2 }}><Icons.Camera /></div>
                <div>
                  <h4 style={{ fontSize: 15, fontWeight: 700, color: "#0B234D" }}>Camera &amp; Gallery</h4>
                  <p style={{ fontSize: 14, color: "#475569", marginTop: 2 }}>
                    Used for uploading client diet photos, nutritional charts, and staff attendance verification proof.
                  </p>
                </div>
              </div>

              <div className="permission-badge">
                <div style={{ color: "#0B234D", marginTop: 2 }}><Icons.Mic /></div>
                <div>
                  <h4 style={{ fontSize: 15, fontWeight: 700, color: "#0B234D" }}>Microphone</h4>
                  <p style={{ fontSize: 14, color: "#475569", marginTop: 2 }}>
                    Used for recording quick voice notes and audio consultations for client medical and diet records.
                  </p>
                </div>
              </div>

              <div className="permission-badge">
                <div style={{ color: "#0B234D", marginTop: 2 }}><Icons.Bell /></div>
                <div>
                  <h4 style={{ fontSize: 15, fontWeight: 700, color: "#0B234D" }}>Notifications</h4>
                  <p style={{ fontSize: 14, color: "#475569", marginTop: 2 }}>
                    Deliver instant client follow-up reminders, task queues, team messages, and chat updates through the app.
                  </p>
                </div>
              </div>

              <div className="permission-badge">
                <div style={{ color: "#0B234D", marginTop: 2 }}><Icons.HardDrive /></div>
                <div>
                  <h4 style={{ fontSize: 15, fontWeight: 700, color: "#0B234D" }}>Storage</h4>
                  <p style={{ fontSize: 14, color: "#475569", marginTop: 2 }}>
                    Used for saving client diet plan PDF reports, analytics downloads, and caching media attachments locally.
                  </p>
                </div>
              </div>

              <p style={{ fontSize: 13.5, color: "#64748B", marginTop: 18, fontStyle: "italic" }}>
                💡 You can manage or revoke applicable device permissions at any time through your smartphone settings.
              </p>
            </section>

            {/* Section 4 */}
            <section id="section-4" className="policy-card">
              <h2 className="serif-title" style={{ fontSize: 24, fontWeight: 700, color: "#0B234D", marginBottom: 12, display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ color: "#C5A059" }}>4.</span> Data Security and Sharing
              </h2>
              <p style={{ color: "#475569", fontSize: 15, marginBottom: 16 }}>
                We implement industry-standard administrative, physical, and technical safeguards to protect information handled through the platform:
              </p>

              <div className="security-pill">
                <div style={{ color: "#047857", marginTop: 2 }}><Icons.UserCheck /></div>
                <div>
                  <h4 style={{ fontSize: 15, fontWeight: 700, color: "#065F46" }}>Role-Based Access Control</h4>
                  <p style={{ fontSize: 14, color: "#047857", marginTop: 2 }}>
                    Telecallers and staff are strictly restricted to accessing only the clients and cases directly assigned to them.
                  </p>
                </div>
              </div>

              <div className="security-pill">
                <div style={{ color: "#047857", marginTop: 2 }}><Icons.Server /></div>
                <div>
                  <h4 style={{ fontSize: 15, fontWeight: 700, color: "#065F46" }}>Enterprise Infrastructure</h4>
                  <p style={{ fontSize: 14, color: "#047857", marginTop: 2 }}>
                    The platform relies on enterprise cloud services including <strong>Firebase FCM</strong>, <strong>Ably Realtime</strong>, and <strong>AWS Amplify</strong> for encrypted transmission and synchronization.
                  </p>
                </div>
              </div>

              <div className="security-pill">
                <div style={{ color: "#047857", marginTop: 2 }}><Icons.ShieldCheck /></div>
                <div>
                  <h4 style={{ fontSize: 15, fontWeight: 700, color: "#065F46" }}>Strict No-Data-Selling Guarantee</h4>
                  <p style={{ fontSize: 14, color: "#047857", marginTop: 2 }}>
                    We do <strong>not</strong> sell, monetize, or rent staff or client personal data to third parties, advertisers, or external vendors.
                  </p>
                </div>
              </div>

              <div className="security-pill">
                <div style={{ color: "#047857", marginTop: 2 }}><Icons.Lock /></div>
                <div>
                  <h4 style={{ fontSize: 15, fontWeight: 700, color: "#065F46" }}>Session &amp; Token Protection</h4>
                  <p style={{ fontSize: 14, color: "#047857", marginTop: 2 }}>
                    Authentication tokens and cache entries are immediately invalidated and cleared upon user logout.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section id="section-5" className="policy-card">
              <h2 className="serif-title" style={{ fontSize: 24, fontWeight: 700, color: "#0B234D", marginBottom: 12, display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ color: "#C5A059" }}>5.</span> Data Retention and Deletion
              </h2>
              <p style={{ color: "#475569", fontSize: 15, marginBottom: 14 }}>
                Information is retained only for as long as needed for active business operations, legitimate recordkeeping, and statutory compliance.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div style={{ padding: 18, background: "#F8FAFC", borderRadius: 12, border: "1px solid #E2E8F0" }}>
                  <h4 style={{ fontSize: 15, fontWeight: 700, color: "#0B234D", marginBottom: 6 }}>Staff Account Removal</h4>
                  <p style={{ fontSize: 14, color: "#64748B" }}>
                    Staff members leaving the organization may request complete account deactivation and removal through their systems administrator.
                  </p>
                </div>
                <div style={{ padding: 18, background: "#F8FAFC", borderRadius: 12, border: "1px solid #E2E8F0" }}>
                  <h4 style={{ fontSize: 15, fontWeight: 700, color: "#0B234D", marginBottom: 6 }}>Client Record Deletion</h4>
                  <p style={{ fontSize: 14, color: "#64748B" }}>
                    Client follow-up records, consultation notes, and health media may be permanently deleted or archived upon official client or doctor request.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="section-6" className="policy-card">
              <h2 className="serif-title" style={{ fontSize: 24, fontWeight: 700, color: "#0B234D", marginBottom: 12, display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ color: "#C5A059" }}>6.</span> Your Rights
              </h2>
              <p style={{ color: "#475569", fontSize: 15, marginBottom: 16 }}>
                Depending on your role and applicable access permissions, you have the following rights:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { title: "Access & Review", text: "View and verify the accuracy of your profile and diet records." },
                  { title: "Manage Permissions", text: "Revoke or configure device permissions anytime via phone settings." },
                  { title: "Request Deletion", text: "Request record deletion or account removal via your designated admin or IT support." }
                ].map((r, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", background: "#F8FAFC", borderRadius: 8, border: "1px solid #E2E8F0" }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#C5A059" }} />
                    <span style={{ fontSize: 14.5, color: "#334155" }}>
                      <strong>{r.title}:</strong> {r.text}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7 */}
            <section id="section-7" className="policy-card" style={{ background: "linear-gradient(135deg, #0B234D 0%, #163B7A 100%)", color: "#FFFFFF" }}>
              <h2 className="serif-title" style={{ fontSize: 24, fontWeight: 700, color: "#FFE59E", marginBottom: 10, display: "flex", alignItems: "center", gap: 10 }}>
                <span>7.</span> Contact Us
              </h2>
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 15, marginBottom: 20 }}>
                If you have questions about this Privacy Policy, data handling practices, or wish to submit a privacy-related request, please contact our privacy and IT support team:
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
                <a
                  href="mailto:it.unaisgroup@gmail.com"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: 18,
                    background: "rgba(255,255,255,0.1)",
                    borderRadius: 12,
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "#FFFFFF",
                    textDecoration: "none",
                    transition: "all 0.2s ease"
                  }}
                >
                  <div style={{ color: "#FFE59E" }}><Icons.Mail /></div>
                  <div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "1px" }}>Email Support</div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: "#FFE59E" }}>it.unaisgroup@gmail.com</div>
                  </div>
                </a>

                <a
                  href="https://unaisgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: 18,
                    background: "rgba(255,255,255,0.1)",
                    borderRadius: 12,
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "#FFFFFF",
                    textDecoration: "none",
                    transition: "all 0.2s ease"
                  }}
                >
                  <div style={{ color: "#FFE59E" }}><Icons.Globe /></div>
                  <div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "1px" }}>Official Website</div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: "#FFE59E" }}>unaisgroup.com</div>
                  </div>
                </a>
              </div>
            </section>

            {/* Section 8 */}
            <section id="section-8" className="policy-card">
              <h2 className="serif-title" style={{ fontSize: 24, fontWeight: 700, color: "#0B234D", marginBottom: 12, display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ color: "#C5A059" }}>8.</span> Policy Updates
              </h2>
              <p style={{ color: "#475569", fontSize: 15, lineHeight: 1.7, marginBottom: 16 }}>
                We may update this Privacy Policy periodically to reflect changes in the platform, security enhancements, data practices, or regulatory requirements. The latest version will always be accessible through the official UG Dietitian and Unais Group websites.
              </p>
              <div style={{
                padding: "14px 20px",
                background: "#F8FAFC",
                borderRadius: 10,
                border: "1px solid #E2E8F0",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 12
              }}>
                <span style={{ fontSize: 13.5, color: "#64748B" }}>
                  <strong>Effective &amp; Last Updated:</strong> September 7, 2026
                </span>
                <span style={{ fontSize: 13.5, color: "#0B234D", fontWeight: 600 }}>
                  © 2026 Unais Group. All rights reserved.
                </span>
              </div>
            </section>

          </article>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ background: "#020C1F", padding: "60px 5% 32px", borderTop: "1px solid rgba(99,179,237,0.1)", color: "#FFFFFF" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24, marginBottom: 40 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 34, height: 34, background: "linear-gradient(135deg, #63B3ED, #4299E1)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "#fff", fontSize: 16 }}>U</div>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#fff" }}>Unais <span style={{ color: "#63B3ED" }}>Group</span></span>
              </div>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13.5, maxWidth: 420 }}>
                Home to Heilen Happiness, Ajwa Creatives, and UG Dietitian. Koduvalli, Kozhikode, Kerala, India.
              </p>
            </div>

            <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
              <Link href="/" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: 14 }}>Home</Link>
              <Link href="/privacy-policy" style={{ color: "#63B3ED", textDecoration: "none", fontSize: 14, fontWeight: 600 }}>Privacy Policy</Link>
              <a href="mailto:it.unaisgroup@gmail.com" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: 14 }}>Contact Support</a>
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>
              © 2026 Unais Group. All rights reserved. Established 2015.
            </p>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>
              UG Dietitian — Internal Operational &amp; Client Management Portal
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
