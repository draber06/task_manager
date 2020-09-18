import React, {useReducer, useState } from 'react';
import './App.css';
import Personal from './components/Personal';
import Objects from './components/Objects';
import {objects} from './Objects'
import {cars as cars_db} from './cars'
import {personal as personal_db} from './personal'
import Cars from './components/Cars';
import Result from './components/Result';

cars_db.forEach((car, ind) => {
    cars_db[ind].isFree = true
});

personal_db.forEach((person, ind) => {
    personal_db[ind].isFree = true
});

let work_objects = objects
    .map(obj => {
        let new_obj = {}
        new_obj.name = obj.name
        new_obj.id = obj.id
        new_obj.isActual = obj.isActual
        new_obj.personal = new Set()
        new_obj.cars = new Set()
        return new_obj
    })

function reducer (state, action) {
    let i = state.findIndex(obj => obj.id === action.objId)
    let new_state = [...state]
    switch (action.type) {
        case "addCar":
            action.carId > 0 && new_state[i].cars.add(action.carId)
            return new_state
        case "addEmployee":
            action.userId > 0 && new_state[i].personal.add(action.userId)
            return new_state
        case "deleteCar":
            new_state[i].cars.delete(action.carId)
            return new_state
        case "deleteEmployee":
            new_state[i].personal.delete(action.userId)
            return new_state
        case "addObject":
            new_state = [...state]
            new_state.push(action.newObject)
            localStorage.setItem('objects', JSON.stringify(new_state))
            return new_state
        case "deleteObject":
            new_state = [...state]
            new_state.splice(i, 1)
            localStorage.setItem('objects', JSON.stringify(new_state))
            return new_state
        default:
            return state;
    }
}

function App() {
    const [cars, setCars] = useState(cars_db)
    const [personal, setPersonal] = useState(personal_db)
    const [adresses, dispatch] = useReducer(reducer, work_objects)
    const [activeObjectId, setActiveObjectId] = useState(0)

    return (
        <div className="App" style={{textAlign: "left"}}>
            <div className="panel">
                <Objects 
                    setActiveObjectId={setActiveObjectId} 
                    activeObjectId={activeObjectId}
                    objects={adresses} 
                    setObjects={dispatch}
                />
                <Personal 
                    personal={personal}
                    setPersonal={setPersonal}
                    activeObjectId={activeObjectId}
                    dispatch={dispatch}
                />
                <Cars 
                    cars={cars}
                    setCars={setCars}
                    dispatch={dispatch}
                    activeObjectId={activeObjectId} 
                />
            </div>
            <div className="result-block">
                <Result 
                    objects={adresses} 
                    cars={cars}
                    setCars={setCars}
                    personal={personal}
                    setPersonal={setPersonal}
                    dispatch={dispatch}
                />
            </div>
        </div>
    );
}

export default App;
