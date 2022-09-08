// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0 <0.9.0;

/*
*) Web3.js - Ethereum Javascript API
    -> https://web3js.readthedocs.io/en/v1.7.1/
    -> https://github.com/ChainSafe/web3.js

    -> This will give us way to interact client site or website with ethereum blockchain
    -> We already know about API Something like:
        a) REST API
        b) server API
    -> Web3.js is the Isomorphic Library (it means that we can use it no backand or frontend)

    -> Website talk with the block chain with something called 'JSON RPC'(Remote Precdure calls)
    -> So it means that application use the 'JSON-RPC' to make request on the particular node on the Ethereum Network
    -> https://eth.wiki/json-rpc/API

    -> We can also use Ethereum API to interact with smart contract but that thing is more complicated then web3 so we will use web3 instade of Ethereum API

    -> In this API there are two way to interact with smart contract
        a) Read Data (eth_call)
        b) Modify data (eth_sendtransaction)
    -> when we call the 'eth_call' or 'eth_sendtransaction' api of the ethereum we need to spacify few things:
        1) smart contract address
        2) smart contract function that you want to call
        3) function arguments
        4) ether value (only for the transaction api)
        5) other tx parameters (gas, gasLimit)

    -> to use web3 we need to have access to ethereum node on Ethereum blockchain but we don't have access to any ethereum node so, there is a solution for this:
        1) Run your own node
            -> if you want to run on mainnet the we have to create instance on some hosting provider
            -> https://youtu.be/2TV0r94p8OY?list=PLbbtODcOYIoFs0PDlTdxpEsZiyDR2q9aA&t=380
        2) Use infura
            -> https://youtu.be/2TV0r94p8OY?list=PLbbtODcOYIoFs0PDlTdxpEsZiyDR2q9aA&t=417
        
        -> you need to use ethereum blockchain only when we are on mainnet or testnet

        -> but if we are doing development we don't need any of etereum blockchain network we can use ganache
    
    -> 

*/
