const axios = require("axios");

const {Dog, Temperament} = require("../db");
// const {counter, array, url} = require("../var/routesVar")

var counter = 0;
var array = []
const url = `https://api.thedogapi.com/v1/breeds`
async function get8Dogs (req, res){

    // const variable = (req.query.name)? (url +`/search?q=${req.query.name}`): (url)
    const variable = url
    let name = (req.query.name)? (req.query.name):("");
    let page = (req.query.page)? parseInt(req.query.page):(1);
    let order = (req.query.order)? req.query.order:("asc");
    let param = (req.query.param)? req.query.param:("name");
    let filter = (req.query.filter)? req.query.filter:("");
    let db = (req.query.db)? req.query.db:("all");
    array = [];
    counter = 0;
    let q = await Dog.findAll({include: Temperament})
    // q = q.dog.dataValues.name
    
    return axios.get(variable)
    .then(response => {
        let n
        let m
        response.data.forEach(el=>{
            n = el.life_span.split(" ");
            // if(n[0]==="NaN"){n[0] = 1};
            el.life_span = parseInt(n[0])
            // el.weight = ((parseInt(n[0]) / 2) + (parseInt(n[n.length-1]) / 2));
            if(el.temperament){
                m = el.temperament.split(" ");
                el.temperament = []
                m.forEach(e => (e[e.length-1] !==",")? (el.temperament.push(e)) : (el.temperament.push(e.slice(0, e.length-1))))}
            array.push(el)});
        return array;
    })
    .then(async function(response) {
        if(db === "all" || db === "db"){
            let arrayB = [];
            q.forEach(e =>
            arrayB.push({
                "id":e.dataValues.id,
                "name":e.dataValues.name,
                "weight":e.dataValues.weight,
                "height":e.dataValues.height,
                "life_span":e.dataValues.life_span,
                "temperament":e.temperaments.map(el => el.dataValues.name),
            }))
            if(db === "all"){
                response = [...response,...arrayB]}
            else{response = arrayB}
        }else{response = response.data}
        return response
    })

    .then(response => {
        if(filter !== ""){
            array = []
            array = response.filter(e => e.temperament && e.temperament.includes(filter))
            return array;
        }else{return response}
    })
    .then(response => {
        if(name !== ""){
            array = []
            array = response.filter(e => e.name && e.name.toLowerCase().includes(name.toLowerCase()))
            return array;
        }else{return response}
    })
    .then(response => {
        response.sort(function(a,b){
            if(a[param] > b[param]){return 1}
            if(a[param] < b[param]){return -1}
            return 0
        })
        return response
    })
    .then(response => {
        if(order==="asc"){
            return response}
        else if(order==="desc"){
            return response.reverse()}})
    .then(response => {
        array = []
        while(array.length !==8){
            if(response[counter]){
                array = [...array, ...[response[counter]]]}
                else{return array}
            counter++;
            if(array.length === 8){
                if(page !==1){
                    page--;
                    array = []}
                else return array}}})

            
    .then(response => res.json(response))
    }

async function getById (req, res){
    const para = req.params.parametro; //estableciendo parametro
     if(para.length < 5){
        return axios.get(url)
        .then(response => {
            raza = response.data.find(e => e.id === parseInt(para))
            if(raza){res.json(raza)}else return res.status(404).json({error: `not found`})
        })
        //----------------SIEMPRE REVISAR SI DICE JSON O JASON---------------------------------------
        .catch(error => res.status(500).json({error: `error en /dogs/:parametro modo id`}))}
     else{
        let q = await Dog.findAll({include: Temperament})
        let arrayB = [];
        await q.forEach(e =>
        arrayB.push({
            "id":e.dataValues.id,
            "name":e.dataValues.name,
            "weight":e.dataValues.weight,
            "height":e.dataValues.height,
            "life_span":e.dataValues.life_span,
            "temperament":e.temperaments.map(el => el.dataValues.name),
        }))
        console.log(arrayB)
            let raza = arrayB.find(e => e.id === para)
            if(raza){res.json(raza)}else return res.status(404).json({error: `not found`})

     }
}

async function addDogs(req, res){
    let {name, weight,height, temperament} = req.body
    const dogBody = {
        'name': name,
        'weight': weight,
        'height': height,
        'life_span': req.body.life_span ? req.body.life_span : 'NaN',
    }
    createDog = await Dog.create(dogBody)
    temperament.forEach(async function(e) {
        let a = await Temperament.findOne({ where: { name: e } })
        await createDog.addTemperament(a)
    } )
    res.json(createDog)
}


module.exports = {
    addDogs,
    get8Dogs,
    getById,
}