import {orden_de_compra} from '../models/ordenes_de_compra.js';
import { producto } from '../models/producto.js';
export const getordenes_de_compra = async(req,res) => {
try {
    //throw new Error('query fail')
    const Orden_de_compra = await orden_de_compra.findAll() 
    res.json(Orden_de_compra)
} catch (error) {
    return res.status(500).json({message: error.message}); 
}
};

export const createordenes_de_compra = async(req,res) => {
    const {fecha,total,a_domicilio,direccion,clave_compra,id_usuario,id_vendedor,id_metodop} = req.body
try {
    
    const neworden_de_compra = await orden_de_compra.create({
        fecha,
        total,
        a_domicilio,
        direccion,
        clave_compra,
        id_usuario,
        id_vendedor,
        id_metodop
    })

    res.json(neworden_de_compra)
} catch (error) {
    return res.status(500).json({message: error.message}); 
}
};

export const updateordenes_de_compra = async(req,res) => {
    try {
        //throw new Error('query fail')
        const {id} = req.params;
        const {fecha,total,a_domicilio,direccion,clave_compra,id_usuario,id_vendedor,id_metodop} = req.body
        const Orden_de_compra = await orden_de_compra.findByPk(id)
        Orden_de_compra.fecha = fecha
        Orden_de_compra.total = total
        Orden_de_compra.a_domicilio = a_domicilio
        Orden_de_compra.direccion = direccion
        Orden_de_compra.clave_compra = clave_compra
        Orden_de_compra.id_usuario = id_usuario
        Orden_de_compra.id_vendedor = id_vendedor
        Orden_de_compra.id_metodop = id_metodop
        await Orden_de_compra.save();
        res.json(Orden_de_compra);
    } catch (error) {
        return res.status(500).json({message: error.message}); 
    }
    };

export const deleteordenes_de_compra = async(req,res) => {
    try {
        //throw new Error('query fail')
        const {id} = req.params;
        await orden_de_compra.destroy({
            where:{
                id
            },
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message}); 
    }
    };

    export const getorden_de_compra = async(req,res) => {
        try {
            //throw new Error('query fail')
            const {id} = req.params;
            const User = await orden_de_compra.findOne({
                where:{
                    id
                }
            })
            if (!User) {
                return res.status(404).json({message: "Vendedor no existe"});      
            }
            res.json(User);


        } catch (error) {
            return res.status(500).json({message: error.message}); 
        }
        };
