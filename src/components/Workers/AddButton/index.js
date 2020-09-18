import React, { useState, useEffect } from "react";
import "./index.css";

function AddButton({ data, setData }) {
    const [userFirst, setUserFirst] = useState("");
    const [userLast, setUserLast] = useState("");
    const [userAdress, setUserAdress] = useState("");
    const [userRegion, setUserRegion] = useState("Север");
    const [isGeodesist, setIsGeodesist] = useState(false);
    const [group, setGroup] = useState("Исаков");

    const handleAddBtnClick = (e) => {
        e.preventDefault();
        const dataMaxId = data.reduce((a, b) => (a.id > b.id ? a.id : b.id));
        const newItem = {
            id: dataMaxId + 1,
            first: userFirst,
            last: userLast,
            adress: userAdress,
            region: userRegion,
            isFree: true,
            group,
            isGeodesist,
        };

        const newData = [...data];
        newData.push(newItem);
        setData(newData);

        localStorage.setItem("personal", JSON.stringify(newData));
    };

    const onFirstNameTextChange = (e) => {
        setUserFirst(e.target.value);
    };

    const onLastNameTextChange = (e) => {
        setUserLast(e.target.value);
    };

    const onAdressTextChange = (e) => {
        setUserAdress(e.target.value);
    };

    const onRegionChange = (e) => {
        setUserRegion(e.target.value);
    };

    const handleCheckboxChange = (e) => {
        setIsGeodesist(!isGeodesist);
    };

    const onGroupChange = (e) => {
        setGroup(e.target.value);
    };

    return (
        <div>
            <form
                action="/"
                onSubmit={handleAddBtnClick}
                className="add-user-form"
            >
                <input
                    className="add-user-form__input"
                    onChange={onLastNameTextChange}
                    value={userLast}
                    placeholder="Фамилия"
                />
                <input
                    className="add-user-form__input"
                    onChange={onFirstNameTextChange}
                    value={userFirst}
                    placeholder="Имя"
                />
                <input
                    className="add-user-form__input"
                    onChange={onAdressTextChange}
                    value={userAdress}
                    placeholder="Адрес"
                />
                <div className="add-user-form__radio" onChange={onRegionChange}>
                    <div>
                        <input
                            type="radio"
                            name="region"
                            value="N"
                            id="region2"
                            defaultChecked
                        />
                        <label htmlFor="region2">Север</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="region"
                            value="S"
                            id="region1"
                        />
                        <label htmlFor="region1">Юг</label>
                    </div>
                </div>
                <div className="add-user-form__radio" onChange={onGroupChange}>
                    <div>
                        <input
                            type="radio"
                            name="group"
                            value="М"
                            id="group1"
                            defaultChecked
                        />
                        <label htmlFor="group1">Исаков</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="group"
                            value="К"
                            id="group2"
                        />
                        <label htmlFor="group2">Игнатьев</label>
                    </div>
                </div>
                <div className="add-user-form__checkbox">
                    <input
                        type="checkbox"
                        id="isGeodesist"
                        checked={isGeodesist}
                        onChange={handleCheckboxChange}
                    />
                    <label htmlFor="isGeodesist">Геодезист</label>
                </div>
                <button className="add-user-form__submit">Добавить</button>
            </form>
        </div>
    );
}

export default AddButton;
