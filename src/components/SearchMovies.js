import React, { useRef } from 'react';
import { useEffect } from 'react';
import useFetch from '../hooks/useFetch';

const apiKey = '1fa17e22'; // Intenta poner cualquier cosa antes para probar

/* function searchMovies(keyword, apiKey) {
    return `http://www.omdbapi.com/?s=${keyword}&apikey=${apiKey}`
}
 */
function SearchMovies() {
	const [keyword, setKeyword] = React.useState('action');
	
	const {data, fetchData, isLoading, error, errorMessage} = useFetch(`http://www.omdbapi.com/?s=${keyword}&apikey=${apiKey}`, 'Search');
	const inputReference = useRef('')

	const searchNewMovie = (event) => {
		event.preventDefault();
		setKeyword(inputReference.current.value)
	}
	React.useEffect(() => {
		fetchData()
	} , [keyword])
	return (
		<div className="container-fluid">
			<div className="row my-4">
				<div className="col-12 col-md-6">
					{/* Buscador */}
					<form method="GET" onSubmit={e=>searchNewMovie(e)}>
						<div className="form-group">
							<label htmlFor="">Buscar por título:</label>
							<input type="text" className="form-control" ref={inputReference} />
						</div>
						<button className="btn btn-info">Search</button>
					</form>
				</div>
			</div>
				<div className="row">
				<div className="col-12">
					<h2>Películas para la palabra: {keyword}</h2>
				</div>
				{/* Listado de películas */}
				{	!error  && data && data.length > 0 && data.map((movie, i) => {
						return (
							<div className="col-sm-6 col-md-3 my-4" key={i}>
								<div className="card shadow mb-4">
									<div className="card-header py-3">
										<h5 className="m-0 font-weight-bold text-gray-800">{movie.Title}</h5>
									</div>
									<div className="card-body">
										<div className="text-center">
											<img
												className="img-fluid px-3 px-sm-4 mt-3 mb-4"
												src={movie.Poster}
												alt={movie.Title}
												style={{ width: '90%', height: '400px', objectFit: 'cover' }}
											/>
										</div>
										<p>{movie.Year}</p>
									</div>
								</div>
							</div>
						)
					})
				}
			</div>
			{error && <div className="alert alert-warning text-center">{errorMessage}</div>}
			{isLoading && <div className="alert alert-info text-center">Cargando...</div>}
		</div>
	)
}

export default SearchMovies;
