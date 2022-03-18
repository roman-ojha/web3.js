import Web3 from "web3";

const web3 = new Web3("http://localhost:9545");

const contract = new web3.eth.Contract(
  abi,
  // abi is the abi of the smart contract
  // abi will give how to communicate with smart contract and have all the function in Json file
  address
  // address of the smart contract
);
