const productModel = require("../models/productModel")
const mongoose = require("mongoose")
const { param } = require("../routes/api")
//create new product
exports.createProduct = async(req,res)=>{
    try {
        let reqBody = req.body
        let data = await productModel.create(reqBody)
        res.status(201).json({
            status : "success",
            data : data
        })
    } catch (e) {
        res.status(401).json({
            status : "Fail",
            error : e.toString()
        })
    }
}

// Get Single Product

exports.getSingleProduct = async (req,res)=>{
    const id = new mongoose.Types.ObjectId(req.params.id)
    try {
        const data = await productModel.aggregate(
            [
                {$match : {_id : id}}
            ]
        )
        res.status(200).json({
            status : "success",
            data : data
        })
    } catch (e) {
        res.status(401).json({
            status : "fail",
            error : e.toString()
        })
    }
}

// Get All Product

exports.getAllProduct = async (req,res)=>{
    try {
        const data = await productModel.aggregate([
            {
                $project : {
                    title : 1,
                    short_dec : 1,
                    img : 1,
                    discount : 1,
                    stock : 1,
                    star : 1,
                    remark : 1,
                }
            }
        ])
        res.status(200).json({
            status : "success",
            data : data
        })
    } catch (e) {
        res.status(401).json({
            status : "fail",
            error : e.toString()
        })
    }
}

// Delete Product 

exports.deleteProduct = async (req,res)=>{
    const id = new mongoose.Types.ObjectId(req.params.id)
    const query = {
        _id : id
    }
    try {
        const data = await productModel.deleteOne(query)
        res.status(200).json({
            status : "success",
            data : data
        })
    } catch (e) {
        res.status(401).json({
            status : "fail",
            error : e.toString()
        })
    }
}

// Product Update

exports.updateProduct = async (req, res) => {
    try {
        const reqBody = req.body
        const id = new mongoose.Types.ObjectId(req.params.id)
        const query = {
            _id : id
        }
        const data = await productModel.updateOne(query,reqBody)
        res.status(200).json({
            status : "success",
            data : data
        })
    } catch (e) {
        res.status(401).json({
            status : "fail",
            error :e.toString()
        })
    }
}