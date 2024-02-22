import { useWriteContract } from 'wagmi';
import AppHandler from '@/backend/deployedContracts/AppHandler.json';

const abi = AppHandler.abi;
const contractAddress = AppHandler.networks[80001].address;

/**
 * Custom hook for writing to a contract.
 * 
 * @param {string} functionName - The name of the function to call on the contract.
 * @param {...any} args - Arguments to pass to the contract function.
 * @returns {Object} - An object containing the data, pending status, and error of the contract write operation.
 */
const useContractWrite = (functionName, ...args) => {
    const { data, isPending, error } = useWriteContract({
      address: contractAddress,
      abi,
      functionName,
      args,
    });

    return { data, isPending, error };
}

export default useContractWrite;