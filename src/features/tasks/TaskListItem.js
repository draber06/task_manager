import { selectCarById } from "features/cars/carsSlice"
import { selectWorkerById } from "features/workers/workersSlice"
import React from "react"
import { useDispatch, useSelector } from "react-redux"

import { selectTaskById, unassignCar, unassignWorker } from "./tasksSlice"

const CarItem = ({ carId }) => {
    const dispatch = useDispatch()
    const { name } = useSelector(state => selectCarById(state, carId))

    return (
        <div className="result__car" onClick={() => dispatch(unassignCar(carId))}>
            {name} /
        </div>
    )
}

const WorkerItem = ({ workerId }) => {
    const dispatch = useDispatch()
    const { firstName, lastName } = useSelector(state => selectWorkerById(state, workerId))

    return (
        <div className="result__car" onClick={() => dispatch(unassignWorker(workerId))}>
            {lastName} {firstName.slice(0, 1)} /
        </div>
    )
}

export const TaskListItem = ({ id }) => {
    const { project, cars, workers } = useSelector(state => selectTaskById(state, id))

    return (
        <div className="result__object">
            <div className="result__object-name">{project.name}</div>
            <div className="result__object-cars">
                {cars.map(carId => (
                    <CarItem key={carId} carId={carId} />
                ))}
            </div>
            <div className="result__object-personal">
                {workers.map(workerId => (
                    <WorkerItem key={workerId} workerId={workerId} />
                ))}
            </div>
        </div>
    )
}
