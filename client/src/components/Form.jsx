import React, { Component } from 'react';
import $ from 'jquery';
import axios from 'axios';

import Routine from './Routine.jsx';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      skillLevel: '',
      goals:'',
      routine: [],
      categoryTitle:''
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
    event.preventDefault();
    axios.get(`/exercise/${this.state.category}`)
    .then(data => {
      this.setState({
        routine: data.data,
        categoryTitle: this.state.category
      })
    })
    .then(()=> {
      $('#customForm').trigger("reset");
    })
    .catch(err=> {
      if(err) {
        console.error('Error submitting data', err)
      }
    })
  }

  render() {
    return (
      <div className="container2">
        <form id="customForm">
          <label>Type of Workout: </label>
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
          <label>Workout Experience: </label>
          <select onChange ={this.handleChange} id="skillLevel">
            <option>Please Choose One</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Expert">Expert</option>
          </select>
          <label>Goals: </label>
          <input type="text" className="goals-text" onChange ={this.handleChange} id="goals" required></input>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
        <div className="workoutTitle">Your Custom {this.state.categoryTitle} Workout!</div>
        <Routine exercises={this.state.routine} />
      </div>
    )
  }
}

export default Form;