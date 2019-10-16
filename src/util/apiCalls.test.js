import { createProject, getAllProjects, getAllPalettes, createPalette, deletePalette } from './apiCalls';

describe('createProject', () => {
  let mockResponse, mockRequest, mockNewProject;

  beforeEach(() => {
    mockRequest = {
      method: "POST",
      body: undefined,
      headers: {
        "Content-Type": "application/json"
      }
    }
    mockNewProject = {
      project_name: 'Test',
    }
    mockResponse = {
      id: 1
    }
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: Promise.resolve(mockResponse)
      });
    });
  });

  it('should call fetch with the correct url', () => {
    createProject();

    expect(window.fetch).toHaveBeenCalledWith('https://palette-picker-be-eo-am.herokuapp.com/api/v1/projects', mockRequest)
  });

  it('should return the id of the created project (HAPPY) :)', () => {
    createProject(mockNewProject)
    .then(results => expect(results).toEqual(mockResponse));
  });

  it('should throw an error if the response.status is not ok (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
    expect(createProject(mockNewProject)).rejects.toEqual(Error('There was an issue creating your project. Please try again.'));
  });

  it('should throw an error if the Promise rejects (SAD) :(', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        message: 'There was an issue creating your project.'
      });
    });

    expect(createProject(mockNewProject)).rejects.toEqual({ message: 'There was an issue creating your project.' })
  });
});

describe('getAllProjects', () => {
  let mockResponse;

  beforeEach(() => {
    mockResponse = [
      {
        id: 1
      }
    ]
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      })
    });
  });

  it('should call fetch with the correct url (HAPPY) :)', () => {
    getAllProjects();

    expect(window.fetch).toHaveBeenCalledWith('https://palette-picker-be-eo-am.herokuapp.com/api/v1/projects')
  });

  it('should return an array of all projects from the database (HAPPY) :)', () => {
    getAllProjects()
    .then(results => expect(results).toEqual(mockResponse))
  });

  it('should throw an error if the response.status is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(getAllProjects()).rejects.toEqual(Error('There was an error retrieving your projects. Please try again.'))
  });

  it('should throw an error if the promise rejects (SAD) :(', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        message: 'There was an error retrieving your projects. Please try again.'
      })
    });

    expect(getAllProjects()).rejects.toEqual({ message: 'There was an error retrieving your projects. Please try again.' })
  });
});

describe('getAllPalettes', () => {
  let mockResponse;

  beforeEach(() => {
    mockResponse = [
      {
        id: 21,
        palette_name: "asdf",
        project_id: 50,
        color_one: "#67cd51",
        color_two: "#15fe0d",
        color_three: "#507dbb",
        color_four: "#784994",
        color_five: "#2570dd",
        created_at: "2019-10-15T01:54:46.520Z",
        updated_at: "2019-10-15T01:54:46.520Z"
      },
      {
        id: 22,
        palette_name: "test",
        project_id: 50,
        color_one: "#67cd51",
        color_two: "#15fe0d",
        color_three: "#507dbb",
        color_four: "#784994",
        color_five: "#2570dd",
        created_at: "2019-10-15T01:54:46.520Z",
        updated_at: "2019-10-15T01:54:46.520Z"
      }
    ];
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: Promiser.resolve(mockResponse)
      });
    });
  });

  it('should call fetch with the correct url (HAPPY) :)', () => {
    getAllPalettes();

    expect(window.fetch).toHaveBeenCalledWith('https://palette-picker-be-eo-am.herokuapp.com/api/v1/palettes')
  });

  it('should return an array of palettes (HAPPY) :)', () => {
    getAllPalettes()
    .then(results => expect(results).toEqual(mockResponse));
  });

  it('should throw an error if the response.ok is false (SAD) :(', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(getAllPalettes()).rejects.toEqual(Error('There was an error retrieving your palettes. Please try again.'))
  });

  it('should throw an error if the Promise rejects (SAD) :(', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        message: 'Error retrieving your palettes.'
      })
    });

    expect(getAllPalettes()).rejects.toEqual({ message: 'Error retrieving your palettes.'})
  });
});

describe('createPalette', () => {
  let mockResponse, mockRequest, mockNewPalette;

  beforeEach(() => {
    mockNewPalette = {
      id: 22,
      palette_name: "test",
      project_id: 50,
      color_one: "#67cd51",
      color_two: "#15fe0d",
      color_three: "#507dbb",
      color_four: "#784994",
      color_five: "#2570dd",
      created_at: "2019-10-15T01:54:46.520Z",
      updated_at: "2019-10-15T01:54:46.520Z"
    }
    mockRequest = {
      method: "POST",
      body: undefined,
      headers: {
        "Content-Type": "application/json"
      }
    }
    mockResponse = {
      id: 1
    }
    window.fetch = jest.fn().mockImplementation(() => {
      return Promse.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it('should call fetch with the correct url (HAPPY) :)', () => {
    createPalette();

    expect(window.fetch).toHaveBeenCalledWith('https://palette-picker-be-eo-am.herokuapp.com/api/v1/palettes', mockRequest)
  });

  it('should return the id of the created palette (HAPPY) :)', () => {
    createPalette(mockNewPalette)
    .then(results => expect(results).toEqual(mockResponse));
  });

  it('should throw an error if the response.ok is false (SAD) :(', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
    
    expect(createPalette(mockNewPalette)).rejects.toEqual(Error('There was an error creating your palette. Please try again.'))
  });

  it('should throw an error if the Promise rejects (SAD) :(', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        message: 'There was an issue creating your palette.'
      })
    });

    expect(createPalette(mockNewPalette)).rejects.toEqual({ message: 'There was an issue creating your palette.' })
  });
});

describe('deletePalette', () => {
  let mockId, mockResponse, mockRequest;

  beforeEach(() => {
    mockResponse = {
      id: 1
    }
    mockRequest = {
      method: 'DELETE'
    }
    mockId = 1
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      })
    });
  });

  it('should call fetch with the correct URL', () => {
    deletePalette(mockId);

    expect(window.fetch).toHaveBeenCalledWith('https://palette-picker-be-eo-am.herokuapp.com/api/v1/palettes/1', mockRequest)
  });

  it('should return a 204 status if the deletion is successful', () => {
    deletePalette(mockId)
    .then(response => expect(response.status).toEqual(204))
  });

  it('should throw an error if the Promise.ok is false', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(deletePalette(mockId)).rejects.toEqual(Error('There was an error deleting your palette. Please try again.'))
  });

  it('should throw an error if the Promise rejects', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        message: 'Error deleting your palette'
      })
    });

    expect(deletePalette(mockId)).rejects.toEqual({ message: 'Error deleting your palette' })
  });
});