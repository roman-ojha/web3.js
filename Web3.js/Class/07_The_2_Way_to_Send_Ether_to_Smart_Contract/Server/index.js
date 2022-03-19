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

  const addresses = await web3.eth.getAccounts();

  await contract.methods.sendEther().send({
    from: addresses[0],
    // value: 100,
    // value: <value_of_ether_that_we_want_to_send>>
    // value will be on wei so to transfer 1 ether number will be huge
    value: "500000000000000000", // send as the string
    // 0.5 eth
    // other way
    // value: web3.utils.toBN("10000000000"),
  });
  // In Order to transfer ether we have to send the the transaction

  console.log(await contract.methods.functionCalled().call());

  // other way is by sending ether directly to smart contract without calling specific function
  await web3.eth.sendTransaction({
    // for the fallback function we will not use 'contract' but use 'web3'
    from: addresses[0],
    // this time we have to specify the recipient address
    to: contract.options.address,
    value: "500000000000000000",
  });
  console.log(await contract.methods.functionCalled().call());

  // if we don't want to send ether to smart contract but to address then
  await web3.eth.sendTransaction({
    from: addresses[0],
    to: addresses[1],
    value: "1000000000000000000",
  });
};

init();
