import { createSelector, createSlice, nanoid } from "@reduxjs/toolkit"

import { cars } from "data/cars"
import { normalizeById } from "utils/reducesUtils"

const normalizedCars = normalizeById(cars)
const carIds = Object.keys(normalizedCars)

const carsSlice = createSlice({
    name: "cars",
    initialState: {
        entities: {
            byId: normalizedCars,
            allIds: carIds,
        },
    },
    reducers: {
        addCar: {
            reducer: (state, action) => {
                const { id } = action.payload
                state.entities.byId[id] = action.payload
                state.entities.allIds.push(id)
            },
            prepare: name => {
                const id = nanoid()
                return {
                    payload: { id, name },
                }
            },
        },
        deleteCar(state, action) {
            delete state.entities.byId[action.payload]
            const index = state.entities.allIds.findIndex(id => id === action.payload)
            if (index !== -1) {
                state.entities.allIds.splice(index, 1)
            }
        },
    },
})

const carsSelector = state => state.cars.entities.byId

const carIdsSelector = state => state.cars.entities.allIds

const carByIdSelector = id => createSelector(carsSelector, cars => cars[id])

export { carsSelector, carByIdSelector, carIdsSelector }

export const { addCar, deleteCar } = carsSlice.actions

export default carsSlice.reducer
