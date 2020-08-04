const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const Exercise = require('../database/app.js');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.get("/exercise/:exercise", (req, res) => {
  Exercise.find({category : req.params.exercise })
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    if(err) {
      console.error('Failed to get data',err)
    }
  })
});

app.get("/quote", (req,res) => {
  const random = Math.floor(Math.random() * (500-1) + 1);
  axios.get('https://type.fit/api/quotes')
    .then(data => {
      res.json(data.data[random].text)
    })
    .catch(err => {
      if(err) {
        console.error("Failed to get quote", err)
      }
    })
});

const server = app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});