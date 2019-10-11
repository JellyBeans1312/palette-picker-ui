import React from 'react';
import './ColorRhombus.css';

const ColorRhombus = ({ hexCode }) => {
  return (
    <div style={{ backgroundColor: hexCode, height: 100, width: 100 }}>

    </div>
  )
}

export default ColorRhombus;