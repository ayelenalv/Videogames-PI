 const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
const videogame = require('./videogames')
const database = require('./database')
const genre = require('./genres')

router.use('/', videogame )
router.use('/database', database)
router.use('/genres', genre)




module.exports = router;