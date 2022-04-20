import React, { useEffect, useState } from 'react'
import axios from './axios';

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]); 
    
    // 8nippet do código
    // useEffect: quando jogar uma row para o lado, este pedaço de código vai rodar
    // se [], vai rodar o código somente 1 vez

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            // https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213
            console.log(request);
            return request;
        }
        fetchData();
    }, []);

    return (
        <div>
            <h2>{title}</h2>
        </div>
    )
}

export default Row;