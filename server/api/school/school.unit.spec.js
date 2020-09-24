// not uses async/promise
// runs without internet and any other software like postgres, redis

const unit = require('./school.unit');

describe('School Unit', () => {
  it('generateRandomSchools should return a school', () => {
    const schools = unit.generateRandomSchools();
    expect(schools[0]).to.be.equal('Amarical School in Noida');
  });


  // 70% unit  - 70 test case
  // - controller - api tests
  // - serveice - 80%
  // - unit
  // 20% integration - 20 test case - next month - fullstack / lead
  // 10% E2E - Akansha - 10 cases  - Selenium Protractor/ headless chrome


  // unit testing
  // without internet it has to run
  // Answer: removing
  it('add should return sum', () => {
    const sum = unit.addSub(10, 20);
    expect(sum).to.be.equal(30);
  });

  // - backward compat
  it('add should return sum + substraction', () => {
    const sum = unit.addSub(10, 20, 10);
    expect(sum).to.be.equal(1);
  });

  // failure case - er
  it('add should return sum + substraction', () => {
    const sum = unit.addSub(10, 20, 0);
    expect(sum).to.be.equal(1);
  });
});
