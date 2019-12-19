import React, { Component } from 'react';
import './App.css';
import Card from './Card';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      number: '',
      valid: '',
      cardholder:''
    }
  }
  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }
  
  render(){
    return (
      <div>
        <div className="inpu">
          <input maxLength="16" onChange={this.handleChange} name="number" type="number" value={this.state.number} className="inp" placeholder="Card Number"/>
          <input maxLength="4" className="inp" name="valid"  onChange={this.handleChange} placeholder="Code"/>
          <input maxLength="10" className="inp ins" name="cardholder" onChange={this.handleChange} placeholder="Name" />
        </div>
        <Card infos={this.state}/>
      </div>
    );
  }
}

export default App;
