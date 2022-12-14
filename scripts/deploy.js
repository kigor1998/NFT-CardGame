var fs = require("fs");

async function main() {
  const MyContact = await ethers.getContractFactory("WileCard");
  const myContact = await MyContact.deploy();

  console.log("My Contract deployed to : ", myContact.address);
  await myContact.mintNFT();
  const owner = await myContact.Owner();
  var obj = {
    address: myContact.address,
    owner: owner
  };
  await fs.writeFileSync("deploy.json", JSON.stringify(obj), function (err) {
    if (err) throw err;
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
