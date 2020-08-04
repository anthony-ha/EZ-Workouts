import React, { Component } from 'react';
import axios from 'axios';

class Suggestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      name:'',
      sets: 0,
      reps:0,
      equipment:'',
      demo:'',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleSubmit() {
    axios.post('/exercise',{
      name: this.state.name,
      category: this.state.category,
      sets: this.state.sets,
      reps: this.state.reps,
      equipment: this.state.equipment,
      demo: this.state.demo
    })
    .then(()=> {
      alert('Thank you for your suggestion.')
    })
    .catch((err) => {
      console.error(err)
      alert('There was an error sending your suggestion')
    })
  }

  render() {
    return (
      <div className="suggestionForm">
        <label>Exercise Name: </label>
        <input type="text" onChange ={this.handleChange} id="name"></input>
        <label>Category: </label>
        <select onChange ={this.handleChange} id="category">
          <option>Please Choose One</option>
          <option value="Legs">Legs</option>
          <option value="Biceps">Biceps</option>
          <option value="Triceps">Triceps</option>
          <option value="Chest">Chest</option>
          <option value="Back">Back</option>
          <option value="Abs">Abs</option>
          <option value="Shoulders">Shoulders</option>
        </select>
        <label>Number of Sets: </label>
        <input type="number" onChange ={this.handleChange} id="sets"></input>
        <label>Number of Reps Per Set: </label>
        <input  type="number" onChange ={this.handleChange} id="reps"></input>
        <label>Equipment Needed: </label>
        <input type="text" onChange ={this.handleChange} id="equipment"></input>
        <label>Link To Demo: </label>
        <input type="text" onChange={this.handleChange} id="demo"></input>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

export default Suggestion;