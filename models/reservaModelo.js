//Importar Mongoose
import mongoose from "mongoose";

//Creamos una constante para crear el MODELO DE DATOS

const Schema=mongoose.Schema

//Construyo mi modelo o Esquema reserva

const Reserva=new Schema({

    fechaIngreso:{type:Date,required:true},
    fechaSalida:{type:Date,required:true},
    nombreCliente:{type:String,required:true},
    cedulaCliente:{type:String,required:true},
    costo:{type:Number,required:true}

})

export const modeloReserva=mongoose.model('reserva',Reserva)