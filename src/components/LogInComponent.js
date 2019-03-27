import React, { Component } from "react";
import { connect } from "react-redux";
import { GiPerspectiveDiceSixFacesRandom as Icon } from "react-icons/gi";

class LogIn extends Component {
  render() {
    console.log(this.props.avatar);
     
    return (
      <form className="ui large form">
        <div className="ui stacked segment">
          <div>
            <Icon size={60} color="orange" />
            <h2>The Questions Game</h2>
          </div>
          <select>
            {this.props.avatar.map((user) => (
                <option key={user.id} value={user.id}>{user.id}</option>
            ))}
          </select>
          <button
            className="ui fluid large orange submit button"
            color="orange"
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

function mapStateToProps({ usersReducer }) {
  return {
    avatar: Object.values(usersReducer)
  };
}

export default connect(mapStateToProps)(LogIn);
