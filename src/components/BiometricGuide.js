import React from "react";
import "./biometric-guide.css";

export default function BiometricGuide() {
  return (
    <section id="guides-biometric" className="biometric-guide" aria-labelledby="biometric-guide-title">
      {/* Header */}
      <div className="container">
        <header className="guide-hero text-center">
          <h2 id="biometric-guide-title">Biometric & Access Control Guide</h2>
          <p className="subtitle">
            Practical notes for apartments, offices, and gated communities in Kolkata—how to plan readers,
            locks, wiring, software, and compliance for smooth entry and audit-ready logs.
          </p>

          <div className="guide-tags" role="navigation" aria-label="Guide sections">
            <a href="#survey" className="chip">🧭 Survey & Flow</a>
            <a href="#placement" className="chip">📍 Reader Placement</a>
            <a href="#devices" className="chip">🖐️ Device Types</a>
            <a href="#controller" className="chip">🗄️ Controller & Software</a>
            <a href="#network" className="chip">🌐 Networking & Power</a>
            <a href="#faq" className="chip">❓ FAQ</a>
          </div>
        </header>
      </div>

      {/* Content */}
      <div className="container">
        <div className="row g-4">
          {/* Survey */}
          <div className="col-12" id="survey">
            <article className="guide-card">
              <div className="card-head">
                <div className="icon">🧭</div>
                <h3 className="card-title">Before the Survey</h3>
              </div>
              <div className="card-body">
                <ul className="checklist">
                  <li>Map doors/turnstiles: main gate, office entry, server room, store, lift lobby, fire exits.</li>
                  <li>Define access groups & time schedules (e.g., staff 9–6, admin 24×7, visitors limited).</li>
                  <li>Decide credentials: fingerprint, face, RFID card, PIN, or multi-factor (face + card).</li>
                  <li>Note door frame material & swing direction; plan lock type (maglock vs. door strike).</li>
                  <li>Compliance: emergency egress & fail-safe/secure rules; add break-glass and exit buttons.</li>
                  <li>List integrations needed: attendance/payroll, elevator control, fire alarm release.</li>
                </ul>
              </div>
            </article>
          </div>

          {/* Placement */}
          <div className="col-12" id="placement">
            <article className="guide-card">
              <div className="card-head">
                <div className="icon">📍</div>
                <h3 className="card-title">Reader Placement & Heights</h3>
              </div>
              <div className="card-body">
                <div className="row gy-3">
                  <div className="col-md-6">
                    <h4 className="mini-title">Standard Mounting</h4>
                    <ul className="dotlist">
                      <li>Reader height: 1.2–1.4 m from floor (comfortable for most users).</li>
                      <li>Face terminals: 1.45–1.55 m center height; avoid backlight glare from glass doors.</li>
                      <li>Keep readers 15–25 cm from door frame edge to avoid knuckle hits when opening.</li>
                      <li>Exit: use no-touch exit switch or REX sensor inside at ~1.2 m height.</li>
                      <li>Outdoor: use weatherproof hoods; avoid direct sun/rain for face cameras.</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h4 className="mini-title">Locking & Safety</h4>
                    <ul className="dotlist">
                      <li><b>Fail-safe</b> (maglock) unlocks on power loss—good for escape routes.</li>
                      <li><b>Fail-secure</b> (strike) stays locked on power loss—good for asset rooms.</li>
                      <li>Add emergency break-glass & fire panel release for life safety compliance.</li>
                      <li>Use door contacts for “door forced/held open” alarms & better audit trails.</li>
                      <li>Turnstiles: pair biometric with controller; add visitor card lane if needed.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Device types */}
          <div className="col-12" id="devices">
            <article className="guide-card">
              <div className="card-head">
                <div className="icon">🖐️</div>
                <h3 className="card-title">Choosing Devices</h3>
              </div>
              <div className="card-body">
                <div className="device-grid">
                  <div className="device-card">
                    <h4>Fingerprint Reader</h4>
                    <p>Accurate, cost-effective; may need liveness/gel detection for high security.</p>
                    <div className="pillrow">
                      <span className="pill">1:3000–1:10k</span>
                      <span className="pill">Wiegand/OSDP</span>
                      <span className="pill">IP65 (outdoor)</span>
                    </div>
                  </div>
                  <div className="device-card">
                    <h4>RFID / Smart Card</h4>
                    <p>Fast throughput; works with gloves. Use MIFARE DESFire EV2+ for better security.</p>
                    <div className="pillrow">
                      <span className="pill">13.56 MHz</span>
                      <span className="pill">AES keys</span>
                      <span className="pill">Anti-passback</span>
                    </div>
                  </div>
                  <div className="device-card">
  <h4>Face Recognition</h4>
  <p>Touchless & quick; excellent for lobbies and clean areas, needs stable lighting.</p>
  <div className="pillrow">
    <span className="pill">&lt; 0.5s match</span>
    <span className="pill">WDR / IR</span>
    <span className="pill">Mask on/off modes</span>
  </div>
</div>

                  <div className="device-card">
                    <h4>Controller / Panel</h4>
                    <p>Door control brain; connects readers, locks, exits, door contacts, alarms.</p>
                    <div className="pillrow">
                      <span className="pill">2–8 doors</span>
                      <span className="pill">OSDP Secure</span>
                      <span className="pill">Relay 12/24 V</span>
                    </div>
                  </div>
                </div>
                <div className="callout">
                  <strong>Quick rule:</strong> High-traffic entry? Prefer face or card for speed; high-security rooms add
                  fingerprint/dual-auth (card + biometric).
                </div>
              </div>
            </article>
          </div>

          {/* Controller & Software */}
          <div className="col-12" id="controller">
            <article className="guide-card">
              <div className="card-head">
                <div className="icon">🗄️</div>
                <h3 className="card-title">Controller, Attendance & Logs</h3>
              </div>
              <div className="card-body">
                <ul className="dotlist">
                  <li><b>Topology:</b> Readers → Controller → Locks/Exit/Contacts; Controller → LAN → Server/Cloud.</li>
                  <li><b>Attendance:</b> Export CSV/Excel or API to payroll; set shifts, grace time, OT rules.</li>
                  <li><b>Data:</b> Store templates on device or server; enable encrypted templates if available.</li>
                  <li><b>Logs:</b> Keep at least 90 days; enable door-held/forced alarms and email alerts.</li>
                  <li><b>Visitors:</b> Use QR/card print for guests; auto-expire after visit.</li>
                </ul>
              </div>
            </article>
          </div>

          {/* Networking */}
          <div className="col-12" id="network">
            <article className="guide-card">
              <div className="card-head">
                <div className="icon">🌐</div>
                <h3 className="card-title">Networking & Power Checklist</h3>
              </div>
              <div className="card-body">
                <ul className="checklist">
                  <li>Prefer OSDP over Wiegand for encrypted reader–controller comms.</li>
                  <li>Use PoE/PoE+ where supported; otherwise 12/24 V DC with separate PSU near door.</li>
                  <li>Maglocks draw 300–600 mA; size power with 30–40% headroom for all doors.</li>
                  <li>UPS for controller + switches (30–45 min). Critical doors add battery-backed PSU.</li>
                  <li>Remote access via VPN/P2P; avoid open port forwards; use strong admin creds.</li>
                  <li>Label every cable; maintain a door-by-door wiring schematic & test logs.</li>
                </ul>
              </div>
            </article>
          </div>

          {/* FAQ */}
          <div className="col-12" id="faq">
            <article className="guide-card">
              <div className="card-head">
                <div className="icon">❓</div>
                <h3 className="card-title">FAQ</h3>
              </div>
              <div className="card-body">
                <details className="faq">
                  <summary>How many readers for a single door?</summary>
                  <p>Usually 2 (entry + exit button). For controlled exit, add inside reader or turnstile logic.</p>
                </details>
                <details className="faq">
                  <summary>Face vs fingerprint—which is better?</summary>
                  <p>Face is fastest & touchless for lobbies; fingerprint is cheaper and good for restricted rooms.</p>
                </details>
                <details className="faq">
                  <summary>What happens during a power cut?</summary>
                  <p>
                    With UPS, controllers keep running. For escape routes, fail-safe maglocks release on power loss; asset
                    rooms often use fail-secure strikes.
                  </p>
                </details>
              </div>
            </article>
          </div>
        </div>

        {/* CTA */}
        <div className="guide-cta text-center">
          <a
            href="https://g.page/r/Cb5Nmau1DpUxEAE/review"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ml"
          >
            ⭐ Leave us a review
          </a>
          <a
            href="mailto:millenniumlnk@gmail.com?subject=Biometric%20Quotation%20Request&body=Hello%20Millennium%20Link%2C%0A%0AWe%20need%20a%20biometric%2Faccess%20control%20quotation%20for%20..."
            className="btn-ml btn-ghost"
          >
            📅 Get a free quotation
          </a>
        </div>
      </div>
    </section>
  );
}
