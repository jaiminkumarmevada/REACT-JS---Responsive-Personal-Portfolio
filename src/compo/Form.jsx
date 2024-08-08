import React from 'react';
import './Form.css';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function Form() {
  return (
    <div className="forms">
      <div className="form-title">
        <p>Connect with me</p>
        <p id="form-main-title">Get in touch</p>
        <p className="formparagrapgline">I'd love to hear from you! If you have any questions, comments or feedback, <br/>please use the form below.</p>
      </div>
      <div className="form">
        <form action="/submit_form" method="post">
          <div className="form-div">
            <input placeholder="Name" className="field" type="text" id="name" name="name" required />
            <input placeholder="Email" className="field" type="email" id="email" name="email" required />
          </div>
          <textarea placeholder="Message" className="field" id="message" name="message" rows="4" required></textarea>
          <input type="submit" value="Submit" className="submit-button"/> 
        </form>
      </div>
    </div>
  );
}

export default Form;


