import { createSelector, createSlice, nanoid } from "@reduxjs/toolkit"

import { workers } from "data/workers"
import { normalizeById } from "utils/reducesUtils"

const normalizedWorkers = normalizeById(workers)
const workerIds = Object.keys(normalizedWorkers)

const workersSlice = createSlice({
    name: "workers",
    initialState: {
        entities: {
            byId: normalizedWorkers,
            allIds: workerIds,
        },
    },
    reducers: {
        addWorker: {
            reducer: (state, action) => {
                const { id } = action.payload
                state.entities.byId[id] = action.payload
                state.entities.allIds.push(id)
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
            delete state.entities.byId[action.payload]
            const index = state.entities.allIds.findIndex(id => id === action.payload)
            if (index !== -1) {
                state.entities.allIds.splice(index, 1)
            }
        },
    },
})

const workersSelector = state => state.workers.entities.byId

const workerIdsSelector = state => state.workers.entities.allIds

const workerByIdSelector = id => createSelector(workersSelector, workers => workers[id])

export { workersSelector, workerIdsSelector, workerByIdSelector }

export const { addWorker, deleteWorker } = workersSlice.actions

export default workersSlice.reducer
