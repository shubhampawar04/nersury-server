import express from "express";
import dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose";

import { getHealth } from "./controllers/health.js";
import { postPlant,
     getPlants, 
     getPlantId, 
     putPlantsId, 
     deletePlantId
     } from "./controllers/plant.js";

import { handelPageNotFound } from "./controllers/errors.js"


const app = express()
app.use(express.json())

const dbConnection = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URL)

    if(conn){
        console.log(`MangoDB Connected 🧧`)
    }
    else{
        console.log(`MangoDB Not Connected ❌`)
    }
}
dbConnection();

app.get("/health", getHealth)

app.post("/plant", postPlant)
app.get("/plants", getPlants)
app.get("/plant/:id", getPlantId)
app.put("/plant/:id", putPlantsId)
app.delete("/plant/:id",deletePlantId)
app.use("*", handelPageNotFound)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
