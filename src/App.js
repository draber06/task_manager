import React from "react"
import "./App.css"
import { ProjectList } from "features/projects/ProjectList"
import { CarList } from "features/cars/CarList"

function App() {
    return (
        <div className="App" style={{ textAlign: "left" }}>
            <div className="panel">
                <ProjectList />
                {/* <WorkerList
                    personal={workers}
                    setPersonal={setWorkers}
                    // activeObjectId={activeObjectId}
                    // dispatch={dispatch}
                /> */}
                <CarList />
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
    )
}

export default App
