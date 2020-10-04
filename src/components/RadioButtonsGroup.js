import React from "react"

export const RadioButtonsGroup = ({ label, name, values, onChange, checkedValue }) => {
    const handleChange = ({ target: { name, value } }) => onChange(name, value)

    return (
        <div className="add-user-form__radio">
            <p>{label}</p>
            {values.map(({ value, label }, index) => {
                const id = `${value}${index + 1}`
                return (
                    <div key={id}>
                        <input
                            type="radio"
                            name={name}
                            value={value}
                            id={id}
                            checked={checkedValue === value}
                            onChange={handleChange}
                        />
                        <label htmlFor={id}>{label}</label>
                    </div>
                )
            })}
        </div>
    )
}
