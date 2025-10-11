import React, { useState } from "react";
import "./case-studies.css";

/**
 * HOW TO USE:
 * 1) Replace the placeholder items in `CASE_STUDIES` with your real projects.
 * 2) Each item supports: title, client, location, date, category, highlights, metrics, brands, images, and a short summary.
 * 3) Place <CaseStudies /> wherever you want the section to appear.
 */

const CASE_STUDIES = [
  {
    id: "saltlake-apartment",
    title: "Apartment Complex CCTV Upgrade",
    client: "ABC Residency (Phase II)",
    location: "Salt Lake, Kolkata",
    date: "Aug 2025",
    category: "CCTV",
    summary:
      "End-to-end CCTV deployment across 3 towers with centralized NVR room and remote monitoring.",
    highlights: [
      "3 towers, 18 floors each; 64 cameras total",
      "Dual NVR (failover) with 30 days retention",
      "Walkie integration with guard station & mobile view"
    ],
    metrics: [
      { label: "Cameras", value: "64" },
      { label: "Retention", value: "30 days" },
      { label: "Completion", value: "12 days" }
    ],
    brands: ["Hikvision", "Dahua", "Seagate SkyHawk"],
    images: [
      // Put public URLs or /assets paths when ready
      "https://via.placeholder.com/960x540?text=Lobby+Camera",
      "https://via.placeholder.com/960x540?text=NVR+Rack",
      "https://via.placeholder.com/960x540?text=Parking+Lane+View"
    ]
  },
  {
    id: "sector5-office-epabx",
    title: "Sector V Office EPABX + Voice Cabling",
    client: "TechNova Pvt Ltd",
    location: "Sector V, Kolkata",
    date: "Jul 2025",
    category: "EPABX",
    summary:
      "16 trunk lines + 96 extensions with IVR, hunt groups and reception console; CAT6 structured cabling.",
    highlights: [
      "Rack-mounted IP PBX with UPS",
      "Krone IDC frame and labeled pairs",
      "VoIP softphones for remote teams"
    ],
    metrics: [
      { label: "Trunks", value: "16" },
      { label: "Extensions", value: "96" },
      { label: "SLA", value: "4 hrs" }
    ],
    brands: ["NEC", "D-Link", "Belden"],
    images: [
      "https://via.placeholder.com/960x540?text=EPABX+Rack",
      "https://via.placeholder.com/960x540?text=Krone+Frame",
      "https://via.placeholder.com/960x540?text=Operator+Console"
    ]
  },
  {
    id: "newtown-biometric",
    title: "Biometric + Access Control for Clubhouse",
    client: "Green Meadows",
    location: "New Town, Kolkata",
    date: "Jun 2025",
    category: "Biometric",
    summary:
      "Face + RFID access at gym & pool; door strikes with fail-secure design and emergency break-glass.",
    highlights: [
      "Dual-auth for staff entry",
      "Attendance export with Excel scheduler",
      "Fire alarm integration for door release"
    ],
    metrics: [
      { label: "Doors", value: "12" },
      { label: "Readers", value: "18" },
      { label: "Uptime", value: "99.9%" }
    ],
    brands: ["eSSL", "ZKTeco"],
    images: [
      "https://via.placeholder.com/960x540?text=Reader+Panel",
      "https://via.placeholder.com/960x540?text=Server+Room",
      "https://via.placeholder.com/960x540?text=Door+Strike"
    ]
  }
];

function StudyCard({ item, onOpenGallery }) {
  return (
    <article className="study-card" id={item.id}>
      <div className="study-head">
        <div className="study-badge">{item.category}</div>
        <h3 className="study-title">{item.title}</h3>
        <p className="study-meta">
          <span>{item.client}</span> • <span>{item.location}</span> • <span>{item.date}</span>
        </p>
        <p className="study-summary">{item.summary}</p>
      </div>

      <div className="study-body">
        {/* Highlights */}
        <div className="row gx-3 gy-3">
          <div className="col-md-7">
            <h4 className="mini-title">Highlights</h4>
            <ul className="ticklist">
              {item.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>

          {/* Metrics */}
          <div className="col-md-5">
            <h4 className="mini-title">Project Metrics</h4>
            <div className="metrics">
              {item.metrics.map((m, i) => (
                <div className="metric" key={i}>
                  <div className="metric-value">{m.value}</div>
                  <div className="metric-label">{m.label}</div>
                </div>
              ))}
            </div>
            {item.brands?.length > 0 && (
              <div className="brand-row" aria-label="Brands used">
                {item.brands.map((b, i) => (
                  <span className="brand-pill" key={i}>{b}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="study-foot">
        <button className="btn-ml" onClick={() => onOpenGallery(item)}>
          📷 View gallery
        </button>
        <a className="btn-ml btn-ghost" href="/contact">
          📅 Get a similar quotation
        </a>
      </div>
    </article>
  );
}

export default function CaseStudies() {
  const [active, setActive] = useState(null);

  const openGallery = (item) => setActive(item);
  const closeGallery = () => setActive(null);

  return (
    <section id ="cases" className="case-studies" aria-labelledby="case-studies-title">
      <div className="container">
        <header className="cs-hero text-center">
          <h2 id="case-studies-title">Case Studies</h2>
          <p className="subtitle">
            Real projects across Kolkata—apartment complexes, offices, and clubhouses. We handle
            survey, design, installation, and handover with documentation.
          </p>
        </header>

        <div className="row g-4">
          {CASE_STUDIES.map((item) => (
            <div className="col-12" key={item.id}>
              <StudyCard item={item} onOpenGallery={openGallery} />
            </div>
          ))}
        </div>
      </div>

      {/* Simple lightbox */}
      {active && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Project gallery">
          <div className="lightbox-backdrop" onClick={closeGallery} />
          <div className="lightbox-content">
            <div className="lightbox-head">
              <h3 className="lightbox-title">{active.title}</h3>
              <button className="lightbox-close" onClick={closeGallery} aria-label="Close">✕</button>
            </div>
            <div className="lightbox-grid">
              {active.images?.map((src, i) => (
                <figure className="lightbox-item" key={i}>
                  <img src={src} alt={`${active.title} – ${i + 1}`} />
                </figure>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
