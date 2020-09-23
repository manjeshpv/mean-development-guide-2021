var express = require('express');

const expressConfig = require('./config/express');

const app = express();

expressConfig(app);
//
// app.listen(3001, () => {
//     console.log('server listening at http://localhost:3001')
// })

module.exports = app;

