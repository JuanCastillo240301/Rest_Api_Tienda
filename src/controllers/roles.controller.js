import {rol} from '../models/rol.js';
import { usuario } from '../models/usuario.js';

export const getRoles = async(req,res) => {
try {
    //throw new Error('query fail')
    const roles = await rol.findAll() 
    res.json(roles)
} catch (error) {
    return res.status(500).json({message: error.message}); 
}
};

export const createRol = async(req,res) => {
    const {nombre_rol} = req.body
try {
    
    const newrol = await rol.create({
        nombre_rol,  
    })

    res.json(newrol)
} catch (error) {
    return res.status(500).json({message: error.message}); 
}
};

export const updateRoles = async(req,res) => {
    try {
        //throw new Error('query fail')
        const {id} = req.params;
        const {nombre_rol} = req.body;
        
        const Rol = await rol.findByPk(id)
        Rol.nombre_rol = nombre_rol
        await Rol.save();
        res.json(Rol);
    } catch (error) {
        return res.status(500).json({message: error.message}); 
    }
    };

export const deleteRoles = async(req,res) => {
    try {
        //throw new Error('query fail')
        const {id} = req.params;
        await rol.destroy({
            where:{
                id
            },
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message}); 
    }
    };

    export const getRol = async(req,res) => {
        try {
            //throw new Error('query fail')
            const {id} = req.params;
            const Rol = await rol.findOne({
                where:{
                    id
                }
            })
            if (!Rol) {
                return res.status(404).json({message: "Rol no existe"});      
            }
            res.json(Rol);


        } catch (error) {
            return res.status(500).json({message: error.message}); 
        }
        };

        export const getRolUsuario = async(req,res) => {
            try {
                const {id} = req.params;
                const Usuario = await usuario.findAll({
                    attributes: ["id", "nombre_usu", "apellidos_usu", "password", "email", "telefono", "ciudad", "estado", "direccion", "codigo_postal", "id_rol"],
                    where: { id_rol: id },
                  });
                  res.json(Usuario);
            } catch (error) {
                return res.status(500).json({message: error.message}); 
            }
            };