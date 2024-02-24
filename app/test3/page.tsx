'use client'

import React, { useState } from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

const DecryptComponent = () => {
  const [file, setFile] = useState(null);
  const [password, setPassword] = useState('');
  
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  
  const handleDecrypt = () => {
    if (!file) {
      alert('Please select a file.');
      return;
    }
    if (!password) {
      alert('Please enter a password.');
      return;
    }
    
    const reader = new FileReader();
    reader.onload = function (event) {
      const arrayBuffer = event.target.result;
      JSZip.loadAsync(arrayBuffer, { password: password })
        .then((zip) => {
          const zipEntries = Object.values(zip.files);
          zipEntries.forEach((zipEntry) => {
            if (!zipEntry.dir) {
              zipEntry.async('blob').then((blob) => {
                saveAs(blob, zipEntry.name);
              });
            }
          });
        })
        .catch((error) => {
          console.error('Decryption failed:', error);
        });
    };
    reader.readAsArrayBuffer(file);
  };
  
  return (
    <div>
      <input type="file" accept=".zip" onChange={handleFileChange} />
      <input type="text" placeholder="Enter password" value={password} onChange={handlePasswordChange} />
      <button onClick={handleDecrypt}>Decrypt</button>
    </div>
  );
};

export default DecryptComponent;