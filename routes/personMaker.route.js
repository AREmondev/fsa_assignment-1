const express = require('express');
const { personMaker } = require('../controllers/personMaker.controller');

const router = express.Router();

router.get('/', personMaker);

module.exports = router;