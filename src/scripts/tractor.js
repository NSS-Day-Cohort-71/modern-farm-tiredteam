import { createAsparagus } from './seeds/asparagus.js'
import { createCorn } from './seeds/corn.js'
import { createPotato } from './seeds/potato.js'
import { createSoybean } from './seeds/soybean.js'
import { createSunflower } from './seeds/sunflower.js'
import { createWheat } from './seeds/wheat.js'
import { addPlant, usePlants } from './field.js'

export const plantSeeds = (yearlyPlanArr) => {
    for (let i = 0; i < yearlyPlanArr.length; i++) {
        for (let j = 0; j < yearlyPlanArr[i].length; j++) {
            if (yearlyPlanArr[i][j] === "Asparagus") {
                // let asparagusSeed = createAsparagus()
                // addPlant(asparagusSeed)
                addPlant(createAsparagus())
            }
            if (yearlyPlanArr[i][j] === "Corn") {
                addPlant(createCorn())
            }
            if (yearlyPlanArr[i][j] === "Potato") {
               addPlant(createPotato())
            }
            if (yearlyPlanArr[i][j] === "Soybean") {
                addPlant(createSoybean())
            }
            if (yearlyPlanArr[i][j] === "Sunflower") {
                addPlant(createSunflower())
            }
            if (yearlyPlanArr[i][j] === "Wheat") {
                addPlant(createWheat())
            }
        }
    }
    
    let growingPlants = usePlants()

    return growingPlants
}