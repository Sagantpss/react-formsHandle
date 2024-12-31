import { useState } from "react";
import "./Registration.css";

export const RegistrationFormReact = () => {
  const [user, setUser] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
  })
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({...prev, [name]: value}));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log({user});
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
            {user.firstName} {user.lastName}
          </b>{" "}
          and my email is <b>{user.email}</b>
        </p>
        <p>
          My phone number is <b>{user.phone}</b>
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
            value={user.firstName}
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
            value={user.lastName}
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
            value={user.email}
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
            value={user.password}
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
            value={user.phone}
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
