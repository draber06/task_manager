import { createSlice, nanoid } from "@reduxjs/toolkit"

import { cars } from "data/cars"

const carsSlice = createSlice({
    name: "cars",
    initialState: cars,
    reducers: {
        addCar: {
            reducer: (state, action) => {
                state.push(action.payload)
            },
            prepare: name => {
                const id = nanoid()
                return {
                    payload: { id, name },
                }
            },
        },
        deleteCar: (state, action) => {
            const index = state.findIndex(car => car.id === action.payload)

            if (index !== -1) {
                state.splice(index, 1)
            }
        },
    },
})

export const { addCar, deleteCar } = carsSlice.actions

export default carsSlice.reducer