const MyContract = artifacts.require("MyContract");

module.exports = async function (deployer, _, account) {
  await deployer.deploy(MyContract);
  await web3.eth.sendTransaction({
    from: account[0],
    to: "0x15b24449fba3d247e00e3eeef471d94c6b6ad58f",
    value: web3.utils.toWei("1", "ether"),
  });
};
