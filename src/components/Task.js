import React from 'react'

import { Container, List } from 'semantic-ui-react'

function Task() {
	return (
		<Container>
			<List ordered>
				<List.Item>Take provided user address</List.Item>
				<List.Item>Get list of kitten tokens owned by this user, show as list</List.Item>
				<List.Item>
					Transfer kitten to another user address
					<List.List>
						<List.Item>Prefill current user address from web3</List.Item>
						<List.Item>Sign gifting transaction with MetaMask account</List.Item>
					</List.List>
				</List.Item>
				<List.Item>Track progress of gifting transaction</List.Item>
				<List.Item>
					Show all transactions (Store all gifting transactions in a db)
					<List.List>
						<List.Item>transaction</List.Item>
						<List.Item>status: pending / successful / failed</List.Item>
					</List.List>
				</List.Item>
				<List.Item>Listen to blockchain events using our node and update list</List.Item>
			</List>
		</Container>
	)
}

export default Task
