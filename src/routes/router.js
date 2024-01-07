import { Router } from 'express';
import userRouter from "./userRouter.js"
import productRouter from "./productRouter.js"



const router = Router();

router.use ('/user', userRouter);

router.use ('/product', productRouter);






export default router;