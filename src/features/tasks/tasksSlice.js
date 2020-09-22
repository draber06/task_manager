import { createSlice, createSelector } from "@reduxjs/toolkit"
import { carIdsSelector } from "features/cars/carsSlice"
import { workersSelector } from "features/workers/workersSlice"

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        entities: {
            byId: {},
            allIds: [],
        },
        activeProjectId: null,
    },
    reducers: {
        setActiveProject(state, action) {
            state.activeProjectId = action.payload
        },
        assignCar(state, action) {
            const { activeProjectId } = state
            if (state.entities.byId[activeProjectId]) {
                state.entities.byId[activeProjectId].carIds.push(action.payload)
            } else {
                state.entities.byId[activeProjectId] = {
                    projectId: activeProjectId,
                    workerIds: [],
                    carIds: [action.payload],
                }
            }
        },
        unassignCar(state, action) {
            const { activeProjectId } = state
            const { carIds } = state.entities.byId[activeProjectId]

            const existingCarIdIndex = carIds.findIndex(id => id === action.payload)

            if (existingCarIdIndex !== -1) {
                carIds.splice(existingCarIdIndex, 1)
            }
        },
        assignWorker(state, action) {
            const { activeProjectId } = state
            if (state.entities.byId[activeProjectId]) {
                state.entities.byId[activeProjectId].workerIds.push(action.payload)
            } else {
                state.entities.byId[activeProjectId] = {
                    projectId: activeProjectId,
                    workerIds: [action.payload],
                    carIds: [],
                }
            }
        },
        unassignWorker(state, action) {
            const { activeProjectId } = state
            const { workerIds } = state.entities.byId[activeProjectId]

            const existingWorkerIdIndex = workerIds.findIndex(id => id === action.payload)

            if (existingWorkerIdIndex !== -1) {
                workerIds.splice(existingWorkerIdIndex, 1)
            }
        },
    },
})

const activeProjectIdSelector = state => state.tasks.activeProjectId

const taskSelector = state => state.tasks.entities.byId

const notAssignedCarIdsSelector = createSelector(taskSelector, carIdsSelector, (tasks, carIds) => {
    const assignedCarIds = Object.values(tasks).reduce(
        (carIds, task) => carIds.concat(task.carIds),
        []
    )

    return carIds.filter(id => !assignedCarIds.includes(id))
})

const notAssignedWorkersSelector = createSelector(
    taskSelector,
    workersSelector,
    (tasks, workers) => {
        const assignedWorkerIds = Object.values(tasks).reduce(
            (workerIds, task) => workerIds.concat(task.workerIds),
            []
        )

        return Object.values(workers).filter(({ id }) => {
            return !assignedWorkerIds.includes(String(id))
        })
    }
)

export { activeProjectIdSelector, notAssignedCarIdsSelector, notAssignedWorkersSelector }

export const { setActiveProject, assignCar, unassignCar, assignWorker } = tasksSlice.actions

export default tasksSlice.reducer
