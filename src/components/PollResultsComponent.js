import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Segment,
  Image,
  Grid,
  Header,
  Divider,
  Button,
  Form,
  Checkbox,
  Progress
} from "semantic-ui-react";

class Questions extends Component {
  state = {};
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <Segment>
        <Grid>
          <Grid.Column width={4}>
            <Image src="../assets/square-image.png" size="large" circular />
          </Grid.Column>
          <Grid.Column width={12} textAlign="left">
            <Header as="h3">Results</Header>
            <Divider />
            <Segment>
              <p>Question One</p>
              <Progress color="green" percent={this.state.percent} indicating />
            </Segment>
            <Segment>
              <p>Question Two</p>
              <Progress color="green" percent={this.state.percent} indicating />
            </Segment>
            <Button fluid color="orange">
              Submit
            </Button>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

function mapStateToProps({ usersReducer, questionsReducer }) {
  return {};
}

export default connect(mapStateToProps)(Questions);
