const { Country, Activity } = require("../db");


const getCountriesbyId = async (req, res) => {
  try {
    const id = req.params.idPais.toUpperCase()
    const countryId = await Country.findOne({where: {id}, include: Activity})
    if(countryId.name){
        return res.status(200).json(countryId)
    }
    res.status(404).json({ message: 'ID desconocido' })
  } catch (error) {
    res.status(500).json(error.message)
  }
};

module.exports = getCountriesbyId;
