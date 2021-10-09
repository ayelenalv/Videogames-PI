import React from "react";
import {connect} from 'react-redux';
import s from './details.module.css';

function Details({videogame}){

    return (
        <div className={s.container}>
            {
                videogame && videogame.map(e => 
                <div key={e.id}>
                    <div className={s.texts}>
                        <h1>{e.name}</h1>
                        <img className={s.detailImg} src={e.img} alt='Imagen dañada'/>
                        <p>Rating:  {e.rating}</p>
                        <p>Lanzamiento:  {e.released}</p>
                        <p className={s.titleGenre}>Genres: {e.genres.map(e=><span className={s.span}>{e.name}</span>)}</p>
                        <p>Description:  {e.description}</p>
                       
                    </div>
                </div>)
            }
            
        </div>
    )
}

const mapStateToProps = (store) => {
    return {
        videogame: store.id
    }
}

export default connect(mapStateToProps)(Details)