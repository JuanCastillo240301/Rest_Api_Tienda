import { Router } from "express";
import { gettickets,createtickets,updatetickets,deletetickets,getCticket } from '../controllers/ticket.controller.js'
const router = Router();

router.get("/tickets",gettickets);
router.post("/tickets",createtickets);
router.put("/tickets/:id",updatetickets);
router.delete("/tickets/:id",deletetickets);
router.get("/tickets/:id",getCticket);


export default router;