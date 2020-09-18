import React, { useState, useEffect } from "react";
import AddBtn from "../../common/AddButton";

function AddButton({ data, setData }) {
    const [objectName, setObjectName] = useState("");

    const handleAddBtnClick = (e) => {
        e.preventDefault();
        const dataMaxId = data.reduce((a, b) => (a.id > b.id ? a.id : b.id));
        const newItem = {
            name: objectName,
            id: dataMaxId + 1,
            personal: new Set(),
            cars: new Set(),
        };
        setData({ type: "addObject", newObject: newItem });
    };

    const onDataNameTextChange = (e) => {
        setObjectName(e.target.value);
    };

    return (
        <AddBtn
            handleAddBtnClick={handleAddBtnClick}
            onDataNameTextChange={onDataNameTextChange}
            value={objectName}
        />
    );
}

export default AddButton;
