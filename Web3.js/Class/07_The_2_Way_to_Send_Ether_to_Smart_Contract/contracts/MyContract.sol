// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0 <0.9.0;

contract MyContract {
    string public functionCalled;

    function sendEther() external payable {
        functionCalled = "sendEther";
        // this is the payable function
    }

    receive() external payable {
        // receive() : fallback function
        functionCalled = "fallback";
    }

    fallback() external payable {
        // ths is the fallback function, this function will call if we send the transaction to smart contract without specifying any function and you specify function that doesn't exist
        functionCalled = "fallback";
    }
}
