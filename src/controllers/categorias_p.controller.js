import {categoria_p} from '../models/categoria_p.js';
import { producto } from '../models/producto.js';

export const getCategorias = async(req,res) => {
try {
    //throw new Error('query fail')
    const categorias_p = await categoria_p.findAll() 
    res.json(categorias_p)
} catch (error) {
    return res.status(500).json({message: error.message}); 
}
};

export const createCategoria = async(req,res) => {
    const {categoria} = req.body
try {
    
    const newcategoria = await categoria_p.create({
        categoria,  
    })

    res.json(newcategoria)
} catch (error) {
    return res.status(500).json({message: error.message}); 
}
};

export const updateCategorias = async(req,res) => {
    try {
        //throw new Error('query fail')
        const {id} = req.params;
        const {categoria} = req.body;
        
        const Categoria = await categoria_p.findByPk(id)
        Categoria.categoria = categoria
        await Categoria.save();
        res.json(Categoria);
    } catch (error) {
        return res.status(500).json({message: error.message}); 
    }
    };

export const deleteCategorias = async(req,res) => {
    try {
        //throw new Error('query fail')
        const {id} = req.params;
        await categoria_p.destroy({
            where:{
                id
            },
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message}); 
    }
    };

    export const getCategoria = async(req,res) => {
        try {
            //throw new Error('query fail')
            const {id} = req.params;
            const Categoria_p = await categoria_p.findOne({
                where:{
                    id
                }
            })
            if (!Categoria_p) {
                return res.status(404).json({message: "Categoria_p no existe"});      
            }
            res.json(Categoria_p);


        } catch (error) {
            return res.status(500).json({message: error.message}); 
        }
        };

        export const getCategoriaProducto = async(req,res) => {
            try {
                const {id} = req.params;
               const Producto = await producto.findAll({
                    attributes: ["id", "nombre_p", "descripcion", "precio", "imagen","id_categoria","id_vendedor"],
                    where: { id_categoria: id },
                  });
                  res.json(Producto);
            } catch (error) {
                return res.status(500).json({message: error.message}); 
            }
            };