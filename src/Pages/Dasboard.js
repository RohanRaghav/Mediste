import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [username, setUsername] = useState('');
  const [contentList, setContentList] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const storedUsername = localStorage.getItem('username');

        if (token) {
          setIsAuthenticated(true);
          setUsername(storedUsername || '');
          console.log('Fetching content from API...');
          const result = await axios.get('http://localhost:3001/api/content/full');
          console.log('Content fetched successfully:', result.data);
          setContentList(result.data);
        } else {
          setIsAuthenticated(false);
          navigate('/');
        }
      } catch (error) {
        console.error('Error fetching content:', error.response ? error.response.data : error.message);
        setError('Error fetching content.');
      }
    };

    fetchContent();
  }, [navigate]);

  const filteredContent = contentList.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredContent.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (direction) => {
    if (direction === 'next' && currentPage * itemsPerPage < filteredContent.length) {
      setCurrentPage(prevPage => prevPage + 1);
    } else if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleClick = () => {
    navigate('/register');
  };

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated) {
    return (
      <div className='dashboard'>
        <div className='button-container'>
          <button onClick={handleClick} className='register-button'>
            Update your stock
          </button>
        </div>
        <h2>Hi {username}, Welcome to the Dashboard</h2>
        <h2>Your Content</h2>

        <div className='search-container'>
          <input
            type='text'
            placeholder='Search by name...'
            value={searchTerm}
            onChange={handleSearchChange}
            className='search-input'
          />
        </div>

        {error && <p>{error}</p>}
        {currentItems.length === 0 ? (
          <p>No content available. Please add some items.</p>
        ) : (
          <ul>
            {currentItems.map((item) => (
              <li key={item._id}>
                <div>
                  <strong>UserName:</strong> {item.userId}
                </div>
                <div>
                  <strong>Name:</strong> {item.name}
                </div>
                <div>
                  <strong>Quantity:</strong> {item.quantity}
                </div>
                <div>
                  <strong>Expiry Date:</strong> {new Date(item.expiryDate).toLocaleDateString()}
                </div>
                <div>
                  <strong>Manufacturing Date:</strong> {new Date(item.manufacturingDate).toLocaleDateString()}
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className='pagination-controls'>
          <button
            onClick={() => handlePageChange('prev')}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {Math.ceil(filteredContent.length / itemsPerPage)}
          </span>
          <button
            onClick={() => handlePageChange('next')}
            disabled={currentPage * itemsPerPage >= filteredContent.length}
          >
            Next
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default Dashboard;
