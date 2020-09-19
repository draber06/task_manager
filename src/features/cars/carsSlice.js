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
            return state.filter(car => car.id !== action.payload)
        },
    },
})

export const { addCar, deleteCar } = carsSlice.actions

export default carsSlice.reducer
