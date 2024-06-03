import React, { useState } from 'react';
import { uploadFile } from '../Service/Api';

export default function Form() {
  const [file, setFile] = useState(null);

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

  return (
    <div>
      <h1>CRUD Operation with File Upload</h1>
      <div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload File</button>
      </div>
    </div>
  );
}
