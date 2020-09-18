import { createSlice, nanoid } from "@reduxjs/toolkit";

import { projects } from "data/projects";

const projectsSlice = createSlice({
    name: "projects",
    initialState: projects,
    reducers: {
        addProject: {
            reducer: (state, action) => {
                state.push(action.payload);
            },
            prepare: (name) => {
                const id = nanoid();
                return { payload: { id, name } };
            },
        },
        deleteProject: (state, action) => {
            const index = state.findIndex((project) => project.id === action.payload);

            if (index !== -1) {
                state.splice(index, 1);
            }
        },
    },
});

export const { addProject, deleteProject } = projectsSlice.actions;

export default projectsSlice.reducer;
