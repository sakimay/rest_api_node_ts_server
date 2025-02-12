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
        const product = await Product.findByPk(id,{
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'availability']
            }
        });
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