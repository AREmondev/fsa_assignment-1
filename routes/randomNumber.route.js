const express = require('express');
const { randomNumber } = require('../controllers/randomNumber.controller');

const router = express.Router();

router.get('/', randomNumber
);

module.exports = router;