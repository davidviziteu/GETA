const HttpCodes = require('http-status-codes')

var fruits = []

function getFruits(req, res){
    return res.status(HttpCodes.StatusCodes.OK).json({fruits})
}

function postFruit(req,res){
    let fruit = req.body.fruit
    console.log(fruit)
    fruits = [...fruits, fruit]
    return res.status(HttpCodes.StatusCodes.CREATED).json({success:true})
}

function patchFruit(req,res){
    return res.status(HttpCodes.StatusCodes.OK).json({fruits:['mere', 'banane','portocale'],})
}

function deleteFruit(req,res){
    return res.status(HttpCodes.StatusCodes.OK).json({fruits:['mere', 'banane','portocale'],})

}

module.exports = {
    getFruits, postFruit, patchFruit, deleteFruit
}