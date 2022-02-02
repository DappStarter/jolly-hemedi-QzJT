require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture story crawl remain prosper hard light army genuine'; 
let testAccounts = [
"0x62542e0120c589aacb79fc283f94f2d0b96e2cdca6d1ac075768aac5f75fc499",
"0xa1a4b7b8da5d92b578b45f35945054fcb4a4dc1f5cd53f5d931479df6da5f530",
"0xc1a128b0fd6034957fc7d370d8f651489e9b04abfe62959b1d5bd76c0016a8d8",
"0xed076ccdfbcb4393fa45c0a9680d13ffa2611759ec227d3d61520ae9739c4734",
"0x9926a47a7bc131e3e6d268f96c177deabaea3b5df17881689e3e9895d5f86b0a",
"0xf78bcc301413061b4c04b9804733554f63b068a4ec3a11a9a0c3850cb63bbe56",
"0xac2d926ce20ff8cd7b6b81cc63fbdd85af716bc474a48581b3cd2105b0c82216",
"0x91f59115a91cc201d9009b6352bd7ffd0c415880e5e86436a91c39d6d4dcb3d7",
"0xe9ffbf0024ea1d6d484d97a22749e393ac274f9f3f3b57467c34cff9f2cd9921",
"0x3340306b7ca8a84fb45abbff56dacaf35337b61560f77553fb026bcdfc9e5f7b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

