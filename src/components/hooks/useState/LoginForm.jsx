import { useState } from "react";
import "./Registration.css";
export const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = {
            username,
            password
        }
        console.log(formData);
    }
    return (
        <>
        <div className="container">
            <div className="card">
            <h2>Login Form</h2>
            <p>Please enter your username and password to login.</p>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" autoComplete="off" required value={username} onChange={(e)=>setUsername(e.target.value)}/>

                <label htmlFor="password">Password</label>
                <input type="password" name="password" autoComplete="off" required value={password} onChange={(e)=>setPassword(e.target.value)}/>

                <button type="submit">Login</button>
            </form>
            </div>
        </div>
        </>
    )
};