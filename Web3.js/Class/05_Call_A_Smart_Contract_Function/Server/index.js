const Web3 = require("web3");
const MyContract = require("../build/contracts/MyContract.json");

const init = async () => {
  const web3 = new Web3("http://127.0.0.1:7545");
  const id = await web3.eth.net.getId();
  const deployedNetwork = MyContract.networks[id];

  const contract = new web3.eth.Contract(
    MyContract.abi,
    deployedNetwork.address
  );
  // now here we can cal the contract function
  // contract.methods.getData().call({
  //   // inside the call method we can specify
  //   from: 0x48390218439214823190,
  //   // from : calling address
  //   gasPrice: 100,
  //   // the is the value of gas that we are passing
  //   gas: 1000,
  //   // gas: gas limit
  // });
  // NOTE: these object are not important to specify for call method it is important for transaction

  contract.methods.getData().call({}, (result) => {
    // in callback function we will get the data that is returned by 'getData' function
    // console.log(result);
    // NOTE: this is also not recommended to use this api, this is old way to do
  });

  const result = await contract.methods.getData().call();
  console.log(result);
};

init();
