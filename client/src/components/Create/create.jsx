import React from "react";
import { NavLink } from "react-router-dom";
import s from './create.module.css';

export default function Create(){

    function formulario(e){
        e.preventDefault()
    }

    return (
        <div className={s.containerFather}>
            <button className={s.btnVolver}><NavLink to='/app/home'>Volver</NavLink></button>
            <form onSubmit={()=>formulario(e)} action="http://localhost:3001/videogames" method="post">
                
                <div className={s.container}>

                    <h3 className={s.titulo}>Crear un juego</h3>

                    <div className={s.name}>
                        <label>Nombre del juego</label>
                        <input type="text" name="name" className={s.input} />
                    </div>

                    <div className={s.released}>
                        <label>Lanzamiento del juego</label>
                        <input type="date" name="released" className={s.input} />
                    </div>


                    <div className={s.rating}>
                        <label>Rating</label>
                        <input type="number" name="rating" className={s.input} />
                    </div>


                    <div className={s.image}>
                        <label>URl de la imagen</label>
                        <input type="url" name="background_image" className={s.input} />
                    </div>

                    <div className={s.genres}>
                        <label>Generos del juego</label>
                        <input type="text" name="genres" className={s.input} />
                    </div>


                    <div className={s.descripcion}>
                        <label>Descripción</label>
                        <textarea type="text" name="descripcion" cols="40" rows="6" className={s.input} />
                    </div>

                    <div className={s.info}></div>

                </div>
                    <button className={s.button}>Submit</button>

            </form>
        </div>
    )
}
