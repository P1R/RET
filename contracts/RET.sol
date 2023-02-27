pragma solidity ^0.7.0;

contract RET {
    address public contractOwner;
    uint public currentAge;
    uint public retirementAge;
    uint public distributionPeriod;
    address[] public relatives;
    mapping(address => uint) public percentages;
    // I am alive means how much time in weeks to add
    uint public iAmAlive;
    // Means I am dead (expiration date) 
    uint public iAmDead;

    constructor(uint _currentAge, uint _retirementAge, uint _distributionPeriod, address[] memory _relatives, uint[] memory _percentages, uint _iAmAlive) {
        contractOwner = msg.sender;
        currentAge = _currentAge;
        retirementAge = _retirementAge;
        distributionPeriod = _distributionPeriod * 1 weeks;
        iAmAlive = _iAmAlive * 1 weeks;
        relatives = _relatives;
        for(uint i=0; i<_relatives.length; i++) {
            percentages[_relatives[i]] = _percentages[i];
        }
        iAmDead = block.timestamp + iAmAlive;
    }

    function deposit() public payable {
        require(msg.sender == contractOwner, "Only contract owner can deposit");
        lifeProof();
    }
    // @notice this function executed by the contractOwner proofs he is alive
    // and resets the iAmAlive
    function lifeProof() public {
        require(msg.sender == contractOwner, "Only owner gives alive proof");
        require(block.timestamp < iAmAlive, "Keep alive time has passed");
        iAmDead = block.timestamp + iAmAlive;
    }

   // function requestRetirement() public {
   //     require(relativeConfirmations[msg.sender], "Relative must confirm first");
   //     require(block.timestamp > iAmDead, "Keep alive time has passed");
   //     uint balance = balances[msg.sender];
   //     balances[msg.sender] = 0;
   //     for(uint i=0; i<relatives.length; i++) {
   //         uint amount = balance * percentages[relatives[i]] / 100;
   //         balances[relatives[i]] += amount;
   //     }
   // }
}
