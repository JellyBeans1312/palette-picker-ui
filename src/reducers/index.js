import { combineReducers } from 'redux';
import { projectReducer, allProjectsReducer } from './projectReducer';
import { colorsReducer } from './colorsReducer';

const rootReducer = combineReducers({
  project: projectReducer,
  allProjects: allProjectsReducer,
<<<<<<< HEAD
  colors: colorsReducer,
=======
  colors: colorsReducer
>>>>>>> 19c4aafa53d87e7ea8f41b9065ebec0ea14c0235
});

export default rootReducer;