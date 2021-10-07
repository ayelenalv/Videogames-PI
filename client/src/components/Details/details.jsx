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
                        <p className={s.titleGenre}>Genres: {e.genres.map(e=><span className={s.span}>{e}</span>)}</p>
                        <p >Plataformas:  {e.platforms}</p>
                        <p>Description:  {e.description}</p>
                       
                    </div>
                </div>)
            }
            
            {/* <div className={s.fondos}>
                <div className={s.degradado}></div>
                <div className={s.containerImg}>
                    {
                        videogame && videogame.map((e, i) => <><img src={e.image} alt="videogames image" className={s.img}/></>)
                    }
                </div>
                <div className={s.cortador}></div>
            </div> */}
        </div>
    )
}

const mapStateToProps = (store) => {
    return {
        videogame: store.id
    }
}

export default connect(mapStateToProps)(Details)