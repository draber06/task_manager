import React from "react"
import { useDispatch, useSelector } from "react-redux"

import { DeleteButton } from "components/DeleteButton"

import { setActiveProject } from "features/tasks/tasksSlice"
import { projectDeleted, selectProjectById } from "./projectsSlice"

export const ProjectListItem = ({ id }) => {
    const dispatch = useDispatch()
    const { name } = useSelector(state => selectProjectById(state, id))
    const activeProjectId = useSelector(state => state.tasks.activeProjectId)

    return (
        <div
            className={`objects__object block-element block__element ${
                activeProjectId === id ? "objects__object_active" : ""
            }`}
            onClick={() => dispatch(setActiveProject(id))}
        >
            <div className="block__element-name block__sub-element">{name}</div>
            <DeleteButton onDelete={() => dispatch(projectDeleted(id))} />
        </div>
    )
}
