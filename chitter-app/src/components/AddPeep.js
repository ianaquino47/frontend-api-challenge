import React, { Component } from 'react';
import PropTypes from 'prop-types'

export class AddPeep extends Component {

  state = {
    peep: ''
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value});

  onSubmit = (e) => {
    console.log(this.state)
    e.preventDefault();
    this.props.addPeep(this.state.peep);
    this.setState({ peep: ''})
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex'}}>
        <input
          type="text"
          name="peep"
          style = {{flex: '10', padding: '5px'}}
          placeholder="Add peep.."
          value={this.state.peep}
          onChange={this.onChange}
        />
        <input
          type = "submit"
          value = "Submit"
          className = "btn"
          style = {{flex: '1'}}
        />
      </form>
    );
  }

}

AddPeep.propTypes = {
  addPeep: PropTypes.func.isRequired,
}

export default AddPeep;
