import cartModel from "../../models/cartModel.js";
import productController from "../productController/productController.js";

const addtoCart = async (user, productId, quantity, size, chocolate, price) => {
    try {
      const cart = await cartModel.create({
        user,
        product: productId,
        quantity,
        size,
        chocolate,
        price,
      });
      return cart;
    } catch (error) {
      throw new Error(error);
    }
  };
const getCartbyUser = async (user) => {
    try {
        const cart = await cartModel.find({ user }).populate('product');
        return cart;
    } catch (error) {
        throw new Error(error);
    }
}

const removeCart = async (id) => {
    try {
        const cart = await cartModel.findByIdAndDelete(id);
        return cart;
    } catch (error) {
        throw new Error(error);
    }
}

const deactivateCart = async (user) => {
    try {
        const cart = await cartModel.updateMany({user},{cartActive:false});
        return cart;
    } catch (error) {
        throw new Error(error);
    }
}

const activateCart = async (user) => {
    try {
        const cart = await cartModel.updateMany({user},{cartActive:true});
        return cart;
    } catch (error) {
        throw new Error(error);
    }
}



const updateCartQuantity = async (id,quantity) => {
    try {
        const cart= await cartModel.findByIdAndUpdate(id,{quantity});
        return cart;
    }

    catch (error) {
        throw new Error(error);
    }
}

const updateCart = async (id,product,quantity,size,chocolate) => {
try {
    const cart= await cartModel.findByIdAndUpdate(id,{product,quantity,size,chocolate});
    return cart;
}
catch (error) {
    throw new Error(error);
}
}

export default {addtoCart,getCartbyUser,removeCart,deactivateCart,activateCart,updateCart, updateCartQuantity};