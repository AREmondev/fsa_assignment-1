const randomNumberRange = require('../services/randomNumber.service');


exports.randomNumber = async (req, res) => {
    const { start, end } = req.query;
    // Check if start and end are valid numbers
    if (isNaN(start) || isNaN(end)) {
        res.status(400).json({ message: 'Invalid input' });
        return;
    }
    try {
        const randomNumber = await randomNumberRange(parseInt(start), parseInt(end));
        res.status(200).json({ 'Your Number' : randomNumber });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}