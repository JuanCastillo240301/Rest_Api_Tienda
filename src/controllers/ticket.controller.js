import {ticket} from '../models/ticket.js';

export const gettickets = async(req,res) => {
try {
    //throw new Error('query fail')
    const tickets = await ticket.findAll() 
    res.json(tickets)
} catch (error) {
    return res.status(500).json({message: error.message}); 
}
};

export const createtickets = async(req,res) => {
    const {id_producto,id_compra,cantidadp,precioxcantidad} = req.body
try {
    
    const newticket= await ticket.create({
        id_producto,
        id_compra,
        cantidadp,
        precioxcantidad
    })

    res.json(newticket)
} catch (error) {
    return res.status(500).json({message: error.message}); 
}
};

export const updatetickets = async(req,res) => {
    try {
        //throw new Error('query fail')
        const {id_producto} = req.params;
        const {id_compra,cantidadp,precioxcantidad} = req.body       
        const Ticket = await ticket.findByFk(id_usuario)
        Ticket.id_producto = id_producto
        Ticket.id_compra = id_compra
        Ticket.cantidadp = cantidadp
        Ticket.precioxcantidad = precioxcantidad
        await Ticket.save();
        res.json(Ticket);
    } catch (error) {
        return res.status(500).json({message: error.message}); 
    }
    };

export const deletetickets = async(req,res) => {
    try {
        //throw new Error('query fail')
        const {id_usuario} = req.params;
        await usuario.destroy({
            where:{
                id_usuario
            },
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message}); 
    }
    };

    export const getCticket = async(req,res) => {
        try {
            //throw new Error('query fail')
            const {id_usuario} = req.params;
            const Cupon = await cupon_usuario.findOne({
                where:{
                    id_usuario
                }
            })
            if (!Cupon) {
                return res.status(404).json({message: "Rol no existe"});      
            }
            res.json(Cupon);


        } catch (error) {
            return res.status(500).json({message: error.message}); 
        }
        };

