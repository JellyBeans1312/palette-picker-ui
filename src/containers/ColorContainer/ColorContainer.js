import React from 'react';
import { connect } from 'react-redux';
import ColorRhombus from '../../components/ColorRhombus/ColorRhombus';
import './ColorContainer.css';

const ColorContainer = ({ generateNewColors, colors }) => {
<<<<<<< HEAD
  const colorRhombi = colors.map(color => {
    console.log('COLOR', color)
    return <ColorRhombus color={color.color}/>
=======
  console.log('COLORS', colors)
  const colorRhombi = colors.map(color => {
    return <ColorRhombus hexCode={color.color}/>
>>>>>>> 19c4aafa53d87e7ea8f41b9065ebec0ea14c0235
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