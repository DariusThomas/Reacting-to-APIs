import React from "react"

function FilmInfo(props){
    let filmsArr = props.films.map(i => <div key={i.id} className="card"><div className="card-body"><h5 className="card-title">{i.title}</h5><p className={i.description}>{i.description}</p></div></div>)
    return(
        <div>{filmsArr}</div>
    )
}

export default FilmInfo