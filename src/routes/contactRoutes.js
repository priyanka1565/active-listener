const express = require('express');
const router = express.Router();
const contactController = require('../controller/contactController');

// Create a new contact form submission
router.post('/', contactController.createContact);

// Get all contact form submissions
router.get('/', contactController.getAllContacts);

// Get a single contact form submission by ID
router.get('/:id', contactController.getContactById);

// Update a contact form submission by ID
router.put('/:id', contactController.updateContact);

// Delete a contact form submission by ID
router.delete('/:id', contactController.deleteContact);

module.exports = router;
