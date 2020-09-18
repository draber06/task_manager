import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addProject } from "./projectsSlice";
// import AddBtn from "../../common/AddButton";

export const AddProject = () => {
    const [project, setProject] = useState("");
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();

        if (!project.trim()) {
            return;
        }

        dispatch(addProject(project));
        setProject("");
    };

    const onChange = (e) => setProject(e.target.value);

    return (
        <div>
            <form action="/" onSubmit={onSubmit}>
                <input onChange={onChange} value={project} type="text" />
                <button>Добавить</button>
            </form>
        </div>
    );
};
