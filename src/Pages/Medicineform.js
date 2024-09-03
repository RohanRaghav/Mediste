import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserContent from '../Components/UserContent';

const Medicineform = () => {
  const [userId, setUserId] = useState(null);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [manufacturingDate, setManufacturingDate] = useState('');
  const [message, setMessage] = useState('');  // For success or error message

  // Retrieve userId from localStorage
  useEffect(() => {
    const storedUserId = localStorage.getItem('username');
    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      setMessage('Error: User ID not found.');
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
      name,
      quantity: parsedQuantity,
      expiryDate,
      manufacturingDate,
    };

    console.log('Data being sent to the server:', contentData);

    try {
      // Post the data to the server
      const response = await axios.post('https://mediste-server.vercel.app/api/content', contentData);

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
    <div className='dashboard'>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Quantity:</label>
          <input
            type='number'
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
            min="1"
          />
        </div>
        <div>
          <label>Expiry Date:</label>
          <input
            type='date'
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Manufacturing Date:</label>
          <input
            type='date'
            value={manufacturingDate}
            onChange={(e) => setManufacturingDate(e.target.value)}
            required
          />
        </div>
        <button type='submit'>Save Content</button>
      </form>
      {message && <p>{message}</p>}
      <UserContent userId={userId} />
    </div>
  );
};

export default Medicineform;
