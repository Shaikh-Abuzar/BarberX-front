// src/components/RegisterForm.js
import React, { useState } from 'react';

function RegisterForm() {
  const [barbers, setBarbers] = useState(["Barber 1", "Barber 2"]);
  const [salonData, setSalonData] = useState({
    salonName: '',
    owner: '',
    address: '',
    email: '',
    phone: '',
    images: null
  });

  const handleChange = (e) => {
    setSalonData({ ...salonData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(salonData);
    alert("Salon Registered Successfully!");
  };

  const handleImageChange = (e) => {
    setSalonData({ ...salonData, images: e.target.files });
  };

  return (
    <div style={{ padding: '40px', backgroundColor: '#f9f9f9' }}>
      {/* Logo at Top */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <img
          src="/assets/logo.jpg"
          alt="Salon Logo"
          style={{ width: '120px', height: 'auto' }}
        />
      </div>

      <h2 style={{ color: '#333', textAlign: 'center' }}>Enter Your Details</h2>

      <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: 'auto' }}>
        <input style={inputStyle} name="salonName" placeholder="Salon Name*" onChange={handleChange} required />
        <input style={inputStyle} name="owner" placeholder="Salon Owner Name*" onChange={handleChange} required />
        <input style={inputStyle} name="address" placeholder="Address*" onChange={handleChange} required />
        <input style={inputStyle} name="email" placeholder="Email*" type="email" onChange={handleChange} required />
        <input style={inputStyle} name="phone" placeholder="Phone Number*" onChange={handleChange} required />

        {/* Barbers Section */}
        <div style={{ marginBottom: '15px' }}>
          <h4>Add Barbers</h4>
          {barbers.map((b, idx) => (
            <span
              key={idx}
              style={{
                ...chipStyle,
                backgroundColor: idx === 0 ? '#E879F9' : '#D4A5F9',
              }}
            >
              {b}
            </span>
          ))}
        </div>

        {/* Add Salon Images (Below Logo) */}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="salonImages" style={addImageBtn}>+ Add Salon Images</label>
          <input
            id="salonImages"
            type="file"
            multiple
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
        </div>

        {/* Buttons */}
        <div style={{ marginTop: '20px' }}>
          <button type="submit" style={submitBtn}>Submit</button>
          <button type="button" style={cancelBtn}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

// Styles
const inputStyle = {
  width: '100%',
  padding: '10px',
  margin: '10px 0',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const chipStyle = {
  color: 'white',
  borderRadius: '20px',
  padding: '5px 10px',
  marginRight: '10px',
  display: 'inline-block',
};

const submitBtn = {
  backgroundColor: '#6a0dad',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '6px',
  marginRight: '10px',
};

const cancelBtn = {
  backgroundColor: 'white',
  border: '1px solid #ccc',
  padding: '10px 20px',
  borderRadius: '6px',
};

const addImageBtn = {
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '10px 20px',
  borderRadius: '6px',
  cursor: 'pointer',
  display: 'inline-block',
};

export default RegisterForm;
