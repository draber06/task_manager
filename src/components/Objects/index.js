import React from 'react'
import CloseBtn from './__CloseBtn'
import AddObjectBtn from './__AddObjectBtn'
import './index.css'

function Objects ({setActiveObjectId, activeObjectId, objects, setObjects}){
    const handleOnClick = (id) => {
        setActiveObjectId(id)
    }

    const work_objects = objects
        .map( work_obj => {
            let class_name = "objects__object block-element"
            if (work_obj.cars.size > 0 && work_obj.personal.size > 1)
                class_name += " objects__object_complete"
            else if (work_obj.cars.size > 0 || work_obj.personal.size > 0)
                class_name += " objects__object_incomplete"
                
            if(activeObjectId === work_obj.id)
                class_name += " objects__object_active"

            return (
                <div 
                    className={class_name + " block__element"}
                    key={work_obj.id}
                    onClick={handleOnClick.bind(null, work_obj.id)}
                >
                    <div className="block__element-name block__sub-element">
                        {work_obj.name}
                    </div>
                    <CloseBtn id={work_obj.id} setObjects={setObjects} />
                </div>
            )
        })

    return (
        <div className="objects block">
            {work_objects}
            <AddObjectBtn data={objects} setData={setObjects} />
        </div>
    )
}

export default Objects