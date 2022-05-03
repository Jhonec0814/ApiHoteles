//Importar Mongoose
import mongoose from "mongoose";

//Creamos una constante para crear el MODELO DE DATOS

const Schema=mongoose.Schema

//Construyo mi modelo o Esquema habitación

const Habitacion=new Schema({
    nombre:{
        type:String,
        required:true
    },
    foto:{
        type:String,
        required:true
    },
    descripcion:{type:String,required:true},
    precio:{type:Number,required:true}
})

export const modeloHabitacion=mongoose.model('habitaciones',Habitacion)