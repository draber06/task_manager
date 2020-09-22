import { createSelector, createSlice, nanoid } from "@reduxjs/toolkit"

import { workers } from "data/workers"
import { normalizeById } from "utils/reducesUtils"

const normalizedWorkers = normalizeById(workers)
const workerIds = Object.keys(normalizedWorkers)

const workersSlice = createSlice({
    name: "workers",
    initialState: {
        entities: normalizedWorkers,
        ids: workerIds,
    },
    reducers: {
        addWorker: {
            reducer: (state, action) => {
                const { id } = action.payload
                state.entities[id] = action.payload
                state.ids.push(id)
            },
            prepare: ({ firstName, lastName, isGeodesist, address, group, region }) => {
                return {
                    payload: {
                        id: nanoid(),
                        firstName,
                        lastName,
                        isGeodesist,
                        group,
                        address,
                        region,
                    },
                }
            },
        },
        deleteWorker(state, action) {
            delete state.entities[action.payload]
            state.ids = Object.keys(state.entities)
        },
    },
})

const selectWorkers = state => state.workers.entities

const selectWorkerIds = state => state.workers.ids

const selectWorkerById = id => createSelector(selectWorkers, workers => workers[id])

export { selectWorkers, selectWorkerIds, selectWorkerById }

export const { addWorker, deleteWorker } = workersSlice.actions

export default workersSlice.reducer
