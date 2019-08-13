import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class PeepItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
    }
  }

  render = () => {
    const {id, body} = this.props.peep;
    return (
      <div style={this.getStyle()}>
        <p>
        {body}
        <button onClick = {this.props.delPeep.bind(this, id)} style={btnStyle}>x</button>
        </p>
      </div>
    );
  }
}

// PropTypes
PeepItem.propTypes = {
  peep: PropTypes.object.isRequired,
  delPeep: PropTypes.func.isRequired,
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}


export default PeepItem;
