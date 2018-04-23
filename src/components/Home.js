import React, { Component } from 'react'
import { Container, Divider, Button, Input } from "semantic-ui-react";

import KittyGrid from '@/components/KittyGrid'

class Home extends Component {
	
	constructor(props) {
		super(props)
		this.state = {
			userAddress: '',
			tokensOfOwner: [],
		}
	}
	
	componentDidMount() {
		if (this.state.userAddress) {
			this.getTokensOfOwner(this.state.userAddress)
			this.getBalanceOfAddress(this.state.userAddress)
		}
	}

	getTokensOfOwner(address, cb = () => {}) {
		window.contracts.KittieCore.instance.methods.tokensOfOwner(address).call((err, res) => {
			console.log(err, res)
			if (!res) {
				res = [getKitty]
			}
			this.setState({ tokensOfOwner: res })
			return cb(err, res)
		})
	}

	getBalanceOfAddress(address, cb = () => {}) {
		window.contracts.KittieCore.instance.methods.balanceOf(address).call((err, res) => {
			this.setState({ balance: res || 'Not provided' })
			return cb(err, res)
		})
	}
	
	render() {
		return (
			<Container>
				
				<p>User ETH address: {this.state.userAddress}</p>
				<p>Address Balance: {this.state.balance}</p>

				<Input ref={(component) => {this.userAddressInput = component}} />
				<Button onClick={() => {
					const userAddress = this.userAddressInput.inputRef.value
					if (!userAddress) return
					this.setState({ userAddress })
				}}>Update Address</Button>
				
				<Divider hidden />
				
				<KittyGrid kitties={this.state.tokensOfOwner} />

			</Container>
		)
	}
}

export default Home
