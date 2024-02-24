'use client'

import React, { useState } from 'react';

function FileHasher() {
  const [hashResult, setHashResult] = useState('');

  const hashFile = (file) => {
    readBinaryFile(file)
      .then((result) => {
        result = new Uint8Array(result);
        return window.crypto.subtle.digest('SHA-256', result);
      })
      .then((result) => {
        result = new Uint8Array(result);
        const resultHex = uint8ArrayToHexString(result);
        setHashResult('result: ' + resultHex);
      });
  };

  const readBinaryFile = (file) => {
    return new Promise((resolve, reject) => {
      const fr = new FileReader();
      fr.onload = () => {
        resolve(fr.result);
      };
      fr.readAsArrayBuffer(file);
    });
  };

  const uint8ArrayToHexString = (ui8array) => {
    let hexString = '';
    for (let i = 0; i < ui8array.length; i++) {
      let h = ui8array[i].toString(16);
      if (h.length === 1) {
        h = '0' + h;
      }
      hexString += h;
    }
    const p = Math.pow(2, Math.ceil(Math.log2(hexString.length)));
    hexString = hexString.padStart(p, '0');
    return hexString;
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    hashFile(file);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <div id="divresult">{hashResult}</div>
    </div>
  );
}

export default FileHasher;