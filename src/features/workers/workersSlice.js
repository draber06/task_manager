import { createEntityAdapter, createSlice, nanoid } from "@reduxjs/toolkit"
import { normalize, schema } from "normalizr"

import { workers } from "data/workers"

const workersAdapter = createEntityAdapter()

const workerSchema = new schema.Entity("workers")
const workerListSchema = [workerSchema]

const { entities, result: ids } = normalize(workers, workerListSchema)

const initialState = workersAdapter.getInitialState({
    ids,
    entities: entities.workers,
})

const workersSlice = createSlice({
    name: "workers",
    initialState,
    reducers: {
        addWorker: {
            reducer: workersAdapter.addOne,
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
        deleteWorker: workersAdapter.removeOne,
    },
})

export const {
    selectAll: selectAllWorkers,
    selectById: selectWorkerById,
    selectIds: selectWorkerIds,
} = workersAdapter.getSelectors(state => state.workers)

export const { addWorker, deleteWorker } = workersSlice.actions

export default workersSlice.reducer
