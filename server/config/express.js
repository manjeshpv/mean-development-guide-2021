const routes = require('./../routes');

module.exports = (app) => {
    app.use((req, res, next) => {
        console.log('logger middleware by manjesh');
        next();
    });
    // ratelimiter
    // body parser
    // response
    // sentry
    // - Global Middleware

    // app.use(morgan());

    routes(app);
}