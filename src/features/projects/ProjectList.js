import React from "react"
import { useDispatch, useSelector } from "react-redux"

import { AddButton } from "components/AddButton"
import { ProjectListItem } from "./ProjectListItem"
import "./ProjectList.css"

import { addProject } from "./projectsSlice"

export const ProjectList = () => {
    const dispatch = useDispatch()

    const projectIds = useSelector(state => state.projects.entities.allIds)

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
            {projectIds.map(id => (
                <ProjectListItem key={id} id={id} />
            ))}
            <AddButton onAdd={name => dispatch(addProject(name))} />
        </div>
    )
}
