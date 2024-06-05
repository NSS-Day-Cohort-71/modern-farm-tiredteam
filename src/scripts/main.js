import { createPlan } from './plan.js'
import { createAsparagus } from './seeds/asparagus.js'
import { createCorn } from './seeds/corn.js'
import { createPotato } from './seeds/potato.js'
import { createSoybean } from './seeds/soybean.js'
import { createSunflower } from './seeds/sunflower.js'
import { createWheat } from './seeds/wheat.js'

import { plantSeeds } from './tractor.js'

console.log("Welcome to the main module")

const yearlyPlan = createPlan()

const seeds = plantSeeds(yearlyPlan)
