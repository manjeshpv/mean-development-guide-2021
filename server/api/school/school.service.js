
const unit = require('./school.unit');

exports.index = () => {
    // - business logic
    return unit.generateRandomSchools();
}