import React from 'react';
    const successState = {
        data: null,
        isLoading: false,
        error: false
    }
    const errorState= {
        data: null,
        isLoading: false,
        error: true,
        errorMessage: 'No se encontraron datos'
    }
    const loadingState = {
        data: null,
        isLoading: true,
        error: false
    }

    const initialState = {
        data: null,
        isLoading: false,
        error: false
    }

const useFetch = (callback, objectInData) => {
    const [state, setState] = React.useState(initialState)
    
    const fetchData = (url) => {
        console.log("🚀 ~ url", url)
        setState(loadingState)
        fetch(url ? url : callback)
        .then(res => res.json())
        .then(data => {
            if(data[objectInData]){
                setState({...successState, data: data[objectInData]})
            } else {
                setState(errorState)
            }
        }).catch(error => {
            setState({...errorState, errorMessage: error})
        })
    }
    
    React.useEffect(()=>{
        fetchData()
    },[])

    return {...state, fetchData}
}

export default useFetch;