import { useWriteContract } from 'wagmi';
import AppHandler from '@/backend/deployedContracts/AppHandler.json';

const abi = AppHandler.abi;
const contractAddress = AppHandler.networks[80001].address;

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