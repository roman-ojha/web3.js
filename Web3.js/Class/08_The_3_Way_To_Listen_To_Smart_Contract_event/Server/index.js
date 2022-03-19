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

  const receipt = await contract.methods.emitEvent("hello").send({
    // 'send' method is only way to create event on the blockchain
    from: addresses[0],
  });
  // in this way you have to be the one who actually send the transaction if you want to read the event

  // console.log(receipt.events);

  await contract.methods.emitEvent("roman").send({
    // 'send' method is only way to create event on the blockchain
    from: addresses[0],
  });
  /*
    {
      MyEvent: {
        logIndex: 0,
        transactionIndex: 0,
        transactionHash: '0x3d39422fc4d9ddf8cc4f405fd0c8ddd3d033e2c452940ac0365d4088d609c8f5',        
        blockHash: '0x471c163bbdc604a5fa245317442fe2cce4484d122e950a1354e6413d624654e3',
        blockNumber: 90,
        address: '0xe38c80697bEb2b484dc2Cc702A494278FdCc5534',
        type: 'mined',
        id: 'log_17c336ea',
        returnValues: Result {
          '0': '0',
          '1': '1647668027',
          '2': 'hello',
          id: '0',
          data: '1647668027',
          value: 'hello'
        },
        event: 'MyEvent',
        signature: '0xb471d59b9e8fe78ab0670c11fe84df6ab431139b43533ab6764e0b15b8d6c39a',
        raw: {
          data: '0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000568656c6c6f000000000000000000000000000000000000000000000000000000',
          topics: [Array]
        }
      }
    }
  */

  // here now we can be able to see the 'returnValues' of our event
  /*
     returnValues: Result {
          '0': '0',
          '1': '1647668027',
          '2': 'hello',
          id: '0',
          data: '1647668027',
          value: 'hello'
        },
  */

  // Other Way to so we can read the event that were created by other people transactions
  const result = await contract.getPastEvents(
    "MyEvent",
    // we are going to specify the name of our event
    // here we have to specify the the filter object where we can customize exactly the event that we want to read
    {
      filter: {
        value: "hello",
        // value: ["hello", "hey"], // hello or hey
        // date:15555555555,
        // you need to put indexed keyword in smart Contract if you want to filter the field
      },
      // one filter is from which block we want to read the event
      // if we don't specify any filter the it will going to take the latest block of the blockchain or latest transaction
      // if you want to have all event then
      fromBlock: 0,
      // if you want to filter some specific field
    }
  );
  // console.log(result);

  // Other Way, in some cases you might need to receive the event in real time and with the getPastEvents function is not very convenient because you need to keep pulling the blockchain for you events
  // we can use WebSocket in that case
  await contract.events
    .MyEvent({
      // we have to put the name of our event as function
      // we have to pass filter object same as getPastEvents
    })
    .on("data", (event) => {
      console.log(event);
    });

  // now if we will call the another event then the that socket will again going to call

  await new Promise((resolve) => setTimeout(() => resolve, 2000));

  await contract.methods.emitEvent("roman").send({
    from: addresses[0],
  });
};

init();
