import React, { useState, useEffect } from 'react';
import {
  fetchData,
  uploadFile,
  addData,
  deleteData,
  updateData,
} from '../Service/Api';

export default function Form() {
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState('');
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState('');

  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = async () => {
    try {
      const data = await fetchData();
      setData(data);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file first');
      return;
    }
    try {
      const message = await uploadFile(file);
      alert(message);
      setFile(null);
    } catch (error) {
      alert('Error uploading file');
    }
  };

  const handleAdd = async () => {
    try {
      await addData(newData);
      fetchInitialData();
      setNewData('');
    } catch (error) {
      alert('Error adding data');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteData(id);
      fetchInitialData();
    } catch (error) {
      alert('Error deleting data');
    }
  };

  const handleEdit = (id) => {
    setEditId(id);
    const item = data.find((item) => item.id === id);
    setEditData(item.data);
  };

  const handleUpdate = async () => {
    try {
      await updateData(editId, editData);
      fetchInitialData();
      setEditId(null);
      setEditData('');
    } catch (error) {
      alert('Error updating data');
    }
  };

  return (
    <div>
      <h1>CRUD Operation with File Upload</h1>
      <div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload File</button>
      </div>
      <div>
        <input
          type="text"
          value={newData}
          onChange={(e) => setNewData(e.target.value)}
          placeholder="Add new data"
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {editId === item.id ? (
              <div>
                <input
                  type="text"
                  value={editData}
                  onChange={(e) => setEditData(e.target.value)}
                />
                <button onClick={handleUpdate}>Update</button>
              </div>
            ) : (
              <div>
                {item.data}
                <button onClick={() => handleEdit(item.id)}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
