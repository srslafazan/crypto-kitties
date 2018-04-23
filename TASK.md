Stack:

React for the frontend, Node for backend

Web3.js to read info from blockchain (use MetaMask’s built in node for frontend, our node for backend)

The intro:

Non-fungible tokens (NFTs) are objects on blockchain that exist in a single copy and can be transferred from an owner to another account. ERC721 standard (interface) for NFTs regulates those operations.
Crypto-kitties are a game that is built around this standard. A user can own, buy and sell multiple tokens that represent kittens on Ethereum blockchain. Every kitten has a unique id that is used to transfer and render the kitten.

The task:

We need to create our own kitten browser that is taking a provided user address as input. With this address our browser should get the list of kitten tokens owned by this user (see tokensOfOwner method on a contract address below as a starting point) and show them as a simple list. This can be done via web3 interface connected to our node.

1. Take provided user address
2. Get list of kitten tokens owned by this user, show as list

We want to implement a gifting feature for each kitten that would take another user address and call transfer(newUser, kittenId) on the kitties smart contract (address below). Install MetaMask plugin and update the code to a) prefill user address from it via connected web3 instance, b) sign gifting transaction using connected MetaMask account.

3. Transfer kitten to another user address
4.
	a) Prefill current user address from web3
	b) sign gifting transaction with MetaMask account

We need to track the progress of the gifting transaction sent and show transaction history for this account. For that we need to a) store all gifting transactions in a trivial db, have pending/successful/failed status, b) listen to blockchain events (using our node now) for those transactions in a background process, update status, c) when the status is updated, propagate the update to the UI.

5. Track progress of gifting transaction
6. Show all transactions (Store all gifting transactions in a db)
	- tx
	- status: pending / successful / failed
7. Listen to blockchain events using our node and update list


Data:

Example user address (owns some kittens): 0x081b834147d44b0740b668942cd28ae2963f3b1d
Crypto-kitties token contract address: 0x06012c8cf97bead5deae237070f9587f8e7a266d
Ethereum node for backend operations: https://alpha-test.token.store (use RPC to talk to the node, see ZeroClientProvider for example)

Reading materials:

We recommend spending 15 minutes playing CryptoKitties. Send us your Ethereum address so we can send you some ether to play with.

A very comprehensive tutorial on using smart contracts. You need only the section 3 really, “create the frontend application”, as you don’t need to be deploying any contracts or dealing with IPFS. It’s in React and also connects with MetaMask. Web3 on backend works very similarly but you will need to connect to a different Ethereum node (as you will not have MetaMask there) https://medium.com/@merunasgrincalaitis/the-ultimate-end-to-end-tutorial-to-create-and-deploy-a-fully-descentralized-dapp-in-ethereum-18f0cf6d7e0e. Note that the blog post has the error: it sets this.web3 but continues to use web3 (which only works because MetaMask is still providing the web3 interface).

Useful links:

Read data from crypto-kitties token contract via the UI (for example you can check balanceOf and tokensOfOwner using the user address there, although the latter doesn’t seem to work from their UI): https://etherscan.io/address/0x06012c8cf97bead5deae237070f9587f8e7a266d#readContract
Contract ABI (that will be needed for interacting with it via web3) can be found there as well, see source tab, one of the boxes
ERC721 contract for the kitties (may be better to get from the link above instead, see contract source, as it seems there’re some differences and this is not the official repo): https://github.com/axiomzen/cryptokitties-bounty/blob/master/contracts/KittyOwnership.sol

Deliverables:

Please create a public github repo with all the code
Please make sure you have a working url for the demo

Don’t hesitate to ask questions, the fastest response is via Telegram: vernon99 - but you can also comment here or in email. I am open to invest more time and answer your questions to make you succeed with the task. Also, feel free to come to our office (6th and Market) and work with us on it!
