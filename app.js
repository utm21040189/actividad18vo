import mongoose, { connect } from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import {test} from "../ProyectoTexto/models/reprobados.model.js";
dotenv.config();

mongoose.connect(
    process.env.url_BD
        .then(()=>{
            console.log("si funciona esta madre")
        })
        .catch(console.error();
        ())
)

const app= express();
app.use (cors())
app.listen(4000,()=>{
    console.log("si se escucha el server")
})

test()