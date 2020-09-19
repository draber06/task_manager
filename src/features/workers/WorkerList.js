import React, { useState } from "react"
import "./WorkerList.css"
import { WorkerListItem } from "./WorkerListItem"
import { useDispatch, useSelector } from "react-redux"
import { AddWorker } from "./AddWorker"

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1
    }
    if (b[orderBy] > a[orderBy]) {
        return 1
    }
    return 0
}

function getComparator(order, orderBy) {
    return order === "desc"
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy)
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index])
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0])
        if (order !== 0) return order
        return a[1] - b[1]
    })
    return stabilizedThis.map(el => el[0])
}

const headers = [
    { id: "lastName", label: "Имя", className: "personal__name" },
    { id: "group", label: "Г", className: "personal__group" },
    { id: "region", label: "Р", className: "personal__region" },
    { id: "address", label: "Адрес", className: "personal__adress" },
]

export const WorkerList = () => {
    // useDispatch()
    const workers = useSelector(state => state.workers)

    const [formVisibility, toggleFormVisibility] = useState(false)

    const [order, setOrder] = useState("asc")
    const [orderBy, setOrderBy] = useState("lastName")

    // const onEmployeeClick = (id, evt) => {
    //     if (activeObjectId < 1) return
    //     const personal_copy = personal.map(person => {
    //         if (person.id === id) person.isFree = false
    //         return person
    //     })
    //     dispatch({ type: "addEmployee", userId: id, objId: activeObjectId })
    //     setPersonal(personal_copy)
    // }

    const handleRequestSort = property => event => {
        const isAsc = orderBy === property && order === "asc"
        setOrder(isAsc ? "desc" : "asc")
        setOrderBy(property)
    }

    return (
        <div className="personal block" style={{ textAlign: "left" }}>
            <div className="personal-header personal__employee block__element">
                {headers.map(({ className, label, id }) => {
                    return (
                        <div
                            key={id}
                            className={`${className} block__sub-element ${
                                orderBy === id
                                    ? `sorted ${order === "asc" ? "ascending" : "descending"}`
                                    : ""
                            }`}
                            onClick={handleRequestSort(id)}
                        >
                            {label}
                        </div>
                    )
                })}
            </div>
            {stableSort(workers, getComparator(order, orderBy)).map(worker => (
                <WorkerListItem key={worker.id} worker={worker} />
            ))}
            <button onClick={() => toggleFormVisibility(!formVisibility)}>
                {formVisibility ? "Скрыть форму" : "Добавить сотрудника"}
            </button>
            {formVisibility && <AddWorker />}
        </div>
    )
}
