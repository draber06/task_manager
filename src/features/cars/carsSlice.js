import { createSelector, createSlice, nanoid } from "@reduxjs/toolkit"

import { cars } from "data/cars"
import { normalizeById } from "utils/reducesUtils"

const normalizedCars = normalizeById(cars)
const carIds = Object.keys(normalizedCars)

const carsSlice = createSlice({
    name: "cars",
    initialState: {
        entities: normalizedCars,
        ids: carIds,
    },
    reducers: {
        addCar: {
            reducer: (state, action) => {
                const { id } = action.payload
                state.entities[id] = action.payload
                state.ids.push(id)
            },
            prepare: name => {
                const id = nanoid()
                return {
                    payload: { id, name },
                }
            },
        },
        deleteCar(state, action) {
            delete state.entities[action.payload]
            state.ids = Object.keys(state.entities)
        },
    },
})

const selectCars = state => state.cars.entities

const selectCarIds = state => state.cars.ids

const selectCarById = id => createSelector(selectCars, cars => cars[id])

export { selectCarIds, selectCars, selectCarById }

export const { addCar, deleteCar } = carsSlice.actions

export default carsSlice.reducer
