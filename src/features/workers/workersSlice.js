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
            const index = state.findIndex(worker => worker.id === action.payload)

            if (index !== -1) {
                state.splice(index, 1)
            }
        },
    },
})

export const { addWorker, deleteWorker } = workersSlice.actions

export default workersSlice.reducer
