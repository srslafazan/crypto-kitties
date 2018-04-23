import React from 'react'

import { Button, Card, Image } from 'semantic-ui-react'

function Kitty(props) {
    return (
      <div>
        <Card>
          <Card.Content>
            <Image floated='right' size='small' src='http://icons.iconarchive.com/icons/iconka/meow/256/cat-purr-icon.png' />
            <Card.Header>
              Kitty Name
            </Card.Header>
            <Card.Meta>
              Kitty Meta
            </Card.Meta>
            <Card.Description>
              Kitty Description
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            Kitty Content Extra
            <div className='ui two buttons'>
              <Button basic color='green'>Transfer</Button>
              {/* <Button basic color='red'>Decline</Button> */}
            </div>
          </Card.Content>
        </Card>
      </div>
    )
}

export default Kitty
