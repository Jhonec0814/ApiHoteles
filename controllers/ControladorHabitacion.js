// Importar el servicio
// nota: un controlador puede llamar a varios servicios

import { ServicioHabitacion } from "../services/ServicioHabitacion.js"

//CONTROLADOR TIENE LA LOGICA 
//DEL NEGOCIO
export class ControladorHabitacion{

    constructor(){}

    async insertar(request,response){ 
        let servicio = new ServicioHabitacion()
        let datosPeticion=request.body //Recibo datos BODY
        try{
        await servicio.registrar(datosPeticion)
        response.status(200).json({
            mensaje:"exito en el ingreso de datos",
            datosIngresados:[],
            estado:true
        })
        }catch(error){
            response.status(400).json({
                mensaje:"fallo en el ingreso de datos"+error,
                datosIngresados:[],
                estado:false
            })
        }
    }

    async buscarTodos(request,response){
        // Instancio la clase servicio para poder utilizarla
        let servicio = new ServicioHabitacion()
        try{                                            // Manejo de excepciones - para que el controlador pueda enviar una respuesta
            response.status(200).json({
            mensaje:"exito buscando la información",
            datos:await servicio.buscarTodos(),
            estado:true
        })
        }catch(error){
            response.status(400).json({
                mensaje:"fallomos buscando la información",
                datos:[],
                estado:false
            })
        }  
    }

    async buscarPorId(request,response){
        let servicio = new ServicioHabitacion()
        let id=request.params.id //El id que llega por la URL
        try{
        response.status(200).json({
            mensaje:"exito buscando habitación por id",
            datos:await servicio.buscarPorId(id),
            estado:true
        })
        }catch(error){
        response.status(400).json({
            mensaje:"fallamos buscando habitación por id",
            datos:[],
            estado:false
            })
        }
    }

    async editar(request,response){
        let servicio = new ServicioHabitacion()
        let id=request.params.id //El id que llega por la URL
        let datosPeticion=request.body //Recibo datos BODY

        try{
        await servicio.editar(id,datosPeticion)
        response.status(200).json({
            mensaje:"exito editando habitación por id",
            datos:"Datos del id: "+id,
            estado:true
        })
        }catch(error){
            response.status(400).json({
                mensaje:"fallamos editando habitación por id",
                datos:[],
                estado:false
            })
        } 
    }

    async eliminar(request,response){
        let servicio = new ServicioHabitacion()
        let id=request.params.id //El id que llega por la URL
        try{
            await servicio.eliminar(id)
            response.status(200).json({
            mensaje:"exito eliminando habitación por id",
            datos:"Datos del id: "+id,
            estado:true
        })
        }catch(error){
            response.status(400).json({
                mensaje:"fallamos eliminando habitación por id",
                datos:[],
                estado:false
            })
        }
    }
}