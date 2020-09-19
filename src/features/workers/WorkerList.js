import React, { useState } from "react"
import "./WorkerList.css"
import { WorkerListItem } from "./WorkerListItem"
import { useDispatch, useSelector } from "react-redux"
import { AddWorker } from "./AddWorker"

// function sorting(сoef, setCoef, property, data, setData) {
//     const newData = [...data]
//     const sortingFn = (a, b) => (a[property] > b[property] ? 1 * сoef : -1 * сoef)
//     setData(newData.sort(sortingFn))
//     setCoef(-сoef)
// }

export const WorkerList = () => {
    // useDispatch()
    const workers = useSelector(state => state.workers)
    // const [nameSortDirection, setNameSortDirection] = useState(1)
    // const [groupSortDirection, setGroupSortDirection] = useState(1)
    // const [regionSortDirection, setRegionSortDirection] = useState(1)
    // const [adressSortDirection, setAdressSortDirection] = useState(1)
    const [formVisibility, toggleFormVisibility] = useState(false)

    // const onEmployeeClick = (id, evt) => {
    //     if (activeObjectId < 1) return
    //     const personal_copy = personal.map(person => {
    //         if (person.id === id) person.isFree = false
    //         return person
    //     })
    //     dispatch({ type: "addEmployee", userId: id, objId: activeObjectId })
    //     setPersonal(personal_copy)
    // }

    // const onNameClick = () => {
    //     sorting(nameSortDirection, setNameSortDirection, "last", personal, setPersonal)
    // }

    // const onGroupClick = () => {
    //     sorting(groupSortDirection, setGroupSortDirection, "group", personal, setPersonal)
    // }

    // const onRegionClick = () => {
    //     sorting(regionSortDirection, setRegionSortDirection, "region", personal, setPersonal)
    // }

    // const onAdressClick = () => {
    //     sorting(adressSortDirection, setAdressSortDirection, "adress", personal, setPersonal)
    // }

    return (
        <div className="personal block" style={{ textAlign: "left" }}>
            <div className="personal-header personal__employee block__element">
                <div className="personal__name block__sub-element">Имя</div>
                <div className="personal__group block__sub-element">Г</div>
                <div className="personal__region block__sub-element">Р</div>
                <div className="personal__adress block__sub-element">Адрес</div>
            </div>
            {workers.map(worker => (
                <WorkerListItem key={worker.id} worker={worker} />
            ))}
            <button onClick={() => toggleFormVisibility(!formVisibility)}>
                {formVisibility ? "Скрыть форму" : "Добавить сотрудника"}
            </button>
            {formVisibility && <AddWorker />}
        </div>
    )
}
