import React from "react";
import s from './Paginado.module.css';

export default function Paginado ({gamesPerPage,allVideoGames,paginado, currentPage}){
    const pageNumbers = []

    for (let i =0; i<=Math.floor(allVideoGames/gamesPerPage) ; i++){
        pageNumbers.push(i)
    }
    const scrollUp = () => {
        let currentScroll = document.documentElement.scrollTop;
        if (currentScroll > 0) {
            window.requestAnimationFrame(scrollUp)
            window.scrollTo (0, currentScroll - (currentScroll / 4));
        }
    }

    const handleClick = (el) => {
        if(el === allVideoGames){
            paginado(el+1)
            scrollUp()
            return
        }
        if(el+1 === 1){
            paginado(el+1)
            scrollUp()
            return
        }
        if(el+1 <= allVideoGames){
            paginado(el+1)
            scrollUp()
            return
        }
    }

    function unoUOtro(i){
        if(i == pageNumbers.length-1) return "-->";
        if(i+1 == 1) return "<--";

        return "..."
    }

    return (
        <nav>
            
         {
        pageNumbers && pageNumbers.map((e, i) => i==currentPage || i+1==currentPage || i+2==currentPage?<button key={i} onClick={()=>{
        paginado(e+1);  scrollUp()
             }} 
        className={s.btn}> {e+1}</button> : <button key={i} className={s.btn} onClick={()=>handleClick(i)}>{unoUOtro(i)}</button>)
            }
            
        </nav>
    )
}