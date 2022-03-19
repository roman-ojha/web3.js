// documentation : https://web3js.readthedocs.io/en/v1.2.11/web3-utils.html

const Web3 = require("web3");

const web3 = new Web3("http://localhost:9545");

// https://youtu.be/rXZSnUOhnwc?list=PLbbtODcOYIoFs0PDlTdxpEsZiyDR2q9aA

const value = 10;
web3.utils.toWei(value.toString(), "ether");
// this will help us to convert any ether unit into wei
// 1 Wei = 10^-18 Ether
// here we are saying we want to transfer ether into wei
// by default it will convert to ether

web3.utils.fromWei("1000000000000000000", "gwei");
// Wei -> gwei

web3.utils.toBN("1000");
// if we to convert any thing into big number then we will use this function

web3.utils.BN;
// if you want to access 'BN' big number object it self the we have to do this

web3.utils.isBN();
// if you want to see if the variable is 'BN' big number or not then we do this

const hexString = "";
web3.utils.hexToAscii(hexString);
// Hex value to string
// in solidity we have data type 'bytes' because of that we have to convert it into string

const normalString = "";
web3.utils.asciiToHex(normalString);
// normal string to Hex

web3.utils.isHex();
// to check is string is hex or not

web3.utils.toHex();
// if want to convert anything into hexString

// another function which is useful to work with hexadecimal string is pad left and pad right, especially in your test, sometime you will build in hexadecimal string but it will not have same length as what you have in smart contracts so , if you want to do some comparison it will fail so in this case you can use:

web3.utils.padLeft(hexString, 20);
// 20 : how many 0 you want to add

web3.utils.randomHex(32);
// pass byte and get the random hex value

web3.utils.isAddress();
// to check if the given string is address or not

web3.utils.toChecksumAddress();
//

web3.utils.checkAddressChecksum();
// if you have Checksum address and you want to check the address is correct or not

// Hashing function

web3.utils.sha3(value);
// if yu want to calculate the sha-3 hash of a value

const param1 = "";
const param2 = "";
const etc = "";
web3.utils.soliditySha3(param1, param2, etc);
web3.utils.soliditySha3({ type: "uint8", value: 10 }, param2, etc);
