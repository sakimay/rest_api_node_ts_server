import { Router } from "express";
const router = Router();

//routing
router.get("/", (req, res) => { 
    res.json('desde GET');
})
router.post("/", (req, res) => { 
    res.json('desde POST');
})
router.put("/", (req, res) => { 
    res.json('desde put');
})
router.patch("/", (req, res) => { 
    res.json('desde patch');
})
router.delete("/", (req, res) => { 
    res.json('desde delete');
})

export default router;