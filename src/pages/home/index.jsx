import React, { useState, useEffect } from 'react'
import axios from 'axios';

import Card from '../../components/card'
import Header from '../../components/header'

import './style.css'

export default function Home() {

    const app = axios.create({
        baseURL: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1118',
    });

    const [poke, setPoke] = useState([]);

    let pokeImg = []
    let i=1;

    useEffect(() => {
        app.get('/')
            .then(res => (setPoke(res.data.results.map(poke => poke.name))))

        }, [])

    for (let i = 0; i <= 1118; i++) {
        pokeImg.push(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`)
    }

    function handleCounter() {
        i++
    }

    return (
        <div className='home-container'>
            <div className='home-content'>
                {
                    poke.map(poke => [<Card name={poke} number='' img={pokeImg[i]} />, [handleCounter()]])
                }   
            </div>
        </div>
    )
}
