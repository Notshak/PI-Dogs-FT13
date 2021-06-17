const axios = require("axios");
const {v4: uuidv4} = require("uuid")

const {Temperament} = require("../db");
// const {counter, array, url} = require("../var/routesVar")
var counter = 0;
let array = []
const url = `https://api.thedogapi.com/v1/breeds`


async function addTemperament(req, res, next){
    const temp = req.body;
    if(!req.body){return res.send({})};
    try{
        const createdTemp = await Temp.create(temp);
        return res.send(createdTemp);
    } catch (error){
        next(error);
    }
}
async function getAllTemperament(req,res){
     let unarray = await Temperament.findAll()
     unarray.forEach(element => array.push(element.name))
     res.json(array)
     array = []
}



module.exports = {
    getAllTemperament,
    addTemperament,
}