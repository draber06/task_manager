import React from "react"
import { useDispatch, useSelector } from "react-redux"

import { DeleteButton } from "components/DeleteButton"

import { carByIdSelector, deleteCar } from "./carsSlice"
import { assignCar, activeProjectIdSelector } from "features/tasks/tasksSlice"

const CarListItem = ({ id }) => {
    const dispatch = useDispatch()
    const { name } = useSelector(carByIdSelector(id))
    const activeProjectId = useSelector(activeProjectIdSelector)

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
