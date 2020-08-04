import React, { Component } from 'react';

const Routine = function(props) {
  return (
    <div className="routine">
      {props.exercises.map((exercise,i) =>
        <div className="exercise" key={i}>
          <div className="exerciseName">Exercise: {exercise.name}</div>
          <div className="exerciseEquipment">Equipment Needed: {exercise.equipment}</div>
          <div className="exerciseSets">Number of Sets: {exercise.sets}</div>
          <div className="exerciseReps">Number of Reps Per Set: {exercise.reps}</div>
          <a href={exercise.demo} className="exerciseDemo" target="_blank">Demo</a>
        </div>
      )}
    </div>
  )
}

export default Routine;