
const hre = require("hardhat");

async function main() {
  const ShoegazeCoin = await hre.ethers.deployContract("ShoegazeCoin");
  await ShoegazeCoin.waitForDeployment();

  console.log(
    `deployed to ${ShoegazeCoin.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
