// web3.js
import { ethers } from 'ethers';
import CredentialSystem from '@/backend/deployedContracts/CredentialSystem.json';

const abi = CredentialSystem.abi;
const contractAddress = CredentialSystem.networks[80001].address;

const provider = new ethers.providers.Web3Provider(window.ethereum)

const signer = provider.getSigner();

const contract = new ethers.Contract(contractAddress, abi, signer);

const useEthers = [ provider, signer, contract, contractAddress, abi ];

export default useEthers;
