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
        createTask(state, action) {
            const projectId = action.payload
            const newTask = {
                projectId,
                workerIds: [],
                carIds: [],
            }
            state.entities.byId[projectId] = newTask
            state.entities.allIds.push(projectId)
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
            const { cars } = state.entities.byId[state.activeTask.id]
            const index = cars.findIndex(id => id === action.payload)
            if (index !== -1) {
                cars.splice(index, 1)
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

const notAssignedWorkerSelector = createSelector(
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

export { activeProjectIdSelector, notAssignedCarIdsSelector, notAssignedWorkerSelector }

export const {
    createTask,
    setActiveProject,
    assignCar,
    unassignCar,
    assignWorker,
} = tasksSlice.actions

export default tasksSlice.reducer
