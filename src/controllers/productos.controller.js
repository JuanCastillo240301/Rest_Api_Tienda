import {producto} from '../models/producto.js';
import {categoria_p} from '../models/categoria_p.js';

export const getProductos = async(req,res) => {
try {
    //throw new Error('query fail')
    const productos = await producto.findAll({
        include: [
          {
            model: categoria_p,
            attributes: ['id', 'categoria'],
          },
        ],
        raw: true,
      });
  
    res.json(productos)
} catch (error) {
    return res.status(500).json({message: error.message}); 
}
};

export const createProducto = async(req,res) => {
    const {nombre_p,descripcion,precio,imagen,id_categoria,id_vendedor} = req.body
try {
    
    const newproducto = await producto.create({
        nombre_p,
        descripcion,
        precio,
        imagen,
        id_categoria,
        id_vendedor,
    })

    res.json(newproducto)
} catch (error) {
    return res.status(500).json({message: error.message}); 
}
};

export const updateProductos = async(req,res) => {
    try {
        //throw new Error('query fail')
        const {id} = req.params;
        const {nombre_p,descripcion,precio,imagen,id_categoria,id_vendedor} = req.body        
        const Producto = await producto.findByPk(id)
        Producto.nombre_p = nombre_p
        Producto.descripcion = descripcion
        Producto.precio = precio
        Producto.imagen = imagen
        Producto.id_categoria = id_categoria
        Producto.id_vendedor = id_vendedor
        await Producto.save();
        res.json(Producto);
    } catch (error) {
        return res.status(500).json({message: error.message}); 
    }
    };

export const deleteProductos = async(req,res) => {
    try {
        //throw new Error('query fail')
        const {id} = req.params;
        await producto.destroy({
            where:{
                id
            },
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message}); 
    }
    };

    export const getProducto = async(req,res) => {
        try {
            //throw new Error('query fail')
            const {id} = req.params;
            const User = await producto.findOne({
                include: [
                    {
                      model: categoria_p,
                      attributes: ['id', 'categoria'],
                    },
                  ],
                  raw: true,
                where:{
                    id
                }
                
            })
            if (!User) {
                return res.status(404).json({message: "producto no existe"});      
            }
            res.json(User);


        } catch (error) {
            return res.status(500).json({message: error.message}); 
        }
        };

