import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_vnc3n3m",
        "template_dzbwv5b",
        formRef.current,
        "-ccOgHA_WzHm017gZ"
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error("Email sending failed:", error.text);
          alert("Failed to send message. Try again.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <form ref={formRef} id="contact-form" onSubmit={onSubmit}>
      <div className="row gx-3 gy-4">
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">Your Name</label>
            <input
              name="user_name"
              placeholder="Name *"
              className="form-control"
              type="text"
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">Your Email</label>
            <input
              name="user_email"
              placeholder="Email *"
              className="form-control"
              type="email"
              required
            />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <label className="form-label">Subject</label>
            <input
              name="subject"
              placeholder="Subject *"
              className="form-control"
              type="text"
              required
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <label className="form-label">Your message</label>
            <textarea
              name="message"
              placeholder="Your message *"
              rows={4}
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="send">
            <button
              className={`px-btn w-100 ${loading ? "disabled" : ""}`}
              type="submit"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
