import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container text-center">
        <h2 className="contact-title">📞 Contact Us</h2>
        <p className="contact-subtitle">
          We’d love to hear from you. Reach us through any of the channels below:
        </p>

        <div className="contact-icons">
          <a
            href="https://www.linkedin.com/company/millennium-link/"
            className="contact-link linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>

          <a
            href="https://api.whatsapp.com/send/?phone=9830375143&text&type=phone_number&app_absent=0"
            className="contact-link whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp"></i>
            <span>WhatsApp</span>
          </a>

          <a href="mailto:millenniumlnk@gmail.com" className="contact-link email">
            <i className="fas fa-envelope"></i>
            <span>Email</span>
          </a>

          <a href="tel:+919830375143" className="contact-link phone">
            <i className="fas fa-phone"></i>
            <span>Phone</span>
          </a>
        </div>
      </div>
    </section>
  );
}
