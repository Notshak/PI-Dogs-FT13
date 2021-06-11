// const { Router } = require('express');
// const router = Router();
const express = require('express');  //despues borrar estooooooooooooooooooooooooooooooooooo
const axios = require("axios").default
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const DogRoutes = require("./dog")
const TemperamentRoutes = require("./temperament")
const router = express.Router();

router.use(`/dogs`, DogRoutes);
router.use(`/temperament`, TemperamentRoutes);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
