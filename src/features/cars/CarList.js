import { DeleteButton } from "components/common/DeleteButton"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { AddCar } from "./AddCar"
import { deleteCar } from "./carsSlice"

export const CarList = () => {
    const dispatch = useDispatch()
    const cars = useSelector(state => state.cars)
    // const handleCarClick = (id) => {
    //     if(activeObjectId < 1) return
    //     const cars_copy = cars.map(car => {
    //         if(car.id === id)
    //             car.isFree = false
    //         return car
    //     })
    //     setCars(cars_copy)

    //     dispatch({type: "addCar", carId: id, objId: activeObjectId})
    // }

    return (
        <div className="cars block">
            {cars.map(car => {
                return (
                    <div
                        className="cars__car block__element"
                        key={car.id}
                        // onClick={handleCarClick.bind(null, car.id)}
                    >
                        <div className="cars__car-name block__element-name block__sub-element">
                            {car.name}
                        </div>
                        <DeleteButton onDelete={() => dispatch(deleteCar(car.id))} />
                    </div>
                )
            })}
            <AddCar />
        </div>
    )
}
