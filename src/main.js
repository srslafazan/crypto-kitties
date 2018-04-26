import 'normalize.css'
import 'semantic-ui-css/semantic.min.css'

import React from 'react'
import * as log from 'loglevel'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { render } from 'react-dom'

import KittyCoreABI from '@/contracts/KittyCore/ABI.json'

import Home from '@/components/Home.js'
import Transactions from '@/components/Transactions.js'
import Task from '@/components/Task.js'
import Header from '@/components/Header.js'
import Footer from '@/components/Footer.js'


const logLevel = process.env.NODE_ENV === 'development' ? log.levels.DEBUG : log.levels.INFO

log.setLevel(logLevel, true)

if (window.web3 && web3.currentProvider) {
  log.info("Using web3 detected from external source (like Metamask) for signing transactions.")
  const address = "0x06012c8cf97bead5deae237070f9587f8e7a266d"
  const MyContract = web3.eth.contract(KittyCoreABI)
  window.web3ContractInstance = MyContract.at(address)
}

const NODE_FQDN = "https://alpha-test.token.store" || "http://localhost:8545"
log.info(`Using ${NODE_FQDN} as web3 provider.`)
const Web3 = require('web3')
window.mainWeb3 = new Web3(new Web3.providers.HttpProvider(NODE_FQDN))

console.dir(window.web3)
console.dir(window.mainWeb3)

const KittieCoreContractAddress = "0x06012c8cf97bead5deae237070f9587f8e7a266d"
// const KittieCoreContract = web3.eth.contract(KittyCoreABI)
const KittieCoreContractInstance = new mainWeb3.eth.Contract(KittyCoreABI, KittieCoreContractAddress)
// const KittieCoreContractInstance = KittieCoreContract.at(KittieCoreContractAddress)

// TODO - use a (redux) store
window.contracts = {
  KittieCore: {
    address: KittieCoreContractAddress,
    // contract: KittieCoreContract,
    instance: KittieCoreContractInstance, 
  },
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/transactions" component={Transactions} />
        <Route path="/task" component={Task} />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

render(<App />, document.querySelector('#app'))
