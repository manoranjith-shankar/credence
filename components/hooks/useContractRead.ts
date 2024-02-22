import { useReadContract } from 'wagmi';
import AppHandler from '@/backend/deployedContracts/AppHandler.json'
const abi = AppHandler.abi
const contractAddress = AppHandler.networks[80001].address

/**
 * Custom hook for reading data from a contract.
 *
 * @param functionName - The name of the contract function to call.
 * @param args - Arguments to pass to the contract function.
 * @returns An object containing the data, loading state, and error state.
 */
const useContractRead = (functionName, ...args) => {
  // Create a `useReadContract` instance with pre-filled details
  const { data, isLoading, error } = useReadContract({
    address: contractAddress,
    abi,
    functionName,
    args,
  });

  return { data, isLoading, error };
};

export default useContractRead;