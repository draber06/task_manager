import React from "react"

export const TextField = ({ field, onChange, value }) => {
    const { name, placeholder, required } = field

    const handleChange = ({ target: { name, value } }) => onChange(name, value)

    return (
        <input
            className="add-user-form__input"
            name={name}
            onChange={handleChange}
            value={value}
            placeholder={placeholder}
            required={required}
        />
    )
}
