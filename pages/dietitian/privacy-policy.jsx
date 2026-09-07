import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function DietitianPrivacyPolicy() {
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
        <title>Privacy Policy — UG Dietitian | Unais Group</title>
        <meta
          name="description"
          content="Privacy Policy for UG Dietitian platform and Unais Group internal staff operations and client management."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style jsx global>{`
        *, *::before, *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        html {
          scroll-behavior: smooth;
          font-size: 16px;
        }
        body {
          font-family: 'Inter', sans-serif;
          background: #F5F4F0;
          color: #1C1C1C;
          line-height: 1.7;
          -webkit-font-smoothing: antialiased;
        }
        ::selection {
          background: #1C3557;
          color: #fff;
        }
        .container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 40px;
        }
        @media (max-width: 768px) {
          .container {
            padding: 0 20px;
          }
        }
        .nav-inner {
          max-width: 1240px;
          margin: 0 auto;
          padding: 18px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: 'EB Garamond', serif;
          font-size: 28px;
          color: #1C1C1C;
          text-decoration: none;
          letter-spacing: 1px;
          white-space: nowrap;
        }
        .nav-logo {
          height: 40px;
          width: 40px;
          flex-shrink: 0;
        }
        .nav-brand span {
          color: #7A6A4F;
        }
        .btn-back {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border: 1px solid rgba(28, 53, 87, 0.25);
          background: transparent;
          color: #1C3557;
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          text-decoration: none;
          border-radius: 4px;
          transition: all 0.2s ease;
        }
        .btn-back:hover {
          background: rgba(28, 53, 87, 0.06);
          border-color: #1C3557;
        }
        .btn-contact {
          background: #1C3557;
          color: #fff;
          border: none;
          padding: 10px 20px;
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          text-decoration: none;
          border-radius: 4px;
          transition: all 0.2s ease;
        }
        .btn-contact:hover {
          background: #142840;
        }
        .policy-header {
          background: #1C3557;
          color: #fff;
          padding: 68px 0 58px;
          border-bottom: 1px solid rgba(212, 175, 55, 0.2);
        }
        .header-tag {
          font-family: 'Inter', sans-serif;
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #D4AF37;
          margin-bottom: 14px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .header-title {
          font-family: 'EB Garamond', serif;
          font-size: clamp(38px, 5vw, 52px);
          font-weight: 500;
          line-height: 1.15;
          margin-bottom: 14px;
          color: #fff;
        }
        .header-title em {
          font-style: italic;
          color: #D4AF37;
        }
        .header-meta {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .header-desc {
          font-size: 16.5px;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.88);
          max-width: 900px;
        }
        .policy-wrapper {
          padding: 56px 0 88px;
        }
        .policy-grid {
          display: grid;
          grid-template-columns: 290px 1fr;
          gap: 48px;
          align-items: start;
        }
        .toc-card {
          background: #fff;
          border: 1px solid #D8D5CF;
          border-radius: 4px;
          padding: 26px 22px;
          position: sticky;
          top: 96px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
        }
        .toc-title {
          font-family: 'EB Garamond', serif;
          font-size: 20px;
          font-weight: 600;
          color: #1C3557;
          margin-bottom: 16px;
          padding-bottom: 10px;
          border-bottom: 1px solid #E8E6DF;
        }
        .toc-links {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .toc-link {
          font-size: 13.5px;
          color: #555;
          text-decoration: none;
          padding: 9px 12px;
          border-radius: 4px;
          transition: all 0.2s ease;
          border-left: 2px solid transparent;
          display: block;
        }
        .toc-link:hover,
        .toc-link.active {
          color: #1C3557;
          background: #F5F4F0;
          border-left-color: #D4AF37;
          font-weight: 600;
        }
        .content-box {
          background: #fff;
          border: 1px solid #D8D5CF;
          border-radius: 4px;
          padding: 38px 44px;
          margin-bottom: 32px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
        }
        .content-box h2 {
          font-family: 'EB Garamond', serif;
          font-size: 28px;
          font-weight: 600;
          color: #101E33;
          margin-bottom: 18px;
          padding-bottom: 12px;
          border-bottom: 1px solid #F0EEE9;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .content-box h2 span {
          color: #7A6A4F;
        }
        .content-box p {
          font-size: 15.5px;
          color: #3D3D3D;
          line-height: 1.75;
          margin-bottom: 16px;
        }
        .content-box ul {
          list-style: none;
          margin: 18px 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .content-box ul li {
          font-size: 15px;
          color: #333;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          line-height: 1.6;
        }
        .content-box ul li::before {
          content: "•";
          color: #D4AF37;
          font-size: 22px;
          line-height: 1;
          margin-top: 1px;
        }
        .wide-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 16px;
          margin-top: 20px;
        }
        .two-col-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-top: 16px;
        }
        .grid-card {
          background: #FAF9F5;
          border: 1px solid #E8E6DF;
          padding: 20px 22px;
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .grid-card h4,
        .grid-card strong {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: #1C3557;
          margin-bottom: 2px;
        }
        .grid-card p {
          font-size: 14px;
          color: #555;
          margin-bottom: 0;
          line-height: 1.55;
        }
        .sec-card {
          background: #FAF9F5;
          border: 1px solid #E8E6DF;
          border-left: 4px solid #7A6A4F;
          padding: 20px 22px;
          border-radius: 4px;
          margin-bottom: 14px;
        }
        .sec-card strong {
          color: #1C3557;
          font-size: 15px;
          display: block;
          margin-bottom: 4px;
        }
        .sec-card p {
          font-size: 14px;
          color: #555;
          margin-bottom: 0;
          line-height: 1.55;
        }
        .contact-box {
          background: #1C3557;
          color: #fff;
          border-radius: 4px;
          padding: 44px;
        }
        .contact-box h2 {
          font-family: 'EB Garamond', serif;
          font-size: 30px;
          color: #D4AF37;
          margin-bottom: 12px;
        }
        .contact-box p {
          color: rgba(255, 255, 255, 0.88);
          font-size: 16px;
          margin-bottom: 24px;
          max-width: 800px;
        }
        .contact-details {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }
        .contact-badge {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.16);
          padding: 16px 24px;
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          text-decoration: none;
          color: #fff;
          min-width: 250px;
          transition: all 0.2s ease;
        }
        .contact-badge:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: #D4AF37;
        }
        .contact-badge span {
          font-size: 11px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #D4AF37;
          font-weight: 600;
        }
        .contact-badge strong {
          font-size: 16px;
          color: #fff;
        }
        footer {
          background: #111;
          color: #fff;
          padding: 44px 0;
          border-top: 1px solid #222;
        }
        .footer-inner {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }
        .footer-brand {
          font-family: 'EB Garamond', serif;
          font-size: 26px;
          color: #fff;
          letter-spacing: 1px;
        }
        .footer-brand span {
          color: #D4AF37;
        }
        .footer-copy {
          font-size: 13.5px;
          color: #777;
        }
        .footer-links {
          display: flex;
          gap: 24px;
        }
        .footer-links a {
          color: #777;
          text-decoration: none;
          font-size: 13.5px;
          transition: color 0.2s ease;
        }
        .footer-links a:hover,
        .footer-links a.active {
          color: #fff;
        }
        @media (max-width: 900px) {
          .nav-inner {
            padding: 16px 20px;
          }
          .policy-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .toc-card {
            display: none;
          }
          .two-col-grid {
            grid-template-columns: 1fr;
          }
          .content-box {
            padding: 28px 20px;
          }
          .footer-inner {
            flex-direction: column;
            text-align: center;
            padding: 0 20px;
          }
        }
      `}</style>

      {/* Navbar */}
      <nav>
        <div className="nav-inner">
          <Link href="/" className="nav-brand">
            <svg className="nav-logo" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="18" fill="none" stroke="#1C3557" strokeWidth="1.5" />
              <text x="20" y="27" fontFamily="Georgia, serif" fontSize="20" fontWeight="400" fill="#1C3557" textAnchor="middle" letterSpacing="0">U</text>
            </svg>
            UNAIS <span>Group</span>
          </Link>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="policy-header">
        <div className="container">
          <div className="header-tag">
            <span>◆</span> UG DIETITIAN PLATFORM
          </div>
          <h1 className="header-title">
            Privacy <em>Policy</em>
          </h1>
          <div className="header-meta">
            <span><strong>Last Updated:</strong> September 7, 2026</span>
            <span>•</span>
            <span>Unais Group Corporate Compliance</span>
          </div>
          <p className="header-desc">
            UG Dietitian is designed to support internal staff operations and client management, including telecaller queues, diet plans, water tracking, attendance, and team communication.
          </p>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="policy-wrapper">
        <div className="container">
          <div className="policy-grid">
            
            {/* Sticky Sidebar Table of Contents */}
            <aside className="toc-card">
              <div className="toc-title">Table of Contents</div>
              <div className="toc-links">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`toc-link ${activeSection === item.id ? "active" : ""}`}
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </aside>

            {/* Document Content */}
            <div>

              {/* Section 1 */}
              <section id="section-1" className="content-box">
                <h2><span>1.</span> Information We Collect</h2>
                <p>We may collect and manage the following information when you use the UG Dietitian platform:</p>
                <ul>
                  <li>Staff login details, including name, phone number.</li>
                  <li>Diet plan modifications, water logs, and feedback.</li>
                  <li>Staff attendance timestamps and leave requests.</li>
                  <li>Diet photos and attendance files uploaded through the platform.</li>
                </ul>
              </section>

              {/* Section 2 */}
              <section id="section-2" className="content-box">
                <h2><span>2.</span> How We Use Your Data</h2>
                <p>The information collected through the platform is used to:</p>
                <div className="wide-grid">
                  <div className="grid-card">
                    <h4>Telecaller Queues</h4>
                    <p>Manage telecaller queues, client follow-ups, and automated reminders.</p>
                  </div>
                  <div className="grid-card">
                    <h4>Diet &amp; Water Tracking</h4>
                    <p>Track client diet adherence, daily water logs, and nutritional progress.</p>
                  </div>
                  <div className="grid-card">
                    <h4>Team Broadcasts</h4>
                    <p>Deliver administrative broadcasts, operational updates, and push notifications.</p>
                  </div>
                  <div className="grid-card">
                    <h4>Staff Attendance</h4>
                    <p>Manage staff attendance timestamps, shifts, and leave requests.</p>
                  </div>
                  <div className="grid-card">
                    <h4>Client Protection</h4>
                    <p>Protect client data confidentiality through strict role-based access controls.</p>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section id="section-3" className="content-box">
                <h2><span>3.</span> App and Device Permissions</h2>
                <p>UG Dietitian may request access to certain device features when required for app functionality:</p>
                
                <div className="two-col-grid">
                  <div className="grid-card">
                    <strong>Camera &amp; Gallery</strong>
                    <p>Used for uploading diet photos and attendance proof.</p>
                  </div>
                  <div className="grid-card">
                    <strong>Microphone</strong>
                    <p>Used for recording voice notes for client records.</p>
                  </div>
                  <div className="grid-card">
                    <strong>Notifications</strong>
                    <p>Deliver messages, chat updates, and queue alerts through the app.</p>
                  </div>
                  <div className="grid-card">
                    <strong>Storage</strong>
                    <p>Used for report downloads and media attachments.</p>
                  </div>
                </div>

                <p style={{ fontSize: 13.5, color: "#777", marginTop: 18, fontStyle: "italic" }}>
                  You can manage applicable device permissions at any time through your phone settings.
                </p>
              </section>

              {/* Section 4 */}
              <section id="section-4" className="content-box">
                <h2><span>4.</span> Data Security and Sharing</h2>
                <p>We take reasonable measures to protect information handled through the platform.</p>

                <div className="two-col-grid">
                  <div className="sec-card">
                    <strong>Role-Based Access</strong>
                    <p>Telecallers are restricted to the clients assigned to them.</p>
                  </div>
                  <div className="sec-card">
                    <strong>Integrated Services</strong>
                    <p>The platform uses services including Firebase FCM, Ably Realtime, and AWS Amplify.</p>
                  </div>
                  <div className="sec-card">
                    <strong>No Data Selling</strong>
                    <p>We do not sell or rent user or client data.</p>
                  </div>
                  <div className="sec-card">
                    <strong>Session Protection</strong>
                    <p>Authentication tokens are cleared when a user logs out.</p>
                  </div>
                </div>
              </section>

              {/* Section 5 */}
              <section id="section-5" className="content-box">
                <h2><span>5.</span> Data Retention and Deletion</h2>
                <p>Information is retained only for as long as needed for active business operations.</p>
                <div className="two-col-grid">
                  <div className="grid-card">
                    <strong>Staff Account Removal</strong>
                    <p>Staff may request account removal through their administrator.</p>
                  </div>
                  <div className="grid-card">
                    <strong>Client Record Deletion</strong>
                    <p>Client follow-up records may be deleted or archived upon request.</p>
                  </div>
                </div>
              </section>

              {/* Section 6 */}
              <section id="section-6" className="content-box">
                <h2><span>6.</span> Your Rights</h2>
                <p>Depending on your role and applicable access permissions, you may:</p>
                <ul>
                  <li>View or update your records.</li>
                  <li>Manage app permissions through your device settings.</li>
                  <li>Request account or record deletion through the appropriate administrator or support channel.</li>
                </ul>
              </section>

              {/* Section 7 */}
              <section id="section-7" className="contact-box">
                <h2>7. Contact Us</h2>
                <p>If you have questions about this Privacy Policy, data handling, or privacy-related requests, please contact our privacy support team.</p>
                <div className="contact-details">
                  <a href="mailto:it.unaisgroup@gmail.com" className="contact-badge">
                    <span>Email Address</span>
                    <strong>it.unaisgroup@gmail.com</strong>
                  </a>
                  <a href="https://unaisgroup.com" target="_blank" rel="noopener noreferrer" className="contact-badge">
                    <span>Corporate Website</span>
                    <strong>unaisgroup.com</strong>
                  </a>
                </div>
              </section>

              {/* Section 8 */}
              <section id="section-8" className="content-box" style={{ marginTop: 32 }}>
                <h2><span>8.</span> Policy Updates</h2>
                <p>
                  We may update this Privacy Policy when necessary to reflect changes to the platform, data practices, or applicable requirements. The latest version will be made available through the appropriate UG Dietitian or Unais Group website.
                </p>
                <div style={{ borderTop: "1px solid #E8E6DF", paddingTop: 16, margin: "18px 0 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
                  <span style={{ fontSize: 13.5, color: "#777" }}>
                    <strong>Last Updated:</strong> September 7, 2026
                  </span>
                  <span style={{ fontSize: 13.5, color: "#1C3557", fontWeight: 600 }}>
                    © 2026 Unais Group. All rights reserved.
                  </span>
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer>
        <div className="footer-inner">
          <div className="footer-brand">UNAIS <span>Group</span></div>
          <div className="footer-copy">© 2026 Unais Group. All rights reserved.</div>
          <div className="footer-links">
            <Link href="/dietitian/privacy-policy" className="active">Privacy Policy</Link>
            <Link href="/">Home</Link>
            <a href="mailto:it.unaisgroup@gmail.com">Support</a>
          </div>
        </div>
      </footer>
    </>
  );
}
