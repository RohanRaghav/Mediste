import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserContent = ({ userId }) => {
  const [contentList, setContentList] = useState([]);
  const [filteredContent, setFilteredContent] = useState([]);
  const [message, setMessage] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editedQuantity, setEditedQuantity] = useState('');
  const [filterText, setFilterText] = useState('');
  useEffect(() => {
    const fetchContent = async () => {
      try {
        console.log('Fetching content for user:', userId);
        const result = await axios.get(`http://localhost:3001/api/content/${userId}`);
        console.log('Content fetched:', result.data);
        setContentList(result.data);
        setFilteredContent(result.data); // Initialize the filtered list with full content
      } catch (error) {
        console.error('Error fetching content:', error);
        setMessage('Error fetching content.');
      }
    };

    if (userId) {
      fetchContent();
    }
  }, [userId]);

  useEffect(() => {
    setFilteredContent(
      contentList.filter(item =>
        item.name.toLowerCase().includes(filterText.toLowerCase())
      )
    );
  }, [filterText, contentList]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/content/${id}`);
      setMessage('Content successfully deleted.');
      // Refetch data after deletion
      const result = await axios.get(`http://localhost:3001/api/content/${userId}`);
      setContentList(result.data);
      setFilteredContent(result.data); // Update the filtered list as well
    } catch (error) {
      setMessage('Error deleting content.');
      console.error('Error deleting content:', error);
    }
  };

  const handleUpdate = async (id) => {
    try {
      const updatedContent = { quantity: editedQuantity };
      const response = await axios.put(`http://localhost:3001/api/content/${id}`, updatedContent);
      setContentList(contentList.map(item => item._id === id ? response.data : item));
      setMessage('Content successfully updated.');
      setEditingId(null);
    } catch (error) {
      setMessage('Error updating content.');
      console.error('Error updating content:', error);
    }
  };

  if (!userId) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Your Content</h2>
      {message && <p>{message}</p>}
      <input
        type="text"
        placeholder="Filter by name"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        style={{ marginBottom: '10px', padding: '5px', width: '95%' }}
      />
      {filteredContent.length === 0 ? (
        <p>No content available. Please add some items.</p>
      ) : (
        <table className="content-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Expiry Date</th>
              <th>Manufacturing Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredContent.map((item) => (
              <tr key={item._id}>
                <td style={{ background: 'white' }}>{item.name}</td>
                <td style={{ background: '#DDEBF5' }}>
                  {editingId === item._id ? (
                    <input
                      type="number"
                      value={editedQuantity}
                      onChange={(e) => setEditedQuantity(e.target.value)}
                    />
                  ) : (
                    item.quantity
                  )}
                </td>
                <td style={{ background: 'white' }}>
                  {new Date(item.expiryDate).toLocaleDateString()}
                </td>
                <td style={{ background: '#DDEBF5' }}>
                  {new Date(item.manufacturingDate).toLocaleDateString()}
                </td>
                <td style={{ background: 'white' }}>
                  {editingId === item._id ? (
                    <>
                      <button className='old' onClick={() => handleUpdate(item._id)}>Save</button>
                      <button className='old' onClick={() => setEditingId(null)}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <button
                        className='old'
                        onClick={() => {
                          setEditingId(item._id);
                          setEditedQuantity(item.quantity);
                        }}
                      >
                        <img src='edit.png' className='edit' />
                      </button>
                      <button
                        className='old'
                        onClick={() => handleDelete(item._id)}
                      >
                        <img src='delete.png' className='edit' />
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserContent;
