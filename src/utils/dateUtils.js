export const getTomorrowDate = () => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)

    return tomorrow
}

export const getTomorrowWeekDay = () => {
    // you can use window.navigator.language to set real locale weekday
    const tomorrow = getTomorrowDate()
    return tomorrow.toLocaleString("ru", { weekday: "long" })
}

export const capitalize = s => s[0].toUpperCase() + s.slice(1)
