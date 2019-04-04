import React from "react"

function FilmInfo({filmInfo}) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{filmInfo.title}</h5>
                <p className="card-description">{filmInfo.description}</p>
            </div>
        </div>
    )
}

export default FilmInfo