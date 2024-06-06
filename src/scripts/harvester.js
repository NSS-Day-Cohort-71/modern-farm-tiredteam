export const harvestPlants = (growingPlantsArr) => {
    let plantsToHarvest = []
    for (const plant of growingPlantsArr) {
        if (plant.type === "Corn") {
            plant.output = plant.output / 2
            for (let i = 0; i < plant.output; i++) {
                plantsToHarvest.push(plant)
            }
        } else {
            for (let i = 0; i < plant.output; i++) {
                plantsToHarvest.push(plant)
        }
        }
    }

    return plantsToHarvest
}