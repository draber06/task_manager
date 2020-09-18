let cars = [
    {
        id: 1,
        name: "Ларгус1",
    },
    {
        id: 2,
        name: "Ларгус2",
    },
    {
        id: 3,
        name: "Ларгус3",
    },
    {
        id: 4,
        name: "Форд",
    },
    {
        id: 5,
        name: "Газель",
    },
]

let carsInLocalStorage = localStorage.getItem('cars')
if (carsInLocalStorage)
    cars = JSON.parse(carsInLocalStorage)

export {cars}