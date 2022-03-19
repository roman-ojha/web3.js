const Web3 = require("web3");
const MyContract = require("../build/contracts/MyContract.json");
const HDWalletProvider = require("@truffle/hdwallet-provider");
const address = "0x15b24449fba3d247e00e3eeef471d94c6b6ad58f";
const privateKey =
  "0x55ab777eb04c4e107ccb1a03c18ac4dd8ae8871a97a491598b73ee0bc3c0530e";

const init = async () => {
  // -> before we will deploy to testnet we will see how we can use '@truffle/hdwallet-provider' to deploy to our local development blockchain on ganache
  const ganacheProvider = new HDWalletProvider( // the first argument is privatekey
    privateKey,
    // [privateKey1, privateKey2] // if you have several addresses
    "http://127.0.0.1:7545"
    // if this is ganache
    // the difference with our custom provider is that now we actually sign transaction and we provide the privatekey to web3
    // so this is more realistic then using unlock ethereum address of ganache
  );
  // now in this address we don't have any ether for that reason we have to add script on '2_MyContract.js' file
  // there we will send some ether from ganache
  const ganacheWeb3 = new Web3(ganacheProvider);
  const id = await ganacheWeb3.eth.net.getId();
  const deployedNetwork = MyContract.networks[id];

  const ganacheContract = new ganacheWeb3.eth.Contract(
    MyContract.abi,
    deployedNetwork.address
  );

  await ganacheContract.methods.setData(10).send({
    from: address,
  });

  const result1 = await ganacheContract.methods.getData().call();
  console.log(result1);

  // now we will see how we can send transaction to public network like mainnet and testnet
  // for that we need some ropsten ether so we will go to faucet ropsten to get some ether on our 'address'

  // now we have to go to infura and create project and get the endpoint url for ropsten
  const provider = new HDWalletProvider( // the first argument is privatekey
    privateKey,
    // you can also provide mnemonic rather then private key
    // mnemonic,
    "https://ropsten.infura.io/v3/d0371d6b9f2a465985683fcb0be2a260"
    // https://youtu.be/hpyWNudPDjk?list=PLbbtODcOYIoFs0PDlTdxpEsZiyDR2q9aA&t=747
    // if we will provide mnemonic then HTWalletProvider will generate several addresses so we have to specify how many address to generate
    // 0,
    // 0 start with first address generated
    // 5
    // 5: number of address that you want
  );
  const web3 = new Web3(provider);
  let contract = new web3.eth.Contract(
    MyContract.abi
    // here we don't give any address
  );

  contract = await contract
    .deploy({
      data: MyContract.bytecode,
      // here we have to pass 'MyContract' data as data parameter
    })
    .send({ from: address });
  // now here we will deploy the contract using contract instance

  await contract.methods.setData(10).send({
    from: address,
  });

  const result = await contract.methods.getData().call();
  console.log(result);
};

init();
