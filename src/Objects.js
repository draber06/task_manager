let objects = [
    {
        id: 1,
        name: "Витино",
    },
    {
        id: 2,
        name: "Москва-Рига",
    },
    {
        id: 3,
        name: "Запорожское-Приозерск",
    },
    {
        id: 4,
        name: "Гарькавого",
    },
]

let objectsInLocalStorage = localStorage.getItem('objects')
if (objectsInLocalStorage){
    objects = JSON.parse(objectsInLocalStorage)

    for (const object of objects){
        object.cars = new Set()
        object.personal = new Set()
    }
}

export {objects}