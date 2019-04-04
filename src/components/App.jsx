import React, { Component } from "react";
import FilmInfo from "./Films"
import PeopleInfo from "./People"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filmArr: [],
            peopleArr:[]
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleOtherClick = this.handleOtherClick.bind(this)
    }
    /* 
    Phase One (Fetch API on didMount)
    componentDidMount() {
         fetch("https://ghibliapi.herokuapp.com/films")
             .then(res => res.json())
             .then(obj => this.setState({
                 objArr: [...obj]
             }))
             .catch(e => console.log(e));
     }
     */
    handleClick() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(obj => this.setState({
            filmArr: [...obj]
            }))
            .catch(e => console.log(e));
    }
    handleOtherClick() {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(res => res.json())
            .then(obj => this.setState({
                peopleArr: [...obj]
            }))
            .catch(e => console.log(e));
    }
    render() {
        console.log(this.state.peopleArr)
        return (
            <>
                <div>
                    <img className="w-50" alt="Studio Ghibli logo" src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png" />
                </div>
                <div className="m-3">
                    <input onClick={this.handleClick} type="button" value="Load Films" className=" m-1 btn btn-primary" />
                    <input onClick={this.handleOtherClick} type="button" value="Load People" className="m-1 btn btn-primary" />
                </div>
                <FilmInfo films={this.state.filmArr} />
                <PeopleInfo people={this.state.peopleArr} />
            </>
        )
    }
}

export default App