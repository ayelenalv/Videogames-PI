import React,{useState, useRef,} from "react";
import {useDispatch} from 'react-redux';
import {searchByName} from '../../redux/actions'
import s from './nav.module.css';

export default function InputSearch(){

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
            <input className={s.inputSearch} type ="text" placeholder= "Search..." ref= {miRef} onChange={()=>buscar()}/>
            <button className={s.buttonSearch} onClick={handleClick}>Search</button>
        </div>
    )
}