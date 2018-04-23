import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Header, Divider } from 'semantic-ui-react'

const style = {
	margin: '20px 0',
}

export default function(props) {
	return (
		<Container style={style}>
			<Header><Link to="/">Crypto Kitties</Link></Header>
			<Link to="/task">Kitties</Link>
			<span> | </span>
			<Link to="/task">Task</Link>
			<Divider hidden />
		</Container>
	)
}
