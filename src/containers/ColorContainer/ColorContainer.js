import React from 'react';
import { connect } from 'react-redux';
import ColorRhombus from '../../components/ColorRhombus/ColorRhombus';
import './ColorContainer.css';

const ColorContainer = ({ generateNewColors, colors }) => {
  const colorRhombi = colors.map(color => {
    return <ColorRhombus color={color.color}/>
  });

  return (
    <section>
      {colors && colorRhombi}
      {!colors && <p>Create a palette</p>}
      <button
      onClick={generateNewColors}
      >
        Generate a new palette!
      </button>
    </section>
  )
}

export default ColorContainer;