import productModel from "../../models/productModel.js";


const getAllProducts = async () => {
    try {
        const products = await productModel.find({ productActive: true });
        return [null, products];
    } catch (error) {
        console.error(error);
        return [error.message, null];
    }
}

const getProductById = async (productId) => {
    try {
        if (productId === "categories") {
            const categories = await getAllCategories();
            return [null, categories];
        }

        const product = await productModel.findById(productId);

        if (!product) {
            return ["Product not found", null];
        }

        return [null, product];
    } catch (error) {
        console.error(error);
        return [error.message, null];
    }
}

const getProductByCategory = async (category) => {
    try {
        const product = await productModel.find({ category: category }).exec();
        return [null, product];
    } catch (error) {
        console.error(error);
        return [error.message, null];
    }
}

const createProduct = async (name, subtitle,description, price,stock, category, productActive, photo ) => {

    try {
        if (photo===undefined || "" || null ) {
            photo = "https://s3-alpha-sig.figma.com/img/ed3a/ccd1/e17dba2913eecc3ef460c07589f31137?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eHfxqpIzVOcEc4IH5CQTSGMouVrNk0B2bp9gn2lpDTUQ6C-Pr7yrr8E~huwi5qyMavYZ7IbiEhm4vGURuMBEMKg0q-f0oxJdjZsNYvo-2a0fgSKulZH9rlz2hldLrYWx54zAqWgpXGRG3km8iWXE9TBjCUICcXevD0ZNUxQSK8nQQdhqr-fw5LvJfbwmZ0S4UNG8YpG1PDp6nEFVbpIHM0DrCycaLLZXy5PcsMkG6~YaVgD~Dpbb6rEUpKbaJUWg5kSS5Cmu0CG90gq83lKQPxygRhXjuyfu52jc7l8hfB9rMWTJOGSgiatS62EinbnuWZcZRMI8QnJuKHvO98XOhQ__"
        }
        const newProduct = new productModel({
            name: name,
            subtitle:subtitle,
            description: description,
            price: price,
            stock: stock,
            photo: photo,
            category: category,
        });

        const savedProduct = await newProduct.save();

        return [null, savedProduct];
    } catch (error) {
        console.error(error);
        return [error.message, null];
    }
};

const updateProduct = async (id, name,subtitle, description, price, stock, photo, category) => {
    if (id === undefined) {
        const error = "Invalid ID";
        return [error, null];
    }

    try {
        let existingProduct = await productModel.findById(id);

        if (!existingProduct) {
            const error = "Product not found";
            return [error, null];
        }

        existingProduct.name = name;
        existingProduct.subtitle = subtitle;    
        existingProduct.description = description;
        existingProduct.price = price;
        existingProduct.stock = stock;
        existingProduct.photo = photo;
        existingProduct.category = category;

        const updatedProduct = await existingProduct.save();

        return [null, updatedProduct];
    } catch (error) {
        console.error(error);
        return [error.message, null];
    }
}

const deactivateProduct = async (id, productActive) => {
    if (id === undefined) {
        const error = "Invalid ID";
        return [error, null];
    }

    try {
        const existingProduct = await productModel.findById(id);

        if (!existingProduct) {
            const error = "Product not found";
            return [error, null];
        }

        existingProduct.productActive = productActive;

        await existingProduct.save();

        return [null, existingProduct];
    } catch (error) {
        console.error(error);
        return [error.message, null];
    }
}

const removeProduct = async (id) => {
    try {
        const product = await productModel.findById(id);

        if (!product) {
            const error = "No product found with that ID";
            return [error, null];
        }

        await product.deleteOne();

        return [null, product];
    } catch (error) {
        console.error(error);
        return [error.message, null];
    }
};

const getAllCategories = async () => {
    try {
        const categories = await productModel.distinct("category", { productActive: true });
        return [null, categories];
    } catch (error) {
        console.error(error);
        return [error.message, null];
    }
}

export default { getAllProducts, getProductById, getProductByCategory, createProduct, updateProduct, deactivateProduct, removeProduct, getAllCategories };