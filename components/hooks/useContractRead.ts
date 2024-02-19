import { useReadContract } from 'wagmi';
import AppHandler from '@/backend/deployedContracts/AppHandler.json'
const abi = AppHandler.abi

const useContractRead = (functionName, ...args) => {
  // Create a `useReadContract` instance with pre-filled details
  const { data, isLoading, error } = useReadContract({
    address: `0x${AppHandler.networks[80001].address}`,
    abi,
    functionName,
    args,
  });

  return { data, isLoading, error };
};

export default useContractRead;