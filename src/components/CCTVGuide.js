import React from "react";
import "./cctv-guide.css";

export default function CCTVGuide() {
  return (
    <section id ="guides" className="cctv-guide" aria-labelledby="cctv-guide-title">
      {/* Header */}
      <div className="container">
        <header className="guide-hero text-center">
          <h2 id="cctv-guide-title">CCTV Installation Guide</h2>
          <p className="subtitle">
            Practical notes from on–site surveys: where to place cameras, how many you need,
            and which types fit homes, apartments, and offices in Kolkata.
          </p>

          <div className="guide-tags" role="navigation" aria-label="Guide sections">
            <a href="#survey" className="chip">🔎 Site Survey</a>
            <a href="#placement" className="chip">📍 Placement</a>
            <a href="#cameras" className="chip">🎥 Camera Types</a>
            <a href="#storage" className="chip">💾 Storage & NVR/DVR</a>
            <a href="#network" className="chip">🌐 Networking</a>
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
                <div className="icon">🔎</div>
                <h3 className="card-title">Before the Survey</h3>
              </div>
              <div className="card-body">
                <ul className="checklist">
                  <li>Sketch the floor/plot and mark entry/exit, lifts, staircases, parking, and blind corners.</li>
                  <li>Note lighting conditions (day/night) and reflective surfaces (glass/metal) that cause glare.</li>
                  <li>Define purpose per zone: deterrence, identification (faces/plates), or overview.</li>
                  <li>Measure cable paths & power points; plan PoE vs. separate power early.</li>
                  <li>Agree on retention: how many days of recording are required (7/15/30/90 days).</li>
                </ul>
              </div>
            </article>
          </div>

          {/* Placement */}
          <div className="col-12" id="placement">
            <article className="guide-card">
              <div className="card-head">
                <div className="icon">📍</div>
                <h3 className="card-title">Where Should Cameras Go?</h3>
              </div>
              <div className="card-body">
                <div className="row gy-3">
                  <div className="col-md-6">
                    <h4 className="mini-title">High-Priority Spots</h4>
                    <ul className="dotlist">
                      <li>Main gate & pedestrian entrance (face height, 2.2–2.8 m, slight angle).</li>
                      <li>Reception/guard desk with back-up camera to avoid silhouetting against light.</li>
                      <li>Lift lobbies, staircases, and corridor intersections.</li>
                      <li>Cash/asset rooms and server racks (with door view).</li>
                      <li>Parking entry/exit; number plate lane view (dedicated camera if possible).</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h4 className="mini-title">Placement Tips</h4>
                    <ul className="dotlist">
                      <li>Avoid pointing straight at glass doors—angle 10–20° to reduce reflections.</li>
                      <li>Use wider FOV for overview; narrow FOV for identification (face ≥ 120 px height).</li>
                      <li>Keep IR LEDs clear of walls/railing to prevent white-out.</li>
                      <li>Outdoor cams: use weatherproof junction box; seal with UV-rated grommets.</li>
                      <li>Don’t mount too high: 2.5–3 m balances coverage and recognisable detail.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Camera types */}
          <div className="col-12" id="cameras">
            <article className="guide-card">
              <div className="card-head">
                <div className="icon">🎥</div>
                <h3 className="card-title">Choosing the Right Camera</h3>
              </div>
              <div className="card-body">
                <div className="camera-grid">
                  <div className="camera-card">
                    <h4>Dome</h4>
                    <p>Indoor ceilings; discreet, tamper-resistant. Great for offices and shops.</p>
                    <div className="pillrow">
                      <span className="pill">2–4 MP</span>
                      <span className="pill">Fixed 2.8–3.6 mm</span>
                      <span className="pill">IR 20–30 m</span>
                    </div>
                  </div>
                  <div className="camera-card">
                    <h4>Bullet</h4>
                    <p>Outdoor perimeters; longer throw and visible deterrent.</p>
                    <div className="pillrow">
                      <span className="pill">4–8 MP</span>
                      <span className="pill">Varifocal 2.8–12 mm</span>
                      <span className="pill">IR 50–80 m</span>
                    </div>
                  </div>
                  <div className="camera-card">
                    <h4>Turret</h4>
                    <p>Great night performance, fewer IR reflections than domes.</p>
                    <div className="pillrow">
                      <span className="pill">ColorVu/Full-color</span>
                      <span className="pill">Low-light ƒ/1.0</span>
                      <span className="pill">WDR 120 dB</span>
                    </div>
                  </div>
                  <div className="camera-card">
                    <h4>PTZ</h4>
                    <p>Large sites; patrol presets and zoom. Use with fixed cams for evidence.</p>
                    <div className="pillrow">
                      <span className="pill">25×–42× Zoom</span>
                      <span className="pill">Auto-tracking</span>
                      <span className="pill">IP66</span>
                    </div>
                  </div>
                </div>
                <div className="callout">
                  <strong>Quick rule:</strong> For face ID at a doorway, target 2.8–4 mm indoors; for 10–15 m lanes, use varifocal 6–12 mm.
                </div>
              </div>
            </article>
          </div>

          {/* Storage */}
          <div className="col-12" id="storage">
            <article className="guide-card">
              <div className="card-head">
                <div className="icon">💾</div>
                <h3 className="card-title">Recorder & Storage Sizing</h3>
              </div>
              <div className="card-body">
                <ul className="dotlist">
                  <li><b>NVR (IP) vs DVR (Analog HD):</b> Prefer NVR + PoE for simplicity and scalability.</li>
                  <li><b>Storage thumb rule:</b> 8 cams × 4 MP @ H.265, 15 fps ≈ ~2–3 TB for 15 days.</li>
                  <li>Enable motion or area detection in low-traffic zones to extend retention.</li>
                  <li>Use surveillance-grade HDDs; plan redundancy for critical sites.</li>
                </ul>
              </div>
            </article>
          </div>

          {/* Networking */}
          <div className="col-12" id="network">
            <article className="guide-card">
              <div className="card-head">
                <div className="icon">🌐</div>
                <h3 className="card-title">Networking Checklist</h3>
              </div>
              <div className="card-body">
                <ul className="checklist">
                  <li>Use PoE switch with 20–30% power headroom; prefer Cat6 for long runs.</li>
                  <li>Separate CCTV VLAN if sharing office network; lock down NVR ports.</li>
                  <li>For remote view, use P2P app or VPN; avoid open port forwarding when possible.</li>
                  <li>Label cables and keep a photo log of every junction box & termination.</li>
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
                  <summary>How many cameras do I need for a 3-BHK?</summary>
                  <p>Typically 4–6: main door, living room overview, balcony/service area, corridor, and optional kitchen/parking view.</p>
                </details>
                <details className="faq">
                  <summary>Do I need 4K?</summary>
                  <p>4K is great for wide areas if storage budget allows. For entrances and corridors, 4 MP with good lens/WDR usually suffices.</p>
                </details>
                <details className="faq">
                  <summary>Will power cuts stop recording?</summary>
                  <p>Use a UPS for NVR + PoE switch (30–45 minutes). Critical sites should consider PoE UPS or camera-level backup.</p>
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
  href="mailto:millenniumlnk@gmail.com?subject=Quotation%20Request&body=Hello%20Millennium%20Link%2C%0A%0AI%20would%20like%20a%20quotation%20for..."
  className="btn-ml btn-ghost"
>
  📅 Get a free quotation
</a>

        </div>
      </div>
    </section>
  );
}
