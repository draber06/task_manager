import React from "react";
import CloseButton from "./CloseButton";
import AddButton from "./AddButton";
import "./index.css";

function ProjectList({ projects }) {
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
    console.log(`-----projects = `, JSON.stringify(projects, null, 4));
    return (
        <div className="objects block">
            {projects.map((project) => {
                return (
                    <div
                        key={project.id}
                        class="objects__object block-element block__element"
                    >
                        <div class="block__element-name block__sub-element">
                            {project.name}
                        </div>
                        <div class="close-btn"></div>
                    </div>
                );
            })}
            {/* <AddObjectBtn data={objects} setData={setObjects} /> */}
        </div>
    );
}

export default ProjectList;
