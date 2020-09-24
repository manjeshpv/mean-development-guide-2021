// REST Api Standards
// - Sinatra
// GET /api/schools?limit=5&page=1 index
// POST /api/schools create
// show
// update
// destroy
process.env.DEBUB = '*';
const debug = require('debug');
const service = require('./school.service');

const log = debug(__filename);
log('wow got debug log');

exports.index = (req, res, next) => {
  try {
    const schools = service.index(req.user, req.query);
    log('request received');
    res.send(schools);
  } catch (err) {
    next(err);
  }
};

exports.create = (req, res, next) => {
  try {
    const school = service.create(req.body); // - save in db;


    res.send(school);
  } catch (err) {
    next(err);
  }
};
