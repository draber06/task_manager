import React from 'react'
import CloseBtn from '../CloseBtn'
import AddCarBtn from './__AddCarBtn'

function Cars ({activeObjectId, cars, setCars, dispatch, ...props}){
    const handleCarClick = (id) => {
        if(activeObjectId < 1) return
        const cars_copy = cars.map(car => {
            if(car.id === id)
                car.isFree = false
            return car
        })
        setCars(cars_copy)
        
        dispatch({type: "addCar", carId: id, objId: activeObjectId})
    }

    const cars_elements = cars.map(car => (
        car.isFree &&
        <div 
            className="cars__car block__element"
            key={car.id}
            onClick={handleCarClick.bind(null, car.id)}
        >
            <div className="cars__car-name block__element-name block__sub-element">
                {car.name}
            </div>
            <CloseBtn data={cars} setData={setCars} id={car.id} name={"cars"} />
        </div>
    ))

    return (
        <div className="cars block">
            {cars_elements}
            <AddCarBtn data={cars} setData={setCars} />
        </div>
    )
}

export default Cars