'use client'

import React, { useState } from 'react';
import useContractWrite  from '@/components/hooks/useContractWrite';
import AppHandler from '@/backend/deployedContracts/AppHandler.json'
const abi = AppHandler.abi

function AddInstitution() {

  const { writeContract } = useContractWrite();
  const [formData, setFormData] = useState({
    aicteId: "",
    name: "",
    location: "",
    email: "",
    phoneNumber: ""
  });

  const { aicteId, name, location, email, phoneNumber } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await writeContract({
        abi,
        address: '0x6b175474e89094c44da98b954eedeac495271d0f', // Update with your contract address
        functionName: 'addInstitution',
        args: [aicteId, name, location, email, phoneNumber]
      });
      console.log("Institution added successfully!");
      // Reset form data after successful submission
      setFormData({
        aicteId: "",
        name: "",
        location: "",
        email: "",
        phoneNumber: ""
      });
    } catch (error) {
      console.error("Error adding institution:", error);
    }
  };

  return (
    <div>
      <h2>Add Institution</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>AICTE ID:</label>
          <input type="text" name="aicteId" value={aicteId} onChange={handleChange} required />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={name} onChange={handleChange} required />
        </div>
        <div>
          <label>Location:</label>
          <input type="text" name="location" value={location} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={email} onChange={handleChange} required />
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="tel" name="phoneNumber" value={phoneNumber} onChange={handleChange} required />
        </div>
        <button type="submit">Add Institution</button>
      </form>
    </div>
  );
}

export default AddInstitution;