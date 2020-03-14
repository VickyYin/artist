
const express = require('express')
const artistController = require('../controller/artist')
const router = express.Router();

router.post('/artists/add',artistController.addArtists);
router.get('/artists/delete/:id',artistController.deleteArtists);
router.get('/artists/:id',artistController.searchArtists);
router.get('/artists',artistController.getAllArtists);

module.exports = router;
