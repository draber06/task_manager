import React, {useState} from 'react'

function AddBtn ({onDataNameTextChange, handleAddBtnClick, value}){
    return (
        <div>
            <form action="/" onSubmit={handleAddBtnClick}>
                <input onChange={onDataNameTextChange} value={value} type="text"/>
                <button>Добавить</button>
            </form>
        </div>
    )
}

export default AddBtn