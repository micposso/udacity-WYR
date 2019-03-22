import React, { Component } from "react";
import { connect } from "react-redux";
import { Segment, Image, Grid, Header, Divider, Button } from 'semantic-ui-react'

const UserModule = () => (
  <Segment>
    <Grid>
      <Grid.Column width={4}>
        <Image src='../assets/square-image.png' size='large' circular />
      </Grid.Column>
      <Grid.Column width={12} textAlign="left">
          <Header as='h3'>Jenny Hess asks</Header>
          <Divider />
          <p>Question goes here</p>
          <Button fluid color='orange'>View Poll</Button>
      </Grid.Column>
    </Grid>
  </Segment>
)

function mapStateToProps({ usersReducer, questionsReducer }) {
  return {};
}

export default connect()(UserModule)