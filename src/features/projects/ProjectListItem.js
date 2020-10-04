import React from "react"
import { useDispatch, useSelector } from "react-redux"

import { DeleteButton } from "components/DeleteButton"

import { projectSelected } from "features/tasks/tasksSlice"
import { projectDeleted, selectProjectById } from "./projectsSlice"

export const ProjectListItem = ({ id }) => {
    const dispatch = useDispatch()
    const { name } = useSelector(state => selectProjectById(state, id))
    const activeProject = useSelector(state => state.tasks.activeProject)

    return (
        <div
            className={`objects__object block-element block__element ${
                activeProject === id ? "objects__object_active" : ""
            }`}
            onClick={() => dispatch(projectSelected(id))}
        >
            <div className="block__element-name block__sub-element">{name}</div>
            <DeleteButton onDelete={() => dispatch(projectDeleted(id))} />
        </div>
    )
}
