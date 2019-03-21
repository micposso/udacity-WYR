import React, { Component } from "react";
import { connect } from "react-redux";
import { Tab } from 'semantic-ui-react'


const panes = [
  { menuItem: 'Tab 1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
  { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
]

class DashBoard extends Component {
  render() {
    return (
      <Tab panes={panes} />
    )
  }
}

function mapStateToProps({ usersReducer, questionsReducer}) {
  return {

  }
}

export default connect(mapStateToProps)(DashBoard)
