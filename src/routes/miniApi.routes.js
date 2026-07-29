const express = require('express');
const router = express.Router();
const miniApiController = require('../controllers/miniApi.controller');

// Dropdown endpoints
router.get('/tiffin-centers', miniApiController.getTiffinCentersDropdown);

module.exports = router;
