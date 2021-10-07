import React,{useState, useRef,} from "react";
import {searchByName} from '../../redux/actions'
import {useDispatch} from 'react-redux';
import s from './nav.module.css';
import logo from '../../assets/logo.jpeg'

export default function Nav (){
    const dispatch = useDispatch();
    const [state, setState] = useState('')
    const miRef = useRef(null)
    
    
    function handleClick(){
        dispatch(searchByName(state));
    }

    function buscar(){
        console.log(state)
        setState(miRef.current.value)
        
    }

    return (
     <div>
          <div className={s.navBar}>
            <a href='http://localhost:3000/app/home'>
                <img className={s.logo} src={logo} alt='logo not found' />
            </a>
              <input className={s.inputSearch} type ="text" placeholder= "Search..." ref= {miRef} onChange={()=>buscar()}/>
              <button className={s.buttonSearch} onClick={handleClick}>Search</button>
          </div>
      </div>
    )
}