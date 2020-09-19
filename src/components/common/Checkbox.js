import React from "react"

export const Checkbox = ({ field, checked, onChange }) => {
    const { label, name } = field

    return (
        <div className="add-user-form__checkbox">
            <input type="checkbox" id={name} name={name} checked={checked} onChange={onChange} />
            <label htmlFor={name}>{label}</label>
        </div>
    )
}
