import React, {useState, useEffect} from 'react'
import AddBtn from '../../AddBtn'

function AddCarBtn ({data, setData, value}){
    const [carName, setDataName] = useState("")

    const handleAddBtnClick = (e) => {
        e.preventDefault()
        const dataMaxId = data.reduce((a, b) => a.id > b.id ? a.id : b.id)
        const newItem = {id: dataMaxId + 1, name: carName, isFree: true}
        const newData = [...data]
        newData.push(newItem)
        setData(newData)

        localStorage.setItem('cars', JSON.stringify(newData))
    }

    const onDataNameTextChange = (e) => {
        setDataName(e.target.value)
    }
    return (
        <AddBtn 
            handleAddBtnClick = {handleAddBtnClick}
            onDataNameTextChange = {onDataNameTextChange}
            value = {value}
        />
    )
}

export default AddCarBtn