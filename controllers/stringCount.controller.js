const countCharacters = require('../services/stringCount.service'); 

exports.stringCount = async (req, res) => {
    const { string } = req.query;
    try {
        const characters = await countCharacters(string);
        res.status(200).json({characters});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}