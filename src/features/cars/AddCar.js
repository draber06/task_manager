import React, { useState } from "react"
import { useDispatch } from "react-redux"

import { addCar } from "./carsSlice"
// import AddBtn from "../../common/AddButton";

export const AddCar = () => {
    const [car, setCar] = useState("")
    const dispatch = useDispatch()

    const onSubmit = e => {
        e.preventDefault()

        if (!car.trim()) {
            return
        }

        dispatch(addCar(car))
        setCar("")
    }

    const onChange = e => setCar(e.target.value)

    return (
        <div>
            <form action="/" onSubmit={onSubmit}>
                <input onChange={onChange} value={car} type="text" />
                <button>Добавить</button>
            </form>
        </div>
    )
}
