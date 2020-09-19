import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {}

const tasksSlice = createSlice({
    name: "tasks",
    initialState: initialState,
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

export const { addWorker, deleteWorker } = tasksSlice.actions

export default tasksSlice.reducer
