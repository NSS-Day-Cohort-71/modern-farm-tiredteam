import { createPlan } from './plan.js'
import { plantSeeds } from './tractor.js'
import { harvestPlants } from './harvester.js'

const yearlyPlan = createPlan()
const growingPlants = plantSeeds(yearlyPlan)
const harvestedPlants = harvestPlants(growingPlants)
console.log(harvestedPlants)




