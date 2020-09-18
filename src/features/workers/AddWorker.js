import React, { useState } from "react"
import { useDispatch } from "react-redux"
import "./addWorker.css"
import { addWorker } from "./workersSlice"

export const AddWorker = () => {
    const dispatch = useDispatch()
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        address: "",
        isGeodesist: false,
        region: "N",
        group: "M",
    })

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(addWorker(state))
        console.log(`-----state = `, JSON.stringify(state, null, 4))
    }

    const handleChange = ({ target: { name, value } }) => {
        setState(prevState => {
            return { ...prevState, [name]: value }
        })
    }

    const handleCheckboxChange = ({ target: { name, checked } }) => {
        setState(prevState => {
            return { ...prevState, [name]: checked }
        })
    }

    return (
        <div>
            <form action="/" onSubmit={handleSubmit} className="add-user-form">
                <input
                    className="add-user-form__input"
                    name="lastName"
                    onChange={handleChange}
                    value={state.lastName}
                    placeholder="Фамилия"
                />
                <input
                    className="add-user-form__input"
                    name="firstName"
                    onChange={handleChange}
                    value={state.firstName}
                    placeholder="Имя"
                />
                <input
                    className="add-user-form__input"
                    name="address"
                    onChange={handleChange}
                    value={state.address}
                    placeholder="Адрес"
                />
                <div className="add-user-form__radio">
                    <div>
                        <input
                            type="radio"
                            name="region"
                            value="N"
                            id="region2"
                            checked={state.region === "N"}
                            onChange={handleChange}
                        />
                        <label htmlFor="region2">Север</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="region"
                            value="S"
                            id="region1"
                            checked={state.region === "S"}
                            onChange={handleChange}
                        />
                        <label htmlFor="region1">Юг</label>
                    </div>
                </div>
                <div className="add-user-form__radio">
                    <div>
                        <input
                            type="radio"
                            name="group"
                            value="M"
                            id="group1"
                            onChange={handleChange}
                            checked={state.group === "M"}
                        />
                        <label htmlFor="group1">Исаков</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="group"
                            value="K"
                            id="group2"
                            onChange={handleChange}
                            checked={state.group === "K"}
                        />
                        <label htmlFor="group2">Игнатьев</label>
                    </div>
                </div>
                <div className="add-user-form__checkbox">
                    <input
                        type="checkbox"
                        id="isGeodesist"
                        name="isGeodesist"
                        checked={state.isGeodesist}
                        onChange={handleCheckboxChange}
                    />
                    <label htmlFor="isGeodesist">Геодезист</label>
                </div>
                <button className="add-user-form__submit">Добавить</button>
            </form>
        </div>
    )
}
