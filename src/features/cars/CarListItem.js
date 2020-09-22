import React from "react"
import { useDispatch, useSelector } from "react-redux"

import { DeleteButton } from "components/DeleteButton"

import { deleteCar, selectCarById } from "./carsSlice"
import { assignCar, selectActiveProjectId } from "features/tasks/tasksSlice"

const CarListItem = ({ id }) => {
    const dispatch = useDispatch()
    const { name } = useSelector(selectCarById(id))
    const activeProjectId = useSelector(selectActiveProjectId)

    const handleClick = () => {
        // if there is no active project do nothing
        if (!activeProjectId) return

        dispatch(assignCar(id))
    }

    return (
        <div className="cars__car block__element" onClick={handleClick}>
            <div className="cars__car-name block__element-name block__sub-element">{name}</div>
            <DeleteButton onDelete={() => dispatch(deleteCar(id))} />
        </div>
    )
}

export default CarListItem
