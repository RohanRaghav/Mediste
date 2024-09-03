import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserContent = ({ userId }) => {
  const [contentList, setContentList] = useState([]);
  const [message, setMessage] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editedQuantity, setEditedQuantity] = useState('');

  useEffect(() => {
    const fetchContent = async () => {
      try {
        console.log('Fetching content for user:', userId);
        const result = await axios.get(`http://localhost:3001/api/content/${userId}`);
        console.log('Content fetched:', result.data);
        setContentList(result.data);
      } catch (error) {
        console.error('Error fetching content:', error);
        setMessage('Error fetching content.');
      }
    };

    if (userId) {
      fetchContent();
    }
  }, [userId]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/content/${id}`);
      setMessage('Content successfully deleted.');
      // Refetch data after deletion
      const result = await axios.get(`http://localhost:3001/api/content/${userId}`);
      setContentList(result.data);
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
      {contentList.length === 0 ? (
        <p>No content available. Please add some items.</p>
      ) : (
        <ul>
          {contentList.map((item) => (
            <li key={item._id}>
              <div>
                <strong>Name:</strong> {item.name}
              </div>
              <div>
                <strong>Quantity:</strong> 
                {editingId === item._id ? (
                  <input
                    type="number"
                    value={editedQuantity}
                    onChange={(e) => setEditedQuantity(e.target.value)}
                  />
                ) : (
                  item.quantity
                )}
              </div>
              <div>
                <strong>Expiry Date:</strong> {new Date(item.expiryDate).toLocaleDateString()}
              </div>
              <div>
                <strong>Manufacturing Date:</strong> {new Date(item.manufacturingDate).toLocaleDateString()}
              </div>
              {editingId === item._id ? (
                <>
                  <button onClick={() => handleUpdate(item._id)}>Save</button>
                  <button onClick={() => setEditingId(null)}>Cancel</button>
                </>
              ) : (
                <>
                  <button onClick={() => {
                    setEditingId(item._id);
                    setEditedQuantity(item.quantity);
                  }}>Edit Quantity</button>
                  <button onClick={() => handleDelete(item._id)}>Delete</button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserContent;
