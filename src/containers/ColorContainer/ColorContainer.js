import React from 'react';
import ColorRhombus from '../../components/ColorRhombus/ColorRhombus';
import './ColorContainer.css';

const ColorContainer = ({ generateNewColors, colors }) => {
  const colorRhombi = colors.map(color => {
    return <ColorRhombus color={color.color}/>
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
      </div>
    </section>
  )
}

export default ColorContainer;