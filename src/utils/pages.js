export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount/limit);
}

export const getPagesArray = (totlaPages) => {
    let result = [];
    for (let i = 0; i < totlaPages; i++) {
        result.push(i + 1);
    }
    return result;
}