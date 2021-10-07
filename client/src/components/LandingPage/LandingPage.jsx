import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './landingpage.module.css'

function LandingPage() {
    return (
        <div className={s.cover}>
            <div className={s.landing}>
                <h1 className={s.yani}>Welcome to Yani's video game app</h1>
                <NavLink className={s.NavLink}  to='/app/home'>
                    <button className={s.button}>Home</button>
                </NavLink>
            </div>
        </div>
    )
}

export default LandingPage