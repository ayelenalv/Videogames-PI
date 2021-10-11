import { buscar, 
    buscarPorNombre, 
    buscarNombrePorId, 
    dataBase, 
    obtenerGeneros, 
    gameByGenre, 
    gameByRating, 
    alphabeticalOrder } from './actions'

const initialStore = {
    fullGames: [],
    videoGames: [],
    name: [],
    id: [],
    database: [],
    genres: [],
    platforms: [],
    gamesFilterByGenre: [],
    gamesFilterByRating: [],
    order: [],
}

const reducer = (state=initialStore, action) => {
    switch (action.type){

        case buscar: return {
            ...state,
            videoGames: action.payload,
            fullGames: action.payload
        }

        case buscarPorNombre: return {
            ...state,
            videoGames: action.payload
        }

        case buscarNombrePorId: return {
            ...state,
            id: [action.payload]
        }

        case dataBase: return {
            ...state,
            videoGames: action.arg == 'Yes' ? action.payload : state.fullGames
        }

        case obtenerGeneros: return {
            ...state,
            genres: action.payload
        }


        case gameByGenre: return {
          ...state,
          videoGames: action.payload.filter((e) => {

              for(let i = 0; i < e.genres.length; i++){
                  if(e.genres[i].name === action.name){
                      return e
                  }
              }
          })
      }

         case gameByRating: return {
             ...state,
             videoGames: action.descAsc === 'Asc' ? 
             action.payload.sort(function(a, b) {
                if (a.rating > b.rating) {
                  return 1;
                }
                if (a.rating < b.rating) {
                  return -1;
                }
                return 0;
              })
             : action.payload.sort(function(a, b) {
                if (a.rating < b.rating) {
                  return 1;
                }
                if (a.rating > b.rating) {
                  return -1;
                }
                return 0;
              })
         }


         case alphabeticalOrder: return {
            ...state,
            videoGames: action.descAsc === 'A - Z' ?
            action.payload.sort(function(a, b) {
                if (a.name > b.name) {
                  return 1;
                }
                if (a.name < b.name) {
                  return -1;
                }
                return 0;
              })
            : action.payload.sort(function(a, b) {
                if (a.name < b.name) {
                  return 1;
                }
                if (a.name >b.name) {
                  return -1;
                }
                return 0;
              })
            
        }


        default: return state;
    }
}

export default reducer