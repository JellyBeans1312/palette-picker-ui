import React from 'react';
import ColorRhombus from '../ColorRhombus/ColorRhombus';
import PropTypes from 'prop-types';
import './ColorContainer.css';

export const ColorContainer = ({ generateNewColors, colors, updatePalette }) => {
  const colorRhombi = colors.map(color => {
    return <ColorRhombus key={color.color} color={color.color}/>
  });

  return (
    <section className='color-container'>
      <div className='color-container-div'>
        {colors && colorRhombi}
      </div>
      <div className='button-container'>
        <button className='generate-color-button'
          onClick={generateNewColors}
        >
        Generate a new palette!
        </button>
        <button className='update-palette-button' onClick={updatePalette}>Update Palette</button>
      </div>
    </section>
  )
}

export default ColorContainer;

ColorContainer.propTypes = {
  generateNewColors: PropTypes.func,
  colors: PropTypes.array,
  updatePalette: PropTypes.func
}