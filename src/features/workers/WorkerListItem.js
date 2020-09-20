import React from "react"
import { useDispatch, useSelector } from "react-redux"

import { DeleteButton } from "components/DeleteButton"

import { deleteWorker, workerByIdSelector } from "./workersSlice"
import { activeProjectIdSelector, assignWorker } from "features/tasks/tasksSlice"

export const WorkerListItem = ({ id }) => {
    const dispatch = useDispatch()

    const worker = useSelector(workerByIdSelector(id))
    const activeProjectId = useSelector(activeProjectIdSelector)

    const { group, isGeodesist, firstName, lastName, region, address } = worker

    const handleClick = () => {
        // if there is no active project do nothing
        if (!activeProjectId) return

        dispatch(assignWorker(id))
    }

    return (
        <div
            className={
                "personal__employee block__element " +
                (group === "М" ? "personal__employee_group1 " : "personal__employee_group2 ") +
                (isGeodesist ? "personal__employee_geodesist" : "personal__employee_assistant")
            }
            onClick={handleClick}
        >
            <div className="personal__name block__sub-element">
                {lastName} {firstName.slice(0, 1)}
            </div>
            <div className="personal__group block__sub-element">{group}</div>
            <div className="personal__region block__sub-element">{region}</div>
            <div className="personal__adress block__sub-element">{address}</div>

            <div>
                <DeleteButton onDelete={() => dispatch(deleteWorker(id))} />
            </div>
        </div>
    )
}
