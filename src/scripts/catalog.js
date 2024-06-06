export const catalog = (harvestedPlants) => {
    let harvestedPlantedHTML = '';
    
    for (const plants of harvestedPlants) {
        harvestedPlantedHTML += `
            <section class="plant">${plants.type}</section>
        `
    }

    return harvestedPlantedHTML
}