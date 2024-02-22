'use client'

import React, { useState , useEffect } from 'react';
import { initialize, ZoKratesProvider } from "zokrates-js";
import sourceCode from 'raw-loader!../zkp/test.zok';
// the location of this .zok file is @/zkp/test.zok, but we can only go ../
import Verifier from '@/backend/deployedContracts/Verifier.json'
import { useReadContract } from 'wagmi';
const abi = Verifier.abi
const contractAddress = Verifier.networks[80001].address

async function compileZokratesCode(code: string) {
    const provider = await initialize();
    const artifact = provider.compile(code);
    return artifact;
}

function App() {
  const [zokratesProvider, setZokratesProvider] =
  useState<ZoKratesProvider>(null);
  const [verifier, setVerifier] = useState("")
  const [proof1, setProof] = useState()
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [output, setOutput] = useState('');

  useEffect(() => {
    const load = async () => {
      let provider = await initialize();
      setZokratesProvider(provider);
    };
    load();
  }, []);

  const runZokrates = async () => {
    try {
    // compile the program
    const program = await compileZokratesCode(sourceCode);

    // setup the program
    const { pk, vk } = zokratesProvider.setup(program.program);
    
    // compute witness
    const { witness, output } = zokratesProvider.computeWitness(program, [a, b]);

    // generate proof
    const proof = zokratesProvider.generateProof(program.program, witness, pk);
    const formatedProof = zokratesProvider.utils.formatProof(proof);
    setProof(formatedProof)
    console.log(formatedProof, '1')

    // export solidity verifier
    const verifier = zokratesProvider.exportSolidityVerifier(vk);
    setVerifier(verifier)

    // verify the proof
    const isValid = zokratesProvider.verify(vk, proof);
      
      setOutput(isValid ? 'Proof is valid' : 'Proof is invalid');
    } catch (error) {
      console.error(error);
      setOutput('Error running ZoKrates');
    }
  };

  const result = useReadContract({
    address: contractAddress,
    abi,
    functionName: 'verifyTx',
    proof1,
  });
  console.log(result, 'outData')

  const copyVerifierCode = () => {
    const textarea = document.createElement('textarea');
    textarea.value = proof1;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('code copied to clipboard!');
};

  return (
    <div>
      <input value={a} onChange={e => setA(e.target.value)} placeholder="Private input a" />
      <input value={b} onChange={e => setB(e.target.value)} placeholder="Public input b" />
      <button onClick={runZokrates}>Run ZoKrates</button>
      <pre>{output}</pre>
      <div>
        {proof1}
      </div>
      {verifier && <button onClick={copyVerifierCode}>Copy Verifier Code</button>}
    </div>
  );
}

export default App;