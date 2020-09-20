import { createSlice, nanoid, createSelector } from "@reduxjs/toolkit"

import { projects } from "data/projects"
import { normalizeById } from "utils/reducesUtils"

const normalizedProjects = normalizeById(projects)
const projectIds = Object.keys(normalizedProjects)

const projectsSlice = createSlice({
    name: "projects",
    initialState: {
        entities: {
            byId: normalizedProjects,
            allIds: projectIds,
        },
    },
    reducers: {
        addProject: {
            reducer(state, action) {
                const { id } = action.payload
                state.entities.byId[id] = action.payload
                state.entities.allIds.push(id)
            },
            prepare(name) {
                const id = nanoid()
                return { payload: { id, name } }
            },
        },
        deleteProject(state, action) {
            delete state.entities.byId[action.payload]
            const index = state.entities.allIds.findIndex(id => id === action.payload)
            if (index !== -1) {
                state.entities.allIds.splice(index, 1)
            }
        },
    },
})

const projectsSelector = state => state.projects.entities.byId

const projectByIdSelector = id => createSelector(projectsSelector, projects => projects[id])

export { projectByIdSelector }

export const { addProject, deleteProject } = projectsSlice.actions

export default projectsSlice.reducer
