import React from 'react';
<<<<<<< HEAD
import { lockColor } from '../../actions';
import { connect } from 'react-redux';
import './ColorRhombus.css';

export const ColorRhombus = (props) => {
  const color = props.color
  console.log('COLOR', color)
  return (
    <div style={{ backgroundColor: props.color, height: 100, width: 100 }}>
      <p>{color}</p>
      <button onClick={() => props.lockColor(color)}>Lock</button>
=======
import './ColorRhombus.css';

const ColorRhombus = ({ hexCode }) => {
  return (
    <div style={{ backgroundColor: hexCode, height: 100, width: 100 }}>

>>>>>>> 19c4aafa53d87e7ea8f41b9065ebec0ea14c0235
    </div>
  )
}

<<<<<<< HEAD
const mapDispatchToProps = dispatch => ({
  lockColor: color => dispatch(lockColor(color))
});

export default connect(null, mapDispatchToProps)(ColorRhombus);
=======
export default ColorRhombus;
>>>>>>> 19c4aafa53d87e7ea8f41b9065ebec0ea14c0235
