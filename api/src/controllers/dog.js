const axios = require("axios");
const {v4: uuidv4} = require("uuid")
const https = require("https")

const {Dog} = require("../db");
const { query } = require("express");
// const {counter, array, url} = require("../var/routesVar")

var counter = 0;
var array = []
const url = `https://api.thedogapi.com/v1/breeds`

function get8Dogs (req, res){
    if(req.query.name){
        return axios.get(url +`/search?q=${req.query.name}`) //ejemplos de perros para testing: Affenpinscher-Rhodesian Ridgeback-american
        .then(response => {
            if(response.data.length<1){return res.status(404).json({error: `not found`})}
            while(counter !==8){
             if(response.data[counter]){
                array = [...array, ...[response.data[counter]]]}
             counter++;
             if(counter===8){res.json(array)}}
             counter = 0; array = []})
        .catch(error =>  res.status(500).json({error: `error en /dogs/:parametro modo nombre`}))}
    else{
    return axios.get(url)
    .then(response => {
        while(counter !==8){
            array = [...array, ...[response.data[counter].name]]
            counter++;
            if(counter===8){res.json(array)}}
        counter = 0;
        array = [];
    })
    .catch(error => res.status(500).json({error: `error en /dogs`}))}
}


function getById (req, res){
    const para = req.params.parametro; //estableciendo parametro
     if(parseInt(para)){
        return axios.get(url)
        .then(response => {
            raza = response.data.find(e => e.id === parseInt(para))
            if(raza){res.json(raza)}else return res.status(404).json({error: `not found`})
        })
        //----------------SIEMPRE REVISAR SI DICE JSON O JASON---------------------------------------
        .catch(error => res.status(500).json({error: `error en /dogs/:parametro modo id`}))}
}

async function addDogs(req, res, next){
    // const id = uuidv4()
    const dogBody = {...req.body}
    try {
        const createDog =  await Dog.create(dogBody);
        return res.send(createDog)
    } catch (error){
        next(error)
    }
}
// function addDogs(req, res){
//     const dogBody = {...req.body}
//     .then(createDog = Dog.create(dogBody))
//     .then(res.json(createDog))
//     .catch(error => res.status(500).json({error: `error en addDogs`}))
// }

function getAllDogs(req, res, next){
    return Dog.findAll()
        .then((actualDog)=> res.send(actualDog))
        .catch(error => res.status(500).json({error: `error en getAllDogs`}))
}
// function getAllDogs(req, res, next){
//     const apiDogs =  axios.get(url);
//     const createrDogs = Dogs
//     return Dog.findAll()
//         .then((actualDog)=> res.send(actualDog))
//         .catch((err)=> next(err));
// }

module.exports = {
    getAllDogs,
    addDogs,
    get8Dogs,
    getById,
}