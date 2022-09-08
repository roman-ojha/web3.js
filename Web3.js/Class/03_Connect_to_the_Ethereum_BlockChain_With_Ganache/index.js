// const Web3 = require("web3");
import Web3 from "web3";

// here we will build a custom provider
const customProvider = {
  sendAsync: (payload, cb) => {
    console.log("you called");
    console.log(payload);
    cb(undefined, 100);
    //  1st arg: if there was an error, so there was no error we will pass undefine
    // https://youtu.be/FNfcdkPb4rg?list=PLbbtODcOYIoFs0PDlTdxpEsZiyDR2q9aA&t=288
  },
  // payload: this identify api of ethereum that we want to call
  // cb: call once we get the response from the ethereum blockchain

  // if we will run the script we will get:
  // { jsonrpc: '2.0', id: 1, method: 'eth_blockNumber', params: [] }
  // method: name of api on ethereum
  // params: passed no parameters []
};

const provider = new Web3.providers.HttpProvider("http://127.0.0.1:7545");
// const web3 = new Web3(customProvider);
const web3 = new Web3(provider);
// here we are making web3 instance and we have to provide url to ethereum node
// for ganache : http//:localhost:7545
// in real world we will not use ganache, we might use 'metamask' for wallet in that case
//
// const web3 = new Web3(window.ethereum);
// await window.ethereum.enable()

web3.eth.getBlockNumber().then((number) => {
  console.log(number);
  console.log("done!");
});

web3.eth
  .getBalance("0x57110414fC6Ff7AFd5B05f82b3f55E77c9BE7038")
  .then((balance) => {
    // we have to give the address of contract
    // using getBalance we can get the balance of the contract
    console.log(balance);
    console.log(web3.utils.fromWei(balance, "ether"));
    // here we are converting Wei to ether
  });
