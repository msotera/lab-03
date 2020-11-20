
const peopleArray = [1,2,3,4]({
    person1: {
        uniqueID: "000",
        name: "Joe",
        age: "30",
        gender: "M"
    },
    person2: {
        uniqueID: "111",
        name: "Jill",
        age: "25",
        gender: "F"
    },
    person3: {
        uniqueID: "222",
        name: "Jack",
        age: "19",
        gender: "M"
    },
    person4:{
        uniqueID: "333",
        name: "Jen",
        age: "22",
        gender: "F"
    }
});



const Person = require('../models/person');

exports.index = async (req, res, next) => {

    try{    
        const people = await Person.find();
        res.status(200).json(people);

    }catch (error){
        next(error);
    }
};

//show unique id
exports.show = async(req, res, next) => {

    try{
        const person = await Person.findById(req.params.uniqueID);
        res.status(200).json(person);
    }catch (error) {
        next(error);
    }

};

// search by uniqueID
exports.search = async (req, res, next) => {

    try{
        const people = await Person.search(req.params.uniqueID);
        res.status(200).json(people);

    }catch (error){
        next(error);
    }

};


// search by name
exports.search = async (req, res, next) => {

    try{
        const people = await Person.search(req.params.name);
        res.status(200).json(people);

    }catch (error){
        next(error);
    }

};

//search age
exports.search = async (req, res, next) => {

    try{
        const people = await Person.search(req.params.age);
        res.status(200).json(people);

    }catch (error){
        next(error);
    }

};

//search gender
exports.search = async (req, res, next) => {

    try{
        const people = await Person.search(req.params.gender);
        res.status(200).json(people);

    }catch (error){
        next(error);
    }

};


