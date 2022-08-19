const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();

    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy({value: hre.ethers.utils.parseEther("0.1"),
    });
    await waveContract.deployed();

    console.log("Contract addy:", waveContract.address);
   // console.log("Contract deployed by:", owner.address);

//lets obtain the contract balance 
let contractBalance = await hre.ethers.provider.getBalance(
    waveContract.address
);
    console.log("Contract balance:", hre.ethers.utils.formatEther(contractBalance));
    /**send 2  waves */
    let waveTxn = await waveContract.wave("A message");
    await waveTxn.wait();

    const waveTxn2 = await waveContract.wave("The second wave");
    await waveTxn2.wait(); 
 /**
  * Get contractBalance to see what happened
  */
contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
    console.log("contract balance:", hre.ethers.utils.formatEther(contractBalance));

    let allWaves = await waveContract.getAllWaves();
    console.log(allWaves);

};

    let waveCount;
    waveCount = await waveContract.getTotalWaves();
   console.log(waveCount.toNumber());

    /**
     * *Lets send a few waves 
        * */
    let waveTxn = await waveContract.wave("A message!");
    await waveTxn.wait();// Wait for the transaction to be mined 

    const [_, randomPerson] = await hre.ethers.getSigners(); 
   // waveCount = await waveContract.getTotalWaves();
    waveTxn = await waveContract.connect(randomPerson).wave("Another message");
    await waveTxn.wait();//wait for the transaction to be mined 

    let allWaves = await waveContract.getAllWaves();
    console.log(allWaves);

   // waveCount = await waveContract.getTotalWaves();
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);//Exit Node process without error 
    } catch (error) {
        console.log(error); 
        process.exit(1);//Exit Node process while indicating 'uncaught Fatal Exception'
    }
};
runMain();

