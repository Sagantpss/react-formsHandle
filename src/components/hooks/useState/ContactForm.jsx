import { useState } from "react";
import "./Registration.css";
export const ContactForm = () => {
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContact((prev)=>({
        ...prev,
        [name]: value,
    }))
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // const formData = {
    //   username,
    //   email,
    //   message,
    // };
    console.log(contact);
  };
  return (
    <>
      <div className="container">
        <div className="card">
          <h2>Contact Form</h2>
          <p>Any Inquery Please Fill This Form.</p>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              autoComplete="off"
              required
              value={contact.username}
              onChange={handleInputChange}
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              autoComplete="off"
              required
              value={contact.email}
              onChange={handleInputChange}
            />

            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="39"
              rows="10"
              autoComplete="off"
              required
              value={contact.message}
              onChange={handleInputChange}
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};
