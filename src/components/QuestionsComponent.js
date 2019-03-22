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
  Checkbox
} from "semantic-ui-react";

class Questions extends Component {
  state = {}
  handleChange = (e, { value }) => this.setState({ value })

  render() {
    return (
      <Segment>
        <Grid>
          <Grid.Column width={4}>
            <Image src="../assets/square-image.png" size="large" circular />
          </Grid.Column>
          <Grid.Column width={12} textAlign="left">
            <Header as="h3">Jenny Hess asks</Header>
            <Divider />
            <Segment>

            <Form>
              <Form.Field>
                <Checkbox
                  radio
                  label="Question one"
                  name="checkboxRadioGroup"
                  value="this"
                  checked={this.state.value === "this"}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Checkbox
                  radio
                  label="Question two"
                  name="checkboxRadioGroup"
                  value="that"
                  checked={this.state.value === "that"}
                  onChange={this.handleChange}
                />
              </Form.Field>
            </Form>
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
