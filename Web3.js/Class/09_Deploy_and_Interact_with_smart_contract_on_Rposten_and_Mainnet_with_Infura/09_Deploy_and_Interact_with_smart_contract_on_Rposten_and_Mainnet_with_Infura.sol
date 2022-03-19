// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0 <0.9.0;

/*
    // https://youtu.be/hpyWNudPDjk?list=PLbbtODcOYIoFs0PDlTdxpEsZiyDR2q9aA

    -> npm install @truffle/hdwallet-provider

    -> here we will need ethereum address and private key to interact with ethereum network so we will install 
        -> npm i ethereumjs-wallet
            -> const ethWallet = require("ethereumjs-wallet").default;
                let addressData = ethWallet.generate();
                const privateKey = addressData.getPrivateKeyString();
                const address = addressData.getAddressString();

    -> before we will deploy to testnet we will see how we can use '@truffle/hdwallet-provider' to deploy to our local development blockchain on ganache and the code is on 'Server/index.js'

*/
