export const normalizeById = coll => {
    return coll.reduce((byId, item) => {
        byId[item.id] = item
        return byId
    }, {})
}
