const express = require('express');
const router = express.Router();
const subscriptionController = require('../controller/subscriptionController');

// Create a new subscription
router.post('/', subscriptionController.createSubscription);

// Get all subscriptions
router.get('/', subscriptionController.getAllSubscriptions);

// Delete a subscription by ID
router.delete('/:id', subscriptionController.deleteSubscription);

module.exports = router;
