
const schools = require('./api/school');

module.exports = (app) => {
    app.use('/api/schools', schools)
    // app.use('/api/resources', resouce)

    app.use((err, req, res, next) => {
        console.log('wow got error', err);
    })
}