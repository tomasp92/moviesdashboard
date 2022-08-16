import Card from './../../components/Card';
import Movies from './../../components/Movies/index';
export default function MoviesInDb() {
    return(
        <Card 
            size="12"
            title="Movies">
            <Movies />
        </Card>
    )
} 

/* export default function Counter() {
    const [number, setNumber] = useState(100)
    const increase = ()=>{
        setNumber(number + 1)
    }

    const decrease = ()=>{
        setNumber(number - 1)
    }
    return(
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4"> <button onClick={increase}>INCREASE</button>
            {number}
            <button onClick={decrease}>DECREASE</button></div>
            <div className="col-md-4"></div>
           
        </div>
    )
}
 */