import React, { Component } from 'react'
import * as log from 'loglevel'
import localStorageDB from 'localstoragedb'
import { Button, Card, Image, Input } from 'semantic-ui-react'

class Kitty extends Component {

  constructor(props) {
    super(props)

    this.transferKitty = this.transferKitty.bind(this)
  }

  transferKitty() {
    const newOwnerAddress = this.transferAddressInput.inputRef.value
    const userAddress = localStorage.getItem('userAddress')
    const kittyId = this.props.kitty.id
    if (!newOwnerAddress) return
    
    window.web3ContractInstance.transfer(newOwnerAddress, kittyId, {
      gas: 70000
    }, (err, receipt) => {
      if (err) {
        return log.error(err)
      }
      log.info(receipt)
      if (!window.lib) {
        window.lib = new localStorageDB(userAddress, localStorage)
      }
      lib.insert("transactions", {
        to: newOwnerAddress,
        transactionHash: receipt.transactionHash,
        status: receipt.status,
      })
      lib.commit()
    })
  }

  render() {
    const { kitty } = this.props
    return (
      <div>
        <Card>
          <Card.Content>
            <Image floated='right' size='small' src={kitty.image_url_cdn} />
            <Card.Header>
              {kitty.name}
            </Card.Header>
            <Card.Meta>
              {kitty.id}
            </Card.Meta>
            <Card.Description>
              Generation {kitty.generation}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Input size="mini" label="New Owner" ref={(component) => {this.transferAddressInput = component}} />
            <Button size="mini" basic color='green' onClick={this.transferKitty}>Transfer</Button>
          </Card.Content>
        </Card>
      </div>
    )
  }
}

export default Kitty
