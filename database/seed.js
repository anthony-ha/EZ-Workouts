const db = require('./index.js');
const Exercise = require('./app.js');

const exercises = [];

const names = ["Barbell Back Squat","Romanian Deadlift","Barbell Front Squat","Lunge","Bulgarian Split Squat","Seated Leg Press","Incline Dumbbell Bicep Curl","Chin Up","Barbell Bicep Curl","Hammer Curl","Close-Grip Bench Press","Tricep Kickback","Dip","Tricep Push-down","Barbell Bench Press","Cable Fly","Incline Barbell Bench Press","Push Up","Dumbbell Bench Press","Pull Up","Deadlift","Barbell Bendover Row","Lat Pulldown","Seated Cable Row","Barbell Overhead Press","Dumbbell Side Lateral Raises","Seated Dumbbell Shoulder Press","Reverse Cable Fly","Sit Up/Crunch","Plank","Russian Twist","Hanging Knee Raise"];

const categorys = ["Legs","Legs","Legs","Legs","Legs","Legs","Biceps","Biceps","Biceps","Biceps","Triceps","Triceps","Triceps","Triceps","Chest","Chest","Chest","Chest","Chest","Back","Back","Back","Back","Back","Shoulders","Shoulders","Shoulders","Shoulders","Abs","Abs","Abs","Abs"];

const equipments = ["Squat Rack","Barbell","Squat Rack","Dumbbell","Dumbbell","Leg Press Machine","Dumbbell","Pull-Up Bar","Barbell","Dumbbell","Bench/Barbell","Dumbbell","Dip Machine","Tricep Machine","Bench/Barbell","Cable Machine","Incline Bench/Barbell","None","Bench/Dumbbell","Pull-Up Bar","Barbell","Barbell","Lat Pulldown Machine","Cable Row Machine","Barbell","Dumbbell","Bench/Dumbbell","Cable Fly Machine","None","None","None","Pull-Up Bar"];

const demos = ["https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/11/back-squat/","https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/317/romanian-deadlift/","https://www.youtube.com/watch?v=CE0uSrr4SYQ","https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/363/lunge/","https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/366/bulgarian-split-squat/","https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/154/seated-leg-press/","https://www.youtube.com/watch?v=b4jOP-spQW8","https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/190/chin-ups/","https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/70/bicep-curl/","https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/10/hammer-curl/","https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/311/close-grip-bench-press/","https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/55/triceps-kickback/","https://www.youtube.com/watch?v=hd7XraT_T28","https://www.youtube.com/watch?v=vB5OHsJ3EME","https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/5/chest-press/","https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/160/standing-chest-fly/","https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/25/incline-chest-press/","https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/41/push-up/","https://www.youtube.com/watch?v=VmB1G1K7v94","https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/191/pull-ups/","https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/6/deadlift/","https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/12/bent-over-row/","https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/158/seated-lat-pulldown/","https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/48/seated-row/","https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/71/standing-shoulder-press/","https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/26/lateral-raise/","https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/45/seated-overhead-press/","https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/353/reverse-fly/","https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/52/crunch/","https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/32/front-plank/","https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/65/russian-twist/","https://www.youtube.com/watch?v=KhPTiWP6lB4"];

const allSets = [5,4,4,4,4,4,4,4,4,3,4,3,3,3,5,4,4,3,4,3,5,4,4,4,4,3,4,3,3,3,3,3];

const allReps = [5,8,8,10,10,8,12,12,8,12,10,12,12,12,5,12,8,20,8,12,5,8,12,10,6,12,8,12,15,60,20,10];

for(var i = 0; i < names.length; i++) {
  var obj = {
    id: i,
    name: names[i],
    category: categorys[i],
    equipment: equipments[i],
    demo: demos[i],
    sets: allSets[i],
    reps: allReps[i],
    suggestion: false
  }
  exercises.push(obj);
}

const insertExercises = function() {
  Exercise.create(exercises)
    .then(() => console.log('Finished Adding Exercises!'));
};

insertExercises();