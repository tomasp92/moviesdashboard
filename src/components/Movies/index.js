import React from "react";
import Movie from './Movie';
import useFetch from './../../hooks/useFetch';

function Movies() {
    const { data, isLoading} = useFetch('/api/movies', 'data')

    return(
        <div className="row" style={{ backgroundColor: 'black' }}>
            <table className="table" style={{ backgroundColor: 'black' }}>
            <thead>
                <tr> 
                    <th>Titulo</th> 
                    <th>Duracion</th> 
                    <th>Rating</th> 
                    <th>Genero</th> 
                    <th>Premios</th>
                </tr>
            </thead>
            <tbody>
                {   data && data.map((movie, i)=>
                    <Movie {...movie} key={i} />)
                }
            </tbody>
            <tfoot>
                <tr> 
                    <th>Titulo</th> 
                    <th>Duracion</th> 
                    <th>Rating</th> 
                    <th>Genero</th> 
                    <th>Premios</th>
                </tr>
            </tfoot>
            </table>
            {isLoading && <div>Loading movies... </div>} 
        </div>
    )
}

export default Movies