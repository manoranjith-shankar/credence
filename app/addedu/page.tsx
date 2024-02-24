'use client'

import React, { useState } from 'react';
import toast from 'react-hot-toast';
import useEthers from '@/components/hooks/useEthers';

function Test() {
    const [aicteId, setAicteId] = useState('');
    const [institutionName, setInstitutionName] = useState('');
    const [institutionRegisteredAddress, setInstitutionRegisteredAddress] = useState('');
    const [institutionEmail, setInstitutionEmail] = useState('');
    const [isVerified, setIsVerified] = useState(false);
    const [institutionPhone, setInstitutionPhone] = useState('');
    const [IsAllVlaueSet, setIsAllVlaueSet] = useState(false);
    const [transactionStatus, setTransactionStatus] = useState('');
    const [provider, signer, contract, contractAddress, abi] = useEthers;

    const handleClick = async () => {
        try {
            toast.loading('Transacting...', {
                duration: 3000,
            });

            const tx = await contract.addEducationalIssuer(
                aicteId,
                institutionName,
                institutionRegisteredAddress,
                institutionEmail,
                isVerified,
                institutionPhone
            );

            const receipt = await tx.wait();
            toast.success('Transaction successful. user created successfully');
        } catch (e) {
            toast.error('pleas pay the upfront amount, Transaction failed.');
            console.log(e);
        }
    };

    return (
        <div>
            <h1>Add Educational Issuer</h1>
            <div>
                <label>AICTE ID:</label>
                <input type="text" value={aicteId} onChange={(e) => setAicteId(e.target.value)} />
            </div>
            <div>
                <label>Institution Name:</label>
                <input type="text" value={institutionName} onChange={(e) => setInstitutionName(e.target.value)} />
            </div>
            <div>
                <label>Institution Registered Address:</label>
                <input type="text" value={institutionRegisteredAddress} onChange={(e) => setInstitutionRegisteredAddress(e.target.value)} />
            </div>
            <div>
                <label>Institution Email:</label>
                <input type="text" value={institutionEmail} onChange={(e) => setInstitutionEmail(e.target.value)} />
            </div>
            <div>
                <label>Is Verified:</label>
                <input type="checkbox" checked={isVerified} onChange={(e) => setIsVerified(e.target.checked)} />
            </div>
            <div>
                <label>Institution Phone:</label>
                <input type="text" value={institutionPhone} onChange={(e) => setInstitutionPhone(e.target.value)} />
            </div>
            <button onClick={handleClick}>Add Educational Issuer</button>
            {transactionStatus && <p>{transactionStatus}</p>}
        </div>
    );
}

export default Test;