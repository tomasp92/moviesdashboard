import React, {Component, useEffect} from "react"
import Genre from './Genre';
import useFetch from './../hooks/useFetch';

const GenresListFunction = () => {

    const {data, isLoading, error}= useFetch('/api/genres', 'data')

    return(
        <div className="row">
            {data && data.map((genre, i)=>
                <Genre {...genre} key={i} />)
            }
            {isLoading && <div>Loading genres... </div>}
            {error && <div>{error}</div>}  
        </div>
    )
}

export default GenresListFunction
