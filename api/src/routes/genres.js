const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const axios = require('axios');
const { Genre} = require('../db');
const router = Router();
const {YOUR_API_KEY} = process.env

router.get('/', async (req, res) => {

    try {
        let genres = await axios.get(`https://api.rawg.io/api/genres?key=${YOUR_API_KEY}`)
        genres = genres.data.results;
    
        const mapGeneros = genres.map(e => {
            return {
                
                name: e.name
            }
        })
        mapGeneros.forEach((e) => {
            Genre.findOrCreate({
                where: {
                    name: e.name
                }
            })
        })
        res.json(mapGeneros)
    }
    catch(e){
        res.send(e)
    }
    })
    
    module.exports = router