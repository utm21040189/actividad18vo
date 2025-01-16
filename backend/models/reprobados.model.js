import { Schema, model } from "mongoose";

const EsquemaReprobados = new Schema(
    name: String,
    apepat:String,
    apemat:String,
    edad:Number

)
const modeloreprobados = new model("tabla de alumnos que reprobadon",EsquemaReprobados )