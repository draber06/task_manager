import React from "react"
import { useDispatch, useSelector } from "react-redux"

import { selectTaskById, unassignCar, unassignWorker } from "./tasksSlice"

export const TaskListItem = ({ id }) => {
    const dispatch = useDispatch()
    const { project, cars, workers } = useSelector(selectTaskById(id))

    return (
        <div className="result__object">
            <div className="result__object-name">{project.name}</div>
            <div className="result__object-cars">
                {cars.map(car => (
                    <div
                        key={car.id}
                        className="result__car"
                        onClick={() => dispatch(unassignCar(car.id))}
                    >
                        {car.name} /
                    </div>
                ))}
            </div>
            <div className="result__object-personal">
                {workers.map(worker => (
                    <div
                        key={worker.id}
                        className="result__employee"
                        onClick={() => dispatch(unassignWorker(worker.id))}
                    >
                        {worker.lastName} {worker.firstName.slice(0, 1)}
                    </div>
                ))}
            </div>
        </div>
    )
}
