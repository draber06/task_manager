import { createSlice, createSelector, createEntityAdapter } from "@reduxjs/toolkit"

import { selectCarIds } from "features/cars/carsSlice"
import { selectAllWorkers } from "features/workers/workersSlice"

const tasksAdapter = createEntityAdapter()

const initialState = tasksAdapter.getInitialState({
    activeProject: null,
})

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        projectSelected(state, action) {
            state.activeProject = action.payload
        },
        assignCar(state, action) {
            const { activeProject } = state

            if (!activeProject) {
                return state
            }

            if (state.entities[activeProject]) {
                state.entities[activeProject].cars.push(action.payload)
            } else {
                state.entities[activeProject] = {
                    project: activeProject,
                    workers: [],
                    cars: [action.payload],
                }
                state.ids.push(activeProject)
            }
        },
        unassignCar(state, action) {
            const { activeProject } = state
            const { cars } = state.entities[activeProject]
            const existingCarIdIndex = cars.findIndex(id => id === String(action.payload))

            if (existingCarIdIndex !== -1) {
                cars.splice(existingCarIdIndex, 1)
            }
        },
        assignWorker(state, action) {
            const { activeProject } = state
            if (!activeProject) {
                return state
            }

            if (state.entities[activeProject]) {
                state.entities[activeProject].workers.push(action.payload)
            } else {
                state.entities[activeProject] = {
                    project: activeProject,
                    workers: [action.payload],
                    cars: [],
                }
                state.ids.push(activeProject)
            }
        },
        unassignWorker(state, action) {
            const { activeProject } = state
            const { workers } = state.entities[activeProject]
            const existingWorkerIdIndex = workers.findIndex(id => id === String(action.payload))

            if (existingWorkerIdIndex !== -1) {
                workers.splice(existingWorkerIdIndex, 1)
            }
        },
    },
})

export const {
    projectSelected,
    assignCar,
    unassignCar,
    assignWorker,
    unassignWorker,
} = tasksSlice.actions

export default tasksSlice.reducer

export const {
    selectEntities: selectAllTasks,
    selectById: selectTaskById,
    selectIds: selectTaskIds,
} = tasksAdapter.getSelectors(state => state.tasks)

export const selectFreeCarIds = createSelector(selectAllTasks, selectCarIds, (tasks, cars) => {
    const assignedCarIds = Object.values(tasks).reduce((cars, task) => cars.concat(task.cars), [])

    return cars.filter(id => !assignedCarIds.includes(id))
})

export const selectFreeWorkers = createSelector(
    selectAllTasks,
    selectAllWorkers,
    (tasks, workers) => {
        const assignedWorkerIds = Object.values(tasks).reduce(
            (workers, task) => workers.concat(task.workers),
            []
        )

        return Object.values(workers).filter(({ id }) => {
            return !assignedWorkerIds.includes(String(id))
        })
    }
)
