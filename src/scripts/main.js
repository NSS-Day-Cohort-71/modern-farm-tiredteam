import { createPlan } from './plan.js'
import { addPlant } from "./field.js"
import { usePlants } from "./field.js";
import { plantSeeds } from './tractor.js'


const yearlyPlan = createPlan()

const seeds = plantSeeds(yearlyPlan)
