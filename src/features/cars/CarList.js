import React from "react"
import { useDispatch, useSelector } from "react-redux"

import { AddButton } from "components/AddButton"
import { CarListItem } from "./CarListItem"

import { selectFreeCarIds } from "features/tasks/tasksSlice"
import { carAdded } from "./carsSlice"

export const CarList = () => {
    const dispatch = useDispatch()
    const cars = useSelector(selectFreeCarIds)

    return (
        <div className="cars block">
            {cars.map(id => (
                <CarListItem key={id} id={id} />
            ))}
            <AddButton onAdd={name => dispatch(carAdded(name))} />
        </div>
    )
}
