// src/App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import RegisterForm from './components/RegisterForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <RegisterForm />
      <Footer />
    </div>
  );
}

export default App;