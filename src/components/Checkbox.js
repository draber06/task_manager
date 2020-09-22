import React from "react"

export const Checkbox = ({ field, checked, onChange }) => {
    const { label, name } = field

    const handleChange = ({ target: { name, checked } }) => onChange(name, checked)

    return (
        <div className="add-user-form__checkbox">
            <input
                type="checkbox"
                id={name}
                name={name}
                checked={checked}
                onChange={handleChange}
            />
            <label htmlFor={name}>{label}</label>
        </div>
    )
}
