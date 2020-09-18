import React, { useState } from "react";

function AddButton({ onDataNameTextChange, handleAddBtnClick, value }) {
    return (
        <div>
            <form action="/" onSubmit={handleAddBtnClick}>
                <input
                    onChange={onDataNameTextChange}
                    value={value}
                    type="text"
                />
                <button>Добавить</button>
            </form>
        </div>
    );
}

export default AddButton;
