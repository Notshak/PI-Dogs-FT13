const { Router } = require("express");
const { getAllTemperament, addTemperament } = require("../controllers/temperament");
const router = Router()

router.get(`/`, getAllTemperament);
router.post(`/`, addTemperament);

module.exports = router