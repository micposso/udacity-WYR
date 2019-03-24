import React, { Component } from "react";
import { Menu, Label } from 'semantic-ui-react'

class Navigation extends Component {
  state = {}
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
      <Menu.Item
        color='orange'
        name='Home'
        active={activeItem === 'Home'}
        content='Home'
        onClick={this.handleItemClick}
      />

      <Menu.Item
        color='orange'
        name='New Question'
        active={activeItem === 'NewQuestion'}
        content='New Question'
        onClick={this.handleItemClick}
      />

      <Menu.Item
        color='orange'
        name='Leader Board'
        active={activeItem === 'LeaderBoard'}
        content='Leader Board'
        onClick={this.handleItemClick}
      />

      <Menu.Item>
        <Label color='orange' as='a' image>
          <img src='/images/avatar/small/joe.jpg' />
          Joe Smith
        </Label>
        <Label color='green' as='a'>
         Log Out
        </Label>
      </Menu.Item>
    </Menu>
    )
  }
}

export default Navigation
