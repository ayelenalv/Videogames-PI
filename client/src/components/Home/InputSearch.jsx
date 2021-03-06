import React,{useState, useRef,} from "react";
import {useDispatch} from 'react-redux';
import {searchByName} from '../../redux/actions'
import s from './home.module.css';

export default function InputSearch(){

    const dispatch = useDispatch();
    const [state, setState] = useState('')
    const miRef = useRef(null)
    
    
    function handleClick(){
        dispatch(searchByName(state));
       
    }

    function buscar(){
        setState(miRef.current.value)
        if(miRef.current.value === ''){
            dispatch(searchByName(''))
        }
    }


    return (
        <div className={s.searchBox}>
            <input className={s.inputSearch} type ="text" placeholder= "Search..." ref= {miRef} onChange={()=>buscar()}/>
            <button className={s.buttonSearch} onClick={handleClick}>Search</button>
        </div>
    )
}