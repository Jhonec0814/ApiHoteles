import { ServicioReserva } from "../services/ServicioReserva.js"

export class ControladorReserva{


    constructor(){}

    insertar(request,response){ //Recibir los datos de pa peticion
        let servicio = new ServicioReserva()
        let datosReserva=request.body//Recibo datos

        try{
            await servicio.registrar(datosReserva)
            response.status(200).json({
                mensaje:"exito en el ingreso de datos",
                datosIngresados:[],
                estado:true
            })
            }catch(error){
                response.status(400).json({
                    mensaje:"fallo en el ingreso de datos",
                    datosIngresados:[],
                    estado:false
                })
            }
    }

    buscarPorId(request,response){
        let servicio = new ServicioReserva()
        let id=request.params.id//Id que llega por la URL

        try{
            response.status(200).json({
                mensaje:"exito buscando reserva por id",
                datos:await servicio.buscarPorId(id),
                estado:true
            })
            }catch(error){
            response.status(400).json({
                mensaje:"fallamos buscando reserva por id",
                datos:[],
                estado:false
                })
            }
    }

    editar(request,response){
        let servicio = new ServicioReserva()
        let id=request.params.id //id que llega por la URL
        let datosReserva=request.body //RECIBE DEL BODY
        try{
            await servicio.editar(id,datosReserva)
            response.status(200).json({
                mensaje:"exito editando reserva por id",
                datos:"Datos del id: "+id,
                estado:true
            })
            }catch(error){
                response.status(400).json({
                    mensaje:"fallamos editando reserva por id",
                    datos:[],
                    estado:false
                })
            }     
    }

    eliminar(request,response){
        let servicio = new ServicioReserva()
        let id=request.params.id //id que llega por la URL
        try{
            await servicio.eliminar(id)
            response.status(200).json({
            mensaje:"exito eliminando reserva por id",
            datos:"Datos del id: "+id,
            estado:true
        })
        }catch(error){
            response.status(400).json({
                mensaje:"fallamos eliminando reserva por id",
                datos:[],
                estado:false
            })
        }
    }
}