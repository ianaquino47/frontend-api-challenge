import React, { Component } from 'react';
import PeepItem from './PeepItem';
import PropTypes from 'prop-types';

class Peeps extends Component {
  render() {
    return this.props.peeps.map((peep) => (
      <PeepItem key = {peep.id} peep={peep} delPeep={this.props.delPeep}/>
    ));
  }
}

// PropTypes
Peeps.propTypes = {
  peeps: PropTypes.array.isRequired,
  delPeep: PropTypes.func.isRequired,
}
export default Peeps;
