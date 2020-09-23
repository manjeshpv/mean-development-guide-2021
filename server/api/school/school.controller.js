// REST Api Standards
// - Sinatra
// GET /api/schools?limit=5&page=1 index
// POST /api/schools create
// show
// update
// destroy
const service = require('./school.service');

exports.index = function (req, res) {
    try {
        const schools = service.index(req.user, req.query);
console.log('request received')
        res.send(schools);
    } catch(err) {
        next(err);
    }
}

exports.create = (req, res, next) => {
    try {
        const school = service.create(req.body) //- save in db;
        webhook.trigger('school:create', school);

        res.send(schools);
    } catch(err) {
        next(err);
    }
}