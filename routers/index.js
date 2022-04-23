import express from "express";
import {
  // getUsers,
  Purchases,
  getPurchases,
  getLogPurchases,
  deletePurchases,
  Sales,
  getSales,
  getLogSales, 
  deleteSales,

  // Logout,
  // Update,
  // Delete,
} from "../controllers/Users.js";
// import { verifyToken } from "../middleware/VerifyToken.js";
// import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

// router.get("/users", verifyToken, getUsers);
router.post("/purchase", Purchases);
router.get("/purchase", getPurchases);
router.get("/logpurchase", getLogPurchases)
router.delete("/purchase", deletePurchases);
router.post("/sale", Sales);
router.get("/sale", getSales);
router.get("/logsale", getLogSales)
router.delete("/sale", deleteSales);
// router.post("/login", Login);
// router.get("/token", refreshToken);
// router.delete("/logout", Logout);
// router.put("/update", Update);
// router.delete("/delete", Delete);

export default router;
