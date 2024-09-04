import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import DashNaav from '../Components/DashNaav';

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
      <>
        <DashNaav />
        <div className='button-container'>
          <div className='search-container'>
            <input
              type='text'
              placeholder='Search by name...'
              value={searchTerm}
              onChange={handleSearchChange}
              className='search-input'
            />
          </div>
          <div style={{paddingRight:50}}>
          <button onClick={handleClick} className='demo-button'>
            Update your stock
          </button></div>
        </div>
        <div className='dashboard' style={{paddingTop:20}}>
          {error && <p>{error}</p>}
          {currentItems.length === 0 ? (
            <p>No content available. Please add some items.</p>
          ) : (
            <table className='content-table'>
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Expiry Date</th>
                  <th>Manufacturing Date</th>
                  <th>Hospital</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((item) => (
                  <tr key={item._id}>
                    <td>{item.userId}</td>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{new Date(item.expiryDate).toLocaleDateString()}</td>
                    <td>{new Date(item.manufacturingDate).toLocaleDateString()}</td>
                    <td>{item.hospital}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
      </>
    );
  }

  return null;
};

export default Dashboard;
