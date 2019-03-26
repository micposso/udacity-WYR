import React, { Component } from "react";
import { connect } from "react-redux";
import { GiPerspectiveDiceSixFacesRandom as Icon } from "react-icons/gi";


class LogIn extends Component {
  render() {
    return (
        <div
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <div>
            <form size="large">
              <div stacked>
                <div>
                  <Icon size={60} color="orange" />
                </div>
                <div as="h2" color="orange" textAlign="center">
                  The Questions Game
                </div>
                <select placeholder="Select Friend">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
                <button color="orange">Submit</button>
                </div>
            </form>
        </div>
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
