const Subscription = require('../model/subscription');
const nodemailer = require('nodemailer');

// Create a new subscription
exports.createSubscription = async (req, res) => {
    try {
        const { email } = req.body;
        const existingSubscription = await Subscription.findOne({ email });
        if (existingSubscription) {
            return res.status(400).json({ message: 'Email already subscribed' });
        }

        const subscription = new Subscription({ email });
        await subscription.save();

        // Send confirmation email
        const transporter = nodemailer.createTransport({
            // Your email transporter configuration
        });

        await transporter.sendMail({
            from: 'your@example.com',
            to: email,
            subject: 'Subscription Confirmation',
            text: 'Thank you for subscribing to our newsletter!'
        });

        res.status(201).json(subscription);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all subscriptions
exports.getAllSubscriptions = async (req, res) => {
    try {
        const subscriptions = await Subscription.find({});
        res.json(subscriptions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a subscription
exports.deleteSubscription = async (req, res) => {
    try {
        const subscription = await Subscription.findByIdAndDelete(req.params.id);
        if (!subscription) {
            return res.status(404).json({ message: 'Subscription not found' });
        }
        res.json({ message: 'Subscription deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
