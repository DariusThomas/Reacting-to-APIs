import React from "react"

function PeopleInfo({peopleInfo}) {

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{peopleInfo.name}</h5>
                <p className="card-description">{peopleInfo.age}</p>
            </div>
        </div>
    )
}

export default PeopleInfo