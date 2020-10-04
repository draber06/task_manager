import React, { useState } from "react"
import { useSelector } from "react-redux"

import { WorkerListItem } from "./WorkerListItem"
import { AddWorkerForm } from "./AddWorkerForm"
import "./WorkerList.css"

import { selectFreeWorkers } from "features/tasks/tasksSlice"

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
    const workers = useSelector(selectFreeWorkers)

    const [formVisibility, toggleFormVisibility] = useState(false)

    const [order, setOrder] = useState("asc")
    const [orderBy, setOrderBy] = useState("lastName")

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
            {stableSort(Object.values(workers), getComparator(order, orderBy)).map(worker => (
                <WorkerListItem key={worker.id} id={String(worker.id)} />
            ))}
            <button onClick={() => toggleFormVisibility(!formVisibility)}>
                {formVisibility ? "Скрыть форму" : "Добавить сотрудника"}
            </button>
            {formVisibility && <AddWorkerForm />}
        </div>
    )
}
