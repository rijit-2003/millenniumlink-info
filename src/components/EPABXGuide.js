import React from "react";
import "./epabx-guide.css";

export default function EPABXGuide() {
    return (
        <section className="epabx-guide" aria-labelledby="epabx-guide-title">
            <div className="container">
                <header className="guide-hero text-center">
                    <h2 id="epabx-guide-title">EPABX & Telephone Installation Guide</h2>
                    <p className="subtitle">
                        A structured approach to planning telephone networks for offices and apartments:
                        cabling, extensions, trunk lines, and maintenance practices.
                    </p>

                    <div className="guide-tags" role="navigation" aria-label="Guide sections">
                        <a href="#survey" className="chip">📐 Cable Survey</a>
                        <a href="#connections" className="chip">🔌 Connections</a>
                        <a href="#epabx" className="chip">📞 EPABX Setup</a>
                        <a href="#trunking" className="chip">🛠 Trunking & Wiring</a>
                        <a href="#maintenance" className="chip">⚙ Maintenance</a>
                        <a href="#faq" className="chip">❓ FAQ</a>
                    </div>
                </header>
            </div>

            {/* Content */}
            <div className="container">
                <div className="row g-4">
                    {/* Cable Survey */}
                    <div className="col-12" id="survey">
                        <article className="guide-card">
                            <div className="card-head">
                                <div className="icon">📐</div>
                                <h3 className="card-title">Cable Survey</h3>
                            </div>
                            <div className="card-body">
                                <ul className="checklist">
                                    <li>Prepare a floor plan with all rooms, cabins, and meeting halls.</li>
                                    <li>Mark telephone points (extensions) in reception, manager cabins, workstations.</li>
                                    <li>Plan dedicated trunk lines (incoming from BSNL/Airtel/Jio) near the EPABX cabinet.</li>
                                    <li>Check for false ceiling, ducts, and cable trays for neat routing.</li>
                                    <li>Measure cable lengths—add 15–20% spare length for patching.</li>
                                </ul>
                            </div>
                        </article>
                    </div>

                    {/* Connections */}
                    <div className="col-12" id="connections">
                        <article className="guide-card">
                            <div className="card-head">
                                <div className="icon">🔌</div>
                                <h3 className="card-title">Connections</h3>
                            </div>
                            <div className="card-body">
                                <ul className="dotlist">
                                    <li>Use **CAT3/CAT5/CAT6 telephone cable** depending on distance and clarity needs.</li>
                                    <li>Extensions should terminate on a distribution frame (Krone/IDF panel).</li>
                                    <li>Color-code and label all pairs for easy identification.</li>
                                    <li>Ensure proper grounding of the EPABX cabinet to reduce noise and surges.</li>
                                </ul>
                            </div>
                        </article>
                    </div>

                    {/* EPABX Setup */}
                    <div className="col-12" id="epabx">
                        <article className="guide-card">
                            <div className="card-head">
                                <div className="icon">📞</div>
                                <h3 className="card-title">EPABX Setup</h3>
                            </div>
                            <div className="card-body">
                                <ul className="dotlist">
                                    <li>Choose capacity based on lines (CO trunks) and extensions required (e.g. 16×64, 32×128).</li>
                                    <li>Mount EPABX near power source + UPS, ideally in a server/IT rack.</li>
                                    <li>Connect trunk lines (from telecom operator) into CO line ports.</li>
                                    <li>Program extensions for departments (reception, accounts, security, etc.).</li>
                                    <li>Set call routing: IVR, hunting groups, and call transfer rules.</li>
                                </ul>
                            </div>
                        </article>
                    </div>

                    {/* Trunking */}
                    <div className="col-12" id="trunking">
                        <article className="guide-card">
                            <div className="card-head">
                                <div className="icon">🛠</div>
                                <h3 className="card-title">Trunking & Wiring</h3>
                            </div>
                            <div className="card-body">
                                <ul className="checklist">
                                    <li>Use PVC/metal trunking for neat cable management.</li>
                                    <li>Keep voice and power cables separate to avoid interference.</li>
                                    <li>Leave accessible junction points for troubleshooting.</li>
                                    <li>Secure cables in racks with velcro ties; avoid tight bends.</li>
                                    <li>Label each cable end with extension number and floor/room ID.</li>
                                </ul>
                            </div>
                        </article>
                    </div>

                    {/* Maintenance */}
                    <div className="col-12" id="maintenance">
                        <article className="guide-card">
                            <div className="card-head">
                                <div className="icon">⚙</div>
                                <h3 className="card-title">Maintenance & Best Practices</h3>
                            </div>
                            <div className="card-body">
                                <ul className="dotlist">
                                    <li>Perform half-yearly line tests to check clarity and detect noise.</li>
                                    <li>Backup EPABX configuration after programming.</li>
                                    <li>Keep surge protectors and UPS batteries checked.</li>
                                    <li>Maintain an updated diagram of extensions and routing for quick service.</li>
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
                                    <summary>What is EPABX?</summary>
                                    <p>Electronic Private Automatic Branch Exchange – a system that manages internal extensions and connects them to external telephone lines.</p>
                                </details>
                                <details className="faq">
                                    <summary>How many extensions can I add?</summary>
                                    <p>Depends on the EPABX model. Small offices may need 8–16 extensions, while corporates may go 128+.</p>
                                </details>
                                <details className="faq">
                                    <summary>Is VoIP better than analog?</summary>
                                    <p>For modern offices with good internet, VoIP PBX offers flexibility and integration. For basic voice, analog EPABX is cost-effective.</p>
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
