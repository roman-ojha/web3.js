// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0 <0.9.0;

/*
    -> https://youtu.be/LzdMosLzj80?list=PLbbtODcOYIoFs0PDlTdxpEsZiyDR2q9aA&t=24

    -> firstly setup metamask:
    -> for fast configration we will use:
        -> truffle unbox react

    -> in 'client/src/App.js' file we will integrate web3 with metamask
    -> after integrating on client site we will put ganache GUI port on 'truffle-config.js' port and have to spacify the 'host' & 'network_id':
        -> develop: {
                host: "127.0.0.1",
                network_id: "*",
                port: 7545,
                },
    -> truffle migrate --reset --network develop 

    -> now yarn start
*/
