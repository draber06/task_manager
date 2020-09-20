import React from "react"
import { useDispatch, useSelector } from "react-redux"

import { DeleteButton } from "components/DeleteButton"

import { setActiveProject } from "features/tasks/tasksSlice"
import { deleteProject, projectByIdSelector } from "./projectsSlice"

export const ProjectListItem = ({ id }) => {
    const { name } = useSelector(projectByIdSelector(id))
    const activeProjectId = useSelector(state => state.tasks.activeProjectId)

    const dispatch = useDispatch()

    return (
        <div
            className={`objects__object block-element block__element ${
                activeProjectId === id ? "objects__object_active" : ""
            }`}
            onClick={() => dispatch(setActiveProject(id))}
        >
            <div className="block__element-name block__sub-element">{name}</div>
            <DeleteButton onDelete={() => dispatch(deleteProject(id))} />
        </div>
    )
}
