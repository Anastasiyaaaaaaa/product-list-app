import React from 'react'
import './App.css'
import { Cards } from './components/Cards';

export const App = () => {
    return <div className='App'>
        <header></header>
        <main> 
            <p> Ты сегодня покормил кота?</p>
            <Cards />
        </main>
        <footer></footer>
    </div>
}