import React, { Component } from "react";
import { Menu } from 'semantic-ui-react'

const items = [
  { key: 'home', active: true, name: 'Home' },
  { key: 'newQuestion', name: 'New Question' },
  { key: 'LeaderBoard', name: 'Leader Board' },
  { key: 'LogOut', name: 'Logout' },
]

const Navigation = () => <Menu items={items} />


export default Navigation
