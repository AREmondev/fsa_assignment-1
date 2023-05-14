const randomNumberRange = require('../services/randomNumber.service');


exports.randomNumber = async (req, res) => {
    const { min, max } = req.query;
    // Check if min and max are valid numbers
    if (isNaN(min) || isNaN(max)) {
        res.status(400).json({ message: 'Invalid input' });
        return;
    }
    try {
        const randomNumber = await randomNumberRange(parseInt(min), parseInt(max));
        res.status(200).json({ 'Your Number' : randomNumber });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}