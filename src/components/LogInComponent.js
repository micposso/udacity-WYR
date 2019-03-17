import React from 'react';
import { Button, Form, Grid, Header, Image, Segment, Dropdown } from "semantic-ui-react";
import { GiPerspectiveDiceSixFacesRandom  } from "react-icons/gi";


const styles = {
  widths: {
    mainContainer: 450,
    icon: 200
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
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: `${styles.widths.mainContainer}` }}>
        <Form size='large'>
          <Segment stacked>
            <div><GiPerspectiveDiceSixFacesRandom size={60} color="orange" /></div>
            <Header as='h2' color='orange' textAlign='center'>
              The Questions Game
            </Header>
            <Dropdown
              placeholder='Select Friend'
              fluid
              selection
              options={userOptions}
              style={{marginBottom: `${styles.spacing.dropDown}%`}}
            />
            <Button color='orange' fluid size='large'>
              Login
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  </div>
);

export default LogIn;
