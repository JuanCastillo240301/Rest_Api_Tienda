import {metodo_pago} from '../models/metodo_pago.js';
import { producto } from '../models/producto.js';

export const getMetodosPago = async(req,res) => {
    try {
        //throw new Error('query fail')
        const Metodo_pago = await metodo_pago.findAll() 
        res.json(Metodo_pago)
    } catch (error) {
        return res.status(500).json({message: error.message}); 
    }
    };
    
    export const createMetodoPago = async(req,res) => {
        const {metodop} = req.body
    try {
        
        const newmetodo_pago = await metodo_pago.create({
            metodop,  
        })
    
        res.json(newmetodo_pago)
    } catch (error) {
        return res.status(500).json({message: error.message}); 
    }
    };
    
    export const updateMetodoPago = async(req,res) => {
        try {
            //throw new Error('query fail')
            const {id} = req.params;
            const {metodop} = req.body;
            
            const Metodo_pago = await metodo_pago.findByPk(id)
            Metodo_pago.metodop = metodop
            await Metodo_pago.save();
            res.json(Metodo_pago);
        } catch (error) {
            return res.status(500).json({message: error.message}); 
        }
        };
    
    export const deleteMetodoPago = async(req,res) => {
        try {
            //throw new Error('query fail')
            const {id} = req.params;
            await metodo_pago.destroy({
                where:{
                    id
                },
            });
            res.sendStatus(204);
        } catch (error) {
            return res.status(500).json({message: error.message}); 
        }
        };
    
        export const getMetodoPago = async(req,res) => {
            try {
                //throw new Error('query fail')
                const {id} = req.params;
                const Metodo_pago = await metodo_pago.findOne({
                    where:{
                        id
                    }
                })
                if (!Metodo_pago) {
                    return res.status(404).json({message: "Categoria_p no existe"});      
                }
                res.json(Metodo_pago);
    
    
            } catch (error) {
                return res.status(500).json({message: error.message}); 
            }
            };