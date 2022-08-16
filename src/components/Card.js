import React, {Component} from "react"
/* class Card extends Component{
    constructor(props){
        super(props);  
        this.state={
            secondaryBackground: ""
        } 
    }
    changeBakcground(){
        if(this.props.changeBackground && this.state.secondaryBackground === ""){
            this.setState({ secondaryBackground: " bg-secondary" })
        }
    }
    render(){
        const { title, children, size } = this.props 
        return(
            <div className={`col-lg-${size} mb-4`}>
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 onMouseOver={()=>this.changeBakcground()} className="m-0 font-weight-bold text-gray-800">{title}</h5>
                    </div>
                    <div className={"card-body" + this.state.secondaryBackground}>
                        {children}
                    </div>
                </div>
            </div>
        )
    }
}

Component.defaultProps = {
    size: "6"
} */

const Card = ({size=6, title, children, changeBackground}) => {
    const [secondaryBackground, setSecondaryBackground] = React.useState("")
    
    const changeBakcground = ()=>{
        if(changeBackground && secondaryBackground === ""){
            setSecondaryBackground(" bg-secondary")
        }
    }

    return(
        <div className={`col-lg-${size} mb-4`}>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 onMouseOver={changeBakcground} className="m-0 font-weight-bold text-gray-800">{title}</h5>
                </div>
                <div className={"card-body" + secondaryBackground}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Card