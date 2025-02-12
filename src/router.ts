import { Router } from "express";
import { createProduct, getProducById, getProducts, updateAvailability, updateProduct } from "./handlers/product";
import { body, param } from "express-validator";
import { handleInputErrors } from "./middleware/errorsCheck";

const router = Router();

//routing
router.get("/", getProducts)
router.get("/:id", 
    param("id").isInt().withMessage("ID no valido"),
    handleInputErrors,
    getProducById
)

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


router.put("/:id", 
    param("id").isInt().withMessage("ID no valido"),
    body("name")
        .notEmpty().withMessage("el nombre es requerido"),
    body("price")
        .isNumeric().withMessage("valor no valido")
        .notEmpty().withMessage("el precio es requerido")
        .custom((value) => value > 0).withMessage("el precio debe ser mayor a 0"),
    body("availability")
        .isBoolean().withMessage("valor no valido"),
    handleInputErrors,
    updateProduct
)

router.patch("/:id", updateAvailability)

router.delete("/", (req, res) => { 
    res.json('desde delete');
})

export default router;