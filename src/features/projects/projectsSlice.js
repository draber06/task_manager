import { createSlice, nanoid, createEntityAdapter } from "@reduxjs/toolkit"
import { schema, normalize } from "normalizr"

import { projects } from "data/projects"

const projectsAdapter = createEntityAdapter()

const projectSchema = new schema.Entity("projects")
const projectListSchema = [projectSchema]

const { entities, result: ids } = normalize(projects, projectListSchema)

const initialState = projectsAdapter.getInitialState({
    ids,
    entities: entities.projects,
})

const projectsSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {
        addProject: {
            reducer: projectsAdapter.addOne,
            prepare(name) {
                const id = nanoid()
                return { payload: { id, name } }
            },
        },
        deleteProject: projectsAdapter.removeOne,
    },
})

export const {
    selectAll: selectAllProjects,
    selectById: selectProjectById,
    selectIds: selectProjectIds,
} = projectsAdapter.getSelectors(state => state.projects)

export const { addProject, deleteProject } = projectsSlice.actions

export default projectsSlice.reducer
