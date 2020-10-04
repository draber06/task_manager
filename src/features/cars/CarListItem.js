import React from "react"
import { useDispatch, useSelector } from "react-redux"

import { DeleteButton } from "components/DeleteButton"

import { carDeleted, selectCarById } from "./carsSlice"
import { assignCar } from "features/tasks/tasksSlice"

export const CarListItem = ({ id }) => {
    const dispatch = useDispatch()
    const { name } = useSelector(state => selectCarById(state, id))

    return (
        <div className="cars__car block__element" onClick={() => dispatch(assignCar(id))}>
            <div className="cars__car-name block__element-name block__sub-element">{name}</div>
            <DeleteButton onDelete={() => dispatch(carDeleted(id))} />
        </div>
    )
}
