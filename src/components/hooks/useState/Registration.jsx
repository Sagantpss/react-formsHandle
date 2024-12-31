import { useState } from "react";
import "./Registration.css";

export const RegistrationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "phone":
        setPhone(value);
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      password,
      phone,
    };
    console.log(formData);
  };

  return (
    <>
      <section
        className="summary"
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          textAlign: "center",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <p>
          Hello, My name is{" "}
          <b>
            {firstName} {lastName}
          </b>{" "}
          and my email is <b>{email}</b>
        </p>
        <p>
          My phone number is <b>{phone}</b>
        </p>
      </section>
      <form onSubmit={handleFormSubmit}>
        <div className="container">
          <h2>Registration Form</h2>
          <p>Fill the form below to register</p>
          <label htmlFor="firstName">
            <b>First Name</b>
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter First Name"
            value={firstName}
            required
            onChange={handleInputChange}
          />

          <label htmlFor="lastName">
            <b>Last Name</b>
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter Last Name"
            value={lastName}
            required
            onChange={handleInputChange}
          />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={email}
            required
            onChange={handleInputChange}
          />

          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={password}
            required
            onChange={handleInputChange}
          />

          <label htmlFor="phone">
            <b>Phone</b>
          </label>
          <input
            type="text"
            name="phone"
            placeholder="Enter Phone"
            value={phone}
            required
            onChange={handleInputChange}
          />

          <p>
            By creating an account you agree to our{" "}
            <a href="#">Terms & Privacy</a>.
          </p>

          <div className="clearfix">
            <button type="submit" className="register">
              Register
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
