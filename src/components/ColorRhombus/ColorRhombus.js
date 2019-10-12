import React from 'react';
import { lockColor } from '../../actions';
import { connect } from 'react-redux';
import './ColorRhombus.css';

export const ColorRhombus = (props) => {
  const color = props.color
  return (
    <div style={{ backgroundColor: props.color, height: 100, width: 100 }}>
      <button onClick={() => props.lockColor(color)}>Lock</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  lockColor: color => dispatch(lockColor(color))
});

export default connect(null, mapDispatchToProps)(ColorRhombus);
