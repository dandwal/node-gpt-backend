const express = require('express');
const routes = require('./config/routes');

// Import your middleware here (e.g., authMiddleware) if needed

const app = express();

// Apply your middleware here (e.g., app.use(authMiddleware));

app.use(express.json()); // To parse request bodies as JSON

// Set up the routes
routes(app);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});