// const { Router } = require('express');
// const router = Router();
const express = require('express');  //despues borrar estooooooooooooooooooooooooooooooooooo
const router = express.Router();
const axios = require("axios").default
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

var counter = 0;
var array = []
const url = `https://api.thedogapi.com/v1/breeds`

router.get(`/temperament`, (req, res)=> {
 axios.get(url)
    .then(response => {
        var i = 0;
        var actual;
        while(counter < 50){ //-----------------esto esta dando errores, despues cambiarlo x response.data.length
                if(response.data[i].temperament){
                    actual = response.data[i].temperament.split(` `)
                    actual.forEach(element => {
                        if(array.includes(element)){counter++}
                        else{array.push(element); counter = 0}})}
                else{counter++}
            i++;
        }res.json(array)})
    .catch(error => res.status(500).json({error: `error en /temperament`}))
})

router.get(`/dogs`, (req, res)=> {
 axios.get(url)
    .then(response => {
        while(counter !==8){
         array = [...array, ...[response.data[counter]]]
         counter++;
         if(counter===8){res.json(array)}}
         counter = 0; array = []})
    .catch(error => res.status(500).json({error: `error en /dogs`}))
});

router.get(`/dogs/:parametro`, (req, res)=> {
const para = req.params.parametro; //estableciendo parametro
 if(parseInt(para)){
    axios.get(url)
    .then(response => res.json(response.data.find(e => e.id === parseInt(para)))) 
    //----------------SIEMPRE REVISAR SI DICE JSON O JASON---------------------------------------
    .catch(error => res.status(500).json({error: `error en /dogs/:parametro modo id`}))}

 else if(typeof(para)===`string`){
 axios.get(url +`/search?q=${para}`) //ejemplos de perros para testing: Affenpinscher-Rhodesian Ridgeback
    .then(response => {
        while(counter !==8){
         array = [...array, ...[response.data[counter]]]
         counter++;
         if(counter===8){res.json(array)}}
         counter = 0; array = []})
    .catch(error => res.status(500).json({error: `error en /dogs/:parametro modo nombre`}))}

 else{
    res.status(500).json({error: `error en /dogs/:parametro, no lo considera ni string ni numero`})}
})

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
