import {cupon_usuario} from '../models/cupones_usuario.js';

export const getcupones = async(req,res) => {
try {
    //throw new Error('query fail')
    const cupones = await cupon_usuario.findAll() 
    res.json(cupones)
} catch (error) {
    return res.status(500).json({message: error.message}); 
}
};

export const createCupon = async(req,res) => {
    const {id_usuario,id_cupon,canjeado} = req.body
try {
    
    const newcupon = await cupon_usuario.create({
        id_usuario,
        id_cupon,
        canjeado 
    })

    res.json(newcupon)
} catch (error) {
    return res.status(500).json({message: error.message}); 
}
};

export const updateCupon = async(req,res) => {
    try {
        //throw new Error('query fail')
        const {id_usuario} = req.params;
        const {id_cupon,canjeado} = req.body        
        const cupon = await cupon_usuario.findByFk(id_usuario)
        cupon.id_usuario = id_usuario
        cupon.id_cupon = id_cupon
        cupon.canjeado = canjeado
        await cupon.save();
        res.json(cupon);
    } catch (error) {
        return res.status(500).json({message: error.message}); 
    }
    };

export const deleteCupones = async(req,res) => {
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

    export const getCupon = async(req,res) => {
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

