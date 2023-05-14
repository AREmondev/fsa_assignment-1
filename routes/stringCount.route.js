const express = require('express');
const { stringCount } = require('../controllers/stringCount.controller');

const router = express.Router();

router.get('/', stringCount
);

module.exports = router;