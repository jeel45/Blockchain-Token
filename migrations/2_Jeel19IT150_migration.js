const Jeel19IT150 = artifacts.require("./Jeel19IT150.sol");
const Jeel19IT150TokenSale = artifacts.require("./Jeel19IT150TokenSale.sol");
const tokenPrice = 1000000000000000; // in wei
module.exports = function (deployer) {
  deployer.deploy(Jeel19IT150,1000000).then(()=>{
    return deployer.deploy(Jeel19IT150TokenSale,Jeel19IT150.address,tokenPrice);
  });
};