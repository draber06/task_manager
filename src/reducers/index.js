import { combineReducers } from "redux"
import projectsReducer from "features/projects/projectsSlice"
import workersReducer from "features/workers/workersSlice"
import carsReducer from "features/cars/carsSlice"

export default combineReducers({
    projects: projectsReducer,
    workers: workersReducer,
    cars: carsReducer,
})
