import { createSlice, nanoid } from "@reduxjs/toolkit"

import { workers } from "data/workers"

const workersSlice = createSlice({
    name: "workers",
    initialState: workers,
    reducers: {
        addWorker: {
            reducer: (state, action) => {
                state.push(action.payload)
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
        deleteWorker: (state, action) => {
            return state.filter(worker => worker.id !== action.payload)
        },
    },
})

export const { addWorker, deleteWorker } = workersSlice.actions

export default workersSlice.reducer
