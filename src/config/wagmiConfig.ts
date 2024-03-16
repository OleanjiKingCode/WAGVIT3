import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  metaMaskWallet,
  phantomWallet,
  rainbowWallet,
  talismanWallet,
  trustWallet,
  uniswapWallet,
  walletConnectWallet,
  zerionWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { Chain } from "@rainbow-me/rainbowkit";
import { createConfig } from "wagmi";
import {
  arbitrum,
  arbitrumSepolia,
  avalanche,
  bsc,
  bscTestnet,
  mainnet,
  polygon,
  polygonMumbai,
  sepolia,
  base,
  zora,
  optimism,
} from "wagmi/chains";

const Id = process.env.NEXT_PUBLIC_PROJECT_ID ?? "";

const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommended",
      wallets: [
        rainbowWallet,
        walletConnectWallet,
        phantomWallet,
        metaMaskWallet,
        trustWallet,
      ],
    },
    {
      groupName: "Others",
      wallets: [uniswapWallet, zerionWallet, talismanWallet],
    },
  ],
  {
    appName: "wagmi-viem-tailwindcss-template",
    projectId: Id,
  }
);

// add more chain or remove based on your project's needs
const chains: readonly [Chain, ...Chain[]] = [
  polygon,
  polygonMumbai,
  mainnet,
  sepolia,
  arbitrum,
  arbitrumSepolia,
  bsc,
  bscTestnet,
  avalanche,
  optimism,
  base,
  zora,
];

export const config = createConfig({
  connectors,
  chains,
  ssr: true, // If your dApp uses server side rendering (SSR)
  transports: {},
});
