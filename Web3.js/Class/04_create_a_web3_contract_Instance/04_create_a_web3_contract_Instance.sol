// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0 <0.9.0;

/*
    -> to interact web3 with smart contract we need to give:
        1) contract address
        2) contract ABI
    
    -> we will first do:
        -> truffle init
            -> create 'MyContract.sol' file and '2_MyContract.js' migration file 
        -> truffle compile
            -> after that we will get the abi in 'build/contract/MyContract.json' for the smartContract which will show us all the function that we had defined on .sol file
        -> truffle migrate --reset
            -> after this we will get the address of network inside the build/contract/MyContract.json file
                -> "networks": {
                        "5777": {
                        "events": {},
                        "links": {},
                        "address": "0x117d94440EBCa00a233D9b08dF8770a6746c1582",
                        "transactionHash": "0x1dd7278907aed263c213da070c16216c54224270a64261d81a0cde1da05c2706"
                        }
                    },
        -> now we will import these things in our Server/Client File

        -> configure network on 'truffle-coinfig.js'
*/
