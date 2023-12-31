require('dotenv').config();

const config = {
  PORT: process.env.PORT || 3000,
  DB_URL: process.env.DB_URL || 'mongodb://localhost:27017/my-express-api',
};

module.exports = config;