# SelfRetirement

## Simple Summary

A Retirement Smart Contract for private assets management and DeFi integrations.

## Abstract


## Motivation

Currently there are lots of issues with the world retirement systems, specially in third world countries with lots of corruption on the banking and government provided solutions which abuse on peoples money managmenet, expensive fees and and bad investments that can lead our elders in bankrupcy. The propose of the current work is to provide  a tool that enhace their privacy on their assets management, independency from any centralized system and thus future integrations with DeFI.

## Implementation

> Version 1 inteands to be a free smart contract that anyone can deploy
> Documentation and DAPP development donations included (with a onepager)

> Version 2 inteands to be a DAPP (over ETH 2.0) which create its own token and can be #interconected with other smart contracts and DAPPS that can ensure the
Actor to get a ROI over the basics one of the version 1


## Use case V1:

1. User Deploys the smart contract (AS contract owner)
2. user (contract owner) inputs into the smart contract:
    - Current Age
    - Retirement Age
    - Ammount of months, years that its retirement will be distributed
    - Relatives wallets in case no interaction with the contract is done
    - Keep Alive time. Must set a limit time in order to let relatives request heritage
    - Percentages of distribution by the Relatives wallets

3. Relatives
    - Can request hertiage distribution in case contract owner Keep Alive ends
    - Must sign confirmation with the smart contract as a relative ?
    - Can visualize smart contract data only on the request for his related address

4. Smart Contract
    - Shows basic interface public data
    - Can have some ERC20 features basics
    - Masures the ammount and time of the last transaction/deposit
    - If the Keep ALive time reach, Relatives have access to request the heritage
    - Can change ownership (?)
    - Contract Owner can Update parameters at anytime on request.
    - Contract Owner can request the money (Emergency Mode)

5. Extras
    - Donation percentage to RET Team per transaction or optional disable (fixable)
    - Interface with metrics on request
    - keep it simple and stupid.


![](https://i.imgur.com/oeX6fpU.png)
Img 1. RET Usecase Diagram.

### Tokenomics


## Implementation

Not yet implemented.


## References

[1] P1R0; Bleecker,“DCF DAO Phase0”, https://hackmd.io/A9LNZFTlQsC32gqDw1C7EQ, 01-2023.

## Copyright
```
Copyright (C)  Hernández García Alvaro, Huerta Valdez Omar Octavio, Perez Negrón Rocha David Eugenio.  
Permission is granted to copy, distribute and/or modify this document
under the terms of the GNU Free Documentation License, Version 1.3
or any later version published by the Free Software Foundation;
with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.
A copy of the license is included in the section entitled "GNU
Free Documentation License". 
```