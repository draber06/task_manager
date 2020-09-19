import React from "react"
import { useDispatch } from "react-redux"

import { DeleteButton } from "components/DeleteButton"
import { deleteWorker } from "./workersSlice"

export const WorkerListItem = ({ worker }) => {
    const dispatch = useDispatch()
    const { group, isGeodesist, id, firstName, lastName, region, address } = worker

    return (
        <div
            className={
                "personal__employee block__element " +
                (group === "М" ? "personal__employee_group1 " : "personal__employee_group2 ") +
                (isGeodesist ? "personal__employee_geodesist" : "personal__employee_assistant")
            }
            // onClick={onEmployeeClick.bind(null, empolyee.id)}
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
