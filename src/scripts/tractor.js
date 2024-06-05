import { createAsparagus } from './seeds/asparagus.js'
import { createCorn } from './seeds/corn.js'
import { createPotato } from './seeds/potato.js'
import { createSoybean } from './seeds/soybean.js'
import { createSunflower } from './seeds/sunflower.js'
import { createWheat } from './seeds/wheat.js'



export const plantSeeds = (yearlyPlan) => {
    let seeds = []
    for (let i = 0; i < yearlyPlan.length; i++) {
        for (let j = 0; j < yearlyPlan[i].length; j++) {
            if (yearlyPlan[i][j] === "Asparagus") {
                seeds.push(createAsparagus())
            }
            if (yearlyPlan[i][j] === "Corn") {
                seeds.push(createCorn())
            }
            if (yearlyPlan[i][j] === "Potato") {
                seeds.push(createPotato())
            }
            if (yearlyPlan[i][j] === "Soybean") {
                seeds.push(createSoybean())
            }
            if (yearlyPlan[i][j] === "Sunflower") {
                seeds.push(createSunflower())
            }
            if (yearlyPlan[i][j] === "Wheat") {
                seeds.push(createWheat())
            }
        }
    }
    
    return seeds
   
}