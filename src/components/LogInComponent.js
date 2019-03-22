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
import { GiPerspectiveDiceSixFacesRandom as Icon } from "react-icons/gi";

const userOptions = [
  {
    value: "Jenny Hess",
    text: "Jenny Hess",
    image: { avatar: true, src: "/images/avatar/small/jenny.jpg" }
  }
];

class LogIn extends Component {
  render() {
    console.log("One part of state", this.props);
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
          verticalAlign="middle"
        >
          <Grid.Column>
            <Form size="large">
              <Segment stacked>
                <div>
                  <Icon size={60} color="orange" />
                </div>
                <Header as="h2" color="orange" textAlign="center">
                  The Questions Game
                </Header>
                <Dropdown
                  placeholder="Select Friend"
                  fluid
                  selection
                  options={userOptions}
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

//get user, userID, name and avartURL and push it into an array that you will pass to the Dropdown component as an options value.

//problem the property users of the state it not getting through the mapStateToProps function
function mapStateToProps({ usersReducer }) {
  return {};
}

export default connect(mapStateToProps)(LogIn);
