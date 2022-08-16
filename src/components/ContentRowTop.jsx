import React from "react"
import ContentRowMovie from './ContentRowMovies';

const contentRowMovies = [
    {
        icon: <i className="fas fa-film fa-2x text-gray-300"></i>,
        title: "Movies in Data Base",
        color: "primary",
        cipher: 21
    },
    {
        icon: <i className="fas fa-award fa-2x text-gray-300"></i>,
        title: "Total awards",
        color: "success",
        cipher: 79
    },
    {
        icon: <i className="fas fa-user fa-2x text-gray-300"></i>,
        title: "Actors quantity",
        color: "warning",
        cipher: 49
    }
]
const ContentRowTop = () => {
    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>
            <div className="row">
                {contentRowMovies.map((element, index) => {
                    return (
                        <ContentRowMovie
                            icon={element.icon}
                            title={element.title}
                            color={element.color}
                            cipher={element.cipher}
                            key={index + element.title}
                        />)
                })
                }
            </div>
        </div>)
}

export default ContentRowTop
