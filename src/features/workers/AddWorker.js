import React, { useState } from "react"
import { useDispatch } from "react-redux"
import "./addWorker.css"
import { addWorker } from "./workersSlice"

export const AddWorker = () => {
    const dispatch = useDispatch()
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        address: "",
        isGeodesist: false,
        region: "N",
        group: "M",
    })

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(addWorker(values))
        console.log(`-----state = `, JSON.stringify(values, null, 4))
    }

    const handleInputChange = ({ target: { name, value } }) => {
        setValues({ ...values, [name]: value })
    }

    const handleCheckboxChange = ({ target: { name, checked } }) => {
        setValues({ ...values, [name]: checked })
    }

    return (
        <div>
            <form action="/" onSubmit={handleSubmit} className="add-user-form">
                <input
                    className="add-user-form__input"
                    name="lastName"
                    onChange={handleInputChange}
                    value={values.lastName}
                    placeholder="Фамилия"
                />
                <input
                    className="add-user-form__input"
                    name="firstName"
                    onChange={handleInputChange}
                    value={values.firstName}
                    placeholder="Имя"
                />
                <input
                    className="add-user-form__input"
                    name="address"
                    onChange={handleInputChange}
                    value={values.address}
                    placeholder="Адрес"
                />
                <div className="add-user-form__radio">
                    <div>
                        <input
                            type="radio"
                            name="region"
                            value="N"
                            id="region2"
                            checked={values.region === "N"}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="region2">Север</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="region"
                            value="S"
                            id="region1"
                            checked={values.region === "S"}
                            onChange={handleInputChange}
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
                            onChange={handleInputChange}
                            checked={values.group === "M"}
                        />
                        <label htmlFor="group1">Исаков</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="group"
                            value="K"
                            id="group2"
                            onChange={handleInputChange}
                            checked={values.group === "K"}
                        />
                        <label htmlFor="group2">Игнатьев</label>
                    </div>
                </div>
                <div className="add-user-form__checkbox">
                    <input
                        type="checkbox"
                        id="isGeodesist"
                        name="isGeodesist"
                        checked={values.isGeodesist}
                        onChange={handleCheckboxChange}
                    />
                    <label htmlFor="isGeodesist">Геодезист</label>
                </div>
                <button className="add-user-form__submit">Добавить</button>
            </form>
        </div>
    )
}
