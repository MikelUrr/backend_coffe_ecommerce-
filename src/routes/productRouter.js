import productApiController from "../controllers/productController/productApiController.js";
import { Router } from 'express';


const router = Router();

router.get("/", (req, res) => {
  productApiController.getAllProducts(req, res);
}

);
router.get("/:id", (req, res) => {
  productApiController.getProductById(req, res);
}

);

router.get("/category/:category", (req, res) => {
  productApiController.getProductByCategory(req, res);
}

);
router.get("/categories", (req, res) => {
  productApiController.getAllCategories(req, res);
}

);

router.post("/", (req, res) => {
  productApiController.createProduct(req, res);
}

);

router.put("/:id", (req, res) => {
  productApiController.updateProduct(req, res);
}

);

router.post("/active", (req, res) => {
  productApiController.deactivateProduct(req, res);
}

);

router.delete("/:id", (req, res) => {
  productApiController.removeProduct(req, res);
}

);

export default router;