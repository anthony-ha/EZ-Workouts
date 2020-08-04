import React from 'react';
import axios from "axios";

import Form from './Form.jsx';
import Suggestion from './Suggestion.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: ''
    }
  }

  componentDidMount() {
    axios.get('/quote')
    .then(res => {
      this.setState({
        quote: res.data
      })
    })
    .catch(err => {
      if(err) {
        console.error('Failed to get quote', err)
      }
    })
  }
  render() {
    return(
      <div className='container'>
        <div className='logo'>EZ Workouts</div>
        <div className='quote'>{this.state.quote}</div>
        <div className='customTitle'>Please fill this out to generate your custom workout routine: </div>
        <div className='suggestionTitle'>Missing a workout?? Enter suggestions here: </div>
        <Form />
        <Suggestion />
      </div>
    )
  }
}
export default App;