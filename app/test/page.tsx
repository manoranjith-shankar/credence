'use client'

import React, { useState } from 'react';
import JSZip from 'jszip';

const EncryptComponent = () => {
  const [file, setFile] = useState(null);
  const [password, setPassword] = useState('');
  const [encryptedFileUrl, setEncryptedFileUrl] = useState(null); // State to hold the encrypted file URL
  
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  
  const handleEncrypt = () => {
    if (!file) {
      alert('Please select a file.');
      return;
    }
    if (!password) {
      alert('Please enter a password.');
      return;
    }
    
    const zip = new JSZip();
    zip.file('image.png', file);
    zip.generateAsync({ type: 'blob', password: password }) // Set password here
      .then((encryptedZip) => {
        const encryptedFileUrl = URL.createObjectURL(encryptedZip); // Create data URL for encrypted file
        setEncryptedFileUrl(encryptedFileUrl); // Set the encrypted file URL in state
      })
      .catch((error) => {
        console.error('Encryption failed:', error);
      });
  };
  
  return (
    <div>
      <input type="file" accept=".png" onChange={handleFileChange} />
      <input type="text" placeholder="Enter password" value={password} onChange={handlePasswordChange} />
      <button onClick={handleEncrypt}>Encrypt</button>
      {encryptedFileUrl && ( // Render download link if encrypted file URL is available
        <a href={encryptedFileUrl} download="encrypted.zip">Download Encrypted File</a>
      )}
    </div>
  );
};

export default EncryptComponent;