const express = require('express');

const bookingController = require('../controllers/bookingController');

const router = express.Router();

router.post('/', bookingController.postUser)

router.get('/', bookingController.getUsers)

router.delete('/:id', bookingController.deleteUser)

module.exports = router;