import React from 'react';
import { lockColor } from '../../actions';
import { connect } from 'react-redux';
import './ColorRhombus.css';
import PropTypes from 'prop-types';
import { FaLock, FaLockOpen } from 'react-icons/fa'

export const ColorRhombus = (props) => {
  const src = props.isLocked ? <FaLock size={16} /> : <FaLockOpen size={16} />
  const color = props.color
  return (
    <div className='color-rhombus' style={{ backgroundColor: props.color }}>
      <button onClick={() => props.lockColor(color)}>{src}</button>
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