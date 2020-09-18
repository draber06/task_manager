import React, { useState } from "react"

export const AddButton = ({ onAdd }) => {
    const [value, setValue] = useState("")

    const onSubmit = e => {
        e.preventDefault()

        if (!value.trim()) {
            return
        }

        onAdd(value)
        setValue("")
    }

    const onChange = e => setValue(e.target.value)

    return (
        <div>
            <form action="/" onSubmit={onSubmit}>
                <input onChange={onChange} value={value} type="text" />
                <button>Добавить</button>
            </form>
        </div>
    )
}
