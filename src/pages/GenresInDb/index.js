import Card from './../../components/Card';
import GenresList from './../../components/GenresList';

export default function GenresInDb() {
    return(
        <Card 
            changeBackground
            title="Genres in Data Base"
        >
            <GenresList />
        </Card>
    )
}