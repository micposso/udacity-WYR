import React, { Component } from "react";
import { connect } from "react-redux";
import { GiPerspectiveDiceSixFacesRandom as Icon } from "react-icons/gi";
import * as $ from 'jquery';
import{ findDOMNode } from 'react-dom'

class LogIn extends Component {
  render() {
    return (
      <form className="ui large form">
        <div className="ui stacked segment">
          <div>
            <Icon size={60} color="orange" />
          <h2>The Questions Game</h2>
          </div>
          <div className="ui fluid selection dropdown" onClick={this.handleDropdown}>
          <input type="hidden" name="user" />
          <i className="dropdown icon"></i>
          <div className="default text">Select Friend</div>
          <div ref="dropdown"  className="menu">
            <div className="item" data-value="jenny">
            <img className="ui mini avatar image" src="/images/avatar/small/jenny.jpg" />
            Jenny Hess
            </div>
            <div className="item" data-value="elliot">
            <img className="ui mini avatar image" src="/images/avatar/small/elliot.jpg" />
            Elliot Fu
          </div>
          </div>
          </div>
          <button className="ui fluid large orange submit button" color="orange">Submit</button>
        </div>
      </form>
    );
  }
}

//get user, userID, name and avartURL and push it into an array that you will pass to the Dropdown component as an options value.

//problem the property users of the state it not getting through the mapStateToProps function
function mapStateToProps({ usersReducer }) {
  return {};
}

export default connect(mapStateToProps)(LogIn);
