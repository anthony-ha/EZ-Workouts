import React, { useState, useEffect } from 'react';
import axios from "axios";

import Form from './Form.jsx';
import Suggestion from './Suggestion.jsx';

const App2 = function (props) {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    axios.get('/quote')
    .then(res => {
      setQuote(res.data);
    })
    .catch(err => {
      if(err) {
        console.error('Failed to get quote', err)
      }
    })
  }, [])

  return(
    <div className='container'>
      <div className='logo'>EZ Workouts</div>
      <div className='quote'>{quote}</div>
      <div className='customTitle'>Please fill this out to generate your custom workout routine: </div>
      <div className='suggestionTitle'>Missing a workout?? Enter suggestions here: </div>
      <Form />
      <Suggestion />
    </div>
  )
}

export default App2;