 const Movie = ({title, rating, length, genre, awards})=>
        <tr>
            <td>{title}</td>
            <td>{length}</td>
            <td>{rating}</td>    
            <td>{genre ? genre.name : "-"}</td>
            <td>{awards}</td>
        </tr>



export default Movie
