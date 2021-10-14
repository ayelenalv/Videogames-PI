import React from "react";
import {connect} from 'react-redux';
import s from './details.module.css';

function Details({videogame}){

    return (
        <div className={s.container}>
            {
                videogame && videogame.map(e => 
                <div key={e.id}>

                    <div>
                        <h1 className={s.detailTitle}>{e.name}</h1>     
                        <p className={s.detailRating}>Rating: {e.rating}</p>
                        <p>Released Date {e.released}</p>
                        <p className={s.detailGenres}> {e.genres.map((e,i)=><span key={i}className={s.span}><strong>{e.name}</strong></span>)}</p>
                        <p className={s.detailDescription}>{e.description}</p>                  
                    </div>
                    <div>
                    <img className={s.detailImg} src={e.img} alt='Imagen dañada'/>
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