import mongoose from "mongoose";
import mongodb from "../config/mongodb.js";



const cartSchema = new mongoose.Schema({
    user: {
        type: "string",
        required: true,
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product', 
        required: true,
    },
    quantity: {
        type: "number",
        required: true,
    },
    size: {
        type: "string",
        required: true,
    },
    chocolate: {
        type: "object",
        
    },

    cartActive: {
        type: Boolean,
        default: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },


});

const cartModel = mongoose.model('cart', cartSchema);

export default cartModel;