import React, { useState } from "react"
import { useDispatch } from "react-redux"

import { RadioButtonsGroup } from "components/RadioButtonsGroup"
import { TextField } from "components/TextField"
import { addWorker } from "./workersSlice"
import { Checkbox } from "components/Checkbox"
import "./AddWorker.css"

const defaultValues = {
    firstName: "",
    lastName: "",
    address: "",
    isGeodesist: false,
    region: "N",
    group: "M",
}

const schema = [
    {
        type: "text",
        name: "lastName",
        placeholder: "Фамилия",
        required: true,
    },
    {
        type: "text",
        name: "firstName",
        placeholder: "Имя",
        required: true,
    },
    {
        type: "text",
        name: "address",
        placeholder: "Адрес",
        required: true,
    },
    {
        type: "radio",
        name: "region",
        label: "Регион",
        values: [
            { value: "N", label: "Север" },
            { value: "S", label: "Юг" },
        ],
    },
    {
        type: "radio",
        name: "group",
        label: "Группа",
        values: [
            { value: "M", label: "Исаков" },
            { value: "K", label: "Игнатьев" },
        ],
    },
    {
        type: "checkbox",
        name: "isGeodesist",
        label: "Геодезист",
    },
]

export const AddWorker = () => {
    const dispatch = useDispatch()
    const [values, setValues] = useState(defaultValues)

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(addWorker(values))
        setValues(defaultValues)
    }

    const handleChange = (name, value) => {
        setValues(prevState => ({ ...prevState, [name]: value }))
    }

    return (
        <div>
            <form action="/" onSubmit={handleSubmit} className="add-user-form">
                {schema.map(field => {
                    if (field.type === "text") {
                        return (
                            <TextField
                                key={field.name}
                                field={field}
                                value={values[field.name]}
                                onChange={handleChange}
                                required
                            />
                        )
                    }

                    if (field.type === "radio") {
                        return (
                            <RadioButtonsGroup
                                key={field.name}
                                field={field}
                                onChange={handleChange}
                                checkedValue={values[field.name]}
                            />
                        )
                    }

                    if (field.type === "checkbox") {
                        return (
                            <Checkbox
                                key={field.name}
                                field={field}
                                onChange={handleChange}
                                checked={values[field.name]}
                            />
                        )
                    }

                    return null
                })}

                <button className="add-user-form__submit">Добавить</button>
            </form>
        </div>
    )
}
