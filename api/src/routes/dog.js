const { Router } = require("express");
const { getAllDogs, addDogs, get8Dogs, getById} = require("../controllers/dog");

const router = Router()

router.get(`/:parametro`, getById);
router.get(`/`, get8Dogs);
router.post(`/`, addDogs);

module.exports = router