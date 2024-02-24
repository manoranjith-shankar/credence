import { useWriteContract } from 'wagmi';
import CredentialSystem from '@/backend/deployedContracts/CredentialSystem.json';

const abi = CredentialSystem.abi;
const contractAddress = CredentialSystem.networks[80001].address;

/**
 * Custom hook for writing to a contract.
 * 
 * @param {string} functionName - The name of the function to call on the contract.
 * @param {...any} args - Arguments to pass to the contract function.
 * @returns {Object} - An object containing the data, pending status, and error of the contract write operation.
 */
const useContractWrite = (functionName, ...args) => {
    const result = useWriteContract({
      address: contractAddress,
      abi,
      functionName,
      args,
    });

    return result;
}

export default useContractWrite;