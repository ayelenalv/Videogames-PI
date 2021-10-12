import axios from 'axios';

export const buscar = "BUSCAR_LOS_JUEGOS";
export const buscarPorNombre = "BUSCAR_POR_NOMBRE";
export const buscarNombrePorId = "BUSCAR_NOMBRE_POR_ID";
export const dataBase = "JUEGOS_DE_LA_BASE_DE_DATOS";
export const obtenerGeneros = "OBTENER_LOS_GENEROS_DE_LA_BASE_DE_DATOS";
// export const obtenerPlataformas = "OBTENER_LAS_PLATAFORMAS_DE_LA_BASE_DE_DATOS";
export const gameByGenre = "OBTENER_JUEGOS_SOLO_POR_EN_GENERO";
export const gameByRating = "OBTENER_LOS_JUEGOS_POR_RATING";
export const alphabeticalOrder = "OBTENER_LOS_JUEGOS_EN_ORDEN_ALFABETICOS";
export const postSubmit = "CREAR_JUEGOS"

export function searchGames(){
    return async function(dispatch){
        let games = await axios.get('/videogames')
        return dispatch({
            type: buscar,
            payload: games.data
        })
    }
}

export function searchByName(name){
    return async function(dispatch){
        if(name !== ''){
            let gamesNames = await axios.get(`/videogames?name=${name}`)
            return dispatch({
                type: buscarPorNombre,
                payload: gamesNames.data
            })
        }
        return dispatch({
            type: buscarPorNombre,
            payload: []
        })
    }
}

export function gameById(id){
    return async function(dispatch){
        let gamesId = await axios.get(`/videogames/${id}`)
        return dispatch({
            type: buscarNombrePorId,
            payload: gamesId.data
        })
    }
}

export function gamesDatabase(arg){
    return async function(dispatch){
        let database = await axios.get('/database')
        return dispatch({
            type: dataBase,
            payload: database.data,
            arg: arg
        })
    }
}

export function getGenres(){
    return async function(dispatch){
        let genres = await axios.get('/genres')
        return dispatch({
            type: obtenerGeneros,
            payload: genres.data
        })
    }
}

// export function getPlatforms(){
//     return async function(dispatch){
//         let platforms = await axios.get('http://localhost:3001/api/platforms')
//         return dispatch({
//             type: obtenerPlataformas,
//             payload: platforms.data
//         })
//     }
// }

export function buscarPorGenero(name){
    return async function(dispatch){
        let games = await axios.get('/videogames')
        return dispatch({
            type: gameByGenre,
            payload: games.data,
            name: name
        })
    }
}

export function buscarPorRating(descAsc){
    return async function(dispatch){
        let games = await axios.get('/videogames')
        return dispatch({
            type: gameByRating,
            payload: games.data,
            descAsc: descAsc
        })
    }
}

export function ordenAlfabetico(descAsc){
    return async function(dispatch){
        let games = await axios.get('/videogames')
        return dispatch({
            type: alphabeticalOrder,
            payload: games.data,
            descAsc: descAsc
        })
    }
}
export function submitPost(datos){
    return async function(){
        let postgame = await axios.post('http://localhost:3001/videogames', datos)
        return {
            type: postSubmit,
            postgame: postgame.data
        }
    }
}