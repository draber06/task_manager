import React from "react"
import "./DeleteButton.css"

export const DeleteButton = ({ onDelete }) => {
    const handleCloseBtnClick = () => {
        const confirmation = window.confirm("Удалить?")
        if (!confirmation) return

        onDelete()
    }

    return <div className="close-btn" onClick={handleCloseBtnClick}></div>
}
