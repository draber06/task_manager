import React from "react"
import { useDispatch, useSelector } from "react-redux"

import { AddButton } from "components/AddButton"
import { ProjectListItem } from "./ProjectListItem"
import "./ProjectList.css"

import { addProject, selectProjectIds } from "./projectsSlice"

export const ProjectList = () => {
    const dispatch = useDispatch()
    const projectIds = useSelector(selectProjectIds)

    return (
        <div className="objects block">
            {projectIds.map(id => (
                <ProjectListItem key={id} id={id} />
            ))}
            <AddButton onAdd={name => dispatch(addProject(name))} />
        </div>
    )
}
