const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/subscription', require('./routes/subscriptionRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
