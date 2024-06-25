import express from "express";
const router = express.Router();
import { signup, login } from "../controllers/authController.js";
import verifyToken from "../middlewares/authMiddleware.js";

router.post("/signup", signup);
router.post("/login", login);

// Example protected route
router.get("/home", verifyToken, (req, res) => {
  // Send some protected data
  res.json({
    message: "This is protected data for the home component.",
    user: req.user,
  });
});
export default router;
