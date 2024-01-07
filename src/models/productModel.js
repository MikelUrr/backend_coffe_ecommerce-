import mongoose from "mongoose";
import mongodb from "../config/mongodb.js";



const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    subtitle: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    photo: {
        type: String
    },
    category: {
        type: String,
        required: true,
    }
    , productActive: {
        type: Boolean,
        default: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },

});

const productModel = mongoose.model('product', productSchema);

export default productModel;