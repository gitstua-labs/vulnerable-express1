const express = require('express');
const apiRoutes = require('./api');
const middleware = require('./middleware');
const config = require('./config');

const app = express();

// Apply middleware
middleware(app);

// Set up API routes
app.use('/api', apiRoutes);

// Start the server
const port = config.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;