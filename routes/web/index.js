const express = require('express');
const { getIndex } = require('../../controller/web');

const router = express.Router();


router.get('/',getIndex)

module.exports = router;