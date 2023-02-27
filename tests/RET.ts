import { expect } from "chai";
import { ethers } from "hardhat";
import { RET } from "../typechain-types";

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

describe("RET", function () {
  let RETContract: RET;

  beforeEach(async function () {
    const RETFactory = await ethers.getContractFactory("RET");
    RETContract = await RETFactory.deploy(
      currentAge,
      retirementAge,
      distributionPeriod,
      RELATIVES,
      PERCENTAGES,
      iAmAlive,
    );
    await RETContract.deployed();
  });

  describe("when the contract is deployed", function () {
    //it("has the provided RELATIVES", async function () {
    //  for (let index = 0; index < RELATIVES.length; index++) {
    //    const relative = await RETContract.relatives(index);
    //    expect(ethers.utils.getAddress(relative)).to.eq(RELATIVES[index]);
    //  }
    //});
    it("has the provided PERCENTAGES", async function () {
      for (let index = 0; index < PERCENTAGES.length; index++) {
        const percentage = await RETContract.percentages(await RETContract.relatives(index));
        expect(percentage).to.eq(PERCENTAGES[index]);
      }
    });
    //it("gets ethereum", async function () {
    //  for (let index = 0; index < PERCENTAGES.length; index++) {
    //    const percentage = await RETContract.percentages(await RETContract.relatives(index));
    //    expect(percentage).to.eq(PERCENTAGES[index]);
    //  }
    //});
  });
});

