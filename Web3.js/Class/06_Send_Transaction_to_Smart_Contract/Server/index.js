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
  // these are the account address available to the wallet network
  // right now this is the 10 address from ganache but when we will connect to the ethereum network it will be the user address
  // to send the transaction
  const receipt = await contract.methods.setData(21).send({
    // now here we need to specify the send object
    from: addresses[0],
    // gas: 100,
    // gasPrice: 100,
    // and if we don't specify the gas and gasPrice it will automatically estimate the price and perform the action
  });
  // now this will going to mine the transaction from the blockchain
  // now after transaction happened we will get the receipt as the response

  const result = await contract.methods.getData().call();
  console.log(result);
  console.log(receipt);

  // other way to make transaction
  contract.methods
    .setData(30)
    .send({
      from: addresses[0],
    })
    .then(async (receipt) => {
      // console.log(receipt);
      const result = await contract.methods.getData().call();
      console.log(result);
    })
    .catch((err) => {
      // console.log(err)
    });

  // other way to make transaction
  contract.methods
    .setData(30)
    .send({
      from: addresses[0],
    })
    .on("receipt", (receipt) => {
      //
    })
    .on("confirmation", (confirmationNumber, receipt) => {
      // confirmation is the number of block that mine on top of transaction
      // more confirmation we have, more sure that transaction will included in the blockchain
    })
    .on("error", (error, receipt) => {
      //
    });

  // other way to make transaction
  contract.methods.setData(30).send(
    {
      from: addresses[0],
    },
    (receipt) => {
      //
    }
  );
};

init();
