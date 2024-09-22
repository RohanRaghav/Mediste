import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserContent from '../Components/UserContent';
import DashNaav from '../Components/DashNaav';

const Medicineform = () => {
  const [userId, setUserId] = useState(null);
  const [hospital, setHospital] = useState(null); // State for hospital
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [manufacturingDate, setManufacturingDate] = useState('');
  const [message, setMessage] = useState('');  // For success or error message
  const [region, setRegion] = useState('');
  // Retrieve userId and hospital from localStorage
  useEffect(() => {
    const storedUserId = localStorage.getItem('username');
    const storedHospital = localStorage.getItem('hospital'); // Retrieve hospital
    const storedRegion = localStorage.getItem('region'); // Retrieve hospital
    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      setMessage('Error: User ID not found.');
    }

    if (storedHospital) {
      setHospital(storedHospital); // Set hospital state
    } else {
      setMessage('Error: Hospital information not found.');
    }
    if (storedRegion) {
      setRegion(storedRegion); // Set hospital state
    } else {
      setMessage('Error: Hospital information not found.');
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate that quantity is a positive integer
    const parsedQuantity = parseInt(quantity, 10);
    if (isNaN(parsedQuantity) || parsedQuantity <= 0) {
      setMessage('Quantity must be a positive number.');
      return;
    }

    // Prepare the data to be sent to the server
    const contentData = {
      userId,
      hospital, // Include hospital in the data
      region,
      name,
      quantity: parsedQuantity,
      expiryDate,
      manufacturingDate,
    };

    console.log('Data being sent to the server:', contentData);

    try {
      // Post the data to the server
      const response = await axios.post('https://latestserver.vercel.app/api/content', contentData);

      // Check if the server responded with success
      if (response.status === 201 || response.status === 200) {
        setMessage('Content successfully added!');
        setName('');
        setQuantity('');
        setExpiryDate('');
        setManufacturingDate('');
      } else {
        setMessage('Error: Unable to add content.');
      }
    } catch (error) {
      setMessage('Error creating content.');
      console.error('Error creating content:', error);
    }
  };

  return (
    <>
      <DashNaav />
      <div style={{ marginTop: 100 }}>
        <center>
      <div className='dashboard'>
  <form className='form' onSubmit={handleSubmit}>
    <div className='form-group'>
      <label className='zoro'>Name:</label>
      <input
        type='text'
        value={name}
        className='labal'
        onChange={(e) => setName(e.target.value)}
        required
      />
    </div>

    <div className='form-group'>
      <label className='zoro'>Quantity:</label>
      <input
        type='number'
        value={quantity}
        className='labal'
        onChange={(e) => setQuantity(e.target.value)}
        required
        min="1"
      />
    </div>

    <div className='form-group'>
      <label className='zoro'>Expiry Date:</label>
      <input
        type='date'
        className='labal'
        value={expiryDate}
        style={{width:150}}
        onChange={(e) => setExpiryDate(e.target.value)}
        required
      />
    </div>

    <div className='form-group'>
      <label className='zoro'>Manufacturing Date:</label>
      <input
        type='date'
        className='labal'
        style={{width:150}}
        value={manufacturingDate}
        onChange={(e) => setManufacturingDate(e.target.value)}
        required
      />
    </div>

    <button className='save' type='submit'>Save Content</button>
  </form>
          {message && <p>{message}</p>}
          <UserContent userId={userId} />
        </div></center>
      </div>
    </>
  );
};

export default Medicineform;
