
const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { v4: uuidv4 } = require('uuid')
const axios = require('axios');
const {Videogame, Genre} = require('../db');
const router = Router();
const {YOUR_API_KEY} = process.env




const getApiInfo100= async () => {
    let games = axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}`)
    
    let gamesPageTwo = axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=2`)

    let gamesPageTres = axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=3`)

    let gamesPageCuatro = axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=4`)

    let gamesPageCinco = axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=5`)

    let datos = await Promise.all([games, gamesPageTwo, gamesPageTres, gamesPageCuatro, gamesPageCinco])

    games = datos[0].data.results;
    gamesPageTwo = datos[1].data.results;
    gamesPageTres = datos[2].data.results;
    gamesPageCuatro = datos[3].data.results;
    gamesPageCinco = datos[4].data.results;
    
    games = games.concat(gamesPageTwo).concat(gamesPageTres).concat(gamesPageCuatro).concat(gamesPageCinco)

    const apiInfo = await games.map(e =>{
        return{
            id: e.id,
            name: e.name,
            img: e.background_image,
            genres: e.genres.map(e =>e.name),
            rating: e.rating,
            platforms: e.platforms.map(e => e.platform.name),
            releaseDate: e.released
        }
    })
   
    return apiInfo
};


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


    const getAllGames = async () =>{
     const apiInfo100 = await getApiInfo100()
     const dbInfo =  await getDbInfo()
     const infoTotal = apiInfo100.concat(dbInfo)
     return infoTotal
    }

    const getInfoByName = async (name) => {
        const resAxios = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${YOUR_API_KEY}`);
        const { results } = resAxios.data ;
        let infoByName = results.map((result) => {
            return {
                id: result.id,
                name: result.name,
                released: result.released,
                img: result.background_image,
                rating: result.rating,
                platforms: result.platforms.map(e => e.platform.name),
                genres: result.genres.map(e => e.name),
            }        
        })

       
        return infoByName ;
    }

    const getAllGamesByName = async(name)=>{
        const apiByName = await getInfoByName(name)
        const dbByName = await getDbInfo()
        const allGamesByName = apiByName.concat(dbByName)
        return allGamesByName
    } 

    const getInfoById = async (id) => {
        const resAxios = await axios.get(`https://api.rawg.io/api/games/${id}?key=${YOUR_API_KEY}`);
        let response = resAxios.data
            return {
                id: response.id,
                name: response.name,
                released: response.released,
                img: response.background_image,
                rating: response.rating,
                platforms: response.platforms.map(e => e.platform.name),
                genres: response.genres.map(e => e.name),
                description: response.description

            }
        }

router.get ('/videogames', async (req,res)=>{
    const { name } = req.query
    try {
        if (name) {
            let allGamesByName = await getAllGamesByName(name)
            let gameName = await allGamesByName.filter((g)=> g.name.toLowerCase().includes(name.toLowerCase()))
                gameName.length ?
                res.status(200).send(gameName) :
                res.status(404).send('El juego no existe')
            } else {
                let allGames = await getAllGames()
                res.status(200).send(allGames)
            }

    } catch(e){
        res.send('Se produjo un error en la búsqueda')
    }
   
    })
    
    router.get('/videogames/:id', async (req, res) => {

        const { id } = req.params;
        try {
            if(!Number(id)){
                let gameDetailsDb = await Videogame.findOne({
                    
                    where: {
                        id
                    },
                    include: {
                        model: Genre, 
                        attributes: ['name'],
                        through: {
                            attributes:[]
                        }
                    }
                })
                return res.json(gameDetailsDb)
            }
            let gameDetails = await getInfoById(id)
            return res.json(gameDetails);
        }
        catch(e){
            res.send('Id no encontrado')
        }
    })


    router.post('/videogames', async (req, res) => {
        const{
            name,
            description,
            releaseDate,
            img,
            rating,
            platforms,
            genre, 
        } = req.body
        try{ 
            let genreDB = await Genre.findAll({ 
                where: {name: genre}, 
            })
            if(genreDB.length !== genre.length){
                return res.json({error: 'Genero no encontrado'})
            }
            
            let id = uuidv4()
    
            let videoGameCreate = await Videogame.create({ 
                id: id,
                name,
                description,
                releaseDate,
                img,
                rating,
                platforms: [platforms],
            
            })
    
            videoGameCreate.addGenre(genreDB)
            res.send('Videojuego creado con éxito!')
    
        }catch(error){
            res.status(400).json({message: error})
        }
    })

 
    

    module.exports= router