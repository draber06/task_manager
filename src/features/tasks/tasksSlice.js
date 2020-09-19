import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialTask = {
    project: "",
    workers: [],
    cars: [],
}

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        // creating:
    },
    reducers: {
        addTask: {
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
        // deleteWorker: (state, action) => {
        //     const index = state.findIndex(worker => worker.id === action.payload)

        //     if (index !== -1) {
        //         state.splice(index, 1)
        //     }
        // },
    },
})

export const { addTask } = tasksSlice.actions

export default tasksSlice.reducer
