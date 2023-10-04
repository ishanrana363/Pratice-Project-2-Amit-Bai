const productController = require("../controllers/productController")
const express = require("express")
const router = express.Router()

//create new product
router.post("/create-product",productController.createProduct)
// Get Single Product
router.get("/get-single-product/:id",productController.getSingleProduct)
// Get All Productrs
router.get("/get-all-product",productController.getAllProduct)
//Delete Product
router.delete("/delete-product/:id",productController.deleteProduct)
// Product Update
router.put ("/product-update/:id",productController.updateProduct)






module.exports = router