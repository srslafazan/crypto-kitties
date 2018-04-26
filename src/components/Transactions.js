import React, { Component } from 'react'
import localStorageDB from 'localstoragedb'
import * as log from 'loglevel'

import { Container, Table } from 'semantic-ui-react'

class Transactions extends Component {
	constructor(props) {
		super(props)
		if (!window.lib) {
			window.lib = new localStorageDB(localStorage.getItem("userAddress"), localStorage)
		}
		
		let transactions = []

		try {
			transactions = lib.queryAll("transactions")
		} catch (e) {
			log.warn('Transactions are not available because the table does not exist.')
			log.warn(e)
		}

		this.state = {
			transactions,
		}
	}

	render() {
		return this.state.transactions.length ? (
			<Container>
				<Table>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell>To</Table.HeaderCell>
							<Table.HeaderCell>Transaction Hash</Table.HeaderCell>
							<Table.HeaderCell>Status</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{
							this.state.transactions.map((tx, index) => (
								<Table.Row key={index}>
									<Table.Cell>{tx.to}</Table.Cell>
									<Table.Cell>{tx.transactionHash}</Table.Cell>
									<Table.Cell>{tx.status}></Table.Cell>
								</Table.Row>
							))
						}
					</Table.Body>
				</Table>
			</Container>
		) : <Container>No Transactions are available</Container>
	}
}

export default Transactions
