import React, { Component } from 'react';

const imageStyle ={
    height:'20%',
    width:'20%',
    borderRadius:'25%',
    marginLeft:'2%',
    marginTop:'2%'
}
const h1Style ={
    textAlign:'center',
    color:'red'
}
class Home extends Component{
    constructor(){
        super()
        this.state={
            superhereos: []
        }
    }
    componentDidMount = () =>{
        fetch('/allHeroes')
        .then(response => response.json())
        .then(obj => {
            console.log(obj)
            this.setState({
                superhereos: obj
            })
        })
    }
    render(){
    const {superhereos} = this.state
    return(
        <div>
            <h1 style={h1Style}>SuperHero Page</h1>
            <ul>
                <li>
                    {superhereos.map(s => <img style={imageStyle} src={s} alt={s}/>)}
                </li>
            </ul>           
        </div>
    )
}
}
export default Home