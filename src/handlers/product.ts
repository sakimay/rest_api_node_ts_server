import { Request, Response } from "express";
import Product from "../models/Product.model";

export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.findAll({
            order: [
                ['price', 'DESC']
            ],
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'availability']
            }
        });
        res.json({ data: products });
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los productos' });
    }
}

export const getProducById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);
        if (!product) {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.json({ data: product });
    } catch (error) {
        res.status(500).json({ message: 'Error al buscar producto' });
    }
}

export const createProduct = async (req: Request, res: Response) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json({ data: product });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el producto' });
    }
};

export const updateProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);
        if (!product) {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
        await product.update(req.body);
        await product.save();
        res.json({ data: product });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el producto' });
    }
}

export const updateAvailability = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);
        if (!product) {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
        
        product.availability = req.body.availability;
        console.log(product.availability);
        
        await product.save();
        res.json({ data: product });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la disponibilidad' });
    }
}

export const deleteProduct = async (req: Request, res: Response) => {    
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);
        if (!product) {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
        await product.destroy();
        res.json({ message: 'Producto eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el producto' });
    }
}