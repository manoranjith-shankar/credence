import { createConfig, http } from 'wagmi'
import { mainnet, polygonMumbai, sepolia } from 'wagmi/chains'
import { injected } from 'wagmi/connectors' 

const config = createConfig({
  chains: [mainnet, polygonMumbai],
  connectors: [injected()], 
  transports: {
    [mainnet.id]: http(),
    [polygonMumbai.id]: http(`https://polygon-mumbai.alchemy.io/v3/${process.env.API_KEY}`),
  },
})