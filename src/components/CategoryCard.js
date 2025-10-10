// src/components/CategoryCard.jsx
import React from "react";

const iconFor = (title) => {
  if (/cctv|camera/i.test(title)) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M2 10l8-4 8 4-8 4-8-4zm8 6l-8-4v4l8 4 8-4v-4l-8 4z" fill="currentColor"/>
      </svg>
    );
  }
  if (/telephone|phone|pbx|epabx/i.test(title)) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.6 10.8c1.8 3.5 3.9 5.6 7.4 7.4l2.5-2.5c.3-.3.8-.4 1.2-.2 1.3.5 2.7.8 4.2.8.7 0 1.3.6 1.3 1.3V21c0 .7-.6 1.3-1.3 1.3C10.6 22.3 1.7 13.4 1.7 2.7 1.7 2 2.3 1.4 3 1.4h3.4c.7 0 1.3.6 1.3 1.3 0 1.5.3 2.9.8 4.2.1.4 0 .9-.3 1.2l-2.6 2.7z" fill="currentColor"/>
      </svg>
    );
  }
  // biometrics / fingerprint
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2a7 7 0 0 0-7 7v1a1 1 0 1 0 2 0V9a5 5 0 0 1 10 0v1a12 12 0 0 1-3 8 1 1 0 1 0 1.5 1.3A14 14 0 0 0 19 10V9a7 7 0 0 0-7-7zm0 4a3 3 0 0 0-3 3v1a8 8 0 0 0 2.2 5.6 1 1 0 1 0 1.5-1.3A6 6 0 0 1 11 10V9a1 1 0 1 1 2 0v1c0 3.2.9 5.9 2.7 8.2a1 1 0 1 0 1.6-1.2C15.7 15.1 15 12.8 15 10V9a3 3 0 0 0-3-3z" fill="currentColor"/>
    </svg>
  );
};

function CategoryCard({ title, items }) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="ml-card">
        <div className="ml-card-head">
          <span className="ml-icon">{iconFor(title)}</span>
          <h3 className="ml-card-title">{title}</h3>
        </div>

        <ul className="ml-links">
          {items.map((item, i) => (
            <li key={i}>
              <a
                className="catalogue-btn"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CategoryCard;
