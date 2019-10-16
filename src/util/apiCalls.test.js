import { createProject } from './apiCalls';

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