import React from 'react';
import salonBanner from '../assets/salon-banner.jpg';

function Banner() {
  return (
    <div style={{
      position: 'relative',
      height: '350px',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingLeft: '50px',
      backgroundImage: `url(${salonBanner})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      {/* Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)' // darker overlay
      }}></div>

      {/* Text */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
          List Your Salon at <span style={{ color: '#E879F9' }}>BarberX</span>
        </h1>
        <p style={{ fontSize: '1.2rem' }}>
          Increase your online visibility and reach more potential clients on BarberX.
        </p>
      </div>
    </div>
  );
}

export default Banner;
