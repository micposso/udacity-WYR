import React, { Component } from "react";
import { connect } from "react-redux";
import { Tab } from "semantic-ui-react";
import UserModule from "./UserModule";

const panes = [
  {
    menuItem: "Unanswered Questions",
    render: () => (
      <Tab.Pane>
        <UserModule />
      </Tab.Pane>
    )
  },
  {
    menuItem: "Answered Questions",
    render: () => (
      <Tab.Pane>
        <UserModule />
      </Tab.Pane>
    )
  }
];

class DashBoard extends Component {
  render() {
    return <Tab panes={panes} className="dashboard-tabs" />;
  }
}

function mapStateToProps({ usersReducer, questionsReducer }) {
  return {};
}

export default connect(mapStateToProps)(DashBoard);
