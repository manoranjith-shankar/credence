pragma solidity ^0.8.0;

contract testContract {

    function getOwner() public view returns(address owner) {
        return address(this);
    }
}