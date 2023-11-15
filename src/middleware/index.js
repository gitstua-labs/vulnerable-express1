const express = require('express');

module.exports = function(app) {
    // Use JSON middleware to automatically parse JSON
    app.use(express.json());

    // Add other middleware here
};