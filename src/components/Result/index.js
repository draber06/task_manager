import React from 'react'
import {WhatsappShareButton} from "react-share";
import {WhatsappIcon} from "react-share";
import ObjectBlock from './__ObjectBlock'
import './index.css'

function Result ({objects, cars, setCars, personal, setPersonal, dispatch}){
    const handleNameClick = (objId, userId) => {
        const personal_copy = personal.map(person => {
            if(person.id === userId)
                person.isFree = true
            return person
        })
        setPersonal(personal_copy)
        dispatch({type: "deleteEmployee", userId, objId})
    }

    const handleCarClick = (objId, carId) => {
        dispatch({type: "deleteCar", carId, objId})

        const cars_copy = cars.map(car => {
            if(car.id === carId)
                car.isFree = true
            return car
        })
        setCars(cars_copy)
    }

    const DAYS = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]

    const tomorrow_date = new Date(Date.now() + 86400000).toLocaleDateString()
    const tomorrow_day = DAYS[new Date(Date.now() + 86400000).getDay()]

    let text = objects
        .filter(object => object.cars.size || object.personal.size)
        .map(object => {
            let cars_names = [...object.cars].map(carId => cars.find(car => car.id === carId).name)
            let personal_names = [...object.personal].map(employeeId => {
                const person = personal.find(person => person.id === employeeId)
                return person.last + " " + person.first.slice(0, 1)
            })
            
            return (
                `*${object.name}*\r\n`+
                (cars_names.length > 0 ? `_/${cars_names.join(" / ")}/_\r\n` : "") +
                `${personal_names.join("\r\n")}` 
        )})
    text = `*${tomorrow_date} (${tomorrow_day})*\r\n\r\n` + text.join('\r\n\r\n')

    const result = objects
        .filter(object => object.cars.size || object.personal.size)
        .map(object => (
            <ObjectBlock 
                object={object} 
                handleCarClick={handleCarClick}
                handleNameClick={handleNameClick}
                cars={cars}
                personal={personal}
                key={object.id}
            />
        ))
    
    return (
        <div className="result">
            <div className="result__date">
                {tomorrow_date} ({tomorrow_day})
            </div>
            {result}
            <WhatsappShareButton url={text}>
                <WhatsappIcon />
            </WhatsappShareButton>
        </div>
    )
}

export default Result