const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const {Videogame, Genre} = require('../db');
const router = Router();


const getDbInfo = async () => {

    return await Videogame.findAll({
        include: {
            model: Genre, 
            attributes: ['name'],
            through: {
                attributes:[]
            }
        }
    })
}
router.get('/', async (req, res) => {

    const gamesDB = await getDbInfo()

    res.json(gamesDB)
})
module.exports = router