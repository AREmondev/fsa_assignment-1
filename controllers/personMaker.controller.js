const makePerson = require('../services/personMaker.service');

exports.personMaker = async (req, res) => {
    const {person} = req.query;
    const personParams = person.split(',');
    try {
        const newPerson = await makePerson(JSON.parse(JSON.stringify(personParams)));
        let objectKeys = Object.keys(newPerson)
        if(objectKeys.length === 0){
            res.status(200).json({message: 'No person created'});
            return;
        }
        res.status(200).json({person : newPerson});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};