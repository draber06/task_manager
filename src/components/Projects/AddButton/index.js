import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import AddBtn from "../../common/AddButton";

function AddButton({ data, setData }) {
    const [project, setProject] = useState("");
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();

        if (!project.trim()) {
            return;
        }

        // dispatch(value);
        // setData({ type: "addObject", newObject: newItem });
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
}

export default AddButton;