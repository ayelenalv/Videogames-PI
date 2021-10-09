import React,{useState, useRef,} from "react";
import {useDispatch} from 'react-redux';
import s from './nav.module.css';
import logo from '../../assets/logo.jpeg'
import { NavLink } from "react-router-dom";


export default function Nav (){

    return (
     <div>
          <div className={s.navBar}>
            <a href='http://localhost:3000/app/home'>
                <img className={s.logo} src={logo} alt='logo not found' />
            </a>
            <NavLink to='/app/create' className={s.buttonCreate}>Crear Juego</NavLink>
                
          </div>
      </div>
    )
}