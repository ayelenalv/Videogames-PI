import React from "react";

export default function Paginado ({gamesPerPage,allVideoGames,paginado}){
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
    return (
        <nav>
            
                {
                    pageNumbers &&
                    pageNumbers.map(number => 
                        
                        <button onClick={()=>{paginado(number+1);  scrollUp()}}>{number+1} </button>
                        
                    )
                }
            
        </nav>
    )
}