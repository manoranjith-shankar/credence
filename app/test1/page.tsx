'use client'

import React, { useState , useEffect, useRef } from 'react';
import { initialize, ZoKratesProvider } from "zokrates-js";
import sourceCode from 'raw-loader!../zkp/main.zok';
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
  const proofRef = useRef<any[]>([])
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
    const { witness } = zokratesProvider.computeWitness(program, [a, b]);

    // generate proof
    const proof = zokratesProvider.generateProof(program.program, witness, pk);
    const formatedProof = zokratesProvider.utils.formatProof(proof);
    proofRef.current = formatedProof;
    
    console.log(proofRef.current, '1')

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

  const testProof1 = [["0x07d63dc9eb8f90ade90d153a5f483a08f6e839c165ecd339b6ae658af875046f","0x168587f382e60dec5ad314bb96c2938f6285e6886f34cea833adcf4c1e565535"],[["0x1606a5fa4fc0057ae2ce2c4a90f591c6ace30dd4726b2899f46a122286ba3e3b","0x13f2e065a0c075f6dc64af023ba4ee11fa96b39c367b0503864c25b79e1cf168"],["0x26c9b6b1f8f8bc887fb8f0f01b5d4536715122b9bf464c1b433a830d2261afca","0x0e7f1de63ca9f2c3329ce9e621fcd3c002ce5865ec84a8ec5187dca4111486a6"]],["0x00edae67a4b3c9fc1c5672d44626192e4213c3dc66b0357732d34c2b41c62ba5","0x0d0b5a7dd38f561ed0773110eb45b03d2d0718e2fc4c720c7ce178a7c81c9524"]]
  const testProof2 = ["0x0000000000000000000000000000000000000000000000000000000000000001"]
  const result = useReadContract({
    address: contractAddress,
    abi,
    functionName: 'verifyTx',
    args: [testProof1, testProof2],
    chainId: 80001
  });
  console.log(result.status, 'outData1')
  console.log(result.data, 'outData2')
  console.log(result, 'outData3')

  const copyVerifierCode = () => {
    const textarea = document.createElement('textarea');
    textarea.value = proofRef.current;
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
        {proofRef.current}
      </div>
      {verifier && <button onClick={copyVerifierCode}>Copy Verifier Code</button>}
    </div>
  );
}

export default App;