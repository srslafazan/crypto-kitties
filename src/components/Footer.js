import React from 'react'
import { Link } from 'react-router-dom'
import { Header, Container, Divider, List } from "semantic-ui-react";
export default function(props) {
	return (
		<Container>
			<Divider hidden />
			<List>
				<List.Item><Link to="/">Home</Link></List.Item>
				<List.Item><Link to="/task">Task</Link></List.Item>
				<List.Item><a href="https://etherscan.io/address/0x06012c8cf97bead5deae237070f9587f8e7a266d" target="_blank">KittieCore Contract</a></List.Item>
				<List.Item>Kitty Icon by <a href="http://www.iconka.com" target="_blank">iconka</a></List.Item>
			</List>
		</Container>
	)
}