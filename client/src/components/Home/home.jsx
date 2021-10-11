 import React from 'react';
import Order from "../Order/order"
import s from "./home.module.css"
import InputSearch from './InputSearch'

export default function Home (){
return (
    <div className={s.container}>
        <div className={s.orderContainer}>
          <Order />
        </div>
        <div className={s.inputSearchContainer}>
          <InputSearch /> 
        </div>
        
    </div>
)
}