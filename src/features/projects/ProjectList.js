import React from "react"
import { DeleteButton } from "components/DeleteButton"
import { AddButton } from "components/AddButton"
import { useDispatch, useSelector } from "react-redux"
// import CloseButton from "../../components/Projects/CloseButton";
// import AddButton from "../../components/Projects/AddButton";
import "./ProjectList.css"
import { addProject, deleteProject } from "./projectsSlice"

export const ProjectList = () => {
    const projects = useSelector(state => state.projects)
    const dispatch = useDispatch()
    // const handleOnClick = (id) => {
    //     setActiveObjectId(id);
    // };

    // const work_objects = objects.map((work_obj) => {
    //     let class_name = "objects__object block-element";
    //     if (work_obj.cars.size > 0 && work_obj.personal.size > 1)
    //         class_name += " objects__object_complete";
    //     else if (work_obj.cars.size > 0 || work_obj.personal.size > 0)
    //         class_name += " objects__object_incomplete";

    //     if (activeObjectId === work_obj.id)
    //         class_name += " objects__object_active";

    //     return (
    //         <div
    //             className={class_name + " block__element"}
    //             key={work_obj.id}
    //             onClick={handleOnClick.bind(null, work_obj.id)}
    //         >
    //             <div className="block__element-name block__sub-element">
    //                 {work_obj.name}
    //             </div>
    //             <CloseBtn id={work_obj.id} setObjects={setObjects} />
    //         </div>
    //     );
    // });

    return (
        <div className="objects block">
            {projects.map(project => {
                return (
                    <div key={project.id} className="objects__object block-element block__element">
                        <div className="block__element-name block__sub-element">{project.name}</div>
                        <DeleteButton onDelete={() => dispatch(deleteProject(project.id))} />
                    </div>
                )
            })}
            <AddButton onAdd={name => dispatch(addProject(name))} />
        </div>
    )
}
