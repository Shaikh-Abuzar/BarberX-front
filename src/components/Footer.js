import React from 'react';

function Footer() {
  return (
    <footer style={{ padding: '30px' }}>
      {/* Upper Section: Register Your Salon & Get Listed Box */}
      <div
        style={{
          backgroundColor: '#6a0dad', // Jamni (purple) background for the upper part
          borderRadius: '20px',
          padding: '30px',
          marginBottom: '30px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '5px solid #E879F9', // Border separating the sections
        }}
      >
        {/* Left Side: Text */}
        <div style={{ flex: '1 1 300px' }}>
          <h2 style={{ marginBottom: '10px' }}>Register Your Salon At BarberX</h2>
          <p>Register As Salon Owner And Get Appointments Online And Boost Your Business</p>
        </div>

        {/* Right Side: Get Listed Box */}
        <div
          style={{
            backgroundColor: 'white',
            color: '#6a0dad',
            padding: '20px 30px',
            borderRadius: '12px',
            fontWeight: 'bold',
            cursor: 'pointer',
            textAlign: 'center',
            minWidth: '150px',
            marginTop: '20px'
          }}
        >
          Get Listed
        </div>
      </div>

      {/* Bottom Section: Footer Content */}
      <div
        style={{
          backgroundColor: '#E879F9', // Pink background for the second part
          padding: '30px',
          borderRadius: '12px',
          marginBottom: '30px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        {/* Left Side: Salon Info */}
        <div style={{ flex: '1 1 300px' }}>
          <h3>BarberX</h3>
          <p>Ambika Nagar, Yavatmal, Maharashtra 445001</p>
          <p>+91-7709939271</p>
          <p>barberx05@gmail.com</p>
        </div>

        {/* Middle Section: Quicklinks */}
        <div style={{ flex: '1 1 200px' }}>
          <h4>Quicklinks</h4>
          <p>Home</p>
          <p>Salons</p>
          <p>Our Services</p>
          <p>About Us</p>
        </div>

        {/* Right Section: Sign Up */}
        <div style={{ flex: '1 1 250px' }}>
          <h4>Sign Up</h4>
          <p>Sign up for alerts, special offers, discounts, and updates</p>
          <input
            type="email"
            placeholder="Enter Your Email"
            style={{ padding: '8px', marginTop: '8px' }}
          />
          <button
            style={{
              backgroundColor: '#6a0dad', // Matching purple color for the button
              color: 'white',
              padding: '8px 12px',
              border: 'none',
              marginLeft: '10px'
            }}
          >
            →
          </button>
        </div>
      </div>

      {/* Div4: Copyright Section */}
      <div
        style={{
          backgroundColor: '#4b0082', // Dark purple background for copyright
          padding: '10px',
          marginTop: '30px',
          textAlign: 'center',
          borderRadius: '8px'
        }}
      >
        <p
          style={{
            color: '#e0e0e0', // Light gray text color
            margin: '0'
          }}
        >
          Copyright © BarberX, 2025
        </p>
      </div>
    </footer>
  );
}

export default Footer;
