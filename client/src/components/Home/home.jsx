/* import React from 'react';
import { useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { searchGames } from '../../redux/actions';
import  Card  from '../Card/card';
import { Link } from 'react-router-dom';
import Paginado from '../Paginado/paginado'

export default function Home (){
    const dispatch = useDispatch();
    const allVideoGames = useSelector((state) => state.videoGames)

    const [currentPage,setCurrentPage] = useState(1)
    const [gamesPerPage, setGamesPerPage] = useState(15) 
    const indexOfLastGame = currentPage * gamesPerPage  //15
    const indexOfFirstGame = indexOfLastGame - gamesPerPage
    const currentGames = allVideoGames.slice(indexOfFirstGame,indexOfLastGame)
    
    const paginado = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }
    


    useEffect(() => {
        dispatch(searchGames())
    }, [])

    return(
        <div>       
            <div>
            <Paginado 
                gamesPerPage = {gamesPerPage}
                allVideoGames = {allVideoGames.length}
                paginado = {paginado}

            />
                {
                    currentGames?.map((games) => {
                return(    
                    <div>
                    <Link to = {'app/home' + games.id}> 
                        <Card key={games.id} name={games.name} img={games.img} genres= {games.genres}/>
                    </Link>
                    </div>
                )
            })
         }
         </div>
     </div>
   )
}  */

/*export default function Home (){
    const dispatch = useDispatch();
    const allVideoGames = useSelector((state) => state.nameGame)

    useEffect(() => {
        dispatch(searchGames())
    }, [])

    function handleClick(evt){
        evt.preventDefault();
        dispatch(searchGames());
    }

    return(
        <div>
            <Link to = '/videogames'> Crear Videogame </Link>
            <h1>VOS PODES PIPI</h1>
            <button onClick={evt => handleClick(evt)}>Refresh</button>
        
            <div>
                <select> 
                    <option value = 'order'>Ordenar</option>
                    <option value = 'asc'>Ascendente</option>
                    <option value = 'desc'>Descendente</option> //el value me sirve para hacer la logica
                </select>

                <select> 
                   <option value='all'>Todos</option>
                   <option value='created'>Creados</option>
                   <option value='api'>Existentes</option>
                </select>

                {
                    allVideoGames?.map((games, index) => {
                return(    
                    <div>
                        <Card key={index} name={games.name} img={games.img} genres= {games.genres}/>
                    </div>
                    )
                })
                }
            </div>
        </div>
    )
} */