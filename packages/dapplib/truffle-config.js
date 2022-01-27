require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift riot magic million grace drive equal gentle'; 
let testAccounts = [
"0xa5658a01d9d410084e0ffe4db6c344830250589a2d70e2740fb4a7d08f1b809b",
"0x422131c87f9c8735c2b95306e3cf3984bd355ba4b75438d89e94f65b54365585",
"0xa42ac1a6c6aa091c65fa9a0547faf32410eaf6d367c266ca6fb7b00f04d73ed9",
"0xf815e343320bb10c88825a8255eb843a3a0947a28ffb7104ca394f1055b3c38a",
"0x3736d583de00c69a110a0429a4176eb53b3cf5f80ffe647752e306cb00411f3f",
"0xcec3b266ca742d65ebc13678b5bbbfb8e604e072555892cb0e7b0a3554baacc6",
"0x4ff9ddb612ffba43ad980c6d4ccf8c4c087c1d70b71466e870118bafc5332ee1",
"0x10df11cc5931883a7e41d64c2b2a254452fab1092923c5bdcf04d4ce2d49cdc5",
"0x7515c501d6119de3103ecb10e4bc505de21cf8d6d3a2248477cd63ac0a4d2913",
"0x6b51d030b39d39fee0c8426fb76da9eff4aa3701b40735d3638451e279391a67"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


