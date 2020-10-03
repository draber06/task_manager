import { createSlice, createSelector } from "@reduxjs/toolkit"

import { selectCarIds, selectAllCars } from "features/cars/carsSlice"
import { selectWorkers } from "features/workers/workersSlice"
import { selectProjects } from "features/projects/projectsSlice"

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        entities: {},
        ids: [],
        activeProjectId: null,
    },
    reducers: {
        setActiveProject(state, action) {
            state.activeProjectId = action.payload
        },
        assignCar(state, action) {
            const { activeProjectId } = state
            if (state.entities[activeProjectId]) {
                state.entities[activeProjectId].carIds.push(action.payload)
            } else {
                state.entities[activeProjectId] = {
                    projectId: activeProjectId,
                    workerIds: [],
                    carIds: [action.payload],
                }
                state.ids.push(activeProjectId)
            }
        },
        unassignCar(state, action) {
            const { activeProjectId } = state
            const { carIds } = state.entities[activeProjectId]
            const existingCarIdIndex = carIds.findIndex(id => id === String(action.payload))

            if (existingCarIdIndex !== -1) {
                carIds.splice(existingCarIdIndex, 1)
            }
        },
        assignWorker(state, action) {
            const { activeProjectId } = state
            if (state.entities[activeProjectId]) {
                state.entities[activeProjectId].workerIds.push(action.payload)
            } else {
                state.entities[activeProjectId] = {
                    projectId: activeProjectId,
                    workerIds: [action.payload],
                    carIds: [],
                }
                state.ids.push(activeProjectId)
            }
        },
        unassignWorker(state, action) {
            const { activeProjectId } = state
            const { workerIds } = state.entities[activeProjectId]
            const existingWorkerIdIndex = workerIds.findIndex(id => id === String(action.payload))

            if (existingWorkerIdIndex !== -1) {
                workerIds.splice(existingWorkerIdIndex, 1)
            }
        },
    },
})

const selectActiveProjectId = state => state.tasks.activeProjectId

const selectTasks = state => state.tasks.entities

const selectTaskIds = state => state.tasks.ids

const selectTaskById = id =>
    createSelector(
        selectTasks,
        selectProjects,
        selectAllCars,
        selectWorkers,
        (tasks, projects, cars, workers) => {
            const { projectId, carIds, workerIds } = tasks[id]
            const taskProject = projects[projectId]
            const taskWorkers = workerIds.map(workerId => workers[workerId])
            const taskCars = carIds.map(carId => cars[carId])

            return {
                project: taskProject,
                workers: taskWorkers,
                cars: taskCars,
            }
        }
    )

const selectFreeCarIds = createSelector(selectTasks, selectCarIds, (tasks, carIds) => {
    const assignedCarIds = Object.values(tasks).reduce(
        (carIds, task) => carIds.concat(task.carIds),
        []
    )

    return carIds.filter(id => !assignedCarIds.includes(id))
})

const selectFreeWorkers = createSelector(selectTasks, selectWorkers, (tasks, workers) => {
    const assignedWorkerIds = Object.values(tasks).reduce(
        (workerIds, task) => workerIds.concat(task.workerIds),
        []
    )

    return Object.values(workers).filter(({ id }) => {
        return !assignedWorkerIds.includes(String(id))
    })
})

export {
    selectTasks,
    selectTaskIds,
    selectTaskById,
    selectActiveProjectId,
    selectFreeCarIds,
    selectFreeWorkers,
}

export const {
    setActiveProject,
    assignCar,
    unassignCar,
    assignWorker,
    unassignWorker,
} = tasksSlice.actions

export default tasksSlice.reducer
