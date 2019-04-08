import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Dropdown
} from "semantic-ui-react";
import { GiPerspectiveDiceSixFacesRandom as Dice } from "react-icons/gi";

class LogIn extends Component {
  render() {
    console.log("Component props", this.props);
    return (
      <div className="login-form">
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalalign="middle"
        >
          <Grid.Column>
            <Form size="large">
              <Segment stacked>
                <div>
                  <Dice size={60} color="orange" />
                </div>
                <Header as="h2" color="orange" textAlign="center">
                  The Questions Game
                </Header>
                <Dropdown
                  placeholder="Select Friend"
                  fluid
                  selection
                  options={this.props.users}
                />
                <Button color="orange" fluid size="large">
                  Login
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps({ usersReducer, authedUsersReducer }) {
  var usersArray = [];
  Object.entries(usersReducer).forEach(([key, value]) =>
    usersArray.push({
      key: value.id,
      text: value.name,
      value: value.name,
      image: value.avatar
    })
  );
  return {
    users: usersArray,
    authedUsersReducer
  };
}

export default connect(mapStateToProps)(LogIn);
