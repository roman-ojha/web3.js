const Web3 = require("web3");
const MyContract = require("../build/contracts/MyContract.json");
// importing Smart Contract Json file

const init = async () => {
  const web3 = new Web3("http://127.0.0.1:7545");
  // to get the address of smart contract we need to get the network id
  const id = await web3.eth.net.getId();
  const deployedNetwork = MyContract.networks[id];

  const contract = new web3.eth.Contract(
    MyContract.abi,
    // abi is the abi of the smart contract
    // abi will give how to communicate with smart contract and have all the function
    deployedNetwork.address
    // address of the smart contract
  );
  console.log(contract);
};

init();
