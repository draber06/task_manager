import React from 'react'
import './closeBtn.css'

function CloseBtn ({data, setData, id, name}){
    const handleCloseBtnClick = () => {
        const confirmation = window.confirm('Удалить?')
        if(!confirmation) return
        const ind = data.findIndex(element => element.id === id)
        const newData = [...data]
        newData.splice(ind, 1)
        setData(newData)
        localStorage.setItem(name, JSON.stringify(newData))
    }

    return (
        <div className="close-btn" onClick={handleCloseBtnClick}></div>
    )
}

export default CloseBtn