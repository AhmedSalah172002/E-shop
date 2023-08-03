const express = require('express');

const authService = require('../services/authService');

const {
  addAddress,
  removeAddress,
  getLoggedUserAddresses,
  getUserAddress,
} = require('../services/addressService');

const router = express.Router();

router.use(authService.protect, authService.allowedTo('user'));

router.route('/').post(addAddress).get(getLoggedUserAddresses);

router.route('/:addressId').delete(removeAddress).get(getUserAddress)

module.exports = router;
