import React, { Component } from 'react';
//import PropTypes from 'prop-types';

class Filter extends Component {
  setFilterValue = event => {
    let value = event.currentTarget.value.toUpperCase();
    this.props.setFilterToState(value);
    return value;
  };

  render() {
    return (
      <div>
        <p>filter</p>
        <input onChange={this.setFilterValue}></input>
      </div>
    );
  }
}

//Filter.propTypes = {};
export default Filter;
