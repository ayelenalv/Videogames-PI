import React, {useRef} from "react";
import {connect} from 'react-redux'
import s from './order.module.css'
import {ordenAlfabetico, buscarPorGenero, buscarPorRating, gamesDatabase} from '../../redux/actions'

function Order({ordenAlfabetico, buscarPorGenero, buscarPorRating, gamesDatabase }){

    let miRef = useRef(null);
    let GenRef = useRef(null);
    let RatRef = useRef(null);
    let refDataBase = useRef(null);

    function cambiarEstado(){
        ordenAlfabetico(miRef.current.value)
    }

    function OrderGenres(){
        buscarPorGenero(GenRef.current.value)
    }
    function OrderRating(){
        buscarPorRating(RatRef.current.value)
    }
    function OrderByDataBase(){
        gamesDatabase(refDataBase.current.value)
    }


    return (
        <div className={s.container}>
            <div className={s.containers}>
               
                <select className={s.select} ref={miRef} onChange={cambiarEstado}>
                    <option selected>By Name</option>
                    <option value="A - Z">A - Z</option>
                    <option value="Z - A">Z - A</option>
                </select>
            </div>
            <div className={s.containers}>
              
                <select className={s.select} ref={GenRef} onChange={OrderGenres}>
                <option selected>Genres</option>
                    <option value="Action">Action</option>
                    <option value="Adventure">Adventure</option>
                    <option value="RPG">RPG</option>
                    <option value="Strategy">Strategy</option>
                    <option value="Shooter">Shooter</option>
                    <option value="Casual">Casual</option>
                    <option value="Simulation">Simulation</option>
                    <option value="Puzzle">Puzzle</option>
                    <option value="Arcade">Arcade</option>
                    <option value="Platformer">Platformer</option>
                    <option value="Racing">Racing</option>
                    <option value="Massively Multiplayer">Massively Multiplayer</option>
                    <option value="Sports">Sports</option>
                    <option value="Fighting">Fighting</option>
                    <option value="Family">Family</option>
                    <option value="Board Games">Board Games</option>
                    <option value="Educational">Educational</option>
                    <option value="Card">Card</option>
                </select>
            </div>
            <div className={s.containers}>
               
                <select className={s.select} ref={RatRef} onChange={OrderRating}>
                    <option selected >Rating</option>
                    <option value="Asc">Worst Rated</option>
                    <option value="Desc">Best Rated</option>
                </select>
            </div>
            <div className={s.containers}>
              
                <select className={s.select} ref={refDataBase} onChange={OrderByDataBase}>
                    <option selected >Origin</option>
                    <option>My Videogames</option>
                    <option>Web Videogames</option>
                </select>
            </div>
        </div>
    )
}

export default connect (null, {ordenAlfabetico, buscarPorGenero, buscarPorRating, gamesDatabase})(Order)