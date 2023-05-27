import {usuario} from '../models/usuario.js';

export const getUsuarios = async(req,res) => {
try {
    //throw new Error('query fail')
    const usuarios = await usuario.findAll() 
    res.json(usuarios)
} catch (error) {
    return res.status(500).json({message: error.message}); 
}
};

export const createUsuario = async(req,res) => {
    const {nombre_usu,apellidos_usu,password,email,telefono,ciudad,estado,direccion,codigo_postal} = req.body
    const id_rol=2
try {
    
    const newusuario = await usuario.create({
        nombre_usu,
        apellidos_usu,
        password,
        email,telefono,
        ciudad,estado,
        direccion,
        codigo_postal,
        id_rol  
    })

    res.json(newusuario)
} catch (error) {
    return res.status(500).json({message: error.message}); 
}
};

export const updateUsuarios = async(req,res) => {
    try {
        //throw new Error('query fail')
        const {id} = req.params;
        const {nombre_usu,apellidos_usu,password,email,telefono,ciudad,estado,direccion,codigo_postal,id_rol} = req.body;
        
        const Usuario = await usuario.findByPk(id)
        Usuario.nombre_usu = nombre_usu
        Usuario.apellidos_usu = apellidos_usu
        Usuario.password = password
        Usuario.email = email
        Usuario.telefono = telefono
        Usuario.ciudad = ciudad
        Usuario.estado = estado
        Usuario.direccion = direccion
        Usuario.codigo_postal = codigo_postal
        Usuario.id_rol = id_rol
        await Usuario.save();
        res.json(Usuario);
    } catch (error) {
        return res.status(500).json({message: error.message}); 
    }
    };

export const deleteUsuarios = async(req,res) => {
    try {
        //throw new Error('query fail')
        const {id} = req.params;
        await usuario.destroy({
            where:{
                id
            },
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message}); 
    }
    };

    export const getUsuario = async(req,res) => {
        try {
            //throw new Error('query fail')
            const {id} = req.params;
            const User = await usuario.findOne({
                where:{
                    id
                }
            })
            if (!User) {
                return res.status(404).json({message: "Rol no existe"});      
            }
            res.json(User);


        } catch (error) {
            return res.status(500).json({message: error.message}); 
        }
        };

export const login = async(req,res) => {
    const {email,password} = req.body
try {
   console.log(email) 
    const newusuario = await usuario.findOne({
        where:{
        email
        }
    })
    if(newusuario.email==email&&newusuario.password==password){
        res.json(newusuario)
    }

} catch (error) {
    return res.status(500).json({message: error.message}); 
}
};
