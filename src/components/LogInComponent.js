import React, { Component } from "react";
import { Button, Form, Grid, Header, Image, Segment, Dropdown } from "semantic-ui-react";

const styles = {
  layout: {},
  width: {
    mainContainer: 450,
    column: 450
  },
  height: {
    mainContainer: 400
  },
  spacing: {
    dropDown: 5
  }
};

const userOptions = [
  {
    key: "Jenny Hess",
    text: "Jenny Hess",
    value: "Jenny Hess",
    image: { avatar: true, src: "/images/avatar/small/jenny.jpg" }
  }
];

const LogIn = () => (
  <div className='login-form'>
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Form size='large'>
          <Segment stacked>
            <Header as='h2' color='teal' textAlign='center'>
              <Image src='/logo.png' />The Questions Game
            </Header>
            <Dropdown
              placeholder='Select Friend'
              fluid
              selection
              options={userOptions}
              style={{marginBottom: `${styles.spacing.dropDown}%`}}
            />
            <Button color='teal' fluid size='large'>
              Login
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  </div>
);

export default LogIn;
