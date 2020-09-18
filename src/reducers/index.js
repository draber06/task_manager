import { combineReducers } from "redux";
import projectsReducer from "features/projects/projectsSlice";

export default combineReducers({
    projects: projectsReducer,
});
