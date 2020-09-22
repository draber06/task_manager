import { createSlice, nanoid, createSelector } from "@reduxjs/toolkit"

import { projects } from "data/projects"
import { normalizeById } from "utils/reducesUtils"

const normalizedProjects = normalizeById(projects)
const projectIds = Object.keys(normalizedProjects)

const projectsSlice = createSlice({
    name: "projects",
    initialState: {
        entities: normalizedProjects,
        ids: projectIds,
    },
    reducers: {
        addProject: {
            reducer(state, action) {
                const { id } = action.payload
                state.entities[id] = action.payload
                state.ids.push(id)
            },
            prepare(name) {
                const id = nanoid()
                return { payload: { id, name } }
            },
        },
        deleteProject(state, action) {
            delete state.entities[action.payload]
            state.ids = Object.keys(state.entities)
        },
    },
})

const selectProjects = state => state.projects.entities

const selectProjectIds = state => state.projects.ids

const selectProjectById = id => createSelector(selectProjects, projects => projects[id])

export { selectProjectById, selectProjects, selectProjectIds }

export const { addProject, deleteProject } = projectsSlice.actions

export default projectsSlice.reducer
