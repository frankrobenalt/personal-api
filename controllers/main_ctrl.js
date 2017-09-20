const user = require('../user.js');
const skills = require('../skills.js');

    const getName = (req, res, next)=>{
        res.json({ name: user.name });
    }

    const getLocation = (req, res, next)=>{
        res.json({ location: user.location });
    }

    const getJerbs = (req, res, next)=>{
        if (req.query.order){
            if (req.query.order === 'asc'){
                res.json({alpabetical: user.occupations.sort()});
            } else {
                res.json({'reverse alpabetical': (user.occupations.sort()).reverse()});
            }
        } else {
            res.json(user.occupations);
        }
    }

    const getLatestJerb = (req, res, next)=>{
        res.json({ latestJerb: user.occupations.slice(-1) })
    }

    const getHobbies = (req, res, next)=>{
        res.json({ hobbies: user.hobbies });
    }

    const getHobbiesType = (req, res, next)=>{
        if (req.params.type){
            
            res.json({result: user.hobbies.filter(hobbies => hobbies.type === req.params.type)});
        } else {
            res.json('no match');
        }
    }

    const getFamily = (req, res, next)=>{
        if (req.query.relation){
            if (req.query.relation === 'famfam'){
                res.json({famfam: user.family.filter(family => family.relation === req.query.relation)});
            }
        }

        res.json({family: user.family});
    }

    const getFamilyGender = (req, res, next)=>{
        if (req.params.gender){
            res.json({gender: user.family.filter(family => family.gender === req.params.gender)});
        } else {
            res.json('no match');
        }
    }

    const getRestaurants = (req, res, next)=>{
        res.json({restaurants: user.restaurants});
    }

    const getRestaurantName = (req, res, next)=>{
        if (req.params.name){
            res.json({name: user.restaurants.filter(restaurants => restaurants.name === req.params.name)});
        } else {
            res.json({name: 'none ho'});
        }
    }

    const changeName = (req, res, next)=>{
        user.name = req.body.name;
        res.json({user: user.name});
    }

    const changeLocation = (req, res, next)=>{
        user.location = req.body.location;
        res.json({"updated location": user.location});
    }

    const addHobbie = (req,res,next)=>{
        user.hobbies.push(req.body);
        res.json(user.hobbies);
    }

    const getSkills = (req, res, next)=>{
        if (req.query.experience){
            res.json({skills: skills.filter(skills => skills.experience === req.query.experience)});
        }
        res.json(skills);
    }

    const addSkill = (req, res, next)=>{
        skills.push({
            "id": skills.length + 1,
            "name": req.body.name,
            "experience": req.body.experience
        });
        res.json(skills);
    }

module.exports = {
    getName,
    getLocation,
    getJerbs,
    getLatestJerb,
    getHobbies,
    getHobbiesType,
    getFamily,
    getFamilyGender,
    getRestaurants,
    getRestaurantName,
    changeName,
    changeLocation,
    addHobbie,
    getSkills,
    addSkill
}