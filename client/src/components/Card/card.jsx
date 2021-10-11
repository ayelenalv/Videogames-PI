
import React, {useEffect,useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {connect} from 'react-redux'
import {searchGames,gameById} from '../../redux/actions';
import s from './card.module.css'
import {NavLink} from 'react-router-dom';
import Paginado from '../Paginado/paginado'
import loading from '../../assets/loading.gif'



function Card({searchGames, videogames, name, gameById}){
    const dispatch = useDispatch();
    const allVideoGames = useSelector((state) => state.videoGames)

    const [currentPage,setCurrentPage] = useState(1)
    const [gamesPerPage, setGamesPerPage] = useState(15) 
    const indexOfLastGame = currentPage * gamesPerPage  //15
    const indexOfFirstGame = indexOfLastGame - gamesPerPage
    videogames = videogames.slice(indexOfFirstGame,indexOfLastGame)
    
    const paginado = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        searchGames()
        console.log(videogames)
    },[])


    return(
        <div>

      <div className={s.cards}>

            { 

            
            videogames.length? videogames?.map(e=> <div className={s.card} onClick={()=>gameById(e.id)}>
                
               <div className={s.container}>  
               <div >
               <img className={s.image} src={e.img} alt='Imagen de videogames'/>
               </div>    
               <div className = "s.cardDetails">
                    <p className={s.cardReleased}> <strong>{e.releaseDate}</strong></p>  
                    <p className={s.cardTitle}>{e.name}</p>
                    <p className={s.cardDetails}>{e.genres.map((e,i)=>{if(i < 3)return <span className={s.span} >{e.name}</span>})}</p>   
                    <p className={s.cardRating}> Rating: {e.rating}</p>
                    </div>
                    <NavLink className={s.NavLink} to={`/app/${e.id}`}> 
                    <div><p className={s.cardMore}><strong>Find out more</strong></p></div>
                    </NavLink>
                    </div>    
               </div>) : <div className={s.contLoading}>
                <img src={loading} alt='loading gif' className={s.loading}/>
                </div>

            } 

        </div>
        <Paginado 
                gamesPerPage = {gamesPerPage}
                allVideoGames = {allVideoGames.length}
                paginado = {paginado}
                currentPage={currentPage}

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