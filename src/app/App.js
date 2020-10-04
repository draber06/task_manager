import React from "react"

import { ProjectList } from "features/projects/ProjectList"
import { CarList } from "features/cars/CarList"
import { WorkerList } from "features/workers/WorkerList"
import { TaskList } from "features/tasks/TaskList"
import "./App.css"

function App() {
    return (
        <div className="App" style={{ textAlign: "left" }}>
            <div className="panel">
                <ProjectList />
                <WorkerList />
                <CarList />
            </div>
            <TaskList />
        </div>
    )
}

export default App
