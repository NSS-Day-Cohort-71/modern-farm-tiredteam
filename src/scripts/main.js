import { createPlan } from './plan.js'
import { plantSeeds } from './tractor.js'
import { harvestPlants } from './harvester.js'
import { catalog } from './catalog.js'

const yearlyPlan = createPlan()
const growingPlants = plantSeeds(yearlyPlan)
const harvestedPlants = harvestPlants(growingPlants)
const HTML = catalog(harvestedPlants)

const renderPlantsToDOM = document.querySelector(".container")

renderPlantsToDOM.innerHTML = HTML;




