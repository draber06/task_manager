import React from "react"

export const TextField = ({ name, placeholder, required, onChange, value }) => {
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
