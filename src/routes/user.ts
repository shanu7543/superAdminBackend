import { Router } from "express";
import userController, {  getUser } from "../controllers/userController";

const router = Router();

router.post("/login", userController.login);
router.get("/getuser",getUser)

export default router;
