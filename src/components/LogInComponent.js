import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Dropdown
} from "semantic-ui-react";

const friendOptions = [
  {
    key: "Jenny Hess",
    text: "Jenny Hess",
    value: "Jenny Hess",
    image: { avatar: true, src: "/images/avatar/small/jenny.jpg" }
  }
];

const styles = {
  layout: {
    justify: 'center'
  },
  sizes: {
    width: 450
  },
  fontsizes: {},
  colors: {},
  spacing: {
    formElements: 5
  }
};

class LogIn extends Component {
  render() {
    return (
      <Grid.Column style={{ maxWidth: styles.sizes.width, justifyContent: styles.layout.justify }}>
        <Form>
          <Segment stacked>
            <Header as="h2" color="orange" textAlign="center">
              Would you Rather?
            </Header>
            <Dropdown
              style={{ marginBottom: `${styles.spacing.formElements}%` }}
              placeholder="Select Friend"
              fluid
              selection
              options={friendOptions}
            />
            <Button color="orange" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    );
  }
}

export default LogIn;

//make it a simple component
