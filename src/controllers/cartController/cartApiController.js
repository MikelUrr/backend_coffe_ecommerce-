import cartController from "./cartController.js";
import userApiController from "../userController/userApiController.js";

const addtoCart = async (req, res) => {
    try {
        const user= await userApiController.getIdFromToken(req.headers.cookie)
        const {product,quantity,size,chocolate,price} = req.body;
        const cart = await cartController.addtoCart(user,product,quantity,size,chocolate,price);
        console.log("holaaaaaaaaa",cart)
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

const getCartbyUser = async (req, res) => {
    try {
        const user= await userApiController.getIdFromToken(req.headers.cookie)
        const cart = await cartController.getCartbyUser(user);
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

const removeCart = async (req, res) => {
    try {
        const id = req.params.id;
        const cart = await cartController.removeCart(id);
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

const updateCartQuantity = async (req, res) => {
    try {
       
        const {id, quantity} = req.body;
        if (quantity<1){
            const deletecart = await cartController.removeCart(id);
            res.status(200).json(deletecart);
            return;
        }
        const cart = await cartController.updateCartQuantity(id,quantity);
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

export default {addtoCart,getCartbyUser,removeCart,updateCartQuantity};