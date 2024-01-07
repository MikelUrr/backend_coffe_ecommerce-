import exp from "constants";
import productController from "./productController.js";


const getAllProducts = async (req, res) => {
    try {
        const errorMessage = req.query.error;
        const [error, products] = await productController.getAllProducts();
        if (error) {
            return res.status(500).json({ error: error });
        }

        res.status(200).json({ products, errorMessage, session: req.session });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error. Please try again later." });
    }
}

const getProductById = async (req, res) => {
    const id = req.params.id;
    try {
        const [error, product] = await productController.getProductById(id);
        if (error) {
            return res.status(404).json({ error: error });
        }
        res.status(200).json({ product });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error. Please try again later." });
    }
}

const getProductByCategory = async (req, res) => {
    const category = req.params.category;
    try {
        const [error, product] = await productController.getProductByCategory(category);
        if (error) {
            return res.status(404).json({ error: error });
        }
        res.status(200).json({ product });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error. Please try again later." });
    }
}

const getAllCategories = async (req, res) => {
    try {
        const [error, categories] = await productController.getAllCategories();
        if (error) {
            return res.status(404).json({ error: error });
        }
        res.status(200).json({ categories });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error. Please try again later." });
    }
}

const createProduct = async (req, res) => {
    const { name, subtitle,description, price, stock,category, productActive } = req.body;
    const photo = req.file;
    try {
        const [error, product] = await productController.createProduct(name, subtitle,description, price,stock, category, productActive, photo);
        if (error) {
            return res.status(400).json({ error });
        }
        res.status(201).json({ product });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error. Please try again later." });
    }
}

const updateProduct = async (req, res) => {
    const id = req.params.id;
    const { name, subtitle,description, price, stock, category } = req.body;
    const photo = req.file;
    try {
        const [error, product] = await productController.updateProduct(id, name, subtitle,description, price, stock, category, photo);
        if (error) {
            return res.status(400).json({ error });
        }
        res.status(200).json({ product });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error. Please try again later." });
    }
}

const removeProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const [error, product] = await productController.removeProduct(id);
        if (error) {
            return res.status(400).json({ error });
        }
        res.status(200).json({ product });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error. Please try again later." });
    }
}

const deactivateProduct = async (req, res) => {
    const id = req.params.id;
    const { productActive } = req.body;
    try {
        const [error, product] = await productController.deactivateProduct(id, productActive);
        if (error) {
            return res.status(400).json({ error });
        }
        res.status(200).json({ product });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error. Please try again later." });
    }

}

export default {
    getAllProducts,
    getProductById,
    getProductByCategory,
    getAllCategories,
    createProduct,
    updateProduct,
    removeProduct,
    deactivateProduct
}