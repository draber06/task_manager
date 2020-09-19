import React from "react"

export const TextField = ({ field, onChange, value }) => {
    const { name, placeholder, required } = field

    return (
        <input
            className="add-user-form__input"
            name={name}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            required={required}
        />
    )
}
