import React from 'react';
import './ContactPopup.css';

function ContactPopup({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>
          &times;
        </button>
        <h2>Contact Information</h2>
        <p><strong>Name:</strong> Jaimin Mevada</p>
        <p><strong>Email:</strong> <a href="mailto:your.email@example.com">your.email@example.com</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">your-linkedin-profile</a></p>
      </div>
    </div>
  );
}

export default ContactPopup;
