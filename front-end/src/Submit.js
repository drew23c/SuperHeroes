import React, {Component} from 'react'

class Submit extends Component{
    constructor(){
        super()
        this.state={
            symbolVal:'',
            superheroes:''
        }
    }
    handleSymbol = e =>{
        this.setState({
            symbolVal:e.target.value
        })
    }
    handleClick = (e) =>{
        fetch('/superhero/' + encodeURIComponent(this.state.symbolVal))
        .then(response => response.json())
        .then(obj =>{
            console.log(obj)
            this.setState({
                superheroes:obj,
                symbolVal:''
            })
        })
    }
    render(){
        return(
            <div>
                <h1>Submit a Hero</h1>
                <input type="text" value={this.state.symbolVal} 
                onInput={this.handleSymbol} 
                placeholder="Enter the url" />
                <input type="submit" onClick={this.handleClick}/>
            </div>
        )
    }
}
export default Submit