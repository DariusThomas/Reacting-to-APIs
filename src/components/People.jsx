import React from "react"

function PeopleInfo(props){
    let peopleArr = props.people.map(i => <div key={i.id} className="card"><div className="card-body"><h5 className="card-title">{i.name}</h5><p className="card-description">{i.age}</p></div></div>)
    return(
        <div>{peopleArr}</div>
    )
}

export default PeopleInfo