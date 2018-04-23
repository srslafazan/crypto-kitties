import 'normalize.css'
import 'semantic-ui-css/semantic.min.css'

import React from 'react'
import * as log from 'loglevel'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { render } from 'react-dom'

import KittyCoreABI from '@/contracts/KittyCore/ABI.json'

import Home from '@/components/Home.js'
import Task from '@/components/Task.js'
import Header from '@/components/Header.js'
import Footer from '@/components/Footer.js'


const logLevel = process.env.NODE_ENV === 'development' ? log.levels.DEBUG : log.levels.INFO

log.setLevel(logLevel, true)

if (window.web3 && false) {
  log.info("Using web3 detected from external source like Metamask")
} else {
  const NODE_FQDN = "http://localhost:8545" || "https://alpha-test.token.store"
  log.info(`No web3 detected. Falling back to ${NODE_FQDN}.`)
  log.info("You should remove this fallback when you deploy live, as it's inherently insecure.")
  log.info("Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
  const Web3 = require('web3')
  window.web3 = new Web3(new Web3.providers.HttpProvider(NODE_FQDN))
}
console.dir(web3)
const KittieCoreContractAddress = "0x06012c8cf97bead5deae237070f9587f8e7a266d"
// const KittieCoreContract = web3.eth.contract(KittyCoreABI)
const KittieCoreContractInstance = new web3.eth.Contract(KittyCoreABI, KittieCoreContractAddress)
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
        <Route path="/task" component={Task} />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

render(<App />, document.querySelector('#app'))
