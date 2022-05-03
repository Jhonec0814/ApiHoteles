import express from 'express'

//Importo el CONTROLADORHABITACION
import {ControladorHabitacion} from '../controllers/ControladorHabitacion.js'

export let rutas=express.Router()


//CREO UN OBJETO DE LA CLASE CONTORLADORHABITACION
let controaldorHabitacion=new ControladorHabitacion()

//DEFINO LAS RUTAS

//RUTAS PARA LOS SERVICIOS DE HABITACIONES

rutas.post('/api/v1/habitaciones/',controaldorHabitacion.insertar)
rutas.get('/api/v1/habitaciones/', controaldorHabitacion.buscarTodos)
rutas.get('/api/v1/habitaciones/:id/', controaldorHabitacion.buscarPorId)
rutas.put('/api/v1/habitaciones/:id/', controaldorHabitacion.editar)
rutas.delete('/api/v1/habitaciones/:id/', controaldorHabitacion.eliminar)

//RUTAS PARA LOS SERVICIOS DE RESERVAS
//1.Servicio Agregar reserva
rutas.post('/api/v1/reservas/', function (req, res) {
    res.send('Hello World')
})
//2.Servicio buscar reserva por id
rutas.get('/api/v1/reservas/id/', function (req, res) {
    res.send('Hello World')
})
//3.Servicio editar reserva por id
rutas.put('/api/v1/reservas/id/', function (req, res) {
    res.send('Hello World')
})
//4.Servicio editar reserva por id
rutas.delete('/api/v1/reservas/id/', function (req, res) {
    res.send('Hello World')
})