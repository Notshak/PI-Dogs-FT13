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

function getAllTemperament(req, res, next){
    axios.get(url)
    .then(response => {
        var actual;
        response.data.forEach(resp => {
            if(resp.temperament){
                actual = resp.temperament.split(` `)
                actual.forEach(element => {
                    if(element[element.length-1]===","){
                        element = element.slice(0, element.length-1)}
                    if(array.includes(element)){counter++}
                    elsearray.push(element)})}
        })
        array.sort()
        res.json(array)})
        array = []
    .catch(error => res.status(500).json({error: `error en /temperament`}))
}

module.exports = {
    getAllTemperament,
    addTemperament,
}