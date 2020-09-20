import React from "react"
import { useDispatch, useSelector } from "react-redux"

import { AddButton } from "components/AddButton"
import CarListItem from "./CarListItem"

import { notAssignedCarIdsSelector } from "features/tasks/tasksSlice"
import { addCar } from "./carsSlice"

export const CarList = () => {
    const dispatch = useDispatch()
    const carIds = useSelector(notAssignedCarIdsSelector)

    return (
        <div className="cars block">
            {carIds.map(id => (
                <CarListItem key={id} id={id} />
            ))}
            <AddButton onAdd={name => dispatch(addCar(name))} />
        </div>
    )
}
