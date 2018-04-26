import React, { Component } from 'react'
import axios from 'axios'
import * as log from 'loglevel'
import localStorageDB from 'localstoragedb'
import { Container, Divider, Button, Input } from "semantic-ui-react"

import KittyGrid from '@/components/KittyGrid'

const getKittiesUrl = (ownerWalletAddress) => `https://api.cryptokitties.co/v2/kitties?owner_wallet_address=${ownerWalletAddress}&parents=false&authenticated=true&include=sale,sire,other&orderBy=id&orderDirection=desc`

class Home extends Component {
	
	constructor(props) {
		super(props)
		this.state = {
			userAddress: localStorage.getItem('userAddress') || '',
			userKitties: [],
		}

		this.updateUserAddress = this.updateUserAddress.bind(this)
		this.getUserInfo = this.getUserInfo.bind(this)
	}
	
	componentDidMount() {
		if (this.state.userAddress) {
			this.getUserInfo()
		}
	}

	getTokensOfOwner(address, cb = () => {}) {
		const { userAddress } = this.state
		if (!userAddress) return
		
		axios.get(getKittiesUrl(this.state.userAddress)).then((res) => {
			log.info('kitties response: ', res)
			this.setState({ userKitties: res.data.kitties })
		})
		.catch((err) => {
			log.error(err)
		})
	}

	getBalanceOfAddress(address, cb = () => {}) {
		window.contracts.KittieCore.instance.methods.balanceOf(address).call((err, res) => {
			this.setState({ balance: res || 'Not provided' })
			return cb(err, res)
		})
	}

	updateUserAddress() {
		const userAddress = this.userAddressInput.inputRef.value
		log.info('Setting user address: ', userAddress)
		if (!userAddress) return

		localStorage.setItem('userAddress', userAddress)
		// TODO - move to database
		window.lib = new localStorageDB(userAddress, localStorage)
		if (lib.isNew()) {
			lib.createTable("transactions", ["transactionHash", "to", "status"])
			lib.commit()
		}

		this.setState({ userAddress }, () => {
			this.getUserInfo()
		})
	}

	getUserInfo() {
		this.getTokensOfOwner(this.state.userAddress)
		this.getBalanceOfAddress(this.state.userAddress)
	}
	
	render() {
		return (
			<Container>
				
				<p>User ETH address: {this.state.userAddress}</p>
				<p>Address Balance: {this.state.balance}</p>

				<Input ref={(component) => {this.userAddressInput = component}} />
				<Button onClick={this.updateUserAddress}>Update Address</Button>
				
				<Divider hidden />
				
				<KittyGrid kitties={this.state.userKitties} />

			</Container>
		)
	}
}

export default Home
