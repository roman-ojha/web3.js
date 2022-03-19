// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0 <0.9.0;

contract MyContract {
    event MyEvent(
        uint256 indexed id,
        uint256 indexed data,
        string indexed value
    );
    // here we have defined event with some argunment
    // you need to put indexed keyword if you want to filter the field
    // NOTE: you have to limit of having 3 indexed filter in event

    uint256 nextId;

    function emitEvent(string calldata value) external {
        emit MyEvent(nextId, block.timestamp, value);
        nextId++;
    }
}
