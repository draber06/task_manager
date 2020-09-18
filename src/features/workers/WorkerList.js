import React, { useState } from "react"
import CloseBtn from "../CloseBtn"
import AddPersonalBtn from "./__AddPersonalBtn"
import "./workers.css"

function sorting(сoef, setCoef, property, data, setData) {
    const newData = [...data]
    const sortingFn = (a, b) => (a[property] > b[property] ? 1 * сoef : -1 * сoef)
    setData(newData.sort(sortingFn))
    setCoef(-сoef)
}

function Personal({ activeObjectId, setUserId, setPersonal, personal, dispatch }) {
    const [nameSortDirection, setNameSortDirection] = useState(1)
    const [groupSortDirection, setGroupSortDirection] = useState(1)
    const [regionSortDirection, setRegionSortDirection] = useState(1)
    const [adressSortDirection, setAdressSortDirection] = useState(1)
    const [isFormHidden, setIsFormHidden] = useState(true)

    const onEmployeeClick = (id, evt) => {
        if (activeObjectId < 1) return
        const personal_copy = personal.map(person => {
            if (person.id === id) person.isFree = false
            return person
        })
        dispatch({ type: "addEmployee", userId: id, objId: activeObjectId })
        setPersonal(personal_copy)
    }

    const onNameClick = () => {
        sorting(nameSortDirection, setNameSortDirection, "last", personal, setPersonal)
    }

    const onGroupClick = () => {
        sorting(groupSortDirection, setGroupSortDirection, "group", personal, setPersonal)
    }

    const onRegionClick = () => {
        sorting(regionSortDirection, setRegionSortDirection, "region", personal, setPersonal)
    }

    const onAdressClick = () => {
        sorting(adressSortDirection, setAdressSortDirection, "adress", personal, setPersonal)
    }

    const hideAndShowForm = () => {
        setIsFormHidden(!isFormHidden)
    }

    const workers = personal.map(
        (empolyee, i) =>
            empolyee.isFree && (
                <div
                    className={
                        "personal__employee block__element " +
                        (empolyee.group === "М"
                            ? "personal__employee_group1 "
                            : "personal__employee_group2 ") +
                        (empolyee.isGeodesist
                            ? "personal__employee_geodesist"
                            : "personal__employee_assistant")
                    }
                    onClick={onEmployeeClick.bind(null, empolyee.id)}
                    key={empolyee.id}
                >
                    <div className="personal__name block__sub-element">
                        {empolyee.last} {empolyee.first.slice(0, 1)}
                    </div>
                    <div className="personal__group block__sub-element">{empolyee.group}</div>
                    <div className="personal__region block__sub-element">{empolyee.region}</div>
                    <div className="personal__adress block__sub-element">{empolyee.adress}</div>
                    <div>
                        <CloseBtn
                            data={personal}
                            setData={setPersonal}
                            id={empolyee.id}
                            name="personal"
                        />
                    </div>
                </div>
            )
    )

    return (
        <div className="personal block" style={{ textAlign: "left" }}>
            <div className="personal-header personal__employee block__element">
                <div className="personal__name block__sub-element" onClick={onNameClick}>
                    Имя
                </div>
                <div className="personal__group block__sub-element" onClick={onGroupClick}>
                    Г
                </div>
                <div className="personal__region block__sub-element" onClick={onRegionClick}>
                    Р
                </div>
                <div className="personal__adress block__sub-element" onClick={onAdressClick}>
                    Адрес
                </div>
            </div>
            {workers}
            <button onClick={hideAndShowForm}>
                {isFormHidden ? "Добавить сотрудника" : "Скрыть форму"}
            </button>
            {isFormHidden || <AddPersonalBtn data={personal} setData={setPersonal} />}
        </div>
    )
}

export default Personal
