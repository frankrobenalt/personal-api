const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 4200;

const app = express();

app.use(bodyParser.json());
app.use(cors());

const main_ctrl = require('./controllers/main_ctrl');

app.get('/api/name', main_ctrl.getName);
app.get('/api/location', main_ctrl.getLocation);
app.get('/api/jerbs', main_ctrl.getJerbs);
app.get('/api/latest', main_ctrl.getLatestJerb);
app.get('/api/hobbies', main_ctrl.getHobbies);
app.get('/api/hobbies/:type', main_ctrl.getHobbiesType);
app.get('/api/family', main_ctrl.getFamily);
app.get('/api/family/:gender', main_ctrl.getFamilyGender);
app.get('/api/restaurants', main_ctrl.getRestaurants);
app.get('/api/restaurants/:name', main_ctrl.getRestaurantName);
app.put('/api/name', main_ctrl.changeName);
app.put('/api/location', main_ctrl.changeLocation);
app.post('/api/addHobby', main_ctrl.addHobbie);
app.get('/api/skills', main_ctrl.getSkills);
app.post('/api/skills', main_ctrl.addSkill);

app.listen(port, ()=>{
    console.log(`listening on ${port}`);
  })