import { ethers } from "hardhat";
import { RET__factory } from "../typechain-types";
import * as dotenv from 'dotenv';
import { Signer } from "ethers";
dotenv.config();

const currentAge = 35;
const retirementAge = 40; 
const distributionPeriod = 520; 
const iAmAlive = 4;
const RELATIVES = [ "0xDDD93CEC5843F471EB2B8B2886B2BE32555B5209",
  "0xE391965C19195A6DA63BAB55307C54C09FE6BDDF",
  "0xA034C7C519065500075CDF2F17749CC4DE106C9B",
  "0x343D684F010DCC09D957977BBF1E49B7EC6BF57B",
  "0x898D9DF056774AA543A4CA013BABE9C6981C0A74"];
const PERCENTAGES = [10, 10, 10, 10, 10];

async function main() {
  
  const provider = new ethers.providers.InfuraProvider(
      "maticmum",
      process.env.INFURA_API_KEY
  );

  console.log({ provider });
  const pkey = process.env.PRIVATE_KEY;
  console.log({ pkey });
  const lastBlock = await provider.getBlock("latest");
  console.log({ lastBlock });
  const wallet = new ethers.Wallet(`${pkey}`);
  const signer = wallet.connect(provider);


  console.log("Deploying RET contract");
  //console.log("Proposals: ");
  //PROPOSALS.forEach((element, index) => {
  //  console.log(`Proposal N. ${index + 1}: ${element}`);
  //});
  const retFactory = await new RET__factory(signer);
  const retContract = await retFactory.deploy(
      currentAge,
      retirementAge,
      distributionPeriod,
      RELATIVES,
      PERCENTAGES,
      iAmAlive,
    );
  await retContract.deployTransaction.wait();
  console.log(
    `the RET contract was deployed at the address ${retContract.address}` 
  );
  // await ballotContract.deployed();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
