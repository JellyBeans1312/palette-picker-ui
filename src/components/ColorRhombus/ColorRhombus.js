import React from 'react';
import { lockColor } from '../../actions';
import { connect } from 'react-redux';
import './ColorRhombus.css';
import PropTypes from 'prop-types';

export const ColorRhombus = (props) => {
  const color = props.color
  return (
    <div className='color-rhombus' style={{ backgroundColor: props.color }}>
      <button onClick={() => props.lockColor(color)}>Lock</button>
    </div>
  )
}

export const mapDispatchToProps = dispatch => ({
  lockColor: color => dispatch(lockColor(color))
});

export default connect(null, mapDispatchToProps)(ColorRhombus);

ColorRhombus.propTypes = {
  color: PropTypes.string,
  lockColor: PropTypes.func
}