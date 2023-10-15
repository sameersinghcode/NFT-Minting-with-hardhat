# NFT Minting with Hardhat
This project provides a simple and effective way of minting NFTs using Hardhat.

## Requirements
- Node.js v14.15.1 or later
- Hardhat v2.0.11
- Ethereum wallet like Metamask

## Installation
Clone the project:
git clone https://github.com/sameersinghcode/NFT-Minting-with-hardhat.git

Install dependencies:
npm install

Set up your .env file with your Ethereum wallet private key and Infura project ID:
PRIVATE_KEY=your-private-key INFURA_PROJECT_ID=your-infura-project-id


## Usage
Compile the contracts:
npx hardhat compile

Run the local hardhat network:
npx hardhat node

Deploy the contracts:
npx hardhat run scripts/deploy.js --network localhost


## License and Author Info
This project is available under the MIT license. See the LICENSE file for more info.
Author: Sameer Singh
