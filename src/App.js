import React, { useReducer, useState } from "react";
import { produce } from "immer";

import "./App.css";
import { ProjectList } from "./features/projects/ProjectList";

import { projects as initialProjects } from "./data/projects";
import { cars as initialCars } from "./data/cars";
import { workers as initialWorkers } from "./data/workers";

const defaultTask = {
    name: null,
    id: null,
    isActual: null,
    workers: [],
    cars: [],
};

// new_obj.name = obj.name
//         new_obj.id = obj.id
//         new_obj.isActual = obj.isActual
//         new_obj.personal = new Set()
//         new_obj.cars = new Set()

const tasksReducer = produce((draft, action) => {
    // let i = draft.findIndex((obj) => obj.id === action.objId);
    switch (action.type) {
        // case "addCar":
        //     const { carId, name, free } = action;
        //     draft.action.carId > 0 && new_state[i].cars.add(action.carId);
        //     return new_state;
        // case "addEmployee":
        //     action.userId > 0 && new_state[i].personal.add(action.userId);
        //     return new_state;
        // case "deleteCar":
        //     new_state[i].cars.delete(action.carId);
        //     return new_state;
        // case "deleteEmployee":
        //     new_state[i].personal.delete(action.userId);
        //     return new_state;
        case "ADD_TASK":
            // const { task } = action;
            // new_state.push(action.newObject);
            // localStorage.setItem("objects", JSON.stringify(new_state));
            return draft;
        // case "DELETE_TASK":
        //     new_state = [...state];
        //     new_state.splice(i, 1);

        //     localStorage.setItem("objects", JSON.stringify(new_state));
        //     return new_state;
    }
});

// const getInitialState = () => ({
//     tasks: [defaultTask],
//     projects: Object.values(initialProjects),
//     workers: Object.values(initialWorkers),
//     cars: Object.values(initialCars),
// });

// const getInitialCars = () => {
//     const savedCars = localStorage.getItem("cars");
//     return savedCars ? JSON.parse(savedCars) : initialCars;
// };

function App() {
    // const [cars, setCars] = useState(initialCars);
    // const [workers, setWorkers] = useState(initialProjects);
    const [projects, setProjects] = useState(Object.values(initialProjects));

    // const [tasks, dispatch] = useReducer(tasksReducer, defaultTask);
    // const [activeObjectId, setActiveObjectId] = useState(0);

    return (
        <div className="App" style={{ textAlign: "left" }}>
            <div className="panel">
                <ProjectList
                    // setActiveObjectId={setActiveObjectId}
                    // activeObjectId={activeObjectId}
                    projects={projects}
                    // setObjects={setProjects}
                />
                {/* <WorkerList
                    personal={workers}
                    setPersonal={setWorkers}
                    // activeObjectId={activeObjectId}
                    // dispatch={dispatch}
                /> */}
                {/* <Cars
                    cars={cars}
                    setCars={setCars}
                    dispatch={dispatch}
                    // activeObjectId={activeObjectId}
                /> */}
            </div>
            {/* <div className="result-block">
                <Result
                    tasks={tasks}
                    // cars={cars}
                    // setCars={setCars}
                    // personal={workers}
                    // setPersonal={setPersonal}
                    // dispatch={dispatch}
                />
            </div> */}
        </div>
    );
}

export default App;
