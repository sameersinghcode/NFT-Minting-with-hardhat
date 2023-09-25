const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("GameItem", function () {
  let gameItem;
  let owner;
  let addr1;
  let addr2;
  let addrs;

  beforeEach(async function () {
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    const GameItem = await ethers.getContractFactory("GameItem");
    gameItem = await GameItem.deploy();
    await gameItem.waitForDeployment();
  });

  describe("awardItem", function () {
    it("should award a new item to the player", async function () {
      const tokenURI = "https://example.com/token/1";
      await gameItem.awardItem(addr1.address, tokenURI);

      const balance = await gameItem.balanceOf(addr1.address);
      expect(balance).to.equal(1);

      const tokenURIStored = await gameItem.tokenURI(0);
      expect(tokenURIStored).to.equal(tokenURI);
    });
  });
});