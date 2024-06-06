const field = [];

export const addPlant = (seed) => {
    if (Array.isArray(seed)) {
        for (const index of seed) {
            field.push(index)
        }
    } else {
        field.push(seed)
    }
}

export const usePlants = () => {
    return field.slice();
}