import React from 'react'
import './App.css'
import { Cards } from './components/Cards';

export const App = () => {
    return <div className='App'>
        <header></header>
        <main> 
            <Cards />
        </main>
        <footer></footer>
    </div>
}