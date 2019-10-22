import React from 'react';
import ColorRhombus from '../../components/ColorRhombus/ColorRhombus';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './ColorContainer.css';

export const ColorContainer = ({ generateNewColors, colors, updatePalette, editingPalette }) => {
  const colorRhombi = colors.map(color => {
    return <ColorRhombus key={color.color} color={color.color} isLocked={color.isLocked} />
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
        {editingPalette && <button className='update-palette-button' onClick={updatePalette}>Update Palette</button>}
      </div>
    </section>
  )
}

export const mapStateToProps = state => ({
  editingPalette: state.editingPalette
});

export default connect(mapStateToProps)(ColorContainer);

ColorContainer.propTypes = {
  generateNewColors: PropTypes.func,
  colors: PropTypes.array,
  updatePalette: PropTypes.func
}