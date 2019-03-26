import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Image, Header, Divider, Segment, Button } from "semantic-ui-react";


class LeaderBoard extends Component {
  render() {
    return (
      <Segment>
        <Grid>
          <Grid.Column width={4}>
            <Image src='../assets/square-image.png' size='large' circular />
          </Grid.Column>
          <Grid.Column width={8} textAlign="left">
            <Header as='h3'>Jenny Hess asks</Header>
            <Divider />
            <p>Question goes here</p>
            <Button fluid color='orange'>View Poll</Button>
          </Grid.Column>
          <Grid.Column width={4}>
            third column
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }
}

export default LeaderBoard