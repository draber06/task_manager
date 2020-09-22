import React from "react"
import { useSelector } from "react-redux"

import { TaskListItem } from "./TaskListItem"
import "./TaskList.css"

import { selectTaskIds } from "./tasksSlice"
import { capitalize, getTomorrowDate, getTomorrowWeekDay } from "utils/dateUtils"

export const TaskList = props => {
    const taskIds = useSelector(selectTaskIds)

    const tomorrowWeekDay = capitalize(getTomorrowWeekDay())
    const tomorrowDate = getTomorrowDate()

    return (
        <div className="result-block">
            <div className="result">
                <div className="result_date">{`${tomorrowDate.toLocaleDateString()} (${tomorrowWeekDay})`}</div>
                {taskIds.length > 0 && taskIds.map(id => <TaskListItem key={id} id={id} />)}
            </div>
        </div>
    )
}
