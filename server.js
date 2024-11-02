// mongodb+srv://Satya:dbzsuperNo.1@recipecluster.4svsc.mongodb.net/recipes?retryWrites=true&w=majority&appName=RecipeCluster

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/users.js";
import { recipesRouter } from "./routes/recipes.js";
import dotenv from "dotenv"

dotenv.config()

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

const URL = process.env.URL

mongoose.connect(URL)

app.listen(3001, () => console.log("Server Up!"));