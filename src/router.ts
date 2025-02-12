import { Router } from "express";
import { createProduct, getProducts } from "./handlers/product";
import { body } from "express-validator";
import { handleInputErrors } from "./middleware/errorsCheck";

const router = Router();

//routing
router.get("/", getProducts)

router.post("/", 
    //validaciones
    body("name")
        .notEmpty().withMessage("el nombre es requerido"),
    body("price")
        .isNumeric().withMessage("valor no valido")
        .notEmpty().withMessage("el precio es requerido")
        .custom((value) => value > 0).withMessage("el precio debe ser mayor a 0"),
    handleInputErrors,
    createProduct
);


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