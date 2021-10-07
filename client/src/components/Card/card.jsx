

import React, {useEffect,useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {connect} from 'react-redux'
import {searchGames,gameById} from '../../redux/actions';
import s from './card.module.css'
import {NavLink} from 'react-router-dom';
import Paginado from '../Paginado/paginado'



function Card({searchGames, videogames, name, gameById}){
    const dispatch = useDispatch();
    const allVideoGames = useSelector((state) => state.videoGames)

    const [currentPage,setCurrentPage] = useState(1)
    const [gamesPerPage, setGamesPerPage] = useState(15) 
    const indexOfLastGame = currentPage * gamesPerPage  //15
    const indexOfFirstGame = indexOfLastGame - gamesPerPage
    videogames = allVideoGames.slice(indexOfFirstGame,indexOfLastGame)
    
    const paginado = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        searchGames()
    },[])

    function game(){
        if(name.length > 0) return name;
        else return videogames
    }
    console.log(videogames) 
    
    return(
        <div>

      <div className={s.cards}>

            { 

                // videogames.length ? videogames.map(e =>
            
            videogames?.map(e=> <div className={s.card} onClick={()=>gameById(e.id)}>
               <NavLink className={s.NavLink} to={`/app/${e.id}`}>
               <p className={s.title}>{e.name}</p>
               <img className={s.image} src={e.img} alt='Imagen de videogames'/>
               <p className={s.ctnGenresCard}>Release: {e.releaseDate}</p>  
                 <div className={s.cardLow}>
                    <p className={s.ctnGenresCard}> Genres: {e.genres.map(e=><span className={s.span}>{e}</span>)}</p>   
                    <p className={s.ctnGenresCard}> Rating: {e.rating}</p>
                    </div></NavLink>
               </div>)
                // ):<img src={loading} alt='Gif Cargando'/>
            } 

        </div>
        <Paginado 
                gamesPerPage = {gamesPerPage}
                allVideoGames = {allVideoGames.length}
                paginado = {paginado}

            />
        </div>
  
    )
}



const mapStateToProps = (store) => {
    return{
        videogames: store.videoGames,
        name: store.name,
    }
} 

export default connect(mapStateToProps, {searchGames, gameById})(Card);