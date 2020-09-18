import React from 'react'

function ObjectBlock ({object, cars, handleNameClick, handleCarClick, personal}){
    const object_cars = [...object.cars].map(carId => cars.find(car => car.id === carId))
    const object_personal = [...object.personal].map(userId => personal.find(users => users.id === userId))
    
    return (
        <div className="result__object" key={object.id}>
            <div className="result__object-name">
                {object.name}
            </div>
            <div className="result__object-cars">
                {object_cars.map(car => (
                    <div 
                        className="result__car"
                        key={car.id}
                        onClick={handleCarClick.bind(null, object.id, car.id)}
                    > 
                        {car.name} /
                    </div>
                ))}
            </div>
            <div className="result__object-personal">
                {object_personal.map(person => (
                    <div 
                        className="result__employee"
                        key={person.id} 
                        onClick={handleNameClick.bind(null, object.id, person.id)}
                    >
                        {person.last} {person.first.slice(0, 1)}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ObjectBlock