import Async from 'react-select/async';
import React from 'react';

const apiKey = '1fa17e22'

const fetchOptions = (url) => {
    return fetch(url)
}

const AsyncSelectInput = ({/* 
options = [],
className = '',
	name = '',
	isSearchable = false,
	isLoading = false,
	onChange = NOOP,
	defaultValue = null,
	value = null,
	menuPosition = '',
	isMultiSelect = false,
	feeVariant = false,
	isDisabled = false,
	onBlur = NOOP,
	errorMessage,
	isInvalid = false,
	setFlags = NOOP,
	setCardFlags = NOOP
    */
   placeHolder = '',
   /* fetchOptions, */
   mapper
}) => {
    const [state, setState] = React.useState('')
    const loadOptions = (inputText, callback) => {
        console.log("🚀 ~ inputText", inputText)
        fetch(`http://www.omdbapi.com/?s=${inputText}&apikey=${apiKey}`)
        .then(res=>res.json())
        .then(data => {
            console.log("🚀 ~ data", data)
            callback(mapper(data.Search))

        })


    }
    const handleChange = (e) => {
        console.log("🚀 ~ e", e)
        setState(e)
    }
    return(
        <>
            <Async
                placeholder={placeHolder}
                loadOptions={loadOptions}
                onChange={e=>handleChange(e)}
                value={state}
                isLoading={false}
            />
        </>
    )
}

export default AsyncSelectInput