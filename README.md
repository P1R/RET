# Retirement Manager Smart Contract (RetMan)

:::info
#### Table of Contents
[TOC]
:::

## Simple Summary

A Retirement Smart Contract for private assets management and DeFi integrations.

## Abstract

A Smart Contract which accomplish the basic function of a retirement institution and a will, by holding the tokens of a person, some enhacements against the centralized models can be privacy, transparency and easy integration to DeFi protocols for pasive income and/or to DAO governance / governance and pasive income respectively.
> Don't trust institutions, trust mathematics.


## Motivation

Currently, there are lots of issues with the world's retirement systems, specially in Third World countries, where corruption on the banking and governments can lead to abusive fees, negative interests, and other issues which can lead our elders into bankruptcy. 


Our proposal is to provide a tool that enhances the privacy on their assets, independently from any centralized system, facilitating future integrations with DeFI.

## Implementation

> Version 1: intends to be a free smart contract that anyone can deploy
> Documentation and DAPP development donations included (with a onepager)

> Version 2: Go DeFI & DAO

>Actor to get a ROI over the basics one of the version 1

 
## Use Case:


```plantuml
@startuml
left to right direction
actor "Contract Owner" as R0
actor "Relative1 (son)" as R1
actor "Relative2 (daughter)" as R2
rectangle "Retirement Manager (RM)"{
  usecase C1 as "Deploy Smart Contract"
  usecase C2 as "Sets Inputs Configs"
  usecase C3 as "Deposits for Retirement
           --
           -Extends I Am Alive (date)
           -Optional donation to the DAO (Team)"
  usecase C9 as "Update Keep Alive date" 
  usecase C4 as "Request Retirment
                 --
                 -Extends I am alive (date)"
  usecase C5 as "Gets Gradual Retirement Deposit"
  usecase C6 as "Request Information
                 (Alive Date for example)"
  usecase C7 as "Gets the percentage"
  usecase C8 as "Request will
                 --
                 Percentages distribution to all Relatives"
}
C1 <-- R0
C2 <-- C1
C3 <-- R0
C3 -up-> C9
C4 <-- R0
C4 -up-> C9
C5 <-- C4
C5 --> R0
R1 --> C6
R2 --> C6
C7 --> R1
C7 --> R2
R1 --> C8
R2 --> C8

@enduml
```
Img 1. REST Usecase Diagram.

1. User Deploys the smart contract (AS contract owner)
2. User (contract owner) inputs into the smart contract:
    - Current Age
    - Retirement Age
    - Amount of months, years that the retirement will be distributed
    - Relative's wallets in case there is no interaction with the contract
    - Keep Alive time. Must set a limit time in order to let relatives request heritage
    - Percentages of distribution by the Relative's wallets

3. Relatives
    - Can request heritage distribution in case contract owner Keep Alive ends
    - Must sign confirmation with the smart contract as a relative ?
    - Can visualize smart contract data only on the request for his related address

4. Smart Contract
    - Shows basic interface public data
    - Can have some ERC20 features basics
    - Measures the ammount and time of the last transaction/deposit
    - If the Keep Alive time is reached, Relatives may request the heritage
    - Can change ownership (?)
    - Contract Owner can Update parameters at anytime on request.
    - Contract Owner can request the money (Emergency Mode)

5. Extras
    - Donation percentage to RET Team per transaction or optional disable (fixable)
    - Interface with metrics on request
    - keep it simple and stupid.

```plantuml
@startuml
participant "Contract Owner" as CO
participant "Smart Contract" as SC
participant "DAO" as TD
participant "DeFi" as LP
participant "Relative" as RL
activate CO
CO->SC: Deploy the smart contract
activate SC
group Sets inputs configs
  CO->SC: Current Age
  CO->SC: Retirement Age
  CO->SC: Define retirement pay day
  CO->SC: Relative's wallets in case there\nis no interaction with the contract
  CO->SC: Percentages of distribution by\nthe Relative's wallets
  CO->SC: Keep Alive time. Must set a limit time in\norder to let relatives request heritage
end
loop Extends "I am alive"
  alt if not Retirement age reached
    CO->SC: Deposits for Retirment
    activate SC
    SC->TD: Optional % donation to the Team
    activate TD
    TD-->SC:
    deactivate TD
    SC->SC: Update Keep Alive date
    activate SC
    deactivate SC
    SC-->CO:
    deactivate SC
  else if Retirement age and pay day reached
    CO->SC: Request Retirement payment
    activate SC
    SC->SC: Update Keep Alive date
    activate SC
    deactivate SC 
    SC->CO: Gets gradual retirment payment
    deactivate SC
  end
  RL->SC: Can Request Information
  activate RL
  activate SC
  SC-->RL: (Alive data for example)
  deactivate SC
  deactivate RL
  LP->LP: Generates % for\nthe Offsetter
  activate LP
  deactivate LP
end
destroy CO
RL->SC: Can request heritage distribution in\ncase contract owner Keep Alive ends
activate RL
activate SC
SC-->RL: Gets the percentage
deactivate SC
deactivate RL

@enduml
```
Img 2. REST Sequence Diagram.

ToDo: Describe Img2 diagram.

### Tokenomics


## Implementation

Not yet implemented.


## References

[1] P1R0; Bleecker,“DCF DAO Phase0”, https://hackmd.io/A9LNZFTlQsC32gqDw1C7EQ, 01-2023.

## Copyright
```
Copyright (C)  Hernández García Alvaro, Huerta Valdez Omar Octavio, Perez Negrón Rocha David Eugenio, Mr. Bigotes.  
Permission is granted to copy, distribute and/or modify this document
under the terms of the GNU Free Documentation License, Version 1.3
or any later version published by the Free Software Foundation;
with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.
A copy of the license is included in the section entitled "GNU
Free Documentation License". 
```