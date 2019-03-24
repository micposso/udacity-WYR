import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Grid,
  Segment,
  Header,
  Divider,
  Image,
  Label
} from "semantic-ui-react";
import { GiTrophyCup as Trophy } from "react-icons/gi";

const colors = [
  'red',
]

class LeaderBoard extends Component {
  render() {
    return (
      <Segment>
        <Grid>
          <Grid.Column width={4}>
              <Label circular color="green">
                <Trophy/>
              </Label>
            <Image src="../assets/square-image.png" size="large" circular />
          </Grid.Column>
          <Grid.Column width={8} textAlign="left">
            <Header as="h3">Jenny Hess</Header>
            <Divider />
            <p>Answered questions [Number]</p>
            <Divider />
            <p>Created questions [Number]</p>
          </Grid.Column>
          <Grid.Column width={4}>
            <Segment padded>
              <Label color="green" attached="top">Score</Label>
              <p>[number]</p>
            </Segment>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

export default LeaderBoard;
