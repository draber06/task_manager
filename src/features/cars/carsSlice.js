import { createSlice, nanoid, createEntityAdapter } from "@reduxjs/toolkit"
import { normalize, schema } from "normalizr"

import { cars } from "data/cars"

const carsAdapter = createEntityAdapter()

const carSchema = new schema.Entity("cars")
const carListSchema = [carSchema]

const { entities, result: ids } = normalize(cars, carListSchema)

const initialState = carsAdapter.getInitialState({
    ids,
    entities: entities.cars,
})

const carsSlice = createSlice({
    name: "cars",
    initialState,
    reducers: {
        carAdded: {
            reducer: carsAdapter.addOne,
            prepare: name => {
                const id = nanoid()
                return {
                    payload: { id, name },
                }
            },
        },
        carDeleted: carsAdapter.removeOne,
    },
})

export const {
    selectAll: selectAllCars,
    selectById: selectCarById,
    selectIds: selectCarIds,
} = carsAdapter.getSelectors(state => state.cars)

export const { carAdded, carDeleted } = carsSlice.actions

export default carsSlice.reducer
