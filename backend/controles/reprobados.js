import {modeloreprobados} from "../models/reprobados.model.js"

modeloreprobados.create({
    name:"Diego",
    apepat:"Salvador",
    apemat:"ramirez",
    edad:21
})

const test=()=>({
    console.log("llamando al controller")
})