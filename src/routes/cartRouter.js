import cartApiController from "../controllers/cartController/cartApiController.js";
import { Router } from 'express';
const router = Router();

router.post("/", (req, res) => {
  cartApiController.addtoCart(req, res);
}
    
    );

router.get("/", (req, res) => {
    cartApiController.getCartbyUser(req, res);
    }
        
        );

router.delete("/:id", (req, res) => {
    cartApiController.removeCart(req, res);
    }
            
            );

router.put("/", (req, res) => {
    cartApiController.updateCartQuantity(req, res);
    }
                    
                    );

export default router;