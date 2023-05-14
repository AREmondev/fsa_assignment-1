const express = require('express');

const router = express.Router();
const personMaker = require('./personMaker.route');
const numberGenerator = require('./randomNumber.route');
const stringCount = require('./stringCount.route');

/**
 * GET Random Number Generator From Range
 */
router.use('/number-generator', numberGenerator);

/**
 * GET Random Number Generator From Range
 */

router.use('/person-maker', personMaker);

/**
 * GET Random Number Generator From Range
 */

router.use('/string-count', stringCount);

module.exports = router;