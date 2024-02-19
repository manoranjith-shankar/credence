import { useReadContract } from 'wagmi';
import AppHandler from '@/backend/deployedContracts/AppHandler.json'
const abi = AppHandler.abi
const contractAddress = AppHandler.networks[80001].address

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