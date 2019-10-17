import { palettesReducer, editingPaletteReducer } from './palettesReducer'

describe('palettesReducer', () => {
  it('should return the default state', () => {
    let expected = [];

    let result = palettesReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return action.palettes', () => {
    let palettes = [
      {
        id: 22,
        palette_name: "test",
        project_id: 50,
        color_one: "#67cd51",
        color_two: "#15fe0d",
        color_three: "#507dbb",
        color_four: "#784994",
        color_five: "#2570dd"
      }
    ]

    let expected = [{
      id: 22,
      palette_name: "test",
      project_id: 50,
      color_one: "#67cd51",
      color_two: "#15fe0d",
      color_three: "#507dbb",
      color_four: "#784994",
      color_five: "#2570dd"
    }]

    let mockAction = {
      type: 'ADD_ALL_PALETTES',
      palettes
    }

    let result = palettesReducer([], mockAction);

    expect(result).toEqual(expected);
  });

  it('should remove a palette from state if REMOVE_PALETTE is called', () => {
    let expected = [{
      id: 22,
      palette_name: "test",
      project_id: 50,
      color_one: "#67cd51",
      color_two: "#15fe0d",
      color_three: "#507dbb",
      color_four: "#784994",
      color_five: "#2570dd"
    }]

    let mockState = [
        {
        id: 22,
        palette_name: "test",
        project_id: 50,
        color_one: "#67cd51",
        color_two: "#15fe0d",
        color_three: "#507dbb",
        color_four: "#784994",
        color_five: "#2570dd"
      },
      {
        id: 21,
        palette_name: "test",
        project_id: 50,
        color_one: "#67cd51",
        color_two: "#15fe0d",
        color_three: "#507dbb",
        color_four: "#784994",
        color_five: "#2570dd"
      }
    ];
    
    let mockAction = {
      type: 'REMOVE_PALETTE',
      id: 21
    }

    let result = palettesReducer(mockState, mockAction);

    expect(result).toEqual(expected);
  });
});

describe('editingPaletteReducer', () => {
  it('should return the default state', () => {
    let expected = false;

    let result = editingPaletteReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the action.status if EDITING_PALETTE is called', () => {
    let status = true;

    let mockAction = {
      type: 'EDITING_PALETTE',
      status
    }

    let expected = true;
    let result = editingPaletteReducer(false, mockAction);

    expect(result).toEqual(expected);
  });
});