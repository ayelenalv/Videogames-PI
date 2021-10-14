import React, {useState} from "react";
import s from './create.module.css';
import { connect } from "react-redux";
import {submitPost} from "../../redux/actions";
import {useHistory} from 'react-router-dom'
import back from '../../assets/back.jpeg'

function Create({submitPost}){

    let myHistory = useHistory()
   

    const [state, setState] = useState({
        name: '',
        releaseDate: '',
        rating: 0,
        img: '',
        genre: [],
        platforms: [],
        description: ''
    })

    function handleChange(e){
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
        
    }

    function handleRating(e){
        setState({
            ...state,
            rating: parseInt(e.target.value)
        })
    }

    function handleGenres(e){
        setState({
            ...state,
            genre: state.genre.includes(e.target.value) ? state.genre.filter(el => el !== e.target.value) : state.genre.concat(e.target.value)
        })
    }

    function handlePlatforms(e){
        setState({
            ...state,
            platforms: state.platforms.includes(e.target.value) ? state.platforms.filter(el => el !== e.target.value) : state.platforms.concat(e.target.value)
        })
        console.log(state)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(state.name == ''){
            return alert("Missing game name" + " " + "(Please complete field)")
        }

        if(state.description == '' || state.description.length < 15){
            if(state.description == '') return alert("Missing game description" + " " + "(Please complete field)")
            if(state.description.length < 10) return alert("Description must be at least 10 characters" + " " + "(La descripción debe tener al menos 10 caracteres)")
        }

        if(state.platforms == ''){
            return alert("Missing game platforms" + " " + "(Please complete field)")
        }
        if(state.genre == ''){
            return alert("Missing game genre" + " " + "(Please complete field)")
        }

        if(state.img == ''){
            return alert("Missing game image" + " " + "(Please complete field)")
        }

        await submitPost(state)
        myHistory.push("/app/home")
        alert("New Game created")
    }

    return (
        <div className={s.containerFather}>
            
            <form onSubmit={(e)=>handleSubmit(e)}>
                
                <div className={s.container}>

                    <h3 className={s.title}>Add New Videogame</h3>

                    <div className={s.name}>
                        <label>Name: </label>
                        <input type="text" name="name" className={s.input} onChange={(e)=>handleChange(e)} />
                    </div>

                    <div className={s.released}>
                        <label>Release Date: </label>
                        <input type="date" name="releaseDate" className={s.input} onChange={(e)=>handleChange(e)} />
                    </div>


                    <div className={s.rating}>
                        <label>Rating: </label>
                        <input type="text" name="rating" className={s.input} onChange={(e)=>handleRating(e)} />
                    </div>


                    <div className={s.image}>
                        <label>Image url: </label>
                        <input type="url" name="img" className={s.input} onChange={(e)=>handleChange(e)} />
                    </div>
                    
                    <div className={s.genre}>
                        <label>Genres: </label>
                        <div className={s.gen}><label><input value="Action" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/>Action</label></div>
                        <div className={s.gen}><label><input value="Indie" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/>Indie</label></div>
                        <div className={s.gen}><label><input value="Strategy" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/>Strategy</label></div>
                        <div className={s.gen}><label><input value="Adventure" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/>Adventure</label></div>
                        <div className={s.gen}><label><input value="RPG" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/>RPG</label></div>
                        <div className={s.gen}><label><input value="Shooter"type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/>Shooter</label></div>
                        <div className={s.gen}><label><input value="Casual" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/>Casual</label></div>
                        <div className={s.gen}><label><input value="Simulation"type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/>Simulation</label></div>
                        <div className={s.gen}><label><input value="Arcade" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/>Arcade</label></div>
                        <div className={s.gen}><label><input value="Puzzle" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/>Puzzle</label></div>
                        <div className={s.gen}><label><input value="Platformer" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/>Platformer</label></div>
                        <div className={s.gen}><label><input value="Racing" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/>Racing</label></div>
                        <div className={s.gen}><label><input value="Massively Multiplayer" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/>Massively Multiplayer</label></div>
                        <div className={s.gen}><label><input value="Fighting" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/>Fighting</label></div>
                        <div className={s.gen}><label><input value="Sports" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/>Sports</label></div>
                        <div className={s.gen}><label><input value="Family" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/>Family</label></div>
                        <div className={s.gen}><label><input value="Board Games" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/>Board Games</label></div>
                        <div className={s.gen}><label><input value="Educational" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/>Educational</label></div>
                        <div className={s.gen}><label><input value="Card" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/>Card</label></div>
                    </div>

                    <div className={s.platforms}> 
                        <label>Platforms: </label>
                        <div className={s.pla}><label><input value="PlayStation 4" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/>PS4</label></div>
                        <div className={s.pla}><label><input value="PlayStation 5" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/>PS5</label></div>
                        <div className={s.pla}><label><input value="PC" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/>PC</label></div>
                        <div className={s.pla}><label><input value="Nintendo Switch" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/>NINTENDO SWITCH</label></div>
                        <div className={s.pla}><label><input value="Xbox One" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/>XBOX ONE</label></div>
                        <div className={s.pla}><label><input value="Xbox 360" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/>XBOX X</label></div>
                        <div className={s.pla}><label><input value="Linux" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/>LINUX</label></div>
                        <div className={s.pla}><label><input value="Android" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/>ANDROID</label></div>
                        <div className={s.pla}><label><input value="PlayStation" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/>PLAYSTATION</label></div>
                    </div>

                    <div className={s.description}>
                        <label className={s.label}>Description: </label>
                        <div>
                            <textarea type="text" name="description" cols="40" rows="6" className={s.input} onChange={(e)=>handleChange(e)} />
                        </div>
                    </div>

                  

                </div>
                <button  type='submit' className={s.button}>Submit</button>
                

            </form>
            <div className={s.backDiv}>
            <a href='http://localhost:3000/app/home'>
                <img className={s.back} src={back} alt='logo not found' />
            </a>
            </div>
            
        </div>
    )
}

/* const mapStateToProps = (store) => {
    return {
        resPost: store.resPost,
        genres: store.genres,
        platforms: store.platforms
    }
} */

export default connect(null, {submitPost})(Create)