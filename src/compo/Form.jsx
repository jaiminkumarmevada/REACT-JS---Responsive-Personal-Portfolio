import React, { useState } from 'react';
import './Form.css';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import db from '../database/fire'; // Updated path to match the correct location
import { collection, addDoc } from "firebase/firestore";

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "contacts"), { // "contacts" is the collection name in Firestore
        name,
        email,
        message,
        timestamp: new Date() // Add a timestamp for reference
      });
      setLoading(false);
      setSuccess(true);
      setName(''); // Clear form fields
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error("Error adding document: ", error);
      setLoading(false);
    }
  };

  return (
    <div className="forms">
      <div className="form-title">
        <p>Connect with me</p>
        <p id="form-main-title">Get in touch</p>
        <p className="formparagrapgline">I'd love to hear from you! If you have any questions, comments or feedback, <br/>please use the form below.</p>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-div">
            <input
              placeholder="Name"
              className="field"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              placeholder="Email"
              className="field"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <textarea
            placeholder="Message"
            className="field"
            id="message"
            name="message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <input
            type="submit"
            value={loading ? "Submitting..." : success ? "Submitted!" : "Submit"}
            className="submit-button"
            disabled={loading}
          />
        </form>
      </div>
    </div>
  );
}

export default Form;
