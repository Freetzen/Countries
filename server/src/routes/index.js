const { Router } = require("express");
const getCountries = require("../Controllers/getCountries");
const getCountriesbyId = require("../Controllers/getCountriesbyId");
const getCountriesByName = require("../Controllers/getCountriesByName");
const getActivities = require("../Controllers/getActivities");
const postActivities = require("../Controllers/postActivities");

const router = Router();

router.get('/countries', getCountries)
router.get('/countries/name', getCountriesByName)
router.get('/countries/:idPais', getCountriesbyId)
router.get('/activities', getActivities)
router.post('/activities', postActivities)

module.exports = router;