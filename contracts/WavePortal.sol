//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import 'hardhat/console.sol';

contract WavePortal {
    uint256 totalWaves;

    constructor() {
        console.log("Yo yo, I am a contract and I am smart");
    }

    function wave() public {
        totalWaves += 1;
        console.log("%s has waved!", msg.sender);
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }
}

//interacting with the wallet
const wave = async () => {
    try {
        const { ethereum } = window; 

        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const WavePortalContract = new ethers.Contract(contractAddress, contractABI, signer);

    let count = await WavePortalContract.getTotalWaves();
    console.log("Retrieved total wave count...," count.toNumber());
        } else {
            console.log("Ethereum object doesnt exist!");
        }
    } catch (error) {
        console.log(error);
    }
}














