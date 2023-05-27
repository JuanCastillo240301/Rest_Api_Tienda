import {cupon_desc} from '../models/cupones_desc.js';
//import { usuario } from '../models/usuario.js';

export const getcupones_desc = async(req,res) => {
try {
    //throw new Error('query fail')
    const cupones_desc = await cupon_desc.findAll() 
    res.json(cupones_desc)
} catch (error) {
    return res.status(500).json({message: error.message}); 
}
};

export const createcupon_desc = async(req,res) => {
    const {descuento,dias_validez,activo,codigo} = req.body
try {
    
    const newcupon_desc = await cupon_desc.create({
        descuento,
        dias_validez,
        activo,
        codigo
    })

    res.json(newcupon_desc)
} catch (error) {
    return res.status(500).json({message: error.message}); 
}
};

export const updatecupon_desc = async(req,res) => {
    try {
        //throw new Error('query fail')
        const {id} = req.params;
        const {descuento,dias_validez,activo,codigo} = req.body
        
        const Cupon_desc = await cupon_desc.findByPk(id)
        Cupon_desc.descuento = descuento
        Cupon_desc.dias_validez = dias_validez
        Cupon_desc.activo = activo
        Cupon_desc.codigo = codigo
        await Cupon_desc.save();
        res.json(Cupon_desc);
    } catch (error) {
        return res.status(500).json({message: error.message}); 
    }
    };

export const deletecupon_desc = async(req,res) => {
    try {
        //throw new Error('query fail')
        const {id} = req.params;
        await cupon_desc.destroy({
            where:{
                id
            },
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message}); 
    }
    };

    export const getcupon_desc = async(req,res) => {
        try {
            //throw new Error('query fail')
            const {codigo} = req.body;
            const Cupon_desc = await cupon_desc.findOne({
                where:{
                    codigo
                }
            })
            if (!Cupon_desc) {
                return res.status(404).json({message: "Cupon_desc no existe"});      
            }
            res.json(Cupon_desc);


        } catch (error) {
            return res.status(500).json({message: error.message}); 
        }
        };

