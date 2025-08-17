import { useState, useEffect } from "react";
import "./App.css";
import React from 'react';

function App() {
  const name = "Sita Srikanth";
  const project = "Fullstack Boilerplate Django + React";
  const year = new Date().getFullYear();
  const githuburl = "https://github.com/sitasrikanth/fullstack-boilerplate-django-react";

  const [message, setMessage] = useState("Loading...");
  const [time, setTime] = useState(new Date().toLocaleTimeString());


  // Simulate fetching backend data
  useEffect(() => {
    fetch("http://localhost:8000/ping")
      .then((res) => res.json())
      .then((data) => setMessage(`Backend says: ${data.result}`))
      .catch(() => setMessage("❌ Could not reach backend"));

    // Live clock update every second
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}>
      <h1 style={{ color: "#007acc" }}>🚀 React + Django 3-Tier App</h1>

      <h1 style={{ color: "#007acc" }}>{project}</h1>
      <h2>Developed by: {name}</h2>

	<h4>
	Github url: {githuburl}	
      </h4>
      <p>
        Welcome to my custom fullstack project!  
        This app is powered by <strong>Django</strong> for the backend and <strong>React + Vite</strong> for the frontend.
      </p>

  <ul>
        <li>✅ Backend API is running on <code>http://localhost:8000</code></li>
        <li>✅ Frontend is running on <code>http://localhost:3000</code></li>
        <li>📅 Year: {year}</li>
  </ul>

      <p style={{ fontSize: "1.2rem" }}>{message}</p>
      <p>🕒 Current Time: {time}</p>
      <button
        style={{
          padding: "10px 20px",
          marginTop: "20px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => alert("Frontend is working! 🎉")}
      >
        Test Frontend Button
      </button>


      <footer style={{ marginTop: "30px", fontSize: "14px", color: "#555" }}>
        &copy; {year} {name}. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
