import React from "react";
import "./styles.css";
import ReservationForm from "./components/ReservationForm";

function App() {
  return (
    <div className="app">
      {/* Restaurant Logo */}
      <header className="header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Restaurant_Lemon_logo.svg/512px-Restaurant_Lemon_logo.svg.png"
          alt="Little Lemon Logo"
          className="logo"
        />
        <h1>Welcome to Little Lemon</h1>
        <p>Reserve your table with ease!</p>
      </header>

      {/* Reservation Form */}
      <ReservationForm />

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Little Lemon. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
