import React from 'react'
import { Card, Container, Header } from 'semantic-ui-react'

import Kitty from '@/components/Kitty'

function KittyGrid(props) {
    return (
        <Container>
            <Header>My Kitties</Header>
            <Card.Group stackable columns={2}>
                {props.kitties.map((kitty, idx) => (
                    <Kitty key={idx} kitty={kitty} />
                ))}
            </Card.Group>
        </Container>
    )
}

export default KittyGrid
