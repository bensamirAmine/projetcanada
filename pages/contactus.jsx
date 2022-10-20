import React from "react";
import { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import Link from "next/link";
function contactus(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");
    let data = {
      name,
      email,
      message,
    };
    console.log("before fetch", data);
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setBody("");
      }
    });
    console.log("after fetch", data);
  };
  return (
    <div className="contact-page">
      <div className="contact-header">
        <div>
          <h1>Contacter Projet Canada pour plus d'informations</h1>
          <p>
            Si vous avez des questions à propos l'immigrations et à propos nos
            services nos portes sont toujours ouvertes! <br />
            n'hésitez pas à nous contacter!
          </p>
        </div>
        <div className="contact-us-card">
          <div className="contact-us-card-left">
            <h2>
              <strong>Informations de contact</strong>
            </h2>
            <p>qu'est-ce que vous voulez nous dire?</p>
            <div className="contact-us-card-left-content">
              <div className="contact-us-card-left-content-item">
                <div className="icon-container">
                  <FaPhone className="icon" />
                </div>
                <div className="info">
                  <p>+216 73 366 901</p>
                </div>
              </div>
              <div className="contact-us-card-left-content-item">
                <div className="icon-container">
                  <FaEnvelope className="icon" />
                </div>
                <div className="info">
                  <p>projetcanada@outlook.com</p>
                </div>
              </div>
              <div className="contact-us-card-left-content-item">
                <div className="icon-container">
                  <FaMapMarkerAlt className="icon" />
                </div>
                <div className="info">
                  <p>Immeuble Jaziri B16</p>
                </div>
              </div>

              <div className="contact-us-card-left-social-media">
                <Link href="https://www.facebook.com/projetcanadatunisie">
                  <div className="social-icon">
                    <FaFacebookF className="icon" />
                  </div>
                </Link>
                <Link href="https://twitter.com/projetcanada201">
                  <div className="social-icon">
                    <FaTwitter className="icon" />
                  </div>
                </Link>
                <Link href="https://www.instagram.com/canadaprojet/">
                  <div className="social-icon">
                    <FaInstagram className="icon" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="contact-us-card-right">
            <h2>
              <strong>Nous contacter</strong>
            </h2>
            <p>Nous sommes à votre disposition pour toutes vos questions.</p>
            <form className="my-material-form">
              {/* material form */}
              <div className="my-contact-form-group">
                <input
                  type="text"
                  className="my-contact-form-control"
                  id="name"
                  placeholder="Nom"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="my-contact-form-group">
                <input
                  type="email"
                  className="my-contact-form-control"
                  id="email"
                  placeholder="Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="my-contact-form-group">
                <textarea
                  className="my-contact-form-control textarea"
                  id="message"
                  rows="3"
                  placeholder="Message"
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn bg-red-canada text-light w-100"
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="contact-content"></div>
    </div>
  );
}

export default contactus;
