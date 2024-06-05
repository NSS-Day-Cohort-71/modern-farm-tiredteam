field = [];

export const addPlant = (seeds) => {
    if (Array.isArray(seeds)) {
        for ( seed of seeds) {
            field.push(seed)
        }
    } else {
        field.push(seed)
    }

}

export const usePlants = () => {
    return field.slice();
}