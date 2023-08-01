import { WormholeConnectConfig } from "@wormhole-foundation/wormhole-connect"

const wormconfig: WormholeConnectConfig = {
  env: "mainnet",
  networks: ["ethereum", "polygon", "solana"],
  tokens: ["ETH", "WETH", "MATIC", "WMATIC"],
  rpc: {
    ethereum: "https://rpc.ankr.com/eth",
    solana: "https://rpc.ankr.com/solana",
  }
}

// ...

<WormholeBridge wormconfig={wormconfig} />
