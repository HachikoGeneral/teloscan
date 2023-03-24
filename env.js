/*
The environment variables ares set based on the single variable `MAINNET=true`
(or absence thereof) in the root `.env` file. The following env vars are then assigned in
`quasar.config.js`.
*/

const sharedEnv = {
    NETWORK_PROTOCOL: 'http',
    NETWORK_PORT: 9933,
    NETWORK_EVM_CONTRACT: 'chikochain.evm',
};

const TESTNET = {
    ...sharedEnv,
    APP_NAME: 'Chikoscan',
    NETWORK_HOST: 'http://70.34.216.42:9933',
    NETWORK_CHAIN_ID:
      '57c70f117093411b18a5e148cc655d25509bef949acb3c5ca0288dd8806bdce9',
    NETWORK_EVM_RPC: 'http://70.34.216.42:9933',
    NETWORK_EVM_ENDPOINT: 'http://70.34.216.42:9933',
    NETWORK_EVM_CHAIN_ID: 42,
    HYPERION_ENDPOINT: 'http://70.34.216.42:9933',
    NETWORK_EXPLORER: 'http://95.179.194.226:3000/?rpc=ws%3A%2F%2F70.34.216.42%3A9944#/explorer',
    TELOS_API_ENDPOINT: 'http://70.34.216.42:9933', //for local instance of api
    VERIFIED_CONTRACTS_BUCKET: 'verified-evm-contracts-testnet',
    STAKED_TLOS_CONTRACT_ADDRESS: '0xa9991E4daA44922D00a78B6D986cDf628d46C4DD',
    TELOS_ESCROW_CONTRACT_ADDRESS: '0x7E9cF9fBc881652B05BB8F26298fFAB538163b6f',
};

const MAINNET = {
    ...sharedEnv,
    APP_NAME: 'Chikoscan',
    NETWORK_HOST: 'http://70.34.216.42:9933',
    NETWORK_CHAIN_ID:
      '57c70f117093411b18a5e148cc655d25509bef949acb3c5ca0288dd8806bdce9',
    NETWORK_EVM_RPC: 'http://70.34.216.42:9933',
    NETWORK_EVM_ENDPOINT: 'http://70.34.216.42:9933',
    NETWORK_EVM_CHAIN_ID: 42,
    HYPERION_ENDPOINT: 'http://70.34.216.42:9933',
    NETWORK_EXPLORER: 'http://95.179.194.226:3000/?rpc=ws%3A%2F%2F70.34.216.42%3A9944#/explorer',
    TELOS_API_ENDPOINT: 'http://70.34.216.42:9933', //for local instance of api
    VERIFIED_CONTRACTS_BUCKET: 'verified-evm-contracts',
    STAKED_TLOS_CONTRACT_ADDRESS: '0xB4B01216a5Bc8F1C8A33CD990A1239030E60C905',
    TELOS_ESCROW_CONTRACT_ADDRESS: '0x95F5713A1422Aa3FBD3DCB8D553945C128ee3855',
};

const env = process.env.NETWORK === 'mainnet' ? MAINNET : TESTNET;

module.exports = env;
