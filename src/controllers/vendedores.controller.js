import {vendedor} from '../models/vendedor.js';

export const getvendedores = async(req,res) => {
try {
    //throw new Error('query fail')
    const vendedores = await vendedor.findAll() 
    res.json(vendedores)
} catch (error) {
    return res.status(500).json({message: error.message}); 
}
};

export const createvendedores = async(req,res) => {
    const {curp,rfc,ine,cuenta_banco,id_usuario} = req.body
try {
    
    const newvendedor = await vendedor.create({
        curp,
        rfc,
        ine,
        cuenta_banco,
        id_usuario
    })

    res.json(newvendedor)
} catch (error) {
    return res.status(500).json({message: error.message}); 
}
};

export const updatevendedores = async(req,res) => {
    try {
        //throw new Error('query fail')
        const {id} = req.params;
        const {curp,rfc,ine,cuenta_banco,id_usuario} = req.body        
        const Vendedor = await vendedor.findByPk(id)
        Vendedor.curp = curp
        Vendedor.rfc = rfc
        Vendedor.ine = ine
        Vendedor.cuenta_banco = cuenta_banco
        Vendedor.id_usuario = id_usuario
        await Vendedor.save();
        res.json(Vendedor);
    } catch (error) {
        return res.status(500).json({message: error.message}); 
    }
    };

export const deletevendedores = async(req,res) => {
    try {
        //throw new Error('query fail')
        const {id} = req.params;
        await vendedor.destroy({
            where:{
                id
            },
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message}); 
    }
    };

    export const getvendedor = async(req,res) => {
        try {
            //throw new Error('query fail')
            const {id} = req.params;
            const User = await vendedor.findOne({
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

