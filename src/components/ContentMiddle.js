import React from "react"
import { Route, BrowserRouter, Switch } from "react-router-dom"
import MoviesInDb from "../pages/MoviesInDb"
import LastMovieInDb from './../pages/LastMovieInDb';
import GenresInDb from './../pages/GenresInDb';
import NotFound from './../pages/NotFound';
import SearchMovies from './SearchMovies';


export default function ContentMiddle(){
    return(
        <div className="row">
            <Switch>
                <Route exact path="/">
                    <MoviesInDb />
                </Route>
                <Route path="/last-movie" component={LastMovieInDb} />
                <Route path="/genres" component={GenresInDb} />
                <Route path="/search" component={SearchMovies} />
                <Route component={NotFound} />
            </Switch>
        </div>
    )
}