import React, { useState } from "react"
import { useDispatch } from "react-redux"

import { RadioButtonsGroup } from "components/RadioButtonsGroup"
import { TextField } from "components/TextField"
import { Checkbox } from "components/Checkbox"

import { workerAdded } from "./workersSlice"

import "./AddWorkerForm.css"

const defaultValues = {
    firstName: "",
    lastName: "",
    address: "",
    isGeodesist: false,
    region: "N",
    group: "M",
}

export const AddWorkerForm = () => {
    const dispatch = useDispatch()
    const [values, setValues] = useState(defaultValues)

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(workerAdded(values))
        setValues(defaultValues)
    }

    const handleChange = (name, value) => {
        setValues(prevState => ({ ...prevState, [name]: value }))
    }

    return (
        <div>
            <form action="/" onSubmit={handleSubmit} className="add-user-form">
                <TextField
                    name="lastName"
                    placeholder="Фамилия"
                    required
                    value={values.lastName}
                    onChange={handleChange}
                />
                <TextField
                    name="firstName"
                    placeholder="Имя"
                    required
                    value={values.firstName}
                    onChange={handleChange}
                />
                <TextField
                    name="address"
                    placeholder="Адрес"
                    required
                    value={values.address}
                    onChange={handleChange}
                />

                <RadioButtonsGroup
                    name="region"
                    label="Регион"
                    onChange={handleChange}
                    checkedValue={values.region}
                    values={[
                        { value: "N", label: "Север" },
                        { value: "S", label: "Юг" },
                    ]}
                />

                <RadioButtonsGroup
                    name="group"
                    label="Группа"
                    onChange={handleChange}
                    checkedValue={values.group}
                    values={[
                        { value: "M", label: "Исаков" },
                        { value: "K", label: "Игнатьев" },
                    ]}
                />

                <Checkbox
                    name="isGeodesist"
                    label="Геодезист"
                    onChange={handleChange}
                    checked={values.isGeodesist}
                />

                <button className="add-user-form__submit">Добавить</button>
            </form>
        </div>
    )
}
